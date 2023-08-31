
// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the search input element
    const searchInput = document.querySelector('.search-input');

    // Select the icon shown on the keyboard
    const keyboardIcon = document.querySelector('.search-keyboard-icon');

    // Select the search button icon
    const searchBtnIcon = document.querySelector('.search-btn-icon');

    // Select the clear button
    const clearBtn = document.querySelector('.clear-btn');

    // Function to update the search UI based on input and focus
    function updateSearchUI() {
        // Check if the search input is empty
        const isSearchInputEmpty = searchInput.value === '';

        // Check if the search input has focus
        const hasFocus = searchInput === document.activeElement;

        // Toggle the visibility of the clear button based on input
        clearBtn.classList.toggle('show', !isSearchInputEmpty);

        // Move the keyboard icon when the input is not empty
        keyboardIcon.classList.toggle('move', !isSearchInputEmpty);

        // Toggle the visibility of the search button icon based on input or focus
        searchBtnIcon.classList.toggle('show', !isSearchInputEmpty || hasFocus);
    }

    // Add event listener for when the search input gains focus
    searchInput.addEventListener('focus', () => {
        searchBtnIcon.classList.add('show');
    });

    // Add event listener for when the search input loses focus
    searchInput.addEventListener('blur', () => {
        searchBtnIcon.classList.remove('show');
    });

    // Add event listener for input changes in the search input
    searchInput.addEventListener('input', () => {
        updateSearchUI();
    });

    // Add event listener for when the clear button is clicked
    clearBtn.addEventListener('click', () => {
        // Check if the clear button is visible
        if (clearBtn.classList.contains('show')) {
            // Clear the search input's value
            searchInput.value = '';

            // Update the search UI after clearing the input
            updateSearchUI();

            // Set focus back to the search input
            searchInput.focus();
        }
    });
});
