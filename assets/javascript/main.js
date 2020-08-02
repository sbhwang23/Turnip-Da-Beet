$(document).ready(function() {

// when user clicks search button the input will empty
$('#searchButton').on('click', function(e) {
    e.preventDefault();
    $('input').val('');
})

// function to change what is displayed in the #recipesEl section
function changeDisplay() {
    $('#searchResults').toggleClass('hide');
    $('.recipe-display').toggleClass('hide');
}

// when user clicks a recipe title from the search results the recipe will display
$('#searchResults').on('click', 'h2', function() {
    changeDisplay();
});

// when user clicks the backButton the display will go back to search results
$('#backButton').on('click', function() {
    changeDisplay();
})

});