showPass = document.querySelector(".show-pass");
inputPassword = document.getElementById("password");
test2 = document.querySelector(".field-pass:first-child");

showPass.addEventListener("click", function (e) {
  if (inputPassword.type == "password") {
    inputPassword.type = "text";
    showPass.children.item(0).classList.add("hide");
    showPass.children.item(1).classList.remove("hide");
  } else {
    inputPassword.type = "password";
    showPass.children.item(0).classList.remove("hide");
    showPass.children.item(1).classList.add("hide");
  }
});
