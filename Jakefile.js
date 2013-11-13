desc("Default");
task("default", ["lint"], function(){
});


desc("Lint everything");
task("lint", function(){
    var lint = require("./build/lint/lint_runner.js");
    var files = new jake.FileList();
    var options = {
        node: true
    };
    
    files.include("**/*.js");
    files.exclude("node_modules");
    lint.validateFileList(files, options, {});
});
