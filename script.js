const numPageviews = document.querySelector('.num-pageviews');
const dynamicPrice = document.querySelector('.dynamic-price');
const slider = document.querySelector('.slider');
const toggleButton = document.querySelector('.toggle-outer');
const toggleButtonInner = document.querySelector('.toggle-inner');
let isMonthly = true;
let range = '3';

const setPrice = (range) => {
  switch (range) {
    case '1':
      isMonthly
        ? (dynamicPrice.innerText = '8')
        : (dynamicPrice.innerText = '6');
      numPageviews.innerText = '10k';
      break;
    case '2':
      isMonthly
        ? (dynamicPrice.innerText = '12')
        : (dynamicPrice.innerText = '8');
      numPageviews.innerText = '50k';
      break;
    case '3':
      isMonthly
        ? (dynamicPrice.innerText = '16')
        : (dynamicPrice.innerText = '12');
      numPageviews.innerText = '100k';
      break;
    case '4':
      isMonthly
        ? (dynamicPrice.innerText = '24')
        : (dynamicPrice.innerText = '18');
      numPageviews.innerText = '500k';
      break;
    case '5':
      isMonthly
        ? (dynamicPrice.innerText = '36')
        : (dynamicPrice.innerText = '27');
      numPageviews.innerText = '1m';
      break;
    default:
      break;
  }
};

toggleButton.addEventListener('click', () => {
  toggleButtonInner.classList.toggle('toggle-monthly');
  toggleButtonInner.classList.toggle('toggle-yearly');
  isMonthly = !isMonthly;
  setPrice(range);
});

slider.addEventListener('change', (e) => {
  range = e.target.value;
  setPrice(range);
});
