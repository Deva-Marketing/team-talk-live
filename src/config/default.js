/*jslint node:true */
'use strict';
/*
    Copyright 2015 Enigma Marketing Services Limited

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/


var cfg = {};

cfg.baseUrl = 'http://127.0.0.1:8000';

cfg.logger = {
    level: 'error'
};

cfg.newRelic = {
    key: "357288413b15df7ebf872650bb69250a30cb7e46"
};

cfg.http = {
    port: process.env.PORT || 8000
};

cfg.twitterApp = {
    credentials: {
        consumer_key: "dkRxTRoHAkXEozx3nMhreIlt7",
        consumer_secret: "CsohYfxFyVwuJaH2Goil7DTWvqql4ljuBa1tKw7LMwaKnU7lwU",
        access_token: "78866553-TZi0yNDCQAGFx4RDmAn8S3TCmfZ6IEoZpUqtpYYqG",
        access_token_secret: "2EJ0CdKoJCMxa6RqADpBsBXTMF1QjnklWR3ssUOMzbJdO"
    },
    positions: ['Manager', 'Goalkeeper', 'Forward']
    //positions: ['Centre Midfield', 'Right Midfield', 'Left Midfield']
    //positions: ['Centre Back', 'Right Back', 'Left Back']
};

module.exports = cfg;
