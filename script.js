let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    let totalSlides = slides.length;
    let slidesPerPage = 3;

    // Calculate the number of pages
    let totalPages = Math.ceil(totalSlides / slidesPerPage);

    // Ensure the slide index is within bounds
    if (n > totalPages) { slideIndex = 1 }
    if (n < 1) { slideIndex = totalPages }

    // Hide all slides
    for (i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
    }

    // Remove the active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the slides for the current page
    for (i = (slideIndex - 1) * slidesPerPage; i < slideIndex * slidesPerPage; i++) {
        if (slides[i]) slides[i].style.display = "block";
    }

    // Add the active class to the current dot
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    }
}

// Auto slide every 3 seconds

document.addEventListener('DOMContentLoaded', () => {
    const textBlocks = document.querySelectorAll('.text-block');
    const dynamicImage = document.getElementById('dynamic-image');

    textBlocks.forEach(block => {
        block.addEventListener('click', function() {
            // Remove active class from all text blocks
            textBlocks.forEach(item => item.classList.remove('active'));
            console.log("hi")

            // Add active class to the clicked text block
            this.classList.add('active');

            // Change the image source based on data attribute
            const newImage = this.getAttribute('data-image');
            dynamicImage.setAttribute('src', newImage);
        });
    });
});
let contactDetails = [];

// Get the modal
var modal = document.getElementById("contactFormModal");

// Get the button that opens the modal
var btn = document.getElementById("contactBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission
document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault();
    
    // Get form data
    let email = document.getElementById("email").value;
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let agreement = document.getElementById("agreement").checked;

    // Create an object with form data
    let contact = {
        email: email,
        firstName: fname,
        lastName: lname,
        agreement: agreement
    };

    // Add the contact object to the array
    contactDetails.push(contact);

    // Log the array to the console (for testing purposes)
    console.log(contactDetails);

    // Clear the form
    document.getElementById("contactForm").reset();

    // Close the modal
    modal.style.display = "none";
}

