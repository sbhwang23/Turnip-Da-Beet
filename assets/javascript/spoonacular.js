let spoonKey =  '4018f2e7f8794064be13ba2ed146e4c2';

function displayRecipes(spoonIngredient) {
    let spoonCall = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${ spoonKey }&ingredients=${ spoonIngredient }`;
    
    $.ajax({
        url: spoonCall,
        method:'GET',
            
    }).then(function(response) {

        let id1 = response[0].id
        let id2 = response[1].id
        let id3 = response[2].id
        let img1 = $('<img>').attr('src', response[0].image);
        let img2 = $('<img>').attr('src', response[1].image);
        let img3 = $('<img>').attr('src', response[2].image);
        $('#searchPicture1').append(img1);
        $('#searchPicture2').append(img2);
        $('#searchPicture3').append(img3);
        console.log(response);

        let recipeCall1 = `https://api.spoonacular.com/recipes/${ id1 }/information?apiKey=${ spoonKey }&includeNutrition=false`
        
        $.ajax({
            url: recipeCall1,
            method:'GET',
                
        }).then(function(response) {

            let instructions1 = $('<p>').text(response.instructions);
            let link1 = $('<a>').attr('href', response.sourceUrl).text(response.title);
            let title1 = $('<h3>').text(response.title);
            $('#recipeTitle1').append(link1);
            $('#searchTitle1').append(title1);
            $('#recipeAPI1').append(instructions1);
            console.log(response);
            
            let recipeCall2 = `https://api.spoonacular.com/recipes/${ id2 }/information?apiKey=${ spoonKey }&includeNutrition=false`
        
            $.ajax({
                url: recipeCall2,
                method:'GET',
                    
            }).then(function(response) {
                
                let instructions2 = $('<p>').text(response.instructions);
                let link2 = $('<a>').attr('href', response.sourceUrl).text(response.title);
                let title2 = $('<h3>').text(response.title);
                $('#searchTitle2').append(title2);
                $('#recipeTitle2').append(link2);
                $('#recipeAPI2').append(instructions2);
                console.log(response);

                let recipeCall3 = `https://api.spoonacular.com/recipes/${ id3 }/information?apiKey=${ spoonKey }&includeNutrition=false`
        
                $.ajax({
                    url: recipeCall3,
                    method:'GET',

                }).then(function(response) {
                    
                    let instructions3 = $('<p>').text(response.instructions);
                    let link3 = $('<a>').attr('href', response.sourceUrl).text(response.title);
                    let title3 = $('<h3>').text(response.title);
                    $('#searchTitle3').append(title3);
                    $('#recipeTitle3').append(link3);
                    $('#recipeAPI3').append(instructions3);
                    console.log(response);
                
                });
            
            });
        
        });
    });

};

$("#searchButton").on("click", function (event) {
    event.preventDefault();
    let spoonIngredient = $("#userInput").val().trim();

    displayRecipes(spoonIngredient);
});