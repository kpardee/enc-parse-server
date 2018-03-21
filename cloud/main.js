var encOutput = require('./output.js');

Parse.Cloud.define('hello', function(req, res) {
    var outputJSON = encOutput.methodGetOutputJSON('objectIdGetObject');
    outputJSON.output.message = 'hello from Encardia';
    outputJSON = encOutput.setResponseStatus(outputJSON, 0, 'complete');
    res.success(output);

});
