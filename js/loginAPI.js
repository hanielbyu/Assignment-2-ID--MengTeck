const submit = document.getElementById('submit');

$(document).ready(function() {
  const APIKEY = "63b64979969f06502871aa45";
  $('.successfulmsg').hide();
  // $('#loadingbar').hide();
  $("#submit").on("click", function(e) {
    e.preventDefault();

    const username = $("#username").val();
    const password = $("#password").val();

    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://mtinteractivedev-900a.restdb.io/rest/contact?max=2",
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
      
      if (username === usernameValue && password === passwordValue) {
        $('.successfulmsg').show();
        setTimeout(function () {
          $(".animation").hide();
        }, 5000);
        $(".name").text("Welcome " + usernameValue);
        console.log(account);
        
      }
      else if (response.username != username || response.password != password){
        $('.errormsg').text("Username or password is incorrect");
      }
      else if (usernameValue === "" || usernameValue === "") {
        $('.errormsg').text("Username or password is empty");
      }
    
  });
});
})	
})
