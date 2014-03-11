(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/navigation/navigation.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            prettyPrint(element);

            this._element = element;
            element.querySelector(".navigate").addEventListener("click", navigate);
            element.querySelector(".unwind").addEventListener("click", unwind.bind(this));
            this.updateDepthLabel();
        },

        updateDepthLabel: function () {
            var depth = this._element.querySelector(".depth");
            depth.innerText = WinJS.Navigation.history.backStack.length;
        }
    });

    function navigate() {
        WinJS.Navigation.navigate('/pages/navigation/navigation.html');
    }

    function unwind() {
        WinJS.Navigation.history.backStack = WinJS.Navigation.history.backStack.slice(0, 1);
        this.updateDepthLabel();
    }
    
})();