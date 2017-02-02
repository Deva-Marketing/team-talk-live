/*jslint node:true, nomen:true */
'use strict';

var path = require('path'),
    TwitterStreamChannels = require('twitter-stream-channels'),
    config = require('config'),
    levelup = require('level'),
    clone = require('clone'),
    logger = require('../../lib/logger'),
    client = new TwitterStreamChannels(config.get('twitterApp.credentials')),
    csvData = require('../../lib/data'),
    channels,
    stream,
    tmpData = {},
    tmpDataArray = [], //last numSamples samples
    data = {},
    tmpTtl = 1000 * (60*0.5), // update percentages interval
    numSamples = 200,
    weightLastSample = 50,
    db,
    savedData = [];

function clearTmpData() {
    tmpData = {};

    Object.keys(channels).forEach(function (channel) {
        var keywords = {};
        tmpData[channel] = {};
        tmpData[channel].value = 0;
        tmpData[channel].keywords = keywords;

        Object.keys(channels[channel]).forEach(function (keyword) {
            var subKeywords = {};
            keywords[keyword] = {}
            keywords[keyword].value = 0
            keywords[keyword].subKeywords = {};

            channels[channel][keyword].forEach(function (subKeyword) {
                keywords[keyword].subKeywords[subKeyword] = 0;
            });
        });

    });
}

function getSearchKeywords() {
    var keywords = clone(channels),
        returnKeywords = {};

    Object.keys(keywords).forEach(function (channel) {
        Object.keys(keywords[channel]).forEach(function (keyword) {
            returnKeywords[keyword] = keywords[channel][keyword];
        });
    });

    return returnKeywords;
}

function getTotalMsgs() {
    var i = 0;

    tmpDataArray.forEach(function (item, index) {
        // hack.
        // We're weighting the relevance of the last item in the array
        // (index === 0)
        // to generate a little more action
        Object.keys(item).forEach(function (key) {
            //i += (index === 0 ? item[key].value : (item[key].value * weightLastSample));
            i += item[key].value;
        });
    });

    return i;
}

function aggregateTmpArray() {
    var totalMsgs;
    // clear current data
    data = {};

    totalMsgs = getTotalMsgs();

    if (!totalMsgs) {
        return;
    }

    if (tmpDataArray.length > numSamples) {
        tmpDataArray.splice(numSamples);
    }

    Object.keys(tmpData).forEach(function (key) {
        var n = {},
            totalKeywords = 0,
            x = {};
        n.value = 0
        n.percent = 0;
        n.keywords = {};


        tmpDataArray.forEach(function (item, index) {
            // hack.
            // We're weighting the relevance of the last item in the array
            // (index === 0)
            // to generate a little more action

            Object.keys(item[key].keywords).forEach(function (keyword) {
                if (n.keywords.hasOwnProperty(keyword)) {
                    n.keywords[keyword].value += item[key].keywords[keyword].value;
                } else {
                    n.keywords[keyword] = {};
                    n.keywords[keyword].value = item[key].keywords[keyword].value;
                }


//                Object.keys(item[key].keywords[keyword].subKeywords).forEach(function (subKeyword) {
//                    if (!x.hasOwnProperty(keyword)) {
//                        x[keyword] = {};
//                    }
//                    if (x[keyword].hasOwnProperty(subKeyword)) {
//                        x[keyword][subKeyword] += item[key].keywords[keyword].subKeywords[subKeyword];
//                    } else {
//                        x[keyword][subKeyword] = item[key].keywords[keyword].subKeywords[subKeyword];
//                    }
//                });

            });
            //n.value += (index === 0 ? item[key].value : (item[key].value * weightLastSample));
            n.value += item[key].value;
        });

        n.percent = n.value / totalMsgs;

        Object.keys(n.keywords).forEach(function (keyword) {
            totalKeywords += n.keywords[keyword].value;
        });
        Object.keys(n.keywords).forEach(function (keyword) {
            n.keywords[keyword].subKeywords = x[keyword];
            n.keywords[keyword].percent = n.keywords[keyword].value / totalKeywords;
        });
        data[key] = n;
    });

    Object.keys(data).forEach(function (position) {
        var keysSorted = Object.keys(data[position].keywords).sort(function(a,b){return data[position].keywords[b].value-data[position].keywords[a].value}),
            i = 1,
            array = [];

        keysSorted.forEach(function (player) {
            var newPlayer = csvData.data[player];
            newPlayer.position = i;
            array.push(newPlayer);
            i++;
        });
        data[position].keywords = array;
    });

    var dbStore = data;

    if(dbStore.Manager) dbStore.Manager.keywords = dbStore.Manager.keywords.splice(0,2);
    if(dbStore['Forward']) dbStore['Forward'].keywords = dbStore['Forward'].keywords.splice(0,5);
    if(dbStore['Goalkeeper']) dbStore['Goalkeeper'].keywords = dbStore['Goalkeeper'].keywords.splice(0,4);

    if(dbStore['Centre Back']) dbStore['Centre Back'].keywords = dbStore['Centre Back'].keywords.splice(0,4);
    if(dbStore['Left Back']) dbStore['Left Back'].keywords = dbStore['Left Back'].keywords.splice(0,2);
    if(dbStore['Right Back']) dbStore['Right Back'].keywords = dbStore['Right Back'].keywords.splice(0,2);

    if(dbStore['Centre Midfield']) dbStore['Centre Midfield'].keywords = dbStore['Centre Midfield'].keywords.splice(0,3);
    if(dbStore['Right Midfield']) dbStore['Right Midfield'].keywords = dbStore['Right Midfield'].keywords.splice(0,2);
    if(dbStore['Left Midfield']) dbStore['Left Midfield'].keywords = dbStore['Left Midfield'].keywords.splice(0,2);

    db.put('tweet', JSON.stringify(dbStore), function (err) {
        if (err) {
            return logger.error('Ooops!', err); // some kind of I/O error
        }
    });
    //console.log(data);
}

function updateData() {
    tmpDataArray = [];
    logger.debug('TmpData', tmpData);
    tmpDataArray.unshift(tmpData);
    clearTmpData();

    aggregateTmpArray();
    logger.debug('Data percentages', data);
}

csvData.getFromCsv('./data.csv', function (data) {
    channels = csvData.twitter;
    //console.log(channels)
    clearTmpData();
    start();
});

function start () {
    db = levelup(path.join(__dirname, '../../database/tweets'));
//    db.get('tweets', function (err, value) {
//        var obj;
//        if (err) {
//            logger.error('Ooops!', err); // likely the key was not found
//        } else {
//            // populate the data array with the values from the db
//            try {
//                obj = JSON.parse(value);
//
//                if (Array.isArray(obj)) {
//                    savedData = savedData.concat(obj);
//                }
//            } catch (e) {
//                logger.error(e);
//            }
//        }

        clearTmpData();
        setInterval(updateData, tmpTtl);
    //});

    stream = client.streamChannels({
        track: getSearchKeywords(clone(channels))
    });

    //If you want, you can listen on all the channels and pickup the $channels added by the module
    //It contains the channel and the keywords picked up in the tweet
    stream.on('channels', function (tweet) {
        var mainChannels = csvData.twitter,
            channels = Object.keys(tweet.$channels),
            keywords = tweet.$keywords;
        console.log(tweet.text)
        logger.info('channels: ' + channels);
        logger.info('text: ' + tweet.text);
        //console.log(tweet.text);
        channels.forEach(function (channel) {
            Object.keys(mainChannels).forEach(function (mainChannel) {
                if (mainChannels[mainChannel].hasOwnProperty(channel)) {
                    tmpData[mainChannel].value += 1;
                    tmpData[mainChannel].keywords[channel].value += 1;

                    keywords.forEach(function (keyword) {
                        if (tmpData[mainChannel].keywords[channel].subKeywords.hasOwnProperty(keyword)) {
                            tmpData[mainChannel].keywords[channel].subKeywords[keyword] += 1;
                        }
                    });
                }
            });
        });
    });
}

module.exports = {
    getPercentages: function () {
        return data;
    }
};
