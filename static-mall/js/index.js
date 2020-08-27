window.onload = function () {
    var searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("keyup", debounce(getSuggest, 500), false);
    searchInput.addEventListener("blur", hideKeyword, false);
    searchInput.addEventListener("focus", showKeyword, false);

    function showKeyword() {
        if (searchInput.value !== "") {
            // getSuggest();
            document.getElementById("search-suggest").style.display = "block";
        }
    }

    function hideKeyword() {
        document.getElementById("search-suggest").style.display = "none";
    }

    function debounce(fn, delay) {
        var handle;
        return function () {
            clearTimeout(handle);
            handle = setTimeout(function () {
                fn();
            }, delay)
        }
    }
}