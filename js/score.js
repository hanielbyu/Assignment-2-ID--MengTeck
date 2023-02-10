// retrieving score from session storage to patch score 
let score = JSON.parse(sessionStorage.getItem("score"));

   $(document).ready(function () {
   // let username = JSON.parse(sessionStorage.getItem("username"));
   // const id = '63e4f2b362144c6900016ceb'
   score = score * 10;

// retrieving id from current session login
let id = JSON.parse(sessionStorage.getItem("id"));
console.log(id)
   $(document).ready(function () {

   $(".restart").on("click", function(e) {
   e.preventDefault();
   let id = JSON.parse(sessionStorage.getItem("id"));
   const APIKEY = "63e4f31c478852088da67f37";
   // updating points
   let jsondata = {"score": score};
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
  
      
  $.ajax(settings).done(function (response) {
   console.log(response);
  })
   })
   
});
      
})   
    
    
    