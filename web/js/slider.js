document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    document.querySelectorAll('.slider-container').forEach(function(container) {
        const slides = container.querySelector('.slides');
        const prevButton = container.querySelector('.prev-slide');
        const nextButton = container.querySelector('.next-slide');

        if (!slides || !prevButton || !nextButton) {
            console.error('Slider elements not found');
            return;
        }

        let currentIndex = 0;

        function updateSlidePosition() {
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        nextButton.addEventListener('click', () => {
            if (currentIndex < slides.children.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlidePosition();
        });

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = slides.children.length - 1;
            }
            updateSlidePosition();
        });

        // Initial update to set position
        updateSlidePosition();
    });
});
