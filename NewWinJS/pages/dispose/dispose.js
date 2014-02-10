/// <reference src="/pages/dispose/counter.js" />
(function () {
    "use strict";

    var disposeOnNavigation;

    WinJS.UI.Pages.define("/pages/dispose/dispose.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            prettyPrint(element);

            this._element = element;
            element.querySelector(".navigate").addEventListener("click", navigate);
            element.querySelector(".addControl").addEventListener("click", addControl.bind(this));
            element.querySelector(".dispose").addEventListener("click", disposeHandler.bind(this));
        }
    });

    function navigate() {
        WinJS.Navigation.navigate('/pages/dispose/dispose.html');
    }

    function addControl() {
        var container = this._element.querySelector(".counterContainer");
        var control = new NewWinJS.Counter();
        container.appendChild(control.element);
    }

    function disposeHandler() {
        var container = this._element.querySelector(".counterContainer");
        WinJS.Utilities.children(container).forEach(function(child) {
            if (child.winControl && child.winControl.dispose) {
                child.winControl.dispose();
            }
        });

        WinJS.Navigation.history.backStack = WinJS.Navigation.history.backStack.slice(0, 0);
        WinJS.Navigation.navigate('/pages/dispose/dispose.html');

    }
})();