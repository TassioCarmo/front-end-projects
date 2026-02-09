// Function to initialize the application
const initApp = () => {
    // Get the hamburger button element from the DOM
    const hamburgerBtn = document.getElementById('hamburger-button')
    // Get the mobile menu element from the DOM
    const mobileMenu = document.getElementById('mobile-menu')

    // Function to toggle the visibility of the mobile menu
    const toggleMenu = () => {
        // Toggle the 'hidden' class of the mobile menu
        mobileMenu.classList.toggle('hidden')
        // Toggle the 'flex' class of the mobile menu
        mobileMenu.classList.toggle('flex')
        // Toggle the 'toggle-btn' class of the hamburger button
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    // Add event listener to the hamburger button to toggle the menu when clicked
    hamburgerBtn.addEventListener('click', toggleMenu)
    // Add event listener to the mobile menu to close it when clicked (if open)
    mobileMenu.addEventListener('click', toggleMenu)
}

// Add event listener to run the initApp function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', initApp)