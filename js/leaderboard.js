// display leaderboard for top 10 highest scores to be retrieved from database
$(document).ready(function() {
    const APIKEY = "63b64979969f06502871aa45";
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://mtinteractivedev-900a.restdb.io/rest/contact?q={}&sort=score&dir=-1",
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