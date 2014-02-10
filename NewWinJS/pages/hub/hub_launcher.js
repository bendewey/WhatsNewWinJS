﻿(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/hub/hub_launcher.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            prettyPrint(element);

            document.getElementById("button1").addEventListener("click", function() {
                WinJS.Navigation.navigate("/pages/hub/hub.html");
            }, false);
        }
    });
})();
