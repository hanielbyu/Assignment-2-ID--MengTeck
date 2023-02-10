// display leaderboard for top 10 highest scores to be retrieved from database
$(document).ready(function() {
    const APIKEY = "63e4f31c478852088da67f37";
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://interactivedev-a926.restdb.io/rest/contact?q={}&sort=score&dir=-1",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        }
      }
      
      $.ajax(settings).done(function (response) {
        limit = 10;
        let content = "";
        for (var i = 0; i < response.length && i < limit; i++) {  
    
          content = `${content}<tr id='${response[i]._id}'><td>${ i + 1}</td><td>${response[i].username}</td>
          <td>${response[i].score}</td>`;
        }
        $("#leaderboard-list tbody").html(content);
      
      });
      
})