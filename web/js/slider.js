function initializeSlider(containerSelector, prevButtonSelector, nextButtonSelector) {
    const slides = document.querySelectorAll(containerSelector + ' .slide');
    const prevButton = document.querySelector(prevButtonSelector);
    const nextButton = document.querySelector(nextButtonSelector);

    if (!slides.length || !prevButton || !nextButton) {
        console.error('Slider elements not found');
        return;
    }

    let currentIndex = 0;

    function updateSlidePosition() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentIndex) {
                slide.classList.add('active');
            }
        });
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    });

    updateSlidePosition();
}

document.addEventListener('DOMContentLoaded', function() {
    initializeSlider('.slider-container .slides', '.slider-container .prev-slide', '.slider-container .next-slide');
    initializeSlider('.detail-slider-container .detail-slides', '.detail-slider-container .detail-prev-slide', '.detail-slider-container .detail-next-slide');
});
