let spoonKey =  '9b5b48c4938e4dbb9caf8617eba9488a';

function displayRecipes(spoonIngredient) {
    let spoonCall = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${ spoonKey }&ingredients=${ spoonIngredient }`;
    
    $.ajax({
        url: spoonCall,
        method:'GET',
            
    }).then(function(response) {
    
        console.log(response);

    });

};

$("#searchButton").on("click", function (event) {
    event.preventDefault();
    let spoonIngredient = $("#userInput").val().trim();

    displayRecipes(spoonIngredient);
});