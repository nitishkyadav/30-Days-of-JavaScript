'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2022-08-28T09:48:16.867Z',
    '2022-08-27T09:48:16.867Z',
    '2022-08-24T09:48:16.867Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2022-08-28T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

let timer;
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayCalcDate = function (date, locale) {
  const calcDate = function (date1, date2) {
    // console.log(date1, date2);
    date2 = new Date(date2).getTime();
    return Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  };
  const displayDate = calcDate(new Date().getTime(), date);
  console.log(displayDate);

  if (displayDate < 1) return 'Today';
  if (displayDate < 2) return 'Yesterday';
  if (displayDate <= 7) return `${displayDate} days ago`;

  let dates = new Date(date);
  // const month = (dates.getMonth() + 1).toString().padStart(2, "0");
  // const year = dates.getFullYear().toString();
  // const dates1 = dates.getDate().toString().padStart(2, "0");
  // const hour = dates.getHours().toString().padStart(2, "0");
  // const minutes = dates.getMinutes().toString().padStart(2, "0");
  // return `${dates1}/${month}/${year}`;
  return Intl.DateTimeFormat(locale).format(dates);
};

const displayMovements = function (acc) {
  containerMovements.innerHTML = '';
  acc.movements.forEach(function (mov, i) {
    const dates = displayCalcDate(acc.movementsDates[i], acc.locale);
    const formatCurrency = function (value, currency, locale) {
      const options = {
        style: 'currency',
        currency: 'USD',
      };
      return new Intl.NumberFormat(locale, options).format(value);
    };

    let transactionType = 'withdrawal';
    if (mov > 0) {
      transactionType = 'deposit';
    }

    // Created HTML code block
    const addHtml = ` <div class="movements__row">
    <div class="movements__type movements__type--${transactionType}">${
      i + 1
    } ${transactionType}</div>
    <div class="movements__date">${dates}</div>
    <div class="movements__value">${formatCurrency(
      mov,
      acc.currency,
      acc.locale
    )}</div>
    </div>`;

    // Added addHtml code block to the HTML document
    containerMovements.insertAdjacentHTML('afterbegin', addHtml);
  });
};

/////////////////////////////////////////////////

// Using .map()

// Example 1:
const movements = [200, -200, 340, -300, -20, 50, 400, -460];
const euroToUsd = 1.1;

const newMovements = movements.map(function (mov) {
  return mov * euroToUsd;
});

// Using arraow function for same
const newMovements1 = movements.map(mov => {
  return mov * euroToUsd * 2;
});

// Using for
const createNickNames = function (arr) {
  arr.nickName = arr.owner
    .toLowerCase()
    .split(' ')
    .map(function (val) {
      return val[0];
    })
    .join('');
  return arr.nickName;
};
createNickNames(account1);
createNickNames(account2);

// console.log(createNickNames(account1));

// Using reduce to calculate total balance of the account
function displayBalance(account) {
  account.balance = account.movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  // labelBalance.textContent = `${account.balance.toFixed(2)} EUR`;
  labelBalance.textContent = `${formatCurrency(
    account.balance,
    account.currency,
    account.locale
  )}`;
  return account.balance;
}

const calcDispalySummary = function (account) {
  const inFlow = account.movements
    .filter(arr => arr > 0)
    .reduce((acc, arr) => acc + arr, 0);
  labelSumIn.textContent = `${formatCurrency(
    inFlow,
    account.currency,
    account.locale
  )}`;

  const outFlow = account.movements
    .filter(arr => arr < 0)
    .reduce((acc, arr) => acc + arr, 0);
  labelSumOut.textContent = `${formatCurrency(
    outFlow,
    account.currency,
    account.locale
  )}`;

  const interest = account.movements
    .filter((arr, i, array) => arr > 0)
    .map(arr => (arr * account.interestRate) / 100)
    .filter(arr => arr >= 1)
    .reduce((acc, arr) => acc + arr, 0);
  labelSumInterest.textContent = formatCurrency(
    interest,
    account.currency,
    account.locale
  );
};

//////////////////////////////// Implementing Login Functionality //////////////////////////////////////

function logoutTimer() {
  let counter = 300;
  function logoutInterval() {
    const minutes = String(Math.trunc(counter / 60)).padStart(2, 0);
    const seconds = String(counter % 60).padStart(2, 0);
    labelTimer.textContent = `${minutes}:${seconds}`;

    if (counter === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = `Log in to get started`;
    }
    counter--;
  }
  logoutInterval();
  const timer = setInterval(logoutInterval, 1000);
  return timer;
}

// log;
const loginDate = function () {
  const now = new Date();
  const locale = navigator.language;
  console.log(locale);
  console.log(navigator.clipboard);
  const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return new Intl.DateTimeFormat(locale, options).format(now);
};

let currentCustomer10 = null;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Login');
  currentCustomer10 = accounts.find(
    acc => acc.nickName === inputLoginUsername.value
  );
  console.log(currentCustomer10);

  if (currentCustomer10?.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `Welcome Back!! ${
      currentCustomer10.owner.split(' ')[0]
    }`;
    // logoutTimer().logoutInterval();

    if (timer) clearInterval(timer);
    timer = logoutTimer();
    labelDate.textContent = loginDate();
    updateUI(currentCustomer10);
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
  }
});

const updateUI = function (account) {
  displayBalance(account);

  calcDispalySummary(account);

  displayMovements(account);
};

////////////////////////////////////// Transferring the funds ////////////////////////////////////////
let personToTransfer;
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  personToTransfer = accounts.find(
    acc => acc.nickName === inputTransferTo.value
  );
  (inputTransferAmount.value == inputTransferTo.value) == '';
  if (currentCustomer10 !== personToTransfer && personToTransfer?.nickName) {
    currentCustomer10.movements.push(-Number(inputTransferAmount.value));
    personToTransfer.movements.push(Number(inputTransferAmount.value));
    const currentDate = getCurrentDate();
    currentCustomer10.movementsDates.push(currentDate);
    personToTransfer.movementsDates.push(currentDate);

    updateUI(currentCustomer10);
    inputTransferAmount.blur();
    if (timer) clearInterval(timer);
    timer = logoutTimer();
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  let closingAccount = inputCloseUsername.value;
  let accPin = Number(inputClosePin.value);

  if (
    currentCustomer10.pin === accPin &&
    currentCustomer10.nickName === closingAccount
  ) {
    const index = accounts.findIndex(
      ele => ele.nickName === closingAccount && ele.pin === accPin
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmt = Math.floor(inputLoanAmount.value);
  console.log(loanAmt);
  if (
    loanAmt > 0 &&
    currentCustomer10.movements.some(mov => mov > loanAmt * 0.1)
  ) {
    currentCustomer10.movements.push(Number(loanAmt));
    const currentDate = getCurrentDate();
    currentCustomer10.movementsDates.push(currentDate);

    updateUI(currentCustomer10);
  } else {
    console.log('Failed to please');
  }
  if (timer) clearInterval(timer);
  timer = logoutTimer();
});

function getCurrentDate() {
  const currentDate = new Date().toISOString();
  return currentDate;
}
const formatCurrency = function (value, currency, locale) {
  const options = {
    style: 'currency',
    currency: 'USD',
  };
  return new Intl.NumberFormat(locale, options).format(value);
};
