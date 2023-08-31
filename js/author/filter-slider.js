
$(document).ready(function() {
    // Selecting necessary elements
    const filterList = $('.filter-list'); // The list that holds the filters
    const container = $('.filters'); // The container holding the filter list
    const sliderContainer = $('.filters'); // The container holding the filter list
    const previousButton = $('.previous'); // Button to scroll filters to the left
    const nextButton = $('.next'); // Button to scroll filters to the right

    // Function to update navigation buttons based on scroll position
    function updateNavigation() {
        const filterListWidth = filterList[0].scrollWidth; // Total width of filter list
        const containerWidth = container.width(); // Width of the container
        const scrollPosition = filterList.scrollLeft(); // Current scroll position

        // Show/hide previous button based on scroll position
        if(scrollPosition === 0) {
            previousButton.hide();
            previousButton.css({ opacity: 0, visibility: "hidden" });
        } else {
            previousButton.show();
            previousButton.css({ opacity: 1, visibility: "visible" });
        }

        // Show/hide next button based on scroll position
        if(scrollPosition + containerWidth >= filterListWidth) {
            nextButton.hide();
            nextButton.css({ opacity: 0, visibility: "hidden" });
        } else {
            nextButton.show();
            nextButton.css({ opacity: 1, visibility: "visible" });
        }
    }

    // Function to scroll the filter list
    function scrollTo(direction) {
        let scrollAmount = container.width() * 0.8; // Amount to scroll (80% of container width)
        
        if(direction === 'previous') {
            scrollAmount = -scrollAmount; // Invert scroll amount to scroll left
        }
        
        // Animating the scroll
        filterList.animate({ scrollLeft: filterList.scrollLeft() + scrollAmount }, 300, function() {
            updateNavigation(); // Update navigation buttons after scrolling
        });
    }

    // Initial navigation update
    updateNavigation();

    // Attach click event to previous button
    $('.js-previous-btn').click(function() {
        scrollTo('previous'); // Scroll to the left on previous button click
    });

    // Attach click event to next button
    $('.js-next-btn').click(function() {
        scrollTo('next'); // Scroll to the right on next button click
    });

    // Update navigation on window resize
    $(window).resize(function() {
        updateNavigation();
    });
});
