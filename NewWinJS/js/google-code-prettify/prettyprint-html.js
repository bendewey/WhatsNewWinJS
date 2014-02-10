(function() {
    var prettyPrintOld = prettyPrint;

    prettyPrint = function(element) {

        WinJS.Utilities.query('.html', element).forEach(function(e) {
            e.innerText = e.innerHTML;
        });

        prettyPrintOld(element);
    };
})();