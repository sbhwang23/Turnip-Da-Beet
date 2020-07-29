let client_id = "67da0e797c71476a92b66060037abb0c";
let client_secret = "1825c9d95ef44bce95ba85bdc50c0c5e";
let initialCall = "https://accounts.spotify.com/api/token";
let secondCall = "";

$.ajax({
    url: initialCall,
    method: "POST",
    headers: {
        'Authorization': 'Basic NjdkYTBlNzk3YzcxNDc2YTkyYjY2MDYwMDM3YWJiMGM6MTgyNWM5ZDk1ZWY0NGJjZTk1YmE4NWJkYzUwYzBjNWU=',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: 'grant_type=client_credentials' 

}).then(function (response) {
    
    //let token = response.JSON

    console.log(response);

//     $.ajax({
//         url: secondCall,
//         method:"GET",
//         headers: {
//             'Authorization': `Bearer ${ token }`
//         }
//     }).then(function (response) {

//        console.log(response);
//     })
});