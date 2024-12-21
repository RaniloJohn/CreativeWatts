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