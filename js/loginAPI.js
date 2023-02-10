const submit = document.getElementById('submit');
// login validation to retrieve user data from restdb
$(document).ready(function() {
  const APIKEY = "63b64979969f06502871aa45";
  $('.successfulmsg').hide();
  $('#loadingbar').hide();
  $(".login").on("click", function(e) {
  e.preventDefault();

    const username = $("#username").val();
    const password = $("#password").val();

    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://mtinteractivedev-900a.restdb.io/rest/contact",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,	
        "cache-control": "no-cache"
      },
      "beforeSend": function(){
        if (username === "" || password === "") {
          $('.errormsg').text("Fields cannot be left blank");
        }
        else {
          $('#loadingbar').show();
          setTimeout(function () {
            $(".animation").hide();
          }, 1000);
        }
        $("#form").trigger("reset");
      }
    };

    $.ajax(settings).done(function (response) {
      $('#loadingbar').hide();
      response.map(accinfo => {
        // retrieve to check user input matches data in database
        let usernameValue = accinfo.username;
        let passwordValue =accinfo.password;
        // retrieve id from database for another use in the website
        let id = accinfo._id;
      // validation for password login
      if (username === usernameValue && password === passwordValue) {
        $('.successfulmsg').show();
        setTimeout(function () {
          $(".animation").hide();
        }, 5000);
        $(".name").text("Welcome " + usernameValue);
        sessionStorage.setItem("id", JSON.stringify(id));

        //set item to able to access on other pages
        sessionStorage.setItem("id", JSON.stringify(id));
        sessionStorage.setItem("username", JSON.stringify(usernameValue))
        console.log(id)
      }
      else if (username !== usernameValue || password !== passwordValue){
        $('.errormsg').text("*Username or password is incorrect*");
      }

  });
});
});	
});
