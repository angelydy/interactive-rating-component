var rateBtns = document.querySelectorAll(".rateBtn");
const rate = document.querySelector('.rate');
const submitBtn = document.querySelector('.submitBtn');
const thankYouContainer = document.querySelector('.thankYou-container');
const ratingContainer = document.querySelector('.rating-container');
let rateNum = 0; 

rateBtns.forEach(rate => {
  rate.addEventListener('click', () => {
    rate.style.backgroundColor = '#707070';
    rateNum = rate.innerHTML;
  })
})

submitBtn.addEventListener("click", () => {
  if (rateNum != 0) {
    thankYouContainer.classList.toggle('show');
    ratingContainer.classList.toggle('hide');
    rate.innerHTML = rateNum;
  }
});