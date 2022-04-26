cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova.plugin.kkm.provider.KkmProvider",
      "file": "plugins/cordova.plugin.kkm.provider/www/KkmProvider.js",
      "pluginId": "cordova.plugin.kkm.provider",
      "clobbers": [
        "cordova.plugins.KkmProvider"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-add-swift-support": "2.0.2",
    "cordova.plugin.kkm.provider": "0.0.5"
  };
});