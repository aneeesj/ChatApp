(function () {
    var app = Sammy.apps.body;

    app.get('#/user', function (context) {
        this.partial("src/user/user.html", function () {
            $.getScriptCached('src/user/user.js', function (data, textStatus, jqxhr) {
            });
        })
    })

    app.get('#/register', function (context) {
        this.partial("src/signup/signup.html", function () {
            $.getScriptCached('src/signup/signup.js', function (data, textStatus, jqxhr) {
            });
            
        })
    })
    app.get('#/home', function (context) {
        this.partial("src/home/home.html", function () {
            $.getScriptCached('src/home/home.js', function (data, textStatus, jqxhr) {
            });
        })
    })
    app.get('#/room', function (context) {
        this.partial("src/chatBot/myChat.html", function () {
            $.getScriptCached('src/chatBot/myChatBot.js', function (data, textStatus, jqxhr) {
            });
        })
    })
})();
