var exec = require('cordova/exec');

exports.loadURL = function(url, key, isInvisible, token, success, error) {
    exec(success, error, "JitsiPlugin", "loadURL", [url, key, !!isInvisible, token]);
};

exports.destroy = function(success, error) {
    exec(success, error, "JitsiPlugin", "destroy", []);
};
