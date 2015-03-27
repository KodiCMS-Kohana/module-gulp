var KodiCMS = require('kodicms-gulp');
var combine = require('./commands/MergeFiles.js');
var MergeRequest = require('./commands/MergeRequest');

/*
 |----------------------------------------------------------------
 | JavaScript File Concatenation
 |----------------------------------------------------------------
 |
 | This task will concatenate and minify your JavaScript files
 | in order. This provides a quick and simple way to reduce
 | the number of HTTP requests your application executes.
 |
 */

KodiCMS.extend('scripts', function(scripts, outputDir, baseDir) {
    outputDir = outputDir || KodiCMS.config.jsOutput;

    return combine(mergeRequest(scripts, outputDir, baseDir));
});

KodiCMS.extend('scriptsIn', function(baseDir, outputDir) {
    outputDir = outputDir || baseDir;

    return combine(mergeRequest('**/*.js', outputDir, baseDir));
});

var mergeRequest = function(scripts, outputDir, baseDir) {
    var request = new MergeRequest(scripts, baseDir, outputDir, 'js');

    request.taskName = 'scripts';
    request.minifier = require('gulp-uglify');

    return request;
};
