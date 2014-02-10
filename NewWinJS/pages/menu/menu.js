(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/menu/menu.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            WinJS.Utilities.query('section button').listen('click', function(e) {
                    var target = e.currentTarget;
                    if (target.dataset.href) {
                        WinJS.Navigation.navigate(target.dataset['href']);
                    }
                });
            
        }
    });
})();
