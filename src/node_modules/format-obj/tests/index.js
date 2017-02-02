/*jslint node:true, browser:true, nomen: true */
/*global describe, it */
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

var assert = require("assert"),
    formatter = require('../');

describe('Format Obj', function () {
    it('should return id and title', function () {
        var obj = formatter({
                _id: 123,
                title: 'OK',
                test: 456
            }, '_id:id title'),
            expected = {
                id: 123,
                title: 'OK'
            };

        assert.deepEqual(obj, expected);
    });
    it('should return all items, renaming _id', function () {
        var obj = formatter({
                _id: 123,
                title: 'OK',
                test: 456
            }, '_id:id *'),
            expected = {
                id: 123,
                title: 'OK',
                test: 456
            };

        assert.deepEqual(obj, expected);
    });
    it('should accept an object as map', function () {
        var obj = formatter({
                _id: 123,
                title: 'OK',
                test: 456
            }, {
                _id: 'id',
                title: 'title'
            }),
            expected = {
                id: 123,
                title: 'OK'
            };

        assert.deepEqual(obj, expected);
    });
    it('should work on array', function () {
        var obj = formatter([{
                _id: 123,
                title: 'OK',
                test: 456
            }, {
                _id: 124,
                title: 'OK',
                test: 456
            }], '_id:id *'),
            expected = [{
                id: 123,
                title: 'OK',
                test: 456
            }, {
                id: 124,
                title: 'OK',
                test: 456
            }];

        assert.deepEqual(obj, expected);
    });

    it('should return null', function () {
        var obj = formatter(null, '_id:id *');

        assert.equal(obj, null);
    });
});