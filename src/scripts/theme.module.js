class ThemeSwitcher {
  selectors = {
    switchThemeButton: '[data-js-theme-switcher]',
    switchThemeButtonMobile: '[data-js-theme-switcher-mobile]',
  };

  themes = {
    dark: 'dark',
    light: 'light',
  };

  stateClasses = {
    isDarkTheme: 'is-dark-theme',
  };

  storageKey = 'theme';

  constructor() {
    this.switchThemeButtonElement = document.querySelector(
      this.selectors.switchThemeButton
    );
    this.switchThemeButtonElementMobile = document.querySelector(
      this.selectors.switchThemeButtonMobile
    );
    this.setInitialTheme();
    this.bindEvents();
  }

  get isDarkThemeCached() {
    return localStorage.getItem(this.storageKey) === this.themes.dark;
  }

  setInitialTheme() {
    document.documentElement.classList.toggle(
      this.stateClasses.isDarkTheme,
      this.isDarkThemeCached
    );
  }

  onClick = () => {
    localStorage.setItem(
      this.storageKey,
      this.isDarkThemeCached ? this.themes.light : this.themes.dark
    );
    document.documentElement.classList.toggle(this.stateClasses.isDarkTheme);
  };

  bindEvents() {
    this.switchThemeButtonElement.addEventListener('click', this.onClick);
    this.switchThemeButtonElementMobile.addEventListener('click', this.onClick);
  }
}

new ThemeSwitcher();

// import "./theme.module.js"
