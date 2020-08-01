
//let client_id = "67da0e797c71476a92b66060037abb0c";
//let client_secret = "1825c9d95ef44bce95ba85bdc50c0c5e";
let initialCall = "https://accounts.spotify.com/api/token";

//$(document).ready(function() {

    function displayPlaylist(ingredient1) { 

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
    //        console.log(response);

            let secondCall = `https://api.spotify.com/v1/search?q=${ ingredient1 }&type=track&offset=8&limit=50`;
        
            $.ajax({
                url: secondCall,
                method:'GET',
                headers: {
                'Authorization': `Bearer ${ accessToken }`
                }
                    
        }).then(function(response) {
            //let x = Math.floor(Math.random() * 49);
            $('.title').append(`<h2> ${ingredient1} PLAYLIST</h2>`)

            let img1 = $('<img>').attr('src', response.tracks.items[0].album.images[2].url);
            let img2 = $('<img>').attr('src', response.tracks.items[1].album.images[2].url);
            let img3 = $('<img>').attr('src', response.tracks.items[2].album.images[2].url);
            let img4 = $('<img>').attr('src', response.tracks.items[3].album.images[2].url);
            let img5 = $('<img>').attr('src', response.tracks.items[4].album.images[2].url);
            let img6 = $('<img>').attr('src', response.tracks.items[5].album.images[2].url);
            let img7 = $('<img>').attr('src', response.tracks.items[6].album.images[2].url);
            let img8 = $('<img>').attr('src', response.tracks.items[7].album.images[2].url);
            
            let link1 = $('<a>').attr('href', response.tracks.items[0].external_urls.spotify).attr('target', '_blank').text(response.tracks.items[0].name);
            let link2 = $('<a>').attr('href', response.tracks.items[1].external_urls.spotify).attr('target', '_blank').text(response.tracks.items[1].name);
            let link3 = $('<a>').attr('href', response.tracks.items[2].external_urls.spotify).attr('target', '_blank').text(response.tracks.items[2].name);
            let link4 = $('<a>').attr('href', response.tracks.items[3].external_urls.spotify).attr('target', '_blank').text(response.tracks.items[3].name);
            let link5 = $('<a>').attr('href', response.tracks.items[4].external_urls.spotify).attr('target', '_blank').text(response.tracks.items[4].name);
            let link6 = $('<a>').attr('href', response.tracks.items[5].external_urls.spotify).attr('target', '_blank').text(response.tracks.items[5].name);
            let link7 = $('<a>').attr('href', response.tracks.items[6].external_urls.spotify).attr('target', '_blank').text(response.tracks.items[6].name);
            let link8 = $('<a>').attr('href', response.tracks.items[7].external_urls.spotify).attr('target', '_blank').text(response.tracks.items[7].name);
            
            $('.track1').append(img1).append(link1).append(`<p>${response.tracks.items[0].artists[0].name}</p>`);
            $('.track2').append(img2).append(link2).append(`<p>${response.tracks.items[1].artists[0].name}</p>`);
            $('.track3').append(img3).append(link3).append(`<p>${response.tracks.items[2].artists[0].name}</p>`);
            $('.track4').append(img4).append(link4).append(`<p>${response.tracks.items[3].artists[0].name}</p>`);
            $('.track5').append(img5).append(link5).append(`<p>${response.tracks.items[4].artists[0].name}</p>`);
            $('.track6').append(img6).append(link6).append(`<p>${response.tracks.items[5].artists[0].name}</p>`);
            $('.track7').append(img7).append(link7).append(`<p>${response.tracks.items[6].artists[0].name}</p>`);
            $('.track8').append(img8).append(link8).append(`<p>${response.tracks.items[7].artists[0].name}</p>`);
            

            //console.log(response.tracks.items[0].album.images[0].url)
            //console.log(response.tracks);
            });
        });
    }; 


    $("#searchButton").on("click", function (event) {
        event.preventDefault();
        let ingredient1 = $("#userInput").val().trim();
        $('.title').empty();
        for (let i = 1; i < 9; i++) {
            // $(`#btn${ i }`).empty();
            // $(`.img${ i }`).empty();
            $(`.track${ i }`).empty();
        }
        displayPlaylist(ingredient1);
    });

//});