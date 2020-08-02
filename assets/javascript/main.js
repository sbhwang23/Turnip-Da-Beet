$(document).ready(function() {

    // when user clicks search button the input will empty
    $('#searchButton').on('click', function(e) {
        e.preventDefault();
        $('input').val('');
    });

    function changeDisplay1() {
        $('#searchResults').toggleClass('hide');
        $('#recipeDisplay1').toggleClass('hide');
    }
    function changeDisplay2() {
        $('#searchResults').toggleClass('hide');
        $('#recipeDisplay2').toggleClass('hide');
    }
    function changeDisplay3() {
        $('#searchResults').toggleClass('hide');
        $('#recipeDisplay3').toggleClass('hide');
    }

    // when user clicks a recipe title from the search results the recipe will display
    $('#result1').on('click', function() {
        changeDisplay1();
    });

    $('#result2').on('click', function() {
        changeDisplay2();
    });

    $('#result3').on('click', function() {
        changeDisplay3();
    });

    // when user clicks the backButton the display will go back to search results
    $('#backButton1').on('click', function() {
        changeDisplay1();
    })

    $('#backButton2').on('click', function() {
        changeDisplay2();
    })

    $('#backButton3').on('click', function() {
        changeDisplay3();
    });

});
