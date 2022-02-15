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
let cookieList = document.getElementById("cookieList");

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randPerHour(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function cookiesPerHour(custPerHour, aveCookiePer) {
  let cookiesPerHour = custPerHour * aveCookiePer;
  return cookiesPerHour;
}

// object stores the min/max hourly customers, and the average cookies per customer as properties.

/*
Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

i.e create let cookies purchased function that gives the product of custperhour * aveCookiePer DONE

create a function that makes a create a function that calculates the cookies per hour off of the properties inside each object. And iterates through, for each time slot, than totals the number of cookies. This can use a counter for the hours, and after the counter hits a certain number it should total them. Then add that to the array

*/

let seattle = {
  location: 'Seattle',
  minCustHourly: 23,
  maxCustHourly: 65,
  aveCookiePer: 6.3,
  custPerHour: [],
  cookiesSoldPerHour: [],
  totalCookies: 0,
  getCustPerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.custPerHour.push(randPerHour(this.minCustHourly, this.maxCustHourly));
    }
  },
  getCookiesSoldPerHour: function () {
    for (let j = 0; j < storeHours.length; j++) {
      this.cookiesSoldPerHour.push(Math.floor(cookiesPerHour(this.custPerHour[j], this.aveCookiePer)));
    }
  },
  getTotalCookies: function () { //This should total all the cookies sold.
    for (let l = 0; l < storeHours.length; l++) {
      this.totalCookies += this.cookiesSoldPerHour[l];
    }
  }
};

// DOM 

seattle.render = function () {
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = this.location;
  cookieList.appendChild(h2Elem);

  let ulElem = document.createElement('ul');
  cookieList.appendChild(ulElem);
  seattle.getCustPerHour();
  seattle.getCookiesSoldPerHour();
  seattle.getTotalCookies();
  for (let i = 0; i < storeHours.length; i++) {
    let liElem = document.createElement('li');
    liElem.textContent = `${storeHours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
    ulElem.appendChild(liElem);
  }
  let total = document.createElement('li');
  total.textContent = `Total: ${this.totalCookies} cookies`;
  ulElem.appendChild(total);
};

seattle.render();
