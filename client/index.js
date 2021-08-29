(function() {

	$.getScriptCached = function(url, callback) {
		return $.ajax({
			url: url,
			dataType: "script",
			cache: false,
		}).done(callback);
	};

	var app = Sammy("body");
	app.use("Template");

	//For routes that main route
	app.get("/", function(context) {
		this.partial("src/login/login.html", function() {
			$.getScriptCached("src/login/login.js", function(data, textStatus, jqxhr) {});
		});
	});
    
    //For routes that 404 error
	app.get("/error", function(context) {
		this.partial("src/error-page/error-404-page.html");
	});
	app.notFound = function(context) {
		this.runRoute("get", "/error");
	};
	$(document).ready(function() {
		app.run();
	});
})();