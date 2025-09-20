function readingTimeCalculator(pages, pagesPerHour, days) {
  let totalHours = pages / pagesPerHour;
  let hoursPerDay = totalHours / days;

  console.log(hoursPerDay);
}

readingTimeCalculator(212, 20, 2);
readingTimeCalculator(432, 15, 4);
