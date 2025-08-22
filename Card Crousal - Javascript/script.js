const slider = document.querySelector('.slider ul');

const next_btn = document.querySelector('.next-arrow');
const back_btn = document.querySelector('.back-arrow');

let translateX = 0;

next_btn.addEventListener('click', () => {
    if (translateX > -75) {
        translateX -= 20;
    }
    slider.style.transform = `translateX(${translateX}%)`;
})

back_btn.addEventListener('click', () => {
    if (translateX < 0) {
        translateX += 20;
    }
    slider.style.transform = `translateX(${translateX}%)`;

})