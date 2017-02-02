/*jslint node:true */
'use strict';

module.exports = function (gulp) {
    var watch = require('gulp-watch');

    return function () {
        return watch(['client/html/**/*.dust', 'client/html/**/*.json', 'client/html/**/*.js'], function () {
            gulp.start('html');
        });
    };
};
