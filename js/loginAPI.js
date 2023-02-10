const submit = document.getElementById('submit');

$(document).ready(function() {
  const APIKEY = "63e4f31c478852088da67f37";
  $('.successfulmsg').hide();
  // $('#loadingbar').hide();
  $(".login").on("click", function(e) {
  e.preventDefault();

    const username = $("#username").val();
    const password = $("#password").val();

    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://interactivedev-a926.restdb.io/rest/contact",
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
      response.map(account => {
        let usernameValue = account.username;
        let passwordValue = account.password;
        let id = account._id;
      
      if (username === usernameValue && password === passwordValue) {
        $('.successfulmsg').show();
        setTimeout(function () {
          $(".animation").hide();
        }, 5000);
        $(".name").text("Welcome " + usernameValue);
        console.log(account);
        sessionStorage.setItem("id", JSON.stringify(id));
      }
      else if (username != usernameValue || password != passwordValue){
        $('.errormsg').text("Username or password is incorrect");
      }

  });
});
});	
});
