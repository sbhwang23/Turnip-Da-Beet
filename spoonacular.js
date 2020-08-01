let spoonKey =  '9b5b48c4938e4dbb9caf8617eba9488a';

function displayRecipes(spoonIngredient) {
    let spoonCall = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${ spoonKey }&ingredients=${ spoonIngredient }`;
    
    $.ajax({
        url: spoonCall,
        method:'GET',
            
    }).then(function(response) {

        let img1 = $('<img>').attr('src', response[0].image);
        let img2 = $('<img>').attr('src', response[1].image);
        let img3 = $('<img>').attr('src', response[2].image);
        $('#searchTitle1').append(`<h4>${response[0].title}</p>`);
        $('#searchTitle2').append(`<h4>${response[1].title}</p>`);
        $('#searchTitle3').append(`<h4>${response[2].title}</p>`);
        //let link1 = $('<a>').attr('href', response[0].items[0].external_urls.spotify).text(response.tracks.items[0].name);
        $('#searchPicture1').append(img1);
        $('#searchPicture2').append(img2);
        $('#searchPicture3').append(img3);
        //$('#searchTitle2').append(link1);
        console.log(response);

    });

};

$("#searchButton").on("click", function (event) {
    event.preventDefault();
    let spoonIngredient = $("#userInput").val().trim();

    displayRecipes(spoonIngredient);
});