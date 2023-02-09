
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
        limit = 3;
        let content = "";
        for (var i = 0; i < response.length && i < limit; i++) {  
          //[METHOD 2]
          //using our template literal method using backticks
          //take note that we can't use += for template literal strings
          //we use ${content} because -> content += content 
          //we want to add on previous content at the same time
          content = `${content}<tr id='${response[i]._id}'><td>${ i + 1}</td><td>${response[i].username}</td>
          <td>${response[i].score}</td>`;
        }
        $("#leaderboard-list tbody").html(content);
      
      });
      
})