var productImgMain = document.querySelector(".product-img-main");
var optionImg = document.querySelector(".product-img-option");
var buttonLeft = document.querySelector(".slide-left-button");
var buttonRight = document.querySelector(".slide-right-button");

var infinityScrollLeft = false;
var infinityScrollRight = false;

// var i = 0;

// // var computedStyle = window.getComputedStyle(
// //   document.querySelector(".product-img-option")
// // );
// // var displayValue = computedStyle.getPropertyValue("width");

// buttonLeft.addEventListener("click", slideToLeft);
// buttonRight.addEventListener("click", slideToRight);

// function slideToLeft() {
//   // if (infinityScrollRight) {
//   //   i = optionImg.children.length - 1;
//   //   infinityScrollRight = false;
//   // }
//   // i--;
//   // if (i < 0) {
//   //   infinityScrollLeft = true;
//   //   if (infinityScrollLeft) {
//   //     optionImg.prepend(optionImg.children.item(optionImg.children.length - 1));
//   //     optionImg.children.item(1).classList.remove("active");
//   //     optionImg.children
//   //       .item(optionImg.children.item(2))
//   //       .classList.add("active");
//   //     productImgMain.children.item(0).src = optionImg.children
//   //       .item(0)
//   //       .getAttribute("src");
//   //     optionImg.scrollLeft -= 100;
//   //   }
//   // } else {
//   //   optionImg.children.item(i + 1).classList.remove("active");
//   //   optionImg.children.item(i).classList.add("active");
//   //   productImgMain.children.item(0).src = optionImg.children
//   //     .item(i)
//   //     .getAttribute("src");
//   //   optionImg.scrollLeft -= 100;
//   // }
//   optionImg.append(optionImg.children.item(0));
//   optionImg.append(optionImg.children.item(1));
//   optionImg.children.item(2).classList.add("active");
//   optionImg.children
//     .item(optionImg.childElementCount - 1)
//     .classList.remove("active");
//   optionImg.scrollLeft -= 200;
// }

// function slideToRight() {
//   // if (infinityScrollLeft) {
//   //   i = 0;
//   //   infinityScrollLeft = false;
//   // }
//   // i++;
//   // if (i >= optionImg.children.length) {
//   //   infinityScrollRight = true;
//   //   {
//   //     optionImg.appendChild(optionImg.children.item(0));
//   //     optionImg.children
//   //       .item(optionImg.children.length - 2)
//   //       .classList.remove("active");
//   //     optionImg.children
//   //       .item(optionImg.children.length - 1)
//   //       .classList.add("active");
//   //     productImgMain.children.item(0).src = optionImg.children
//   //       .item(optionImg.children.length - 1)
//   //       .getAttribute("src");
//   //     optionImg.scrollLeft += 100;
//   //   }
//   // } else {
//   //   optionImg.children.item(i - 1).classList.remove("active");
//   //   optionImg.children.item(i).classList.add("active");
//   //   productImgMain.children.item(0).src = optionImg.children
//   //     .item(i)
//   //     .getAttribute("src");
//   //   optionImg.scrollLeft += 100;
//   // }
//   optionImg.prepend(optionImg.children.item(optionImg.childElementCount - 1));

//   optionImg.scrollLeft += 100;
// }
//===========================================================================//

var scroll = false;
var startX = 0;
var scrollLeft = 0;
var targetImg;
var currentTargetImg;
var previousTargetImg;

optionImg.addEventListener("click", function (e) {
  if (e.target !== optionImg) {
    currentTargetImg = e.target;
    if (currentTargetImg != targetImg) {
      if (previousTargetImg) {
        previousTargetImg.classList.remove("active");
      }
      targetImg = currentTargetImg;
      productImgMain.children.item(0).src = e.target.getAttribute("src");
      targetImg.classList.add("active");
      previousTargetImg = targetImg;
    } else {
      console.log("alo");
    }
  }
});

optionImg.addEventListener("touchdown", function (e) {
  scroll = true;
  startX = e.pageX - optionImg.offsetLeft;
  scrollLeft = optionImg.scrollLeft;
});

optionImg.addEventListener("touchup", function (e) {
  scroll = false;
});

optionImg.addEventListener("touchmove", function (e) {
  if (!scroll) return;
  e.preventDefault();
  //console.log(e.pageX); chay xuat phat tu 0 den cuoi trang theo vi tri cua tro chuot
  const x = e.pageX - optionImg.offsetLeft;
  const walk = (x - startX) * 1; // Điều chỉnh hệ số 3 để thay đổi tốc độ cuộn
  optionImg.scrollLeft = scrollLeft - walk;
  // console.log(optionImg.scrollLeft == optionImg.scrollLeft);
});

// optionImg.addEventListener("scroll", function () {
//   // Lấy danh sách các div con bên trong optionImg
//   var children = Array.from(optionImg.children);

//   // Lấy kích thước của mỗi div con (giả sử chúng có cùng kích thước)
//   var childWidth = children[0].offsetWidth;

//   // Tính toán số lần cuộn cần thiết để di chuyển một div con
//   var scrollPerChild = childWidth;

//   // Tính toán vị trí cuộn hiện tại
//   var currentScroll = this.scrollLeft;

//   // Tính toán chỉ số của div con nên hiển thị
//   var displayIndex = Math.floor(currentScroll / scrollPerChild);

//   // Tạo một mảng mới để sắp xếp lại thứ tự hiển thị của các div con
//   var newOrder = children
//     .slice(displayIndex)
//     .concat(children.slice(0, displayIndex));

//   // Xóa tất cả div con hiện tại
//   while (optionImg.firstChild) {
//     optionImg.removeChild(optionImg.firstChild);
//   }

//   // Thêm lại các div con theo thứ tự mới
//   for (var i = 0; i < newOrder.length; i++) {
//     optionImg.appendChild(newOrder[i]);
//   }

//   // Đặt lại vị trí cuộn về giữa để tạo hiệu ứng vòng lặp
//   this.scrollLeft = this.clientWidth;
// });
