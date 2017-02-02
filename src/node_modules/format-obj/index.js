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

var objectMapper = require('object-mapper');

function createMap(opts) {
    var map;
    if (typeof opts === 'string') {
        map = {};
        opts.split(' ').forEach(function (item) {
            var from = item,
                to = item,
                items;

            if (item.indexOf(':') > -1) {
                items = item.split(':');
                from = items[0];
                to = items[1];
            }

            map[from] = to;
        });
    } else {
        map = opts;
    }
    return map;
}

function populateWildcard(data, map) {
    if (!map['*']) {
        return map;
    }
    delete map['*'];

    function populate(item) {
        Object.keys(item).forEach(function (key) {
            if (!map[key]) {
                map[key] = key;
            }
        });

        return item;
    }

    if (Array.isArray(data)) {
        data = data.map(populate);
    } else {
        populate(data);
    }

    return map;
}

// receives a data object and a space separated list of allowed inputs
// or an object
//
// '_id:id' converts '_id' into 'id'
// '_id:id *' the '*' allows every other field 
//
// if data is an array the mapping will affect every item
module.exports = function (data, opts) {
    var map = createMap(opts);

    if (!data) {
        return data;
    }

    map = populateWildcard(data, map);

    if (Array.isArray(data)) { //is array?
        return data.map(function (item) {
            return objectMapper.merge(item, {}, map);
        });
    }
    return objectMapper.merge(data, {}, map);
};