var show = false;
var bolshowFind = false;

var nav_menu_list = document.querySelector(".nav-menu-list");
var nav_logo_find = document.querySelector(".nav-logo.find");

var nav_logo_find_form = document.querySelector(".nav-logo.find + form");

var inputElement = document.querySelector(".inputFind");
var ulElement = document.querySelector(".test");
var liElements = ulElement.querySelectorAll("li");
var numberOfLiElements = liElements.length;

function showMenu() {
  if (!show) {
    nav_menu_list.style.display = "block";
    show = true;
    var totalAnimationTime = 1000;
    var timeDelay = numberOfLiElements / totalAnimationTime;
    for (var i = 0; i < numberOfLiElements; i++) {
      liElements[i].style.animationDelay = timeDelay + "s";
      timeDelay += timeDelay;
    }
  } else {
    nav_menu_list.style.display = "none";
    show = false;
  }
}

// function showFind() {
//   if (!bolshowFind) {
//     nav_logo_find_form.style.display = "flex";
//     setTimeout(function () {
//       inputElement.style.width = 200 + "px";
//       bolshowFind = true;
//     }, 300);

//     inputElement.style.animation = "ani_showFind";
//     inputElement.style.animationDuration = 0.3 + "s";
//   } else {
//     setTimeout(function () {
//       inputElement.style.width = 0 + "px";
//       nav_logo_find_form.style.display = "none";
//       bolshowFind = false;
//     }, 300);
//     inputElement.style.animation = "ani_showFindClose";
//     inputElement.style.animationDuration = 0.3 + "s";
//   }
// }

find();

function find() {
  nav_logo_find.addEventListener("touchstart", function (event) {
    if (nav_logo_find.contains(event.target) && !bolshowFind) {
      nav_logo_find_form.style.display = "flex";
      setTimeout(function () {
        inputElement.style.width = 200 + "px";
        inputElement.focus();
      }, 300);

      inputElement.style.animation = "ani_showFind";
      inputElement.style.animationDuration = 0.3 + "s";
    }
  });

  inputElement.addEventListener("touchstart", function (event) {
    console.log(event.target.id != "inputFind");
    if (event.target.id != "inputFind") {
      bolshowFind = true;
    }
    if (bolshowFind) {
      setTimeout(function () {
        inputElement.style.width = 0 + "px";
        nav_logo_find_form.style.display = "none";
        bolshowFind = false;
      }, 300);
      inputElement.style.animation = "ani_showFindClose";
      inputElement.style.animationDuration = 0.3 + "s";
    }
  });
}
