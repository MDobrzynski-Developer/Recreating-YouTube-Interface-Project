
// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the middle section of the navbar
    const navbarMiddle = document.querySelector('.navbar-middle');
    
    // Select the search button
    const searchBtn = document.querySelector('.search-btn');
    
    // Select the back button
    const backBtn = document.querySelector('.back-btn');
    
    // Track whether the navbar is currently active or not
    let isNavbarActive = false;

    // Function to toggle the navbar's active state
    const toggleNavbar = () => {
        if(isNavbarActive) {
            // If active, remove the 'active' class to hide the navbar
            navbarMiddle.classList.remove('active');
        } else {
            // If not active, add the 'active' class to show the navbar
            navbarMiddle.classList.add('active');
        }
        // Toggle the navbar's active state
        isNavbarActive = !isNavbarActive;
    };

    // Function to handle the click on the search button
    const handleSearchBtnClick = () => {
        // Only toggle the navbar if the window width is small
        if(window.innerWidth <= 657) {
            toggleNavbar();
        }
    };

    // Function to handle the click on the back button
    const handleBackBtnClick = () => {
        // Only toggle the navbar if the window width is small
        if(window.innerWidth <= 657) {
            toggleNavbar();
        }
    };

    // Attach event listeners to the search and back buttons
    searchBtn.addEventListener('click', handleSearchBtnClick);
    backBtn.addEventListener('click', handleBackBtnClick);

    // Listen for window resize events
    window.addEventListener('resize', () => {
        // If the window width becomes larger, deactivate the navbar and remove 'active' class
        if(window.innerWidth > 657) {
            navbarMiddle.classList.remove('active');
            isNavbarActive = false;
        }
    });
});
