var notify = require('gulp-notify');

module.exports = function() {

    this.title = 'KodiCMS Gulp';

    this.message = function(subtitle) {
        return notify({
            title: this.title,
            subtitle: subtitle,
            icon: __dirname + '/../../icons/kodicms.png',
            message: ' ',
            onLast: true
        });
    };

    this.error = function(e, subtitle) {
        return notify.onError({
            title: this.title,
            subtitle: subtitle,
            message:  'Error: <%= error.message %>',
            icon: __dirname + '/../../icons/fail.png'
        })(e);
    };
};
