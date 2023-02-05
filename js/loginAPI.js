const submit = document.getElementById('submit');

$(document).ready(function() {
  const APIKEY = "63b64979969f06502871aa45";
  $('.successfulmsg').hide();

  $("#submit").on("click", function(e) {
    e.preventDefault();

    const username = $("#username").val();
    const password = $("#password").val();

    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://interactivedev-adbb.restdb.io/rest/contact",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      }
    };

    $.ajax(settings).done(function (response) {
      for (let i = 0; i < response.length; i++) {
      const logininfo = response[i];
      if (logininfo.username === username.value && logininfo.password === password.value) {
      $('.successfulmsg').show();
      $("#name").text("Welcome " + username.value);
      setTimeout(function () {
      $(".animation").hide();
      }, 5000);
      break;
      }
      else {
      setError(submit, "Username or password is invalid");
      }
      }
  });
});
})