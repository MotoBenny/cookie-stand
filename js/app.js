'use strict';

/*

Within your javascript file (example: app.js), create separate JS object literals for each shop location that outputs the following to the sales.html file:

Stores the min/max hourly customers, and the average cookies per customer, in object properties
Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
Store the results for each location in a separate array… perhaps as a property of the object representing that location
Display the values of each array as unordered lists in the browser
Calculating the sum of these hourly totals; your output for each location should look like this:

Seattle

6am: 16 cookies
7am: 20 cookies
8am: 35 cookies
9am: 48 cookies
10am: 56 cookies
11am: 77 cookies
12pm: 93 cookies
1pm: 144 cookies
2pm: 119 cookies
3pm: 84 cookies
4pm: 61 cookies
5pm: 23 cookies
6pm: 42 cookies
7pm: 57 cookies
Total: 875 cookies
Display the lists on sales.html. We will be adding features to this application and working with its layout in the upcoming labs.

*/

function randPerHour(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let test = randPerHour(23,65);
console.log(test)

// object stores the min/max hourly customers, and the average cookies per customer as properties.
let seattle = {
  minCustHourly: 23,
  maxCustHourly: 65,
  aveCookiePer: 6.3,
  custPerHour: 0,
  getCustPerHour: randPerHour(minCustHourly,maxCustHourly) {
    this.custPerHour = getCustPerHour;
  }
}

// seattle.getCustPerHour();

// console.log(seattle)
