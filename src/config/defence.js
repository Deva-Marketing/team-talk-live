/*jslint node:true */
'use strict';

var cfg = {};

cfg.baseUrl = 'https://defence.teamtalk.live';

cfg.logger = {
    level: 'warn'
};

cfg.twitterApp = {
    credentials: {
        consumer_key: "RVtJOLARdqJrNT4GazmT9nZdB",
        consumer_secret: "T6jn4UZFiJOZ3HoiXx9nWPEHSpO61Ds2XI5xlqlOm0xumVwGiz",
        access_token: "78866553-GQ3YUCQjzj6EgEeFPLHeLI3iAfLu092oVDLX5UwEO",
        access_token_secret: "XQxuJ3ndycEAF00KsgeHEhCHNDwdcRWVRqg5c7gTBuMmh"
    },
    positions: ['Centre Back', 'Right Back', 'Left Back']
};

module.exports = cfg;
