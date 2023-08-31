
// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the backdrop element
    const backdrop = document.querySelector('.backdrop');

    // Select all elements with the class 'menu-toggle'
    const menuToggle = document.querySelectorAll('.menu-toggle');

    // Select the main sidebar element
    const sidebar = document.querySelector('.main-sidebar');

    // Select the filters element
    const filters = document.querySelector('.filters');

    // Add click event listener to each 'menu-toggle' element
    menuToggle.forEach(item => {
        item.addEventListener('click', () => {
            // Check if the screen width is wide
            const isWideScreen = window.innerWidth >= 792;
            if(isWideScreen) {
                // Toggle classes and padding for wide screens
                document.body.classList.toggle('sidebar-extended-padding');
                sidebar.classList.toggle('extended');
                filters.classList.toggle('sidebar-extended-padding');
            }

            // Check if the screen width is narrow
            const isNarrowScreen = window.innerWidth <= 792;
            if(isNarrowScreen) {
                if(sidebar.classList.contains('extended')) {
                    // Toggle classes and backdrop for narrow screens with an extended sidebar
                    document.body.classList.toggle('scrollbar-hidden');
                    backdrop.classList.toggle('show');
                    sidebar.classList.toggle('open');
                } else {
                    // Toggle classes and backdrop for narrow screens with a collapsed sidebar
                    sidebar.classList.toggle('extended');
                    backdrop.classList.toggle('show');
                    sidebar.classList.toggle('open');
                }
            }
        });
    });

    // Function to handle window resize
    const handleResize = () => {
        // Minimum width for considering a wide screen
        const minWidth = 792;
        
        // If the window width is greater than or equal to the minimum width, hide the backdrop
        if(window.innerWidth >= minWidth) {
            backdrop.classList.remove('show');
        }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
});
