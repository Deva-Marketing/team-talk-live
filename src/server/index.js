/*jslint node:true, nomen:true */
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
var path = require('path'),
    express = require('express'),
    config = require('config'),
    http = require('http'),
    appDependencies = require('./lib/app-dependencies'),
    logger = require('./lib/logger'),
    nodeEnv = config.util.getEnv('NODE_ENV'),
    app,
    server;

http.globalAgent.maxSockets = Infinity;

app = express();

// Load custom middleware
appDependencies.set(app, path.join(__dirname, 'app-middleware'), function onMiddlewareLoaded() {
    // Start Server
    server = app.listen(config.get('http.port'), function onServerStarted(err) {
        var host = server.address().address,
            port = server.address().port;

        if (err) {
            throw err;
        }

        logger.info('App listening to %s at %s', host, port);
    });
});

module.exports = app;
