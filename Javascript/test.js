var imgClass = document.querySelector("div .image-class");
var listProduct = document.getElementById("listProduct");
var showImg = document.querySelector(".showIMG");
var showAniImg = document.querySelector(".showIMGAnimation");
var animationRun = false;

listProduct.addEventListener("click", function (e) {
  if (
    e.target.id != "listProduct" &&
    showImg.src != e.target.getAttribute("src") &&
    !animationRun
  ) {
    setTimeout(function () {
      showImg.src = e.target.getAttribute("src");
      showAniImg.classList.remove("active");
      animationRun = false;
    }, 1500);
    showAniImg.src = e.target.getAttribute("src");
    showAniImg.classList.add("active");
    animationRun = true;
  }
});
