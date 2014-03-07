(function () {
    "use strict";

    var count = 0;

    WinJS.Namespace.define("NewWinJS", {
        Counter: WinJS.Class.define(
            function (element) {
                this._element = element || document.createElement("div");
                this._element.winControl = this;

                //using this class auto activates dispose when tree is disposing
                //WinJS.Utilities.addClass(this._element, "win-disposable");

                // create all sub-controls
                this._createSubControls();
            },
            {
                element: {
                    get: function () {
                        return this._element;
                    }
                },
                _createSubControls: function () {
                    var labelDiv = document.createElement("div");
                    labelDiv.innerText = count++;
                    this._element.appendChild(labelDiv);
                },
                dispose: function () {
                    count = 0;
                    while (this._element.firstChild) {
                        this._element.removeChild(this._element.firstChild);
                    }
                }
            }
        )
    });
})();