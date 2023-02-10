

   $(document).ready(function () {
   // let username = JSON.parse(sessionStorage.getItem("username"));
   // const id = '63e4f2b362144c6900016ceb'

// retrieving id from current session login
let id = JSON.parse(sessionStorage.getItem("id"));
   $(document).ready(function () {

   $(".restart1").on("click", function(e) {
   e.preventDefault();
   let score = JSON.parse(sessionStorage.getItem("score"));
   let id = JSON.parse(sessionStorage.getItem("id"));
   const APIKEY = "63b64979969f06502871aa45";
   // updating points
   score = score * 10;
   let jsondata = {"score": score};
   let settings = {  "async": true,
     "crossDomain": true,
     "url": `https://mtinteractivedev-900a.restdb.io/rest/contact/${id}`,
      "method": "PATCH",
      "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
         "processData": false,
          "data": JSON.stringify(jsondata)
         }
         console.log("goes here", score);
         
  
      
  $.ajax(settings).done(function (response) {
   console.log(response);
  })
   })
   
});
      
})   
    
    
    