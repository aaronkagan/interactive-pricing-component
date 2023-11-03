const toggleButtonInner = document.querySelector('.toggle-inner');
const toggleButton = document.querySelector('.toggle-outer');

toggleButton.addEventListener('click', () => {
  toggleButtonInner.classList.toggle('right-4px');
  toggleButtonInner.classList.toggle('left-4px');
  console.log('click');
});
