(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/navbar/navbar.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            prettyPrint(element);


            var mainContainer = document.body.querySelector('#mainNavBarContainer');
            var videoContainer = document.body.querySelector('#videoNavBarContainer');

            mainContainer.addEventListener("splittoggle", function (e) {
                
                videoContainer.style.display = e.detail.opened ? 'block' : 'none';
                // Switching the navbarcontainer from display none to display block requires 
                // forceLayout in case there was a pending measure.
                videoContainer.winControl.forceLayout();
            });
           
        }
    });
})();
