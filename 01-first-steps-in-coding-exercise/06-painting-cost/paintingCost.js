function paintingCostCalculator(nylon, paint, thinner, hours) {
  let nylonPrice = (nylon + 2) * 1.5;
  let paintPrice = paint * 1.1 * 14.5;
  let thinnerPrice = thinner * 5.0;
  let bagsPrice = 0.4;
  let materialsTotal = nylonPrice + paintPrice + thinnerPrice + bagsPrice;
  let workersCost = materialsTotal * 0.3 * hours;
  let totalCost = materialsTotal + workersCost;

  console.log(totalCost);
}

paintingCostCalculator(10, 11, 4, 8);
paintingCostCalculator(5, 10, 10, 1);
