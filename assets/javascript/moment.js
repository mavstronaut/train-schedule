var randomDate = "02/23/1999";
var randomFormat = "MM/DD/YYYY";
var convertedDate = moment(randomDate, randomFormat);

// Using scripts from moment.js write code below to complete each of the following.
// Console.log to confirm the code changes you made worked.

// 1 ...to convert the randomDate into three other date formats
console.log(convertedDate.format("MM/DD/YY"));
console.log(convertedDate.format("MMM Do, YYYY hh:mm:ss"));
console.log(convertedDate.format("X"));
console.log("----------------------------------------");

// 2 ...to determine the time in years, months, days between today and the randomDate
console.log(convertedDate.toNow());
console.log(convertedDate.diff(moment(), "years"));
console.log(convertedDate.diff(moment(), "months"));
console.log(convertedDate.diff(moment(), "days"));
console.log("----------------------------------------");

// 3 ...to determine the number of days between the randomDate and 02/14/2001
var newDate = moment("02/14/2001", randomFormat);
console.log(convertedDate.diff(newDate, "days"));

// 4 ...to convert the randomDate to unix time (be sure to look up what unix time even is!!!)
console.log(convertedDate.format("X"));
console.log("----------------------------------------");

// 5 ...to determine what day of the week and what week of the year this randomDate falls on.
console.log(convertedDate.format("DDD"));
console.log(convertedDate.format("dddd"));