(function () {
    "use strict";
    WinJS.UI.Pages.define("/pages/scheduler/scheduler.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            prettyPrint(element);
            document.getElementById("scheduleJobs").addEventListener("click", scheduleJobs);
        }
    });

    var order = 0;
    var S = WinJS.Utilities.Scheduler;

    function scheduleJobs(eventObject) {
        
        var job1status = document.getElementById("job1status");
        var job2status = document.getElementById("job2status");
        var job3status = document.getElementById("job3status");
        var job4status = document.getElementById("job4status");
        var job5status = document.getElementById("job5status");
        resetStatus(job1status);
        resetStatus(job2status);
        resetStatus(job3status);
        resetStatus(job4status);
        resetStatus(job5status);

        order = 0;

        scheduleJob(job1status, S.Priority.normal);
        scheduleJob(job2status, S.Priority.high);
        scheduleJob(job3status, S.Priority.idle);
        scheduleJob(job4status, S.Priority.belowNormal);
        scheduleJob(job5status, S.Priority.aboveNormal);
    }

    function scheduleJob(el, priority, work) {

        S.schedule(function (job) {
            delay(2);
            WinJS.Utilities.addClass(el, "joborder" + (order++));
        }, priority);
        
        WinJS.Utilities.addClass(el, "scheduled");
    }

    function resetStatus(el) {
        ["notrunning", "scheduled", "running", "joborder0", "joborder1", "joborder2", "joborder3", "joborder4"].forEach(function (className) {
            WinJS.Utilities.removeClass(el, className);
        });
        WinJS.Utilities.addClass(el, "notrunning");
    }

    function delay(seconds) {
        var e = new Date().getTime() + (seconds * 1000);
        while (new Date().getTime() <= e) { }
    }
})();