"use strict";
/* global desc, task, jake */

desc("Default");
task("default", ["lint"], function(){
});


desc("Lint everything");
task("lint", function(){
    var lint = require("./build/lint/lint_runner.js"),
        files = new jake.FileList();
    
    files.include("**/*.js");
    files.exclude("node_modules");
    lint.validateFileList(files, lintOptions(), {});
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