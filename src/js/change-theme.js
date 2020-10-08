const refs = {
  button: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};
const bodyClass = refs.body.classList;
const button = refs.button;

savedTheme();

refs.button.addEventListener('change', handleSwitchTheme);

function handleSwitchTheme() {
  if (bodyClass.contains('light-theme')) {
    bodyClass.replace('light-theme', 'dark-theme');
    localStorage.setItem('theme', 'dark-theme');
    return;
  }
  bodyClass.replace('dark-theme', 'light-theme');
  localStorage.setItem('theme', 'light-theme');
}

function savedTheme() {
  if (localStorage.theme === 'dark-theme') {
    button.checked = true;
    bodyClass.add('dark-theme');
    return;
  }
  bodyClass.add('light-theme');
  localStorage.setItem('theme', 'light-theme');
}
