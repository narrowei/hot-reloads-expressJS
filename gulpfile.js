let gulp=require('gulp');
let browserSync = require('browser-sync');
let reload = browserSync.reload;
let nodemon = require('gulp-nodemon');

//start express server

gulp.task("node", function() {
    nodemon({
        script: 'app.js',
        ignore : [
            //ignore the static file change in order to boost the performance
            "static/"
        ],
        env: {
            'NODE_ENV': 'development'
        }
    })
});

gulp.task('start', ["node"], function() {

//add files which you want gulp to watch

    let files = [
        'app.js',
    ];

    browserSync.init(files, {

        proxy: 'http://localhost:3000',

        browser: 'chrome',

        notify: false,

        port: 3001

    });

    gulp.watch(files).on("change", reload);

});
