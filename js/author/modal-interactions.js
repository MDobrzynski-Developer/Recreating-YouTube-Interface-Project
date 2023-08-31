
$(document).ready(function () {
    const modal = $('.modal'); // Select the modal element
    const closeModalBtn = $('.js-modal-close-btn'); // Select the close button inside the modal

    // Add click event listener to the close button
    closeModalBtn.on('click', function () {
        modal.fadeOut('fast', function () { // Fade out the modal
            $('body').removeClass('scrollbar-hidden'); // Re-enable the scrollbar
            $(this).removeClass('active'); // Remove the 'active' class from the modal
        });
    });

    const closeButton = $('.js-modal-close-btn'); // Select the close button again (this seems redundant)
    let countdown = 5; // Set the initial countdown value to 5

    function updateButtonLabel() {
        closeButton.text(`Rozumiem ( ${countdown} )`); // Update the close button label with the countdown value
    }

    function startCountdown() {
        closeButton.prop('disabled', true); // Disable the close button
        updateButtonLabel(); // Update the button label with the current countdown value

        const interval = setInterval(function () {
            countdown--; // Decrement the countdown
            updateButtonLabel(); // Update the button label with the new countdown value

            if(countdown === 0) { // If countdown reaches 0
                clearInterval(interval); // Clear the interval
                closeButton.prop('disabled', false); // Re-enable the close button
                closeButton.text('Rozumiem'); // Reset the close button label
                countdown = 5; // Reset the countdown to 5 seconds
            }
        }, 1000); // Run the interval every 1000ms (1 second)
    }

    startCountdown(); // Start the countdown when the document is ready
});
