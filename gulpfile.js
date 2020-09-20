const {src, dest, watch} = require("gulp");
const sass = require("gulp-sass");

let prepros = 'scss';

function sassTask() {
    return src('scss/')
        .pipe(sass())
        .pipe(dest('css/'));
}

exports.sass = sassTask;