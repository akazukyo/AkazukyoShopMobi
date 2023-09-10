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
var iconContact = document.querySelector(".contact .fa-plus");
var iconFB = document.querySelector(".contact .fa-facebook");
var iconYT = document.querySelector(".contact .fa-youtube");
var iconTiktok = document.querySelector(".contact .fa-tiktok");
var iconInstagram = document.querySelector(".contact .fa-instagram");
var contactElement = document.querySelector(".contact");
var contactExpanded = false;

function addMultipleEventListener(element, events, handler) {
  events.forEach((e) => element.addEventListener(e, handler));
}
// addMultipleEventListener(
//   contactElement,
//   ["click", "touchmove"],

//   function (event) {
//     if (!contactExpanded) {
//       expandContact();
//     } else {
//       collapseContact();
//     }
//   }
// );

contactElement.addEventListener("click", function (event) {
  if (!contactExpanded) {
    expandContact();
  } else {
    collapseContact();
  }
});

addMultipleEventListener(document, ["touchmove", "click"], function (e) {
  if (e.target.className != "fa-solid fa-plus fa-2x hide" && contactExpanded) {
    collapseContact();
  }
});

function expandContact() {
  var contact = document.querySelector(".contact");
  contact.style.display = "flex";
  contact.style.flexDirection = "column";
  contact.style.overflowY = "auto";
  contact.style.animation = "test";
  contact.style.animationDuration = "0.3s";
  contact.style.animationFillMode = "forwards";
  contact.focus();
  showContact();
  contactExpanded = true;
}

function collapseContact() {
  var contact = document.querySelector(".contact");
  contact.style.animation = "test2";
  contact.style.animationDuration = "0.3s";
  contact.style.flexDirection = "column";
  contact.style.overflowY = "auto";
  contact.style.animationFillMode = "forwards";
  hideContact();
  contactExpanded = false;
}

function hideContact() {
  iconContact.classList.add("show");
  iconContact.classList.remove("hide");
  iconFB.classList.add("hide");
  iconFB.classList.remove("show");
  iconYT.classList.add("hide");
  iconYT.classList.remove("show");
  iconTiktok.classList.add("hide");
  iconTiktok.classList.remove("show");
  iconInstagram.classList.add("hide");
  iconInstagram.classList.remove("show");
}

function showContact() {
  iconContact.classList.remove("show");
  iconContact.classList.add("hide");
  iconFB.classList.add("show");
  iconFB.classList.remove("hide");
  iconYT.classList.add("show");
  iconYT.classList.remove("hide");
  iconTiktok.classList.add("show");
  iconTiktok.classList.remove("hide");
  iconInstagram.classList.add("show");
  iconInstagram.classList.remove("hide");
}

var x = null;
var y = null;
// onMouseUpdate();
// document.addEventListener("mousemove", onMouseUpdate, false);
// document.addEventListener("mouseenter", onMouseUpdate, false);

// function onMouseUpdate(e) {
//   x = e.pageX;
//   y = e.pageY;
//   console.log(x, y);
// }

// function getMouseX() {
//   return x;
// }

// function getMouseY() {
//   return y;
// }
// var boolMove = false;
// var x = 0;
// var y = 0;
// var xOther = 0;
// var yOther = 0;

// updatePosition();
// function updatePosition() {
//   document.querySelector(".dot").addEventListener("mousedown", function (e) {
//     if (e.target.className == "dot") {
//       boolMove = true;
//     }
//   });

//   addMultipleEventListener(document, ["mousemove", "mouseup"], test);
//   requestAnimationFrame(test);
// }

// function test(e) {
//   if (boolMove) {
//     console.log("alo");
//     x = e.clientX;
//     y = e.clientY;
//     keyframesRule.
//     if ((boolMove && xOther != x) || yOther != y) {
//       xOther = x;
//       yOther = y;
//     }
//     document.querySelector(".dot").style.left = xOther - 50 + "px";
//     document.querySelector(".dot").style.top = yOther - 50 + "px";
//   }
// }

// var styleSheet = document.styleSheets[0];

// var keyframesRule = `@keyframes testDot {
//   0% { left: 0px; top: 300px; }
//   100% { left: 0px; top:300px; }
// }`;

// styleSheet.insertRule(keyframesRule, styleSheet.cssRules.length);

// script.js
let isDragging = false;
let offsetX, offsetY;

const draggableElement = document.querySelector(".dot");

draggableElement.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - draggableElement.getBoundingClientRect().left;
  offsetY = e.clientY - draggableElement.getBoundingClientRect().top;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const x = e.clientX - offsetX;
  const y = e.clientY - offsetY;

  draggableElement.style.left = x + "px";
  draggableElement.style.top = y + "px";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

draggableElement.addEventListener("touchstart", (e) => {
  isDragging = true;
  const touch = e.touches[0];
  offsetX = touch.clientX - draggableElement.getBoundingClientRect().left;
  offsetY = touch.clientY - draggableElement.getBoundingClientRect().top;
});

document.addEventListener("touchmove", (e) => {
  if (!isDragging) return;

  const touch = e.touches[0];
  const x = touch.clientX - offsetX;
  const y = touch.clientY - offsetY;

  draggableElement.style.left = x + "px";
  draggableElement.style.top = y + "px";
});

document.addEventListener("touchend", () => {
  isDragging = false;
});
