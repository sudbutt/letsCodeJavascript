
'use strict';

var server = require("./server.js");

exports.testSomething = function(test){
    test.ok(server.doIWork(), 'this should be true');

    test.done();
};