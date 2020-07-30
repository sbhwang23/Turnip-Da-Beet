
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
        let img1 = $('<img>').attr('src', response.tracks.items[0].album.images[2].url);
        let img2 = $('<img>').attr('src', response.tracks.items[1].album.images[2].url);
        let img3 = $('<img>').attr('src', response.tracks.items[2].album.images[2].url);
        let img4 = $('<img>').attr('src', response.tracks.items[3].album.images[2].url);
        let img5 = $('<img>').attr('src', response.tracks.items[4].album.images[2].url);
        let img6 = $('<img>').attr('src', response.tracks.items[5].album.images[2].url);
        let img7 = $('<img>').attr('src', response.tracks.items[6].album.images[2].url);
        let img8 = $('<img>').attr('src', response.tracks.items[7].album.images[2].url);
        let link1 = $('<a>').attr('href', response.tracks.items[1].external_urls.spotify).text("LISTEN");
        //$("#btn1").append(`<div><a href= ${ response.tracks.items[1].external_urls.spotify}/a></div>`);
        $('#btn1').append(link1);
        $('.img1').append(img1);
        $('.img2').append(img2);
        $('.img3').append(img3);
        $('.img4').append(img4);
        $('.img5').append(img5);
        $('.img6').append(img6);
        $('.img7').append(img7);
        $('.img8').append(img8);
        $('.title').append(`<h2> ${ingredient1} PLAYLIST</h2>`)
        $('.track1').append(`<h3>${ response.tracks.items[0].name }</h3><p>${response.tracks.items[0].artists[0].name}</p>`);
        $('.track2').append(`<h3>${ response.tracks.items[1].name }</h3><p>${response.tracks.items[1].artists[0].name}</p>`);
        $('.track3').append(`<h3>${ response.tracks.items[2].name }</h3><p>${response.tracks.items[2].artists[0].name}</p>`);
        $('.track4').append(`<h3>${ response.tracks.items[3].name }</h3><p>${response.tracks.items[3].artists[0].name}</p>`);
        $('.track5').append(`<h3>${ response.tracks.items[4].name }</h3><p>${response.tracks.items[4].artists[0].name}</p>`);
        $('.track6').append(`<h3>${ response.tracks.items[5].name }</h3><p>${response.tracks.items[5].artists[0].name}</p>`);
        $('.track7').append(`<h3>${ response.tracks.items[6].name }</h3><p>${response.tracks.items[6].artists[0].name}</p>`);
        $('.track8').append(`<h3>${ response.tracks.items[7].name }</h3><p>${response.tracks.items[7].artists[0].name}</p>`);
        $('.see-more').append(`<a> SEE MORE ${ response.tracks.href}</a>`);
        //$('#btn1').append(`<a> ${ response.tracks.items[0].external_urls.spotify } </a>`);
        //$('.track2btn').append(`<a>${ response.tracks.items[1].external_urls.spotify }</a>`);
        //$('.track3btn').append(`<a>${ response.tracks.items[2].external_urls.spotify }</a>`);
        //$('.track4btn').append(`<a>${ response.tracks.items[3].external_urls.spotify }</a>`);
        //$('.track5btn').append(`<a>${ response.tracks.items[4].external_urls.spotify }</a>`);
        //$('.track6btn').append(`<a>${ response.tracks.items[5].external_urls.spotify }</a>`);
        //$('.track7btn').append(`<a>${ response.tracks.items[6].external_urls.spotify }</a>`);
       // $('.track8btn').append(`<a>${ response.tracks.items[7].external_urls.spotify }</a>`);
        console.log(response.tracks.items[0].album.images[0].url)
        //let img1 = $('<img>').attr('src', response.tracks.items[0].external_urls.spotify);
        //$('.img1').prepend(img1);
        //let track1btn = $('<a>').attr(`LISTEN ${ response.tracks.items[0].external_urls.spotify}`);
        //let image1 = $('<img>').attr('src', response.tracks.items[0].album.images[0].url);
        //$('#track-view').append(`<a>${ response.tracks.href}</a>`);
        //$('#track-view').append(`<img> 'src'${ response.tracks.items[0].album.images[2] }</h1>
        //let trackContainer = $('<div class="tracks">');
        //let track1Name = $('<h1>').text(response.tracks.items[0].name);
        //let track1Link = $('<a>').text(`test: ${response.tracks.items[0].external_urls}`);
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

//function renderas() {
    //$("#track-view").empty();
    //for (let i = 0; i < tracks.length; i++) {
       // let a = $("<a>");
        //a.addClass("track");
        //a.attr("data-name", tracks[i]);
       // a.text(tracks[i]);
        //$("#as-view").append(a);
    //}
//}

//$("#choose-track").on("click", function (event) {
    //event.preventDefault();
   // let track = $("#track-choice").val().trim();
   // tracks.push(track);
   // renderas();

    //displayIngredientTracks(ingredient1);
//});

//$(document).on("click", ".track", function (event) {
 //   event.preventDefault();
 //   let track = $(this).attr("data-name");
 //   console.log(track);
 //   displayIngredientTracks(track);

//});