var KodiCMS = function(recipe) {
    require('require-dir')('./commands');
    recipe(KodiCMS.config);
};

KodiCMS.config = require('./Config');
KodiCMS.config.setDefaultsFrom('kodicms.json');

KodiCMS.extend = function(name, callback) {
	KodiCMS.config[name] = callback;
};

module.exports = KodiCMS;