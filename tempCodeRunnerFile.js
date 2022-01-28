let activeSlidesIndex = 0;

// slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

// const changeSlide = (direction) => {
//     const sliderHeight = sliderContainer.clientHeight;
//     if (direction === 'up') {
//         activeSlidesIndex++;
//         if (activeSlidesIndex > slidesLength - 1)
//             activeSlidesIndex = 0;
//     }
//     else if (direction === 'down') {
//         activeSlidesIndex--;
//         if (activeSlidesIndex < 0)
//             activeSlidesIndex = slidesLength - 1;
//     }

//     slideRight.style.transform = `translateY(${activeSlidesIndex * sliderHeight}px)`

//     slideLeft.style.transform = `translateY(${activeSlidesIndex * sliderHeight}px)`
// }

// upButton.addEventListener('click', () => {
//     changeSlide('up');
// })

// downButton.addEventListener('click', () => {
//     changeSlide('down')
// })