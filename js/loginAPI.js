const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const submit = document.getElementById('submit');
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};
//[STEP 0]: Make sure our document is A-OK
$(document).ready(function () {
    //what kind of interface we want at the start 
    const APIKEY = "63b64979969f06502871aa45";
    $('.successfulmsg').hide();
    //[STEP 1]: Create our submit form listener
    $("#submit").on("click", function (e) {
      //prevent default action of the button 
      e.preventDefault();
        function getlogininfo() {

          //[STEP 7]: Create our AJAX settings
          let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://interactivedev-adbb.restdb.io/rest/contact",
            "method": "GET", //[cher] we will use GET to retrieve info
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            },
          }
       
        }
        $.ajax(settings).done(function (response) {
          console.log(response);
          if (getlogininfo.username != username || getlogininfo.password != password) {
            setError(submit, "Username or password is invalid")
          }
          else if (getlogininfo.username == username && getlogininfo.password != password) {
            $('.successfulmsg').show();
            $("name").text("Welcome {0}", getlogininfo.username);
            setTimeout(function () {
              $(".animation").hide();
            }, 5000)
          }
        });
        
    });
   
  });