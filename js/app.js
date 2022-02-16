'use strict';

let table = document.querySelector('table');

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randPerHour(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function cookiesPerHour(custPerHour, aveCookiePer) {
  let cookiesPerHour = custPerHour * aveCookiePer;
  return cookiesPerHour;
}

let storeLocations = [];


function Location(location, minCustHourly, maxCustHourly, aveCookiePer) {
  this.location = location;
  this.minCustHourly = minCustHourly;
  this.maxCustHourly = maxCustHourly;
  this.aveCookiePer = aveCookiePer;
  this.custPerHour = [];
  this.cookiesSoldPerHour = [];
  this.totalCookies = 0;

  storeLocations.push(this);
}

Location.prototype.getCustPerHour = function () {
  for (let i = 0; i < storeHours.length; i++) {
    this.custPerHour.push(randPerHour(this.minCustHourly, this.maxCustHourly));
  }
};

Location.prototype.getCookiesSoldPerHour = function () {
  for (let j = 0; j < storeHours.length; j++) {
    this.cookiesSoldPerHour.push(Math.floor(cookiesPerHour(this.custPerHour[j], this.aveCookiePer)));
  }
};

Location.prototype.getTotalCookies = function () {
  for (let l = 0; l < storeHours.length; l++) {
    this.totalCookies += this.cookiesSoldPerHour[l];
  }
};

// PERFORM DOM MANIPULATION FOR SEATTLE OBJECT

Location.prototype.renderTable = function () {
  let row1 = document.createElement('tr');
  
  
  table.appendChild(row1);
  for (let i = 0; i < storeHours.length; i++) {
    let content = storeHours[i];
    let hourRow = document.createElement('th');
    hourRow.textContent = content;
    row1.appendChild(hourRow);
    console.log(hourRow);
  }
  let dailyLocTotal = document.createElement('th');
  dailyLocTotal.textContent = "Total Daily";
  row1.append("Total Daily");

  for (let i = 0; i < storeLocations.length; i++) {
    let rows = document.createElement('tr');
    table.append(rows);
  }
  
  //  //this is the content to go inside the TR elem
  //   row1.appendChild(hourRow); // this adds the content inside the <tr>
  //   let td1Elem = document.createElement('td');
  //   //td1Elem.textContent = `${this.}`;
  //   row1.appendChild(td1Elem);
  //   let td2Elem = document.createElement('td');
  //   td2Elem.textContent = 'Good with dogs';
  //   row1.appendChild(td2Elem);
};

// function to call to build each new location with all its data

// how will this function run the methods for the objects to finish populating them?

function buildLoc(location, minCustHourly, maxCustHourly, aveCookiePer) {
  const loc = new Location(location, minCustHourly, maxCustHourly, aveCookiePer); //builds the location object adds to storeLocations array
  loc.getCustPerHour();
  loc.getCookiesSoldPerHour();
  loc.getTotalCookies();
}

//new Location('Seattle', 23, 65, 6.3);

buildLoc('Seattle', 23, 65, 6.3);
buildLoc('Tokyo', 10, 83, 2);
buildLoc

storeLocations[0].renderTable();

// console.log(`this is the location variable ${location}`);
// console.log(`this is the storeLocations Array after constuctor is run ${storeLocations}`);
// console.log(storeLocations.find({ location: location }));
// let something = Array.prototype.indexOf();


// let seattle = {
//   location: 'Seattle',
//   minCustHourly: 23,
//   maxCustHourly: 65,
//   aveCookiePer: 6.3,
//   custPerHour: [],
//   cookiesSoldPerHour: [],
//   totalCookies: 0,
//   getCustPerHour: function () {
//     for (let i = 0; i < storeHours.length; i++) {
//       this.custPerHour.push(randPerHour(this.minCustHourly, this.maxCustHourly));
//     }
//   },
//   getCookiesSoldPerHour: function () {
//     for (let j = 0; j < storeHours.length; j++) {
//       this.cookiesSoldPerHour.push(Math.floor(cookiesPerHour(this.custPerHour[j], this.aveCookiePer)));
//     }
//   },
//   getTotalCookies: function () { //This should total all the cookies sold.
//     for (let l = 0; l < storeHours.length; l++) {
//       this.totalCookies += this.cookiesSoldPerHour[l];
//     }
//   }
// };

// let tokyo = {
//   location: 'Tokyo',
//   minCustHourly: 3,
//   maxCustHourly: 24,
//   aveCookiePer: 1.2,
//   custPerHour: [],
//   cookiesSoldPerHour: [],
//   totalCookies: 0,
//   getCustPerHour: function () {
//     for (let i = 0; i < storeHours.length; i++) {
//       this.custPerHour.push(randPerHour(this.minCustHourly, this.maxCustHourly));
//     }
//   },
//   getCookiesSoldPerHour: function () {
//     for (let j = 0; j < storeHours.length; j++) {
//       this.cookiesSoldPerHour.push(Math.floor(cookiesPerHour(this.custPerHour[j], this.aveCookiePer)));
//     }
//   },
//   getTotalCookies: function () { //This should total all the cookies sold.
//     for (let l = 0; l < storeHours.length; l++) {
//       this.totalCookies += this.cookiesSoldPerHour[l];
//     }
//   }
// };

// let dubai = {
//   location: 'Dubai',
//   minCustHourly: 11,
//   maxCustHourly: 38,
//   aveCookiePer: 3.7,
//   custPerHour: [],
//   cookiesSoldPerHour: [],
//   totalCookies: 0,
//   getCustPerHour: function () {
//     for (let i = 0; i < storeHours.length; i++) {
//       this.custPerHour.push(randPerHour(this.minCustHourly, this.maxCustHourly));
//     }
//   },
//   getCookiesSoldPerHour: function () {
//     for (let j = 0; j < storeHours.length; j++) {
//       this.cookiesSoldPerHour.push(Math.floor(cookiesPerHour(this.custPerHour[j], this.aveCookiePer)));
//     }
//   },
//   getTotalCookies: function () { //This should total all the cookies sold.
//     for (let l = 0; l < storeHours.length; l++) {
//       this.totalCookies += this.cookiesSoldPerHour[l];
//     }
//   }
// };

// let paris = {
//   location: 'Paris',
//   minCustHourly: 20,
//   maxCustHourly: 38,
//   aveCookiePer: 2.3,
//   custPerHour: [],
//   cookiesSoldPerHour: [],
//   totalCookies: 0,
//   getCustPerHour: function () {
//     for (let i = 0; i < storeHours.length; i++) {
//       this.custPerHour.push(randPerHour(this.minCustHourly, this.maxCustHourly));
//     }
//   },
//   getCookiesSoldPerHour: function () {
//     for (let j = 0; j < storeHours.length; j++) {
//       this.cookiesSoldPerHour.push(Math.floor(cookiesPerHour(this.custPerHour[j], this.aveCookiePer)));
//     }
//   },
//   getTotalCookies: function () { //This should total all the cookies sold.
//     for (let l = 0; l < storeHours.length; l++) {
//       this.totalCookies += this.cookiesSoldPerHour[l];
//     }
//   }
// };

// let lima = {
//   location: 'Lima',
//   minCustHourly: 2,
//   maxCustHourly: 16,
//   aveCookiePer: 4.6,
//   custPerHour: [],
//   cookiesSoldPerHour: [],
//   totalCookies: 0,
//   getCustPerHour: function () {
//     for (let i = 0; i < storeHours.length; i++) {
//       this.custPerHour.push(randPerHour(this.minCustHourly, this.maxCustHourly));
//     }
//   },
//   getCookiesSoldPerHour: function () {
//     for (let j = 0; j < storeHours.length; j++) {
//       this.cookiesSoldPerHour.push(Math.floor(cookiesPerHour(this.custPerHour[j], this.aveCookiePer)));
//     }
//   },
//   getTotalCookies: function () { //This should total all the cookies sold.
//     for (let l = 0; l < storeHours.length; l++) {
//       this.totalCookies += this.cookiesSoldPerHour[l];
//     }
//   }
// };

// // DOM

// seattle.render = function () {
//   let h2Elem = document.createElement('h2');
//   h2Elem.textContent = seattle.location;
//   cookieList.appendChild(h2Elem);

//   let ulElem = document.createElement('ul');
//   cookieList.appendChild(ulElem);
//   seattle.getCustPerHour();
//   seattle.getCookiesSoldPerHour();
//   seattle.getTotalCookies();
//   for (let i = 0; i < storeHours.length; i++) {
//     let liElem = document.createElement('li');
//     liElem.textContent = `${storeHours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
//     ulElem.appendChild(liElem);
//   }
//   let total = document.createElement('li');
//   total.textContent = `Total: ${this.totalCookies} cookies`;
//   ulElem.appendChild(total);
// };

// tokyo.render = function () {
//   let h2Elem = document.createElement('h2');
//   h2Elem.textContent = tokyo.location;
//   cookieList.appendChild(h2Elem);

//   let ulElem = document.createElement('ul');
//   cookieList.appendChild(ulElem);
//   tokyo.getCustPerHour();
//   tokyo.getCookiesSoldPerHour();
//   tokyo.getTotalCookies();
//   for (let i = 0; i < storeHours.length; i++) {
//     let liElem = document.createElement('li');
//     liElem.textContent = `${storeHours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
//     ulElem.appendChild(liElem);
//   }
//   let total = document.createElement('li');
//   total.textContent = `Total: ${this.totalCookies} cookies`;
//   ulElem.appendChild(total);
// };

// dubai.render = function () {
//   let h2Elem = document.createElement('h2');
//   h2Elem.textContent = dubai.location;
//   cookieList.appendChild(h2Elem);

//   let ulElem = document.createElement('ul');
//   cookieList.appendChild(ulElem);
//   dubai.getCustPerHour();
//   dubai.getCookiesSoldPerHour();
//   dubai.getTotalCookies();
//   for (let i = 0; i < storeHours.length; i++) {
//     let liElem = document.createElement('li');
//     liElem.textContent = `${storeHours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
//     ulElem.appendChild(liElem);
//   }
//   let total = document.createElement('li');
//   total.textContent = `Total: ${this.totalCookies} cookies`;
//   ulElem.appendChild(total);
// };

// paris.render = function () {
//   let h2Elem = document.createElement('h2');
//   h2Elem.textContent = paris.location;
//   cookieList.appendChild(h2Elem);

//   let ulElem = document.createElement('ul');
//   cookieList.appendChild(ulElem);
//   paris.getCustPerHour();
//   paris.getCookiesSoldPerHour();
//   paris.getTotalCookies();
//   for (let i = 0; i < storeHours.length; i++) {
//     let liElem = document.createElement('li');
//     liElem.textContent = `${storeHours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
//     ulElem.appendChild(liElem);
//   }
//   let total = document.createElement('li');
//   total.textContent = `Total: ${this.totalCookies} cookies`;
//   ulElem.appendChild(total);
// };

// lima.render = function () {
//   let h2Elem = document.createElement('h2');
//   h2Elem.textContent = lima.location;
//   cookieList.appendChild(h2Elem);

//   let ulElem = document.createElement('ul');
//   cookieList.appendChild(ulElem);
//   lima.getCustPerHour();
//   lima.getCookiesSoldPerHour();
//   lima.getTotalCookies();
//   for (let i = 0; i < storeHours.length; i++) {
//     let liElem = document.createElement('li');
//     liElem.textContent = `${storeHours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
//     ulElem.appendChild(liElem);
//   }
//   let total = document.createElement('li');
//   total.textContent = `Total: ${this.totalCookies} cookies`;
//   ulElem.appendChild(total);
// };


// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();


