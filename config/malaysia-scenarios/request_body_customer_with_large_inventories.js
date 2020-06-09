module.exports = {
    setJSONBody: setJSONBody
}

function setJSONBody(requestParams, context, ee, next) {
    var body = {
    }
    requestParams.json = body;
    return next(); // MUST be called for the scenario to continue
}
