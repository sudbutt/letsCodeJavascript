desc("Example");
task("example", ["runBeforeExample"], function(){
	console.log("jake fukin task");
});

task("runBeforeExample", function(){
	console.log("i should be output before example");
});