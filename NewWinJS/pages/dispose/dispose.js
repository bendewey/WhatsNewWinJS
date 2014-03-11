/// <reference src="/pages/dispose/counter.js" />
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/dispose/dispose.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            prettyPrint(element);

            this._element = element;
            element.querySelector(".navigate").addEventListener("click", navigate);
            element.querySelector(".addControl").addEventListener("click", addControl.bind(this));
            element.querySelector(".dispose").addEventListener("click", disposeHandler.bind(this));
            this.updateDisposeLabel();
        },

        updateDisposeLabel: function () {
            var dispose = this._element.querySelector(".dispose");
            dispose.innerText = NewWinJS.markDisposable ? "Mark Non-Disposable" : "Mark Disposable";
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
        NewWinJS.markDisposable = !NewWinJS.markDisposable;
        this.updateDisposeLabel();

        WinJS.Navigation.history.backStack = WinJS.Navigation.history.backStack.slice(0, 1);
    }

    
})();