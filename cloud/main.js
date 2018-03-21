var encOutput = require('./output.js');

Parse.Cloud.define('hello', function(req, res) {
    var outputJSON = encOutput.methodGetOutputJSON('hello');
    outputJSON.output.message = 'hello from Encardia';
    outputJSON = encOutput.setResponseStatus(outputJSON, 0, 'complete');
    res.success(outputJSON);

});
