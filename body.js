import products from "./data.js";

const container = document.querySelector(".container");

products.forEach((product) => {
  const item = document.createElement("div");
  item.classList.add("item");

  const img = document.createElement("img");
  img.src = product.imageSrc;
  img.alt = "";

  const heartIcon = document.createElement("span");
  heartIcon.innerHTML = '<i class="fa-regular fa-heart"></i>';

  const nameParagraph = document.createElement("p");
  nameParagraph.textContent = product.name;

  const priceParagraph = document.createElement("p");
  priceParagraph.textContent = product.price;

  item.appendChild(img);
  item.appendChild(heartIcon);
  item.appendChild(nameParagraph);
  item.appendChild(priceParagraph);

  container.appendChild(item);
});
