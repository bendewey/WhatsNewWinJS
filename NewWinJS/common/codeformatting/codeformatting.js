(function () {
    "use strict";
    
    WinJS.UI.Pages.define("/common/codeformatting/codeformatting.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            element.querySelector('#convert').addEventListener('click', function () {

                var input = element.querySelector("#input").value;
                if (input[0] == '<') {
                    input = input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                }
                var buffer = document.createElement("pre");
                buffer.innerHTML = input;
                buffer.className = "prettyprint";
                var container = element.querySelector("#container");
                container.appendChild(buffer);
                prettyPrint(buffer);
                
                var output = element.querySelector("#output");
                output.value = buffer.innerHTML;
            });

            prettyPrint(element);
        }
    });
})();
