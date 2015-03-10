cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.rjfun.cordova.plugin.admob/www/AdMob.js",
        "id": "com.rjfun.cordova.plugin.admob.AdMob",
        "clobbers": [
            "window.plugins.AdMob"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.rjfun.cordova.plugin.admob": "2.1.7",
    "com.google.playservices": "19.0.0",
    "com.google.admobsdk": "6.12.2"
}
// BOTTOM OF METADATA
});