const {src, dest, watch} = require("gulp");
const sass = require("gulp-sass");
var browserSync = require('browser-sync').create();

let prepros = 'scss';

function sassTask() {
    return src('scss/*.scss')
        .pipe(sass())
        .pipe(dest('css/'))
        .pipe(browserSync.stream());
}

function sync() {
    return browserSync.init({
        server: {
            baseDir: "./"
        }
    })
}

function serveTask() {
    browserSync.init({
        server: "./"
    });
    watch("scss/*.scss", sassTask);
    watch("*.html").on("change", browserSync.reload);
}

exports.sass = sassTask;
exports.browsersync = sync;
exports.serve = serveTask;