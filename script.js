const numPageviews = document.querySelector('.num-pageviews');
const dynamicPrice = document.querySelector('.dynamic-price');
const slider = document.querySelector('.slider');
const toggleButton = document.querySelector('.toggle-outer');
const toggleButtonInner = document.querySelector('.toggle-inner');
let isMonthly = true;
let range = '50';

const setPrice = (range) => {
  switch (range) {
    case '0':
      isMonthly
        ? (dynamicPrice.innerText = '8')
        : (dynamicPrice.innerText = '6');
      numPageviews.innerText = '10k';
      break;
    case '25':
      isMonthly
        ? (dynamicPrice.innerText = '12')
        : (dynamicPrice.innerText = '8');
      numPageviews.innerText = '50k';
      break;
    case '50':
      isMonthly
        ? (dynamicPrice.innerText = '16')
        : (dynamicPrice.innerText = '12');
      numPageviews.innerText = '100k';
      break;
    case '75':
      isMonthly
        ? (dynamicPrice.innerText = '24')
        : (dynamicPrice.innerText = '18');
      numPageviews.innerText = '500k';
      break;
    case '100':
      isMonthly
        ? (dynamicPrice.innerText = '36')
        : (dynamicPrice.innerText = '27');
      numPageviews.innerText = '1m';
      break;
    default:
      break;
  }
};

const styleSlider = () => {
  valPercent = (slider.value / slider.max) * 100;
  slider.style.background = `linear-gradient(to right, #A4F3EB ${valPercent}%, #d5d5d5 ${valPercent}%)`;
};

styleSlider();

toggleButton.addEventListener('click', () => {
  toggleButtonInner.classList.toggle('toggle-monthly');
  toggleButtonInner.classList.toggle('toggle-yearly');
  isMonthly = !isMonthly;
  setPrice(range);
  toggleButton.setAttribute(
    'aria-label',
    `${isMonthly ? 'monthly pricing' : 'yearly pricing'}`
  );
});

slider.addEventListener('input', (e) => {
  range = e.target.value;
  styleSlider();
  setPrice(range);
  slider.setAttribute(
    'aria-valuetext',
    `${numPageviews.innerText} page views. ${dynamicPrice.innerText}$ per month`
  );
});
