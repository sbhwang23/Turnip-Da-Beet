
//let client_id = "67da0e797c71476a92b66060037abb0c";
//let client_secret = "1825c9d95ef44bce95ba85bdc50c0c5e";
let initialCall = "https://accounts.spotify.com/api/token";
let ingredient1 = "cinnamon";
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
        
        let accessToken= response.access_token
        console.log(response);

        let secondCall = `https://api.spotify.com/v1/search?q=${ ingredient1 }&type=track&offset=8&limit=8`;
    
        $.ajax({
            url: secondCall,
            method:'GET',
            headers: {
            'Authorization': `Bearer ${ accessToken }`
            }
                
       }).then(function(response) {
        $('.title').html (`<h1> ${ingredient1} PLAYLIST</h1>`)
        $('.track1').html(`<h3>${ response.tracks.items[0].name }</h3><p>${response.tracks.items[0].artists[0].name}</p>`);
        $('.track2').html(`<h3>${ response.tracks.items[1].name }</h3><p>${response.tracks.items[1].artists[0].name}</p>`);
        $('.track3').html(`<h3>${ response.tracks.items[2].name }</h3><p>${response.tracks.items[2].artists[0].name}</p>`);
        $('.track4').html(`<h3>${ response.tracks.items[3].name }</h3><p>${response.tracks.items[3].artists[0].name}</p>`);
        $('.track5').html(`<h3>${ response.tracks.items[4].name }</h3><p>${response.tracks.items[4].artists[0].name}</p>`);
        $('.track6').html(`<h3>${ response.tracks.items[5].name }</h3><p>${response.tracks.items[5].artists[0].name}</p>`);
        $('.track7').html(`<h3>${ response.tracks.items[6].name }</h3><p>${response.tracks.items[6].artists[0].name}</p>`);
        $('.track8').html(`<h3>${ response.tracks.items[7].name }</h3><p>${response.tracks.items[7].artists[0].name}</p>`);
        $('.see-more').html(`<button> SEE MORE ${ response.tracks.href}<button>`);
        $('.track1btn').html(`<button>${ response.tracks.items[0].external_urls.spotify }</button>`);
        $('.track2btn').html(`<button>${ response.tracks.items[1].external_urls.spotify }</button>`);
        $('.track3btn').html(`<button>${ response.tracks.items[2].external_urls.spotify }</button>`);
        $('.track4btn').html(`<button>${ response.tracks.items[3].external_urls.spotify }</button>`);
        $('.track5btn').html(`<button>${ response.tracks.items[4].external_urls.spotify }</button>`);
        $('.track6btn').html(`<button>${ response.tracks.items[5].external_urls.spotify }</button>`);
        $('.track7btn').html(`<button>${ response.tracks.items[6].external_urls.spotify }</button>`);
        $('.track8btn').html(`<button>${ response.tracks.items[7].external_urls.spotify }</button>`);
        //let img1 = $('<img>').attr('src', response.tracks.items[0].external_urls.spotify);
        //$('.img1').prepend(img1);
        //let track1btn = $('<button>').attr(`LISTEN ${ response.tracks.items[0].external_urls.spotify}`);
        //let image1 = $('<img>').attr('src', response.tracks.items[0].album.images[0].url);
        //$('#track-view').html(`<button>${ response.tracks.href}</button>`);
        //$('#track-view').html(`<img> 'src'${ response.tracks.items[0].album.images[2] }</h1>
        //let trackContainer = $('<div class="tracks">');
        //let track1Name = $('<h1>').text(response.tracks.items[0].name);
        //let track1Link = $('<button>').text(`test: ${response.tracks.items[0].external_urls}`);
        //trackContainer.append(track1btn);
        //$('#track-view').prepend(trackContainer);
        console.log(response.tracks);
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