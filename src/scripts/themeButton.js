const switcher = document.querySelector('#slider');
const switcherMobile = document.querySelector('#slider-moblie');
const html = document.querySelector('html');

const data = localStorage.getItem('theme');

function checkSwitcher(theme) {
  if (html.classList.contains('is-dark-theme') || theme == 'dark') {
    switcher.checked = true;
    switcherMobile.checked = true;
  } else {
    switcher.classList.remove('dark');
    switcherMobile.classList.remove('dark');

    switcher.checked = false;
    switcherMobile.checked = false;
  }
}

switcherMobile.addEventListener('click', theme => {
  checkSwitcher(theme);
});

switcher.addEventListener('click', theme => {
  checkSwitcher(theme);
});

checkSwitcher(data);
