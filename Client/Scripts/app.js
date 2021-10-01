
"use strict";
(function () {
    function Start() {
        console.log("App Started");
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map

//Show user's input as an alert
(function () {
    function userInput(e) {
        var name = document.getElementById("txtBest").value;
        var phone = document.getElementById("numPhone").value;
        var email = document.getElementById("txtEmail").value;
        var message = document.getElementById("txtMessage").value;
        if (confirm("This is what you entered\nName: " + name + "\nPhone Number: " + phone + "\nEmail: " + email + "\nMessage: " + message + "\n")) {
            e.preventDefault();
            window.location.href = '/home';
        } else {}

    }
    document.getElementById("contactUs").addEventListener("click", userInput, true);


})();