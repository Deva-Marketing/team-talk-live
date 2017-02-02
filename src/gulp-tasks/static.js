/*jslint node:true */
'use strict';

module.exports = function (gulp) {
    var merge = require('merge-stream');

    return function () {
        return merge(
            gulp.src('client/image/**/*').pipe(gulp.dest('../dist/image/')),
            gulp.src('client/asset/**/*').pipe(gulp.dest('../dist/asset/')),
            gulp.src('client/js/lib/**/*').pipe(gulp.dest('../dist/js/lib/'))
        );
    };
};
