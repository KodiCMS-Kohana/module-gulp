var util = require('gulp-util');
var fs = require('fs');
var _ = require('underscore');

var targetDir = util.env.backend  ? 'cms/media/' : 'public'

var config = {
    production: !! util.env.production,
    assetsDir: targetDir + 'less',
    cssOutput: targetDir + 'css',
    jsOutput: targetDir + 'js',
    sourcemaps: ! util.env.production,
    bowerDir: 'vendor/bower_components',
    tasks: [],
    watchers: { default: {} },
    duplicate: [],
    concatenate: { css: [], js: [] }
};


/**
 * Set the default directory paths.
 *
 * @param {string} file
 */
config.setDefaultsFrom = function(file) {
    var defaults;

    if (fs.existsSync(file)) {
        defaults = JSON.parse(fs.readFileSync(file, 'utf8'));

        _.extend(this, defaults);
    }
};


module.exports = config;
