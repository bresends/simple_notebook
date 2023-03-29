const themeSwitch = document.getElementById('theme-switch');

// Set theme based on user preference or default to dark mode
if (localStorage.getItem('theme') === 'light') {
  setLightTheme();
} else {
  setDarkTheme();
}

// Switch theme on checkbox change
themeSwitch.addEventListener('change', function () {
  if (this.checked) {
    setLightTheme();
    localStorage.setItem('theme', 'light');
  } else {
    setDarkTheme();
    localStorage.setItem('theme', 'dark');
  }
});

// Helper functions to set light/dark theme
function setLightTheme() {
  document.documentElement.classList.add('light-theme');
  document.documentElement.classList.remove('dark-theme');
}

function setDarkTheme() {
  document.documentElement.classList.add('dark-theme');
  document.documentElement.classList.remove('light-theme');
}
