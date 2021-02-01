const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.body;

function setSavedOrDefaultTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    bodyRef.classList.add(savedTheme);
  } else {
    bodyRef.classList.add(Theme.LIGHT);
  }

  checkboxRef.checked = savedTheme === Theme.DARK;
}

function setChangedTheme(oldTheme, newTheme) {
  bodyRef.classList.replace(oldTheme, newTheme);
  localStorage.setItem('theme', newTheme);
}

function onChangeTherm(event) {
  if (event.target.checked) {
    setChangedTheme(Theme.LIGHT, Theme.DARK);
  } else {
    setChangedTheme(Theme.DARK, Theme.LIGHT);
  }
}
setSavedOrDefaultTheme();
checkboxRef.addEventListener('change', onChangeTherm);
