var imgClass = document.querySelector("div .image-class");
var listProduct = document.getElementById("listProduct");
var showImg = document.querySelector(".showIMG");
var showAniImg = document.querySelector(".showIMGAnimation");

listProduct.addEventListener("click", function (e) {
  if (
    e.target.id != "listProduct" &&
    showImg.src != e.target.getAttribute("src")
  ) {
    setTimeout(function () {
      showImg.src = e.target.getAttribute("src");
      showAniImg.classList.remove("active");
    }, 1500);
    showAniImg.src = e.target.getAttribute("src");
    showAniImg.classList.add("active");
  }
});
