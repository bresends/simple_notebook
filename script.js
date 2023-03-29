const themeSwitch = document.getElementById('theme-switch');
const icon = document.querySelector('.theme-switcher__icon');
const noteTextarea = document.getElementById('note');
const saveButton = document.getElementById('save-btn');
const clearButton = document.getElementById('clear-btn');

const body = document.querySelector('body');

themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
});

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    themeSwitch.checked = true;
    icon.innerText = '🌙';
  }
}

// Update theme preference
themeSwitch.addEventListener('change', function () {
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    icon.innerText = '🌙';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    icon.innerText = '☀️';
  }
});

// Clear button functionality
clearButton.addEventListener('click', function () {
  noteTextarea.value = '';
});

// Save button functionality
saveButton.addEventListener('click', function () {
  localStorage.setItem('note', noteTextarea.value);
});

// Check for saved note
const savedNote = localStorage.getItem('note');
if (savedNote) {
  noteTextarea.value = savedNote;
}
