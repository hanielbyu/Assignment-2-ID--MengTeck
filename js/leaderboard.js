
$(document).ready(function() {
    const APIKEY = "63b64979969f06502871aa45";
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://mtinteractivedev-900a.restdb.io/rest/contact",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        }
      }
      
      $.ajax(settings).done(function (response) {
        content = `${content}<tr id='${response[i]._id}'><td>${response[i].name}</td>
        <td>${response[i].score}</td>`

        $("#table tbody").html(content);
      });
})