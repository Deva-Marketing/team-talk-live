/*jslint node:true */
'use strict';

module.exports = function (gulp) {
    var watch = require('gulp-watch');

    return function () {
        return watch(['client/image/**/*', 'client/asset/**/*', 'client/js/lib/**/*'], function () {
            gulp.start('static');
        });
    };
};
