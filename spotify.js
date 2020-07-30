
//let client_id = "67da0e797c71476a92b66060037abb0c";
//let client_secret = "1825c9d95ef44bce95ba85bdc50c0c5e";
let initialCall = "https://accounts.spotify.com/api/token";
let ingredient1 = "carrot";
limit= 10;
//let tracks = [];
//let indgredient2 = "" &20${ ingredient2 }
//let ingredient3 = "" &20${ ingredient3 }


$(document).ready(function() {  
    $.ajax({
        url: initialCall,
        method: 'POST',
        headers: {
            'Authorization': 'Basic NjdkYTBlNzk3YzcxNDc2YTkyYjY2MDYwMDM3YWJiMGM6MTgyNWM5ZDk1ZWY0NGJjZTk1YmE4NWJkYzUwYzBjNWU=',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: 'grant_type=client_credentials' 

    }).then(function (response) {
        
        let accessToken= response.JSON
        console.log(response);

        let secondCall = `https://api.spotify.com/v1/search?q=${ ingredient1 }&type=track`;
    
        $.ajax({
            url: secondCall,
            method:'GET',
            headers: {
            'Authorization': `Bearer ${ "BQB-Yfm8LFRJLi0qFo4-LtE29yiKFiTAeUA8Nn_-Y2YY9rNQrRCNNbOAdvvdR7wjRCPYE1KiCQAopiw1jk4" }`
            }
                
       }).then(function(response) {
        $('#track-view').html(`<h1>${ response.tracks.items[0].name }</h1><h2>${response.tracks.items[0].artists[0].name}</h2><button>${ response.tracks.items[0].external_urls.spotify}, ${}<button>`);
        //let trackContainer = $('<div class="tracks">');
        //let track1Name = $('<h1>').text(response.tracks.items[0].name);
        //let track1Link = $('<button>').text(`test: ${response.tracks.items[0].external_urls}`);
        //trackContainer.append(track1Name);
        //$('#track-view').prepend(trackContainer);
        console.log(response.tracks.items[0]);
        });
    });
});    

//limit10

// let thirdCall = `https://api.spotify.com/v1/tracks/{id}`
//$.ajax({
   // url: thirdCall,
   // method: "GET",
    //headers: {
        //'Authorization': `Bearer ${token}`
 //  },

//}).then(function (response) {
//})

//function renderButtons() {
    //$("#track-view").empty();
    //for (let i = 0; i < tracks.length; i++) {
       // let a = $("<button>");
        //a.addClass("track");
        //a.attr("data-name", tracks[i]);
       // a.text(tracks[i]);
        //$("#buttons-view").append(a);
    //}
//}

//$("#choose-track").on("click", function (event) {
    //event.preventDefault();
   // let track = $("#track-choice").val().trim();
   // tracks.push(track);
   // renderButtons();

    //displayIngredientTracks(ingredient1);
//});

//$(document).on("click", ".track", function (event) {
 //   event.preventDefault();
 //   let track = $(this).attr("data-name");
 //   console.log(track);
 //   displayIngredientTracks(track);

//});