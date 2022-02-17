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

Location.prototype.renderTable = function () {
  let row1 = document.createElement('tr'); // Create initial row and append to parent table elem
  table.appendChild(row1);

  let emptyCell = document.createElement('th');
  row1.append(emptyCell);
  for (let i = 0; i < storeHours.length; i++) { // grabs store hours from array, and adds to top row
    let content = storeHours[i];
    let hourRow = document.createElement('th');
    hourRow.textContent = content;
    row1.appendChild(hourRow);
  }

  let dailyTotCell = document.createElement('th');
  dailyTotCell.textContent = 'Daily Location Total';
  row1.append(dailyTotCell); // appends daily location total header to end of top row

  for (let i = 0; i < storeLocations.length; i++) { // creates column of location names (rows)
    let citiesRow = document.createElement('tr');
    table.appendChild(citiesRow);
    let locHead = document.createElement('th');
    let locName = storeLocations[i].location;
    locHead.textContent = locName;
    citiesRow.append(locHead);
    for (let j = 0; j < storeHours.length; j++) { // fills table with cookie sales data
      let cookieData = storeLocations[i].cookiesSoldPerHour[j];
      let dataElem = document.createElement('td');
      dataElem.textContent = cookieData;
      citiesRow.appendChild(dataElem);
    }
    let salesTotal = storeLocations[i].totalCookies; // fills in the daily totals
    let salesData = document.createElement('td');
    salesData.textContent = salesTotal;
    citiesRow.appendChild(salesData);

  }
  let totalHead = document.createElement('th'); // creates the hourly totals row for all locations
  let totalsLabel = 'Totals';
  let bottomRow = document.createElement('tr');
  table.append(bottomRow);
  totalHead.textContent = totalsLabel;
  bottomRow.append(totalHead);

  let grandTotal = 0;
  for (let i = 0; i < storeHours.length; i++) { // slow loop moves to the right of the table with each loop
    let total = 0;
    for (let j = 0; j < storeLocations.length; j++) { // fast loop, moves down through the stores, totally the cookie sales for each hour.
      total += storeLocations[j].cookiesSoldPerHour[i];
    }
    grandTotal += total;
    let cellData = document.createElement('td');
    cellData.textContent = total;
    bottomRow.append(cellData);
  }
  let grandTotalCell = document.createElement('td');
  grandTotalCell.textContent = grandTotal;
  bottomRow.append(grandTotalCell);
};

function buildLoc(location, minCustHourly, maxCustHourly, aveCookiePer) {
  const loc = new Location(location, minCustHourly, maxCustHourly, aveCookiePer); //builds the location object adds to storeLocations array
  loc.getCustPerHour();
  loc.getCookiesSoldPerHour();
  loc.getTotalCookies();
}

buildLoc('Seattle', 23, 65, 6.3);
buildLoc('Tokyo', 3, 24, 1.2);
buildLoc('Dubai', 11, 38, 3.7);
buildLoc('Paris', 20, 38, 2.3);
buildLoc('Lima', 2, 16, 4.6);
storeLocations[2].renderTable();
