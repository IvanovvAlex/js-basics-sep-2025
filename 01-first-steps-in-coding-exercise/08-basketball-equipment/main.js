function basketballEquipmentCalculator(annualFee) {
  let shoesPrice = annualFee * 0.6;
  let outfitPrice = shoesPrice * 0.8;
  let ballPrice = outfitPrice * 0.25;
  let accessoriesPrice = ballPrice * 0.2;
  let totalCost =
    annualFee + shoesPrice + outfitPrice + ballPrice + accessoriesPrice;

  console.log(totalCost);
}

basketballEquipmentCalculator(365);
basketballEquipmentCalculator(550);
