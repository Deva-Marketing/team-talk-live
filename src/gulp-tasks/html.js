/*jslint node:true */
'use strict';

module.exports = function (gulp) {
    var plumber = require('gulp-plumber');
    var errorHandler = require('../gulp-error-handler');
    var dust = require('dustjs-linkedin');
    dust.helpers = require('dustjs-helpers').helpers;
    require('dust-naming-convention-filters')(dust);
    dust.config.cache = false;
    var dustHtml = require('gulp-dust-html');

    return function () {
        return gulp.src(['client/html/**/*.dust', '!client/html/**/partials/**'])
            .pipe(plumber({ errorHandler: errorHandler }))
            .pipe(dustHtml({
                basePath: 'client/html/partials',
                data: function (file) {
                    try {
                        var path = file.path.slice(0, -5),
                            data;

                        if (require.cache[require.resolve(path)]) {
                            delete require.cache[require.resolve(path)];
                        }

                        data = require(path);

                        return data;
                    } catch (ex) {
                        return { };
                    }
                }
            }))
            .pipe(plumber.stop())
            .pipe(gulp.dest('../dist/'));
    };
};
