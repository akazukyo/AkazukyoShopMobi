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
  contact.classList.add("show");
  // contact.style.display = "flex";
  // contact.style.flexDirection = "column";
  // contact.style.overflowY = "auto";
  // contact.style.animation = "test";
  // contact.style.animationDuration = "0.3s";
  // contact.style.animationFillMode = "forwards";
  showContact();
  contactExpanded = true;
}

function collapseContact() {
  var contact = document.querySelector(".contact");
  contact.classList.remove("show");
  // contact.style.animation = "test2";
  // contact.style.animationDuration = "0.3s";
  // contact.style.flexDirection = "column";
  // contact.style.overflowY = "auto";
  // contact.style.animationFillMode = "forwards";
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

// ================================================================================

let isDragging = false;
let initialX, initialY;
let offsetX, offsetY;

const contact = document.querySelector(".contact");

contact.addEventListener("touchstart", (e) => {
  isDragging = true;
  const touch = e.touches[0];
  initialX = touch.clientX;
  initialY = touch.clientY;
  offsetX = contact.getBoundingClientRect().right - initialX;
  offsetY = contact.getBoundingClientRect().bottom - initialY;
});

document.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const touch = e.touches[0];
  const x = touch.clientX + offsetX;
  const y = touch.clientY + offsetY;

  contact.style.right = window.innerWidth - x + "px";
  contact.style.bottom = window.innerHeight - y + "px";
});

document.addEventListener("touchend", () => {
  isDragging = false;
});
