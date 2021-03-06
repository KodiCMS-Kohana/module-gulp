var util = require('gulp-util');
var fs = require('fs');
var _ = require('underscore');

var targetDir = util.env.backend  ? 'cms/media/' : 'public/';

var config = {
	isBackend: util.env.backend,
    production: !! util.env.production,
    assetsDir: targetDir,
    cssOutput: targetDir + 'css/',
    jsOutput: targetDir + 'js',
    sourcemaps: ! util.env.production,
    bowerDir: 'vendor/bower_components',
    tasks: [],
    watchers: { default: {} },
    duplicate: [],
    concatenate: { css: [], js: [] }
};

/**
 * Designate that the given task should be watched.
 *
 * @param {string} task
 * @param {string} search
 * @param {string} group
 */
config.registerWatcher = function(task, search, group) {
	group = group || 'default';

	this.watchers[group] = this.watchers[group] || {};

	this.watchers[group][task] = search;

	return this;
}

/**
 * Register the given task to be triggered by Gulp.
 *
 * @param {string} task
 */
config.queueTask = function(task) {
	if (this.tasks.indexOf(task) == -1)
	{
		this.tasks.push(task);
	}

	return this;
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
