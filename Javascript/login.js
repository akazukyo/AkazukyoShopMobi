showPass = document.querySelector(".show-pass");
inputPassword = document.getElementById("password");
test2 = document.querySelector(".field-pass:first-child");

showPass.addEventListener("click", function (e) {
  if (inputPassword.type == "password") {
    inputPassword.type = "text";
  } else {
    inputPassword.type = "password";
  }
});
