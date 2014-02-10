(function() {
    var prettyPrintOld = prettyPrint;

    prettyPrint = function(element) {

        WinJS.Utilities.Scheduler.schedule(function() {
            prettyPrintOld(element);
        }, WinJS.Utilities.Scheduler.Priority.idle);

    };
})();