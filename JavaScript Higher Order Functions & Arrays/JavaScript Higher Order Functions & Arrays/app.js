//values used in all these concepts//

const companies = [
  { name: "f9construction", category: "construction", start: 2016, end: 2030 },
  { name: "Slake", category: "mineral water", start: 2009, end: 2017 },
  { name: "PrintEase", category: "Printing", start: 2019, end: 2035 },
  { name: "Rockout", category: "clothing", start: 2019, end: 2025 },
  { name: "Ore", category: "mineral water", start: 2016, end: 2039 }
];

const age = [12, 53, 24, 43, 2, 42, 1, 34, 56, 46, 65, 98, 76];

//JavaScript Higher Order Functions & Arrays//

//forEach//

companies.forEach(function(company) {
  console.log(company);
});

//or

companies.forEach(company => console.log(company));

//filter//

//example 1
const canDrink = age.filter(function(age) {
  if (age >= 21) {
    return true;
  }
});
console.log(canDrink);

//or

const canFood = age.filter(age => age >= 21);
console.log(canFood);

//example 2
const mineralWater = companies.filter(function(company) {
  if (company.category === "mineral water") {
    return true;
  }
});
console.log(mineralWater);

//or

const mineralWaterCompany = companies.filter(
  company => company.category === "mineral water"
);

console.log(mineralWaterCompany);

//example 3

//getting 2010-2020 inbetween starting companies.

const company2010 = companies.filter(
  company => company.start >= 2010 && company.start <= 2020
);
console.log(company2010);

//map//

//example 1

const companyName = companies.map(function(company) {
  return company.name;
});
console.log(companyName);

//example 2

const testMap = companies.map(
  company => `${company.name} [${company.start}] - ${company.end}]`
);
console.log(testMap);

//example 3 : square rot of age array and multiplied it by 2.

const random = [1, 2, 3];
const squaredAges = random
  .map(random => Math.sqrt(random))
  .map(random => random * 2);
console.log(squaredAges);

//example 4 : if We try to use it like filter. Then it will return true of false.

const random1 = random.map(random => random < 2);
console.log(random1);

//sort//

// When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

// If the result is negative a is sorted before b.

// If the result is positive b is sorted before a.

// If the result is 0 no changes are done with the sort order of the two values.

// Example:

// The compare function compares all the values in the array, two values at a time (a, b).

// When comparing 40 and 100, the sort() method calls the compare function(40, 100).

// The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

// You can use this code snippet to experiment with numerically and alphabetically sorting:

//example 1 : Ascending order.

const AscendingAges = age.sort((a, b) => a - b);
console.log(AscendingAges);

//example 2 : Descending Order.

const DescendingAges = age.sort((a, b) => b - a);
console.log(DescendingAges);

//reduce//

//example 1 : total the ages in another variable initialized to 0.

const totalAges = age.reduce((total, age) => total + age, 0);
console.log(totalAges);

//example 2 : Sum all the companies duration frm start to end.

const companyTotalDuration = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);

console.log(companyTotalDuration);

//Combined example of all//

const testMarks = [12, 12, 24, 54, 65, 34, 65, 67, 43, 21, 9, 78];

const combined = testMarks
  .map(combine => combine * 2)
  .filter(combine => combine >= 30)
  .sort((a, b) => a - b)
  .reduce((total, combine) => total + combine, 0);

console.log(combined);

// Summary //

// forEach = simple used to iterate through the array.
// filter = checks the condition if its true then returns the value in the assigned variable(array).
// map = applies the condition. If we apply it like filter then it will return true or false but not the value.
// sort = sorts the array.
// reduce = helps doing sum of all the values inside an array.

/////////////////////////Thanks for viewing my Repository//////////////////////////////////

// Explained with love by IBAD//
