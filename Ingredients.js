
document.addEventListener('DOMContentLoaded', function () {
    const ingredient = prompt('What ingredient');
    const key = '64ee4558d06f4893abec6a8193a82a30'; 
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${key}&ingredients=${ingredient}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            const recipeIds = json.map(function (recipe) { return recipe.id });
            fetch(`https://api.spoonacular.com/recipes/informationBulk?apiKey=${key}&ids=${recipeIds.join(',')}`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (json) {
                    console.log(json);
                });
        });
});
