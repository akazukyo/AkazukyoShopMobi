var iconContact = document.querySelector(".contact .fa-plus");
var iconFB = document.querySelector(".contact .fa-facebook");
var iconYT = document.querySelector(".contact .fa-youtube");
var iconTikTok = document.querySelector(".contact .fa-tiktok");
var iconInstagram = document.querySelector(".contact .fa-instagram");
var contactElement = document.querySelector(".contact");
var contactExpanded = false;
const contact = document.querySelector(".contact");

function addMultipleEventListener(element, events, handler) {
  events.forEach((e) => element.addEventListener(e, handler));
}

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
  contact.classList.add("show");
  showContact();
  contactExpanded = true;
}

function collapseContact() {
  contact.classList.remove("show");
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
  iconTikTok.classList.add("hide");
  iconTikTok.classList.remove("show");
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
  iconTikTok.classList.add("show");
  iconTikTok.classList.remove("hide");
  iconInstagram.classList.add("show");
  iconInstagram.classList.remove("hide");
}

// ================================================================================

let isDragging = false;
let initialX, initialY;
let offsetX, offsetY;

contact.addEventListener("touchstart", (e) => {
  isDragging = true;
  const touch = e.touches[0];
  initialX = touch.clientX;
  initialY = touch.clientY;
  offsetX = contact.getBoundingClientRect().right - initialX;
  offsetY = contact.getBoundingClientRect().bottom - initialY;
  // disableScroll();
});

document.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  window.sco;
  const touch = e.touches[0];
  const x = touch.clientX + offsetX;
  const y = touch.clientY + offsetY;

  contact.style.right = window.innerWidth - x + "px";
  contact.style.bottom = window.innerHeight - y + "px";
  // disableScroll();
  document.body.style.touchAction = "none";
});

document.addEventListener("touchend", () => {
  isDragging = false;
  document.body.style.touchAction = "auto";
  // enableScroll();
});

function disableScroll() {
  document.addEventListener("scroll", preventDefault);
}

function enableScroll() {
  document.removeEventListener("scroll", preventDefault);
}

function preventDefault(e) {
  e.preventDefault();
}
