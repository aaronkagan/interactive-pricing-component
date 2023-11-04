const numPageviews = document.querySelector('.num-pageviews');
const dynamicPrice = document.querySelector('.dynamic-price');
const slider = document.querySelector('.slider');
const toggleButton = document.querySelector('.toggle-outer');
const toggleButtonInner = document.querySelector('.toggle-inner');
let isMonthly = true;
let range = '3';

const applyDiscount = (dynamicPrice) => {
  dynamicPrice.innerText = parseInt(dynamicPrice.innerText) * 0.75;
};

const setPrice = (range) => {
  switch (range) {
    case '1':
      isMonthly ? (dynamicPrice.innerText = '8') : applyDiscount(dynamicPrice);
      numPageviews.innerText = '10k';
      break;
    case '2':
      isMonthly ? (dynamicPrice.innerText = '12') : applyDiscount(dynamicPrice);
      numPageviews.innerText = '50k';

      break;
    case '3':
      isMonthly ? (dynamicPrice.innerText = '16') : applyDiscount(dynamicPrice);
      numPageviews.innerText = '100k';

      break;
    case '4':
      isMonthly ? (dynamicPrice.innerText = '24') : applyDiscount(dynamicPrice);
      numPageviews.innerText = '500k';

      break;
    case '5':
      isMonthly ? (dynamicPrice.innerText = '36') : applyDiscount(dynamicPrice);
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
