const {watch} = require('gulp');
const browserSync = require('browser-sync').create();

function serve(cb) {
    browserSync.init({
        server: './'
    });
    watch(['**/*.html', 'styles/**/*.css', 'scripts/**/*.js']).on('change', browserSync.stream);
    cb();
}

exports.serve= serve;
