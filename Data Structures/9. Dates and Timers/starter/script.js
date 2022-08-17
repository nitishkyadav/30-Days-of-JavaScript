'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    let transactionType = 'withdrawal';
    if (mov > 0) {
      transactionType = 'deposit';
    }
    // Created HTML code block
    const addHtml = ` <div class="movements__row">
    <div class="movements__type movements__type--${transactionType}">${
      i + 1
    } ${transactionType}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov.toFixed(2)}€</div>
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
createNickNames(account3);
createNickNames(account4);
// console.log(createNickNames(account1));

// Using reduce to calculate total balance of the account
function displayBalance(account) {
  account.balance = account.movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `${account.balance.toFixed(2)} EUR`;
  return account.balance;
}

const calcDispalySummary = function (account) {
  const inFlow = account.movements
    .filter(arr => arr > 0)
    .reduce((acc, arr) => acc + arr, 0);
  labelSumIn.textContent = `${inFlow.toFixed(2)}€`;

  const outFlow = account.movements
    .filter(arr => arr < 0)
    .reduce((acc, arr) => acc + arr, 0);
  labelSumOut.textContent = `${outFlow.toFixed(2)}€`;

  const interest = account.movements
    .filter((arr, i, array) => arr > 0)
    .map(arr => (arr * account.interestRate) / 100)
    .filter(arr => arr >= 1)
    .reduce((acc, arr) => acc + arr, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

//////////////////////////////// Implementing Login Functionality //////////////////////////////////////

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

    displayMovements(currentCustomer10.movements);
    displayBalance(currentCustomer10);
    calcDispalySummary(currentCustomer10);
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
  }
});

const updateUI = function (account) {
  displayBalance(account);

  calcDispalySummary(account);

  displayMovements(account.movements);
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

    updateUI(currentCustomer10);
    inputTransferAmount.blur();
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
  ////////////////////////////////////// Wrote Wrong logic/////////////////////////////////

  // currentCustomer10.movements.some(mov => {
  //   if (mov > loanAmt * 0.1) {
  //     currentCustomer10.movements.push(Number(loanAmt));
  //     updateUI(currentCustomer10);
  //   } else {
  //     console.log('Failed to please');
  //   }
  // });

  if (
    loanAmt > 0 &&
    currentCustomer10.movements.some(mov => mov > loanAmt * 0.1)
  ) {
    currentCustomer10.movements.push(Number(loanAmt));
    updateUI(currentCustomer10);
  } else {
    console.log('Failed to please');
  }
});
