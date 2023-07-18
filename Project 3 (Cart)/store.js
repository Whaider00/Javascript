const addToCardAllButtons = document.querySelectorAll(".shop-item-button");

addToCardAllButtons.forEach(function (singleAddToCartBtn) {
  singleAddToCartBtn.addEventListener("click", addtoCardBtnHandler);
});

function addtoCardBtnHandler(event) {
  event.preventDefault();
  const currentElement = event.target;
  const mainShopItemDiv = currentElement.parentElement.parentElement;
  //   console.log(mainShopItemDiv, "main shop item div");
  const itemName = mainShopItemDiv.querySelector(".shop-item-title").innerText;
  const itemImage = mainShopItemDiv.querySelector(".shop-item-image").src;
  const itemPrice = mainShopItemDiv.querySelector(".shop-item-price").innerText;
  console.log({ itemName, itemImage, itemPrice }, "item name");
}
