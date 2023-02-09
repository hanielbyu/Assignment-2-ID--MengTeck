// updating points to restdb

let score = JSON.parse(sessionStorage.getItem("score"));
let id = JSON.parse(sessionStorage.getItem("id"));
   $(document).ready(function () {
   // let username = JSON.parse(sessionStorage.getItem("username"));
   // const id = '63e4f2b362144c6900016ceb'
   newScore = score * 10
   $(".restart").on("click", function(e) {
   e.preventDefault();
   const APIKEY = "63e4f31c478852088da67f37";
   let jsondata = {"score": newScore};
   let settings = {  "async": true,
     "crossDomain": true,
     "url": `https://interactivedev-a926.restdb.io/rest/contact/${id}`,
      "method": "PATCH",
      "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
         "processData": false,
          "data": JSON.stringify(jsondata)
         }
         console.log("goes here", jsondata);
      
  $.ajax(settings).done(function (response) {
   console.log("helloo" + response);
  })
   })
   
})
      
    
    
    
    