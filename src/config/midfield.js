/*jslint node:true */
'use strict';

var cfg = {};

cfg.baseUrl = 'https://midfield.teamtalk.live';

cfg.logger = {
    level: 'warn'
};

cfg.twitterApp = {
    credentials: {
        consumer_key: "zSRusEN4uY9Gj44DXSTJmmEJc",
        consumer_secret: "xVUwy8oDyK4hdLDOJeSpi9wzoJE8PJgxNSeP7xu5Hj8pTQHc7U",
        access_token: "78866553-MYm8xRBXp0V9EzwM6YY8IykgPlzYbHGYxYUWWc0sW",
        access_token_secret: "jrSFpVkBQgAxiQkqUoJvNW4g6Fh4SEkz7K9kGSE3J2vkl"
    },
    positions: ['Centre Midfield', 'Right Midfield', 'Left Midfield']
};

module.exports = cfg;
