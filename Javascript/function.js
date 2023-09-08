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
  console.log(e.target.className);
  if (e.target.className != "fa-solid fa-plus fa-2x hide") {
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
