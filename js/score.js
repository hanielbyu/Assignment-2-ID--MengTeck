let account = JSON.parse(sessionStorage.getItem("Account"));

$(document).ready(function () {
    //what kind of interface we want at the start 
    const APIKEY = "63b64979969f06502871aa45";
    //[STEP 1]: Create our submit form listener
    $("#submit").on("click", function (e) {
      //prevent default action of the button 
      e.preventDefault();
      
        //[STEP 2]: let's retrieve form data
        //for now we assume all information is valid
        //you are to do your own data validation
        let username = $("#username").val();
        let email = $("#email").val();
        let password = $("#password1").val();
    
        //[STEP 3]: get form values when user clicks on send
        //Adapted from restdb api
        let jsondata = {
          "username": username,
          "email": email,
          "password" : password,
          "score" : 0
        };
    
        

        $.ajax(settings).done(function (response) {
          console.log(response);
        });
  
    });
  })
    
    
    
    