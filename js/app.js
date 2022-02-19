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

Location.prototype.finishLocation = function () {
  for (let i = 0; i < storeHours.length; i++) {
    this.custPerHour.push(randPerHour(this.minCustHourly, this.maxCustHourly));
    this.cookiesSoldPerHour.push(Math.floor(cookiesPerHour(this.custPerHour[i], this.aveCookiePer)));
    this.totalCookies += this.cookiesSoldPerHour[i];
  }
};

Location.prototype.renderTable = function () {
  let row1 = document.createElement('tr');
  table.appendChild(row1);

  let emptyCell = document.createElement('th');
  row1.append(emptyCell);
  for (let i = 0; i < storeHours.length; i++) {
    let content = storeHours[i];
    let hourRow = document.createElement('th');
    hourRow.textContent = content;
    row1.appendChild(hourRow);
  }

  let dailyTotCell = document.createElement('th');
  dailyTotCell.textContent = 'Daily Location Total';
  row1.append(dailyTotCell);

  for (let i = 0; i < storeLocations.length; i++) {
    let citiesRow = document.createElement('tr');
    table.appendChild(citiesRow);
    let locHead = document.createElement('th');
    let locName = storeLocations[i].location;
    locHead.textContent = locName;
    citiesRow.append(locHead);
    for (let j = 0; j < storeHours.length; j++) {
      let cookieData = storeLocations[i].cookiesSoldPerHour[j];
      let dataElem = document.createElement('td');
      dataElem.textContent = cookieData;
      citiesRow.appendChild(dataElem);
    }
    let salesTotal = storeLocations[i].totalCookies;
    let salesData = document.createElement('td');
    salesData.textContent = salesTotal;
    citiesRow.appendChild(salesData);

  }
  let totalHead = document.createElement('th');
  let totalsLabel = 'Totals';
  let bottomRow = document.createElement('tr');
  table.append(bottomRow);
  totalHead.textContent = totalsLabel;
  bottomRow.append(totalHead);

  let grandTotal = 0;
  for (let i = 0; i < storeHours.length; i++) {
    let total = 0;
    for (let j = 0; j < storeLocations.length; j++) {
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
  const loc = new Location(location, minCustHourly, maxCustHourly, aveCookiePer);
  loc.finishLocation();
}

buildLoc('Seattle', 23, 65, 6.3);
buildLoc('Tokyo', 3, 24, 1.2);
buildLoc('Dubai', 11, 38, 3.7);
buildLoc('Paris', 20, 38, 2.3);
buildLoc('Lima', 2, 16, 4.6);
storeLocations[0].renderTable();

let locForm = document.getElementById('loc-Form');

function appendNewLoc(event) {
  event.preventDefault();
  let formLocInput = event.target.location.value;
  let formMinInput = parseInt(event.target.minHourlyCust.value);
  let formMaxInput = parseInt(event.target.maxHourlyCust.value);
  let formAveCookie = parseInt(event.target.aveCookiePer.value);
  buildLoc(formLocInput, formMinInput, formMaxInput, formAveCookie);
  let totalsRow = document.getElementById('cookieSales');
  totalsRow.deleteRow(-1);
  let newStore = storeLocations.length - 1;
  let citiesRow = document.createElement('tr');
  table.appendChild(citiesRow);
  let locHead = document.createElement('th');
  locHead.textContent = formLocInput;
  citiesRow.append(locHead);
  for (let i = 0; i < storeHours.length; i++) {
    let cookieData = storeLocations[newStore].cookiesSoldPerHour[i];
    let dataElem = document.createElement('td');
    dataElem.textContent = cookieData;
    citiesRow.appendChild(dataElem);
  }
  let salesTotal = storeLocations[newStore].totalCookies;
  let salesData = document.createElement('td');
  salesData.textContent = salesTotal;
  citiesRow.appendChild(salesData);
  let totalHead = document.createElement('th');
  let totalsLabel = 'Totals';
  let bottomRow = document.createElement('tr');
  table.append(bottomRow);
  totalHead.textContent = totalsLabel;
  bottomRow.append(totalHead);
  let grandTotal = 0;
  for (let i = 0; i < storeHours.length; i++) {
    let total = 0;
    for (let j = 0; j < storeLocations.length; j++) {
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
}

locForm.addEventListener('submit', appendNewLoc);
