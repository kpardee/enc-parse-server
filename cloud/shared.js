

var objectIdGetObject = function(className, objectId, includes, retryCount, retry) {
    Parse.Cloud.useMasterKey();
    var parseObject = Parse.Object.extend(className);
    var query = new Parse.Query(parseObject);
    _.each(includes, function(include){
        query.include(include);
    });
    return Parse.Promise.as().then(function(object) {
        if (retry > 0) {
            var delayTime = 25 * Math.pow(2 ,retry);
            return delay(delayTime);
        } else {
            return Parse.Promise.as();
        }
    }).then(function(object) {
        return query.get(objectId);
    }).then(function(object) {
        return Parse.Promise.as(object);
    }, function(error) {
        retry++;
        if (retryCount <= retry) {
            return Parse.Promise.error(error);
        } else {
            return objectIdGetObject(className, objectId, includes, retryCount, retry);
        }
    });

}

module.exports.objectIdGetObject = objectIdGetObject;
