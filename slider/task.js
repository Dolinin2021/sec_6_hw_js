const sliderArrowPrev = document.getElementsByClassName('slider__arrow_prev');
const sliderArrowNext = document.getElementsByClassName('slider__arrow_next');

let slideIndex = 1;


function showSlides(num) {
  let index;
  let sliderItem = document.getElementsByClassName("slider__item");

  if (num > sliderItem.length) {
    slideIndex = 1;
  }
  if (num < 1) {
    slideIndex = sliderItem.length;
  }

  for (index = 0; index < sliderItem.length; index++) {
    sliderItem[index].classList.remove("slider__item_active");
  }

  sliderItem[slideIndex - 1].classList.add("slider__item_active");
}

function plusSlides(num) {
  showSlides(slideIndex += num);
}


for (let index = 0; index <= sliderArrowPrev.length - 1; index++) {
        sliderArrowPrev[index].addEventListener('click', () => {
        plusSlides(-1);
    })
}

for (let index = 0; index <= sliderArrowNext.length - 1; index++) {
    sliderArrowNext[index].addEventListener('click', () => {
    plusSlides(1);
})
}
