// updating points to restdb
let score = JSON.parse(sessionStorage.getItem("score"));

$(document).ready(function() {
   console.log("HAHAHAHHAHHA1")
   let username = JSON.parse(sessionStorage.getItem("username"));
   score = 10;
   $(".restart").on("click", function(e) {
      const APIKEY = "63b64979969f06502871aa45";
      console.log("HAHAHAHHAHHA")
   let jsondata = {"score": score};
   let settings = {
      "async": true,
      "crossDomain": true,
      "url": `https://interactivedev-a926.restdb.io/rest/contact/${username}`,
      "method": "PUT",
      "headers": {
         "content-type": "application/json",
         "x-apikey": APIKEY,
         "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata)
   }
      
  $.ajax(settings).done(function (response) {
   console.log(response);
  })
   })
   
})
      
    
    
    
    