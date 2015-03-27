var gulp = require('gulp');
var copy = require('./src/CopyFiles');
var KodiCMS = require('kodicms-gulp');
var config = KodiCMS.config;

/*
 |----------------------------------------------------------------
 | Copying
 |----------------------------------------------------------------
 |
 | This task offers a simple way to copy files from one place to
 | another. That's it. Not any more complicated than that!
 |
 */

KodiCMS.extend('copy', function(source, destination) {
	return copy(source, destination);
});