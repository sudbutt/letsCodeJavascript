"use strict";
/* global desc, task, jake, fail, complete */

desc("Default");
task("default", ["lint", "test"], function(){
});


desc("Lint my code");
task("lint", function(){
    var lint = require("./build/lint/lint_runner.js"),
        files = new jake.FileList(),
        passed = false;
    
    files.include("**/*.js");
    files.exclude("node_modules");
    passed = lint.validateFileList(files, lintOptions(), {});

    if(!passed){
        fail("Lint Failed Build Halted");
    }
});

desc("Integration checklist");
task("integrate", ["default"], function() {
        console.log("1. Make sure 'git status' is clean.");
        console.log("2. Build on the integration box.");
        console.log("   a. Walk over to integration box.");
        console.log("   b. 'git pull'");
        console.log("   c. 'npm rebuild'");
        console.log("   d. Check status for files that need to be .gitignore'd");
        console.log("   e. 'jake'");
        console.log("   f. If jake fails, stop! Try again after fixing the issue.");
        console.log("3. 'git checkout integration'");
        console.log("4. 'git merge master --no-ff --log'");
        console.log("5. 'git checkout master'");
});

desc("run unit tests");
task("test", function() {
    var reporter = require('nodeunit').reporters.default;
    
    reporter.run(["./server/src/_server_test.js"], null, function(failures) {
        if(failures) {
            fail("Unit Test Failed Build Halted");
        }
        complete();
    });
}, {async : true});

function lintOptions(){
    var options = {
            bitwise: true,
            curly: false,
            eqeqeq: true,
            forin: true,
            immed: true,
            latedef: 'nofunc',
            newcap: true,
            noarg: true,
            noempty: true,
            nonew: true,
            regexp: true,
            undef: true,
            strict: true,
            trailing: true,
            node: true
    };

    return options;
}