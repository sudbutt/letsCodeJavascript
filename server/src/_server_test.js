/* global test */

(function(){
    'use strict';

    exports.testSomething = function(test){
        test.ok(true, 'this should be true');

        test.done();
    };

}());