window.onload = function () {
    const searchInput = document.getElementById('search-input');
    const searchSuggestion = document.getElementById('search-suggestion');
    searchInput.addEventListener('keyup', showKeyWords,false);
    searchInput.addEventListener('blur', hideKeyWords, false);
    searchInput.addEventListener('focus', showKeyWords, false);

    function showKeyWords(){
        if(searchInput.value !== ''){
            searchSuggestion.style.display = 'block';
        }
    }

    function hideKeyWords(){
        searchSuggestion.style.display = 'none';
    }
}
