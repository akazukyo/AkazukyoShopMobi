var show = false;

var bolshowFind = false;
var body = document.querySelectorAll("body");
var content = document.querySelector(".content");
var nav_menu_list = document.querySelector(".nav-menu-list");
var nav_logo_find = document.querySelector(".nav-logo.find");

var nav_logo_find_form = document.querySelector(".nav-logo.find + form");

var inputElement = document.querySelector(".inputFind");
var ulElement = document.querySelector(".test");
var liElements = ulElement.querySelectorAll("li");
var numberOfLiElements = liElements.length;

find();

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

function showFind() {
  if (!bolshowFind) {
    nav_logo_find_form.style.display = "flex";
    setTimeout(function () {
      inputElement.style.width = "180px";
      bolshowFind = true;
    }, 300);

    inputElement.style.animation = "ani_showFind";
  } else {
    setTimeout(function () {
      inputElement.style.width = "0px";
      nav_logo_find_form.style.display = "none";
      bolshowFind = false;
    }, 300);
    inputElement.style.animation = "ani_showFindClose";
  }
}

function find() {
  nav_logo_find.addEventListener("touchstart", function (event) {
    if (nav_logo_find.contains(event.target) && !bolshowFind) {
      nav_logo_find_form.style.display = "flex";
      setTimeout(function () {
        inputElement.style.width = "180px";
        bolshowFind = true;
      }, 300);
      inputElement.style.animation = "ani_showFind";
      inputElement.style.animationDuration = "310ms";
    }
  });

  if (bolshowFind) {
    inputElement.focus();
  }

  inputElement.addEventListener("blur", function (event) {
    setTimeout(function () {
      inputElement.style.width = "0px";
      nav_logo_find_form.style.display = "none";
      bolshowFind = false;
    }, 300);
    inputElement.style.animation = "ani_showFindClose";
    inputElement.style.animationDuration = "310ms";
  });
}
