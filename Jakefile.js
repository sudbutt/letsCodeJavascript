"use strict";
/* global desc, task, jake */

desc("Default");
task("default", ["lint", "test"], function(){
});


desc("Lint my code");
task("lint", function(){
    var lint = require("./build/lint/lint_runner.js"),
        files = new jake.FileList();
    
    files.include("**/*.js");
    files.exclude("node_modules");
    lint.validateFileList(files, lintOptions(), {});
});

desc("run unit tests");
task("test", function() {
    var reporter = require('nodeunit').reporters.default;
    reporter.run(["./server/src/_server_test.js"]);
});

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