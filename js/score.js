// updating points to restdb
let score = JSON.parse(sessionStorage.getItem("score"));
let username = JSON.parse(sessionStorage.getItem("username"));
$(document).ready(function() {
   
   score = 10;
   $(".restart").on("click", function(e) {
      const APIKEY = "63b64979969f06502871aa45";
   var jsondata = {"score": score};
   var settings = {  "async": true,
     "crossDomain": true,
     "url": `https://mtinteractivedev-900a.restdb.io/rest/contact?q={"username":"${username}"}`,
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
      
    
    
    
    