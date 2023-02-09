//[STEP 0]: Make sure our document is A-OK
$(document).ready(function () {
  //what kind of interface we want at the start 
  const APIKEY = "63e4f31c478852088da67f37";
  $('.successfulmsg').hide();
  //[STEP 1]: Create our submit form listener
  $("#signup").on("click", function (e) {
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
  
      //[STEP 4]: Create our AJAX settings. Take note of API key
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://interactivedev-a926.restdb.io/rest/contact",
        "method": "POST", //[cher] we will use post to send info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
        "beforeSend": function(){
          if (username === "" || password1 === "" || password2 == "" || email === "") {
            $('.errormsg').text("Fields cannot be left blank");
          }
          //@TODO use loading bar instead
          //disable our button or show loading bar
          //clear our form using the form id and triggering it's reset feature
          $("#form").trigger("reset");
        }
      }
      $.ajax(settings).done(function (response) {
        console.log(response);
        $("#submit").prop( "disabled", false);
        $('.successfulmsg').show();
        $(".animation").show();
        setTimeout(function () {
          $(".animation").hide();
        }, 5000)
      });

  });
})
  
  
  
  