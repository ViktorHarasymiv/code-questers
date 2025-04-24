const switcher = document.querySelector('#slider');
const html = document.querySelector('html');

function checkSwitcher() {
  if (html.classList.contains('is-dark-theme')) {
    switcher.checked = true;
  } else {
    switcher.classList.remove('dark');
    switcher.checked = false;
  }
}

checkSwitcher();
