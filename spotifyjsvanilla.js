let ingredient1 = "carrot"
//let indgredient2 = "" &20${ ingredient2 }
//let ingredient3 = "" &20${ ingredient3 }
let secondCall = `https://api.spotify.com/v1/search?q=${ ingredient1 }&type=playlist, track`;

const grabPlaylist = (function() {
    const clientId = '67da0e797c71476a92b66060037abb0c';
    const clientSecret = '1825c9d95ef44bce95ba85bdc50c0c5e';

    const getToken = async () => {
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlendcoded',
                'Authorization' : 'Basic' + btoa(clientId + ':' + clientSecret)
            }, 
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    }

    const getTrack = async (token) => {

        const limit = 10;
        const result = await fetch(`https://api.spotify.com/v1/search?q=${ ingredient1 }&type=track?limit=$[limit]`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer' + token}
        });

        const data = await result.json();
        console.log(response.JSON)
    }
    return {
        getToken() {
            return getToken();
        },
        getTrack(token) {
            return getTracks(token);
        }
        
    }
})();
