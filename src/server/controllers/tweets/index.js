/*jslint node:true, unparam:true */
'use strict';

var twitter = require('../../models/twitter');

module.exports = function (router) {
    router.get('/percentages', function (req, res, next) {
        res.json(twitter.getPercentages());
    });

    return true;
};
