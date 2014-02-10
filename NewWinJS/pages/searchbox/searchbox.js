(function () {
    "use strict";
    WinJS.UI.Pages.define("/pages/searchbox/searchbox.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            prettyPrint(element);
            var searchBox = document.getElementById("searchBoxId");
            searchBox.addEventListener("suggestionsrequested", suggestionsRequestedHandler);
            searchBox.addEventListener("querysubmitted", querySubmittedHandler);
        }
    });

    function suggestionsRequestedHandler(eventObject) {
        var queryText = eventObject.detail.queryText,
            query = queryText.toLowerCase(),
            suggestionCollection = eventObject.detail.searchSuggestionCollection;
        if (queryText.length > 0) {
            for (var i = 0, len = suggestionList.length; i < len; i++) {
                if (suggestionList[i].substr(0, query.length).toLowerCase() === query) {
                    suggestionCollection.appendQuerySuggestion(suggestionList[i]);
                }
            }
        }
    }

    function querySubmittedHandler(eventObject) {
        var queryText = eventObject.detail.queryText;
        WinJS.log && WinJS.log(queryText);
    }

    var suggestionList = [
        "Apple",
        "Apricot",
        "Avocado",
        "Banana",
        "Breadfruit",
        "Bilberry",
        "Blackberry",
        "Blackcurrant",
        "Blueberry",
        "Boysenberry",
        "Cantaloupe",
        "Currant",
        "Cherry",
        "Cherimoya",
        "Cloudberry",
        "Coconut",
        "Cranberry",
        "Cucumber",
        "Damson",
        "Date",
        "Dragonfruit",
        "Durian",
        "Eggplant",
        "Elderberry",
        "Feijoa",
        "Fig",
        "Goji berry",
        "Gooseberry",
        "Grape",
        "Grapefruit",
        "Guava",
        "Huckleberry",
        "Honeydew",
        "Jackfruit",
        "Jambul",
        "Jujube",
        "Kiwi fruit",
        "Kumquat",
        "Lemon",
        "Lime",
        "Loquat",
        "Lychee",
        "Mango",
        "Melon",
        "Canary melon",
        "Cantaloupe",
        "Honeydew",
        "Watermelon",
        "Rock melon",
        "Mulberry",
        "Nectarine",
        "Nut",
        "Olive",
        "Orange",
        "Clementine",
        "Mandarine",
        "Blood Orange",
        "Tangerine",
        "Pamelo",
        "Papaya",
        "Passionfruit",
        "Peach",
        "Pepper",
        "Chili Pepper",
        "Bell Pepper",
        "Pear",
        "Persimmon",
        "Physalis",
        "Plum",
        "Pineapple",
        "Pomegranate",
        "Pomelo",
        "Prune",
        "Purple Mangosteen",
        "Quince",
        "Raspberry",
        "Western raspberry",
        "Rambutan",
        "Redcurrant",
        "Salal berry",
        "Satsuma",
        "Star fruit",
        "Strawberry",
        "Tamarillo",
        "Ugli fruit",
        "Watermelon"
    ];
})();