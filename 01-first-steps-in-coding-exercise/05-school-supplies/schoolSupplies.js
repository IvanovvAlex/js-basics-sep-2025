function schoolSuppliesCalculator(pens, markers, cleaner, discountPercent) {
  let pensPrice = pens * 5.8;
  let markersPrice = markers * 7.2;
  let cleanerPrice = cleaner * 1.2;
  let totalPrice = pensPrice + markersPrice + cleanerPrice;
  let discount = totalPrice * (discountPercent / 100);
  let finalPrice = totalPrice - discount;

  console.log(finalPrice);
}

schoolSuppliesCalculator(2, 3, 4, 25);
schoolSuppliesCalculator(4, 2, 5, 13);
