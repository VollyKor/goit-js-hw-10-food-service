const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  button: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

const bodyClass = refs.body.classList;
const button = refs.button;

savedTheme();

refs.button.addEventListener('change', handleSwitchTheme);

function handleSwitchTheme() {
  if (bodyClass.contains(Theme.LIGHT)) {
    bodyClass.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    return;
  }
  bodyClass.replace(Theme.DARK, Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
}

function savedTheme() {
  if (localStorage.theme === Theme.DARK) {
    button.checked = true;
    bodyClass.add(Theme.DARK);
    return;
  }
  bodyClass.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
}
