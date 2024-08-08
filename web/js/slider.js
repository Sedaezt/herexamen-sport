// aanroepen van de elementen
const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');

// houdt bij welke slide momenteel zichtbaar is
let currentIndex = 0;

// updaten van de positie v/d slides
function updateSlidePosition() {
    // slides naar links verplaatsen om juiste img weer te geven
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// volgende knop
nextButton.addEventListener('click', () => {
    if (currentIndex < slides.children.length - 1) {
        currentIndex++;
    } else {
        // terug naar de eerste als we bij het einde zijn 
        currentIndex = 0;
    }

    updateSlidePosition();
});

// Vorige knop
prevButton.addEventListener('click', () => {
    // terug kunnen gaan
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        // Ga naar de laatste slide als je op de eerste bent
        currentIndex = slides.children.length - 1; 
    }
    
    updateSlidePosition();
});



