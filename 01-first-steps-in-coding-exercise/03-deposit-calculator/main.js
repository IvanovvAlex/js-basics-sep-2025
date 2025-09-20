function depositCalculator(depositAmount, months, annualInterestRate) {
  let monthlyInterest = (depositAmount * annualInterestRate) / 100 / 12;
  let totalAmount = depositAmount + months * monthlyInterest;

  console.log(totalAmount);
}

depositCalculator(200, 3, 5.7);
depositCalculator(2350, 6, 7);
