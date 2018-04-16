const CLASS_SWITCH_SELECTED = 'switch--selected';
const CLASS_DARK_THEME = 'theme-dark';

var themeChanger = document.getElementById('switch-theme');
themeChanger.addEventListener('click', function(e) {
  const hasSelectedClass = this.classList.contains(CLASS_SWITCH_SELECTED);
  const body = document.body;

  if (!hasSelectedClass) {
    this.setAttribute('aria-checked', true);
    this.classList.add(CLASS_SWITCH_SELECTED);
    body.classList.add(CLASS_DARK_THEME);
    return;
  }

  this.setAttribute('aria-checked', false);
  this.classList.remove(CLASS_SWITCH_SELECTED);
  body.classList.remove(CLASS_DARK_THEME);
  console.log('set to uncheck');
});