// Select the navbar and its components
const navbar = document.getElementById("navbar");
const logo = document.querySelector(".logo img");  // The logo element
const menuLinks = document.getElementById("menu-links"); // Menu links container (Home, About Us, etc.)

let lastScrollY = window.scrollY; // Tracks the last scroll position

// Scroll event listener to hide/show navbar and adjust transparency
window.addEventListener("scroll", () => {
    // Get the current scroll position
    let currentScrollY = window.scrollY;

    console.log("Current Scroll Y:", currentScrollY); // Debug log

    // If scrolling down and past a threshold, make navbar solid
    if (currentScrollY > 150) {
        console.log("Adding solid class"); // Debug log
        navbar.classList.add("solid"); // Add solid class
        navbar.classList.remove("transparent"); // Remove transparent class
    } else {
        console.log("Adding transparent class"); // Debug log
        navbar.classList.add("transparent"); // Keep transparent class
        navbar.classList.remove("solid"); // Remove solid class
    }

    // Update the last scroll position
    lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
});


// Image slider //
// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;

    function showSlide(index) {
        sliderContainer.style.transform = `translateX(-${index * 100}%)`;
        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[index].classList.add('active');
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        showSlide(currentIndex);
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
        showSlide(currentIndex);
    }

    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            currentIndex = parseInt(this.getAttribute('data-slide'));
            showSlide(currentIndex);
        });
    });

    setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});
// ...existing code...