// var imgClass = document.querySelector("div .image-class");
// var listProduct = document.getElementById("listProduct");
// var showImg = document.querySelector(".showIMG");
// var showAniImg = document.querySelector(".showIMGAnimation");
// var animationRun = false;

// listProduct.addEventListener("click", function (e) {
//   x = e.pageX;
//   y = e.pageY;
//   offSetX = e.target.getBoundingClientRect().right;
//   offSetY = e.target.getBoundingClientRect().top;
//   console.log(x + ", " + y);
//   if (
//     e.target.id != "listProduct" &&
//     showImg.src != e.target.getAttribute("src") &&
//     !animationRun
//   ) {
//     setTimeout(function () {
//       showImg.src = e.target.getAttribute("src");
//       showAniImg.classList.remove("active");
//       animationRun = false;
//     }, 500);
//     showAniImg.src = e.target.getAttribute("src");
//     showAniImg.classList.add("active");
//     animationRun = true;
//   }
// });

// function createRipple(e) {
//   const button = e.currentTarget;
//   const buttonRect = button.getBoundingClientRect();
//   const diameter = Math.max(button.clientWidth, button.clientHeight);
//   const radius = diameter / 2;

//   const ripple = document.createElement("img");
//   ripple.src =
//     "data:image/jpeg;base64,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";
//   ripple.style.width = ripple.style.height = `${diameter}px`;
//   ripple.style.left = `${e.clientX - buttonRect.left - radius}px`;
//   ripple.style.top = `${e.clientY - buttonRect.top - radius}px`;
//   ripple.classList.add("ripple");
//   button.appendChild(ripple);
// }

// showImg.addEventListener("click", createRipple);

// var hello = document.querySelector(".hello");

// var computedStyle = window.getComputedStyle(hello);
// var displayValue = computedStyle.getPropertyValue("display");

// console.log(displayValue);

// const btnAddList = document.querySelectorAll(".btnAdd");
// const btnSubList = document.querySelectorAll(".btnSub");
// const numList = document.querySelectorAll(".num");
// const checkboxList = document.querySelectorAll(".checkItem");

// checkboxList.forEach((checkbox, index) => {
//   checkbox.addEventListener("change", function () {
//     // Kiểm tra trạng thái check của checkbox
//     if (checkbox.checked) {
//       // Thực hiện các thao tác cập nhật khi checkbox được chọn
//     } else {
//       btnAddList.forEach((btnAdd, index) => {
//         btnAdd.addEventListener("click", function () {});
//       });
//       btnSubList.forEach((btnSub, index) => {
//         btnSub.addEventListener("click", function () {});
//       });
//     }
//   });
// });

const btnAddList = document.querySelectorAll(".btnAdd");
const btnSubList = document.querySelectorAll(".btnSub");
const numList = document.querySelectorAll(".num");
const checkboxList = document.querySelectorAll(".checkItem");

function updateNumber(index, increment) {
  const numElement = numList[index];
  let currentNum = parseInt(numElement.textContent, 10);

  if (increment) {
    currentNum++;
  } else if (currentNum > 1) {
    currentNum--;
  }

  numElement.textContent = currentNum;

  const btnSub = btnSubList[index];
  btnSub.style.backgroundColor = currentNum > 1 ? "#65c18c" : "#ffffff";
}

btnAddList.forEach((btnAdd, index) => {
  btnAdd.addEventListener("click", () => {
    updateNumber(index, true);
  });
});

btnSubList.forEach((btnSub, index) => {
  btnSub.addEventListener("click", () => {
    updateNumber(index, false);
  });
});
