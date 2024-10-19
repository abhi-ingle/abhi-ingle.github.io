document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.conference-slider .slides');

    sliders.forEach((slides) => {
        let currentSlide = 0;
        const totalSlides = slides.children.length - 1;

        setInterval(() => {
            currentSlide++;

            if (currentSlide > totalSlides) {
                slides.style.transition = 'none'; // Disable transition for the jump
                slides.style.transform = 'translateX(0)'; // Jump back to the first slide
                currentSlide = 1; // Reset slide index
                setTimeout(() => {
                    slides.style.transition = 'transform 0.5s ease'; // Re-enable the transition
                    slides.style.transform = `translateX(-${currentSlide * 100}%)`; // Move to the second slide
                }, 20); // Small delay to ensure smooth transition
            } else {
                slides.style.transform = `translateX(-${currentSlide * 100}%)`; // Slide to the next image
            }
        }, 2000); // Change slide every 2 seconds
    });

    // Modal functionality
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.querySelector(".close");

    // Attach click event to all images in slides
    document.querySelectorAll('.conference-slider img').forEach((img) => {
        img.addEventListener('click', function () {
            modal.style.display = "flex"; // Show the modal
            modalImage.src = this.src; // Set the modal image source
            modalImage.alt = this.alt; // Set the modal image alt text
        });
    });

    // Close modal when clicking on close (×)
    closeModal.addEventListener('click', function () {
        modal.style.display = "none"; // Hide the modal
    });

    // Close modal when clicking anywhere outside the modal content
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = "none"; // Hide the modal
        }
    });
});
