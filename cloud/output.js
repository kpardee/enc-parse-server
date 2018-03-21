var methodGetOutputJSON = function(methodName, req) {
    var outputJSON = {status: {},input: {}, output: {}};
    outputJSON.status.methodName = methodName;
    outputJSON.status.returncode = -1;
    outputJSON.status.returnmessage = 'pending';

    var startDate = new Date();
    outputJSON.status.startDate = startDate;
    if (typeof req.params != 'undefined') {
        outputJSON.input = req.params;
    }
    return outputJSON;
};

var outputSetStatus = function(outputJSON, returncode, returnmessage) {
    if (typeof returncode != 'undefined')     {
        outputJSON.status.returncode = returncode;
        outputJSON.status.returnmessage = returnmessage;
    }
    var endDate = new Date();
    outputJSON.status.endDate = endDate;
    outputJSON.status.elapsedTime = outputJSON.status.startDate - outputJSON.status.endDate;
    return outputJSON;
};


module.exports.methodGetOutputJSON = methodGetOutputJSON;
module.exports.outputSetStatus = outputSetStatus;