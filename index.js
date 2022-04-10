var rateBtns = document.querySelectorAll(".rateBtn");
const rate = document.querySelector('.rate');
const submitBtn = document.querySelector('.submitBtn');
const thankYouContainer = document.querySelector('.thankYou-container');
const ratingContainer = document.querySelector('.rating-container');
let rateNum = 0; 

rateBtns.forEach(rate => {
  rate.addEventListener('click', () => {
    rate.classList.add('active');
    if (rate.previousElementSibling.classList.contains('active') || rate.nextElementSibling.classList.contains('active')) {
      rate.previousElementSibling.classList.remove('active');
      rate.nextElementSibling.classList.remove('active');
    }
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