/* eslint-disable no-undef, camelcase */
'use strict';

document.addEventListener(
  'fullscreenchange',
  () => {
    if (document.fullscreenElement) {
      const t = document.getElementsByClassName('ytp-chrome-top')[0];
      t.style.display = t.style.display == 'block';
      const b = document.getElementsByClassName('ytp-chrome-bottom')[0];
      b.style.display = b.style.display == 'block';
      setTimeout(() => {
        const t = document.getElementsByClassName('ytp-chrome-top')[0];
        t.style.display = t.style.display == 'none';
        const b = document.getElementsByClassName('ytp-chrome-bottom')[0];
        b.style.display = b.style.display == 'none';
      }, 3500);
    }
  },
  true
);

// let timeOuts = []; setInterval(() => {for (let i=0; i<timeOuts.length-1; ++i) {clearTimeout(timeOuts[i])}}, 100)
// it's either that or assigning a number for every timeout and having all timeouts run to find out whether
// anything needs to be done at that time, depending on whether the number corresponding to a timeout
// has been 'invalidated' and what the latest timeout is
// or having one primary loop running and handling everything

/*prettier-ignore*/
let moved     = false;
let isVisible = false;
let lastMoved = 0x000;

document.addEventListener('mousemove', () => {
  lastMoved = Date.now();
  if (!isVisible) {
    isVisible = true;
    document.getElementsByClassName('ytp-chrome-top')[0].style.display =
      'block';
    document.getElementsByClassName('ytp-chrome-bottom')[0].style.display =
      'block';
  }
});

setInterval(() => {
  if (Date.now() - lastMoved > 3500 && isVisible) {
    document.getElementsByClassName('ytp-chrome-top')[0].style.display = 
      'none';
    document.getElementsByClassName('ytp-chrome-bottom')[0].style.display =
      'none';
    isVisible = false;
  }
}, 50);
