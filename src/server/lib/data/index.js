/*jslint node:true, unparam:true, nomen:true */
'use strict';

var config = require('config'),
    fs = require('fs'),
    csv = require('fast-csv'),
    obj = {},
    config;

obj.data = {};
obj.twitter = {};


obj.getFromCsv = function (csvFile, cb) {
    var stream = fs.createReadStream('server/lib/data/fdata.csv'),
        csvStream = csv()
            .on("data", function (data) {
                var twitterHandle = data[0].trim(),
                    firstName = data[1].trim(),
                    lastName = data[2].trim(),
                    hashtag = data[3].trim(),
                    country = data[4].trim(),
                    position = data[5].trim(),
                    fullName = firstName + ' ' + lastName;


                if(config.get('twitterApp.positions').indexOf(position) !== -1) {
                    if(!obj.twitter.hasOwnProperty(position)) {
                        obj.twitter[position] = {};
                    }
                    //obj.twitter[position]['test'].push(fullName.trim());

                    obj.twitter[position][fullName.trim()] = [];
                    if(twitterHandle) obj.twitter[position][fullName.trim()].push(twitterHandle);
                    if(firstName != '' && lastName != '') obj.twitter[position][fullName.trim()].push(fullName);


                    obj.data[fullName.trim()] = {
                        twitterHandel: twitterHandle,
                        firstName: firstName,
                        lastName: lastName,
                        hashtag: hashtag,
                        country: country,
                        position: position
                    }
                }
            })
            .on("end", function () {
                var util = require('util');
                fs.writeFileSync('server/lib/data/data2.json', util.inspect(obj.twitter) , 'utf-8');
                cb('done');
            });

    stream.pipe(csvStream);
};

module.exports = obj;
