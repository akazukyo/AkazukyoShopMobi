var show = false;

var boolShowFind = false;
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
  if (!boolShowFind) {
    nav_logo_find_form.style.display = "flex";
    setTimeout(function () {
      inputElement.style.width = "180px";
      boolShowFind = true;
    }, 300);

    inputElement.style.animation = "ani_showFind";
  } else {
    setTimeout(function () {
      inputElement.style.width = "0px";
      nav_logo_find_form.style.display = "none";
      boolShowFind = false;
    }, 300);
    inputElement.style.animation = "ani_showFindClose";
  }
}

function find() {
  nav_logo_find.addEventListener("touchstart", function (event) {
    if (nav_logo_find.contains(event.target) && !boolShowFind) {
      nav_logo_find_form.style.display = "flex";
      setTimeout(function () {
        inputElement.style.width = "180px";
        boolShowFind = true;
      }, 300);
      inputElement.style.animation = "ani_showFind";
      inputElement.style.animationDuration = "310ms";
    }
  });

  inputElement.addEventListener("blur", function (event) {
    setTimeout(function () {
      inputElement.style.width = "0px";
      nav_logo_find_form.style.display = "none";
      boolShowFind = false;
    }, 300);
    inputElement.style.animation = "ani_showFindClose";
    inputElement.style.animationDuration = "310ms";
  });
}

var container = document.querySelector(".container");

var isDragging = false;
var startX = 0;
var scrollLeft = 0;

container.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
  console.log(scrollLeft);
});

container.addEventListener("mouseleave", () => {
  isDragging = false;
});

container.addEventListener("mouseup", () => {
  isDragging = false;
});

container.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  console.log("scroll: " + scrollLeft);
  //console.log(e.pageX); chay xuat phat tu 0 den cuoi trang theo vi tri cua tro chuot
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 2; // Điều chỉnh hệ số 3 để thay đổi tốc độ cuộn
  container.scrollLeft = scrollLeft - walk;
});
