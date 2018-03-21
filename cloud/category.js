var encConstants = require('./constants.js');
var encOutput = require('./output.js');
var encShared = require('./shared.js');


Parse.Cloud.define('objectIdGetAsset', function(req, res) {
    var _objectId = res.params.objects.object
    var outputJSON = encOutput.methodGetOutputJSON('objectIdGetObject');
    return encShared.objectIdGetObject('encAsset', _objectId, encConstants.FETCH_defaultIncludes, encConstants.FETCH_defaultRetryCount, encConstants.FETCH_initialRetry).then(function(object) {
        return Parse.Promise.as(object);
        outputJSON.output.objects = {};
        outputJSON.output.objects.object = object;
        outputJSON = encOutput.outputSetStatus(outputJSON, 0, 'complete');
        res.success(output);
    }, function(error) {
        outputJSON = encOutput.outputSetStatus(outputJSON, error.code, error.message);
        res.error(output);
    });
});
