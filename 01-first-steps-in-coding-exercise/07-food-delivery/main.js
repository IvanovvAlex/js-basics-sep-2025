function foodDeliveryCalculator(chickenMenus, fishMenus, veggieMenus) {
  let chickenPrice = chickenMenus * 10.35;
  let fishPrice = fishMenus * 12.4;
  let veggiePrice = veggieMenus * 8.15;
  let menusTotal = chickenPrice + fishPrice + veggiePrice;
  let dessertPrice = menusTotal * 0.2;
  let deliveryPrice = 2.5;
  let totalPrice = menusTotal + dessertPrice + deliveryPrice;

  console.log(totalPrice);
}

foodDeliveryCalculator(2, 4, 3);
foodDeliveryCalculator(9, 2, 6);
