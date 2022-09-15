'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////Creating Cookies Banner//////////////////////////////////////////
const header = document.querySelector('.header');
console.log(header);
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for Customization and Analytics <button class="btn btn--close-cookie">Accept</button>';

header.append(message);

/////////////////////////////////////Removing Cookie Message from DOM//////////////////////////////////
const cookieBtn = document.querySelector('.btn--close-cookie');
cookieBtn.addEventListener('click', function () {
  message.remove();
});

////////////////////////////////////Styles, Attributes and Classes//////////////////////////////////////

message.style.backgroundColor = '#37383d';
console.log(getComputedStyle(message).height);
console.log(getComputedStyle(message).backgroundColor);

message.style.width = '120%';

message.style.height = '89px';

// Number.parseFloat(getComputedStyle(message).height, 10) + 2000 + 'px';
console.log(getComputedStyle(message).height);

/////////////////////////////Changing CSS Variable values///////////////////////////////////////

document.documentElement.style.setProperty('--color-primary', 'orangered');
console.log(document.documentElement.style.getPropertyValue('--color-primary'));
//////////////////////////////////Attributes///////////////////////////////////////

// Accessing and setting attributes using dot(.) operator
const img = document.querySelector('.header__img');
console.log(img.alt);
console.log(img.src);

// Aceesing and setting attributes using .getAttribute and .setAttribute Methods

console.log(img.getAttribute('src'));
console.log(img.getAttribute('alt'));
img.setAttribute('alt', 'Beautiful Image');
console.log(img.getAttribute('alt'));

///////////////////////////////////////////////Implementing Smooth Scrolling//////////////////////////////////////////////////////////////

// 1. Get the element from where and to whom we want to scroll to
// 2. Add event listener to the element from where to where we want to scroll
// 3. Get the coordinate of the element to which we want to scroll to w.r.t to viewport
// 4. Get the coordinates of the top of the viewport from the start of the window(w.r.t to top of the window)
// 5. Use object window.scrollTo() and pass object in it defining left and right coordinate along with behaviour: smooth

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

//////////////////////////Old Way For Scrolling and used for old browsers////////////////////////////////////////

// btnScrollTo.addEventListener('click', function (e) {
//   let s1Cordinates = section1.getBoundingClientRect();
//   console.log(s1Cordinates);
//   console.log(window.pageXOffset, window.pageYOffset);
//   window.scrollTo({
//     left: s1Cordinates.left + window.pageXOffset,
//     top: s1Cordinates.top + window.pageYOffset,
//     behaviour: 'smooth',
//   });
// });

///////////////////////Modern Way Of Scrolling to Element//////////////////////////////////
btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behaviour: 'smooth' });
});

// Implementing Tabbed Component

const tabContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const content = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', function (e) {
  // console.log(e.target.dataset);
  const selectedBtn = e.target.closest('.operations__tab');
  tabs.forEach(function (tab) {
    tab.classList.remove('operations__tab--active');
  });
  selectedBtn.classList.add('operations__tab--active');
  let tabCount = selectedBtn.dataset.tab;

  content.forEach(function (item) {
    item.classList.remove('operations__content--active');
  });
  const activeContent = document.querySelector(
    `.operations__content--${tabCount}`
  );
  activeContent.classList.add('operations__content--active');
});

// Implementing Navigation Bar Hover effect

const nav = document.querySelector('.nav');

//////////////////////////////////////Implementing Sticky NavBar Using Scroll Event/////////////////////////////////////
// nav.addEventListener('mouseover', function () {});

// Implementing Sticky Navigation
// const section1XFromTop = section1.getBoundingClientRect().top;
// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);
//   if (scrollY > section1XFromTop) {
//     nav.classList.add('sticky');
//     nav.style.opacity = 0.9;
//   } else {
//     nav.classList.remove('sticky');
//     nav.style.opacity = 1;
//   }
// });

///////////////////////////// Implementing Sticky Header Using Intersection Observer API/////////////////////
const navHeight = nav.getBoundingClientRect().height;
const headerCallback = function (entries, stickyHeader) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      console.log(entry);
      console.log(entry.target);
      nav.style.opacity = 0.5;
      nav.classList.add('sticky');
      nav.style.opacity = 0.9;
    } else {
      nav.classList.remove('sticky');
      nav.style.opacity = 1;
    }
  });
};

const headerOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const stickyHeader = new IntersectionObserver(headerCallback, headerOptions);
stickyHeader.observe(header);
