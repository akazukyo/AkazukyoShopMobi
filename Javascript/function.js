// var show = false;
// var bolshowFind = false;
// var content = document.querySelector(".content");
// var nav_menu_list = document.querySelector(".nav-menu-list");
// var nav_logo_find = document.querySelector(".nav-logo.find");

// var nav_logo_find_form = document.querySelector(".nav-logo.find + form");

// var inputElement = document.querySelector(".inputFind");
// var ulElement = document.querySelector(".test");
// var liElements = ulElement.querySelectorAll("li");
// var numberOfLiElements = liElements.length;

// function showMenu() {
//   if (!show) {
//     nav_menu_list.style.display = "block";
//     show = true;
//     var totalAnimationTime = 1000;
//     var timeDelay = numberOfLiElements / totalAnimationTime;
//     for (var i = 0; i < numberOfLiElements; i++) {
//       liElements[i].style.animationDelay = timeDelay + "s";
//       timeDelay += timeDelay;
//     }
//   } else {
//     nav_menu_list.style.display = "none";
//     show = false;
//   }
// }

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

// function find() {
//   nav_logo_find.addEventListener("touchstart", function (event) {
//     if (nav_logo_find.contains(event.target) && !bolshowFind) {
//       nav_logo_find_form.style.display = "flex";
//       setTimeout(function () {
//         inputElement.style.width = 200 + "px";
//         inputElement.focus();
//       }, 300);

//       inputElement.style.animation = "ani_showFind";
//       inputElement.style.animationDuration = 0.3 + "s";
//     }
//   });

//   content.addEventListener("touchstart", function (event) {
//     if (event.target.className == "content") {
//       bolshowFind = true;
//     }
//     if (bolshowFind) {
//       setTimeout(function () {
//         inputElement.style.width = 0 + "px";
//         nav_logo_find_form.style.display = "none";
//         bolshowFind = false;
//       }, 300);
//       inputElement.style.animation = "ani_showFindClose";
//       inputElement.style.animationDuration = 0.3 + "s";
//     }
//   });
// }

var show = false;
var bolshowFind = false;
var content = document.querySelector(".content");
var nav_menu_list = document.querySelector(".nav-menu-list");
var nav_logo_find = document.querySelector(".nav-logo.find");
var nav_logo_find_form = document.querySelector(".nav-logo.find + form");
var inputElement = document.querySelector(".inputFind");
var ulElement = document.querySelector(".test");
var liElements = ulElement.querySelectorAll("li");
var numberOfLiElements = liElements.length;

function showMenu() {
  show = !show;
  nav_menu_list.style.display = show ? "block" : "none";

  if (show) {
    var totalAnimationTime = 1000;
    var timeDelay = numberOfLiElements / totalAnimationTime;
    for (var i = 0; i < numberOfLiElements; i++) {
      liElements[i].style.animationDelay = timeDelay + "s";
      timeDelay += timeDelay;
    }
  }
}

function showFind() {
  bolshowFind = !bolshowFind;
  nav_logo_find_form.style.display = bolshowFind ? "flex" : "none";

  if (bolshowFind) {
    setTimeout(function () {
      inputElement.style.width = 200 + "px";
      inputElement.focus();
    }, 300);

    inputElement.style.animation = "ani_showFind";
    inputElement.style.animationDuration = 0.3 + "s";
  } else {
    setTimeout(function () {
      inputElement.style.width = 0 + "px";
    }, 300);

    inputElement.style.animation = "ani_showFindClose";
    inputElement.style.animationDuration = 0.3 + "s";
  }
}

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

  content.addEventListener("touchstart", function (event) {
    if (event.target.className == "content") {
      bolshowFind = true;
      setTimeout(function () {
        inputElement.style.width = 0 + "px";
        nav_logo_find_form.style.display = "none";
      }, 300);

      inputElement.style.animation = "ani_showFindClose";
      inputElement.style.animationDuration = 0.3 + "s";
    }
  });
}
