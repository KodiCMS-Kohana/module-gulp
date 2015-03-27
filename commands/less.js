var KodiCMS = require('kodicms-gulp');
var compile = require('./src/CompileCSS');

/*
 |----------------------------------------------------------------
 | Less Compilation Task
 |----------------------------------------------------------------
 |
 */

KodiCMS.extend('less', function(src, output, options) {

    return compile({
        compiler: 'Less',
        plugin: 'less',
        pluginOptions: options,
        src: src,
        output: output,
        search: '**/*.less'
    });

});
