// app.js

// Functionality for dashboard interactivity
const dashboard = document.getElementById('dashboard');

// Function to upload logo
function uploadLogo() {
    const logoInput = document.getElementById('logoUpload');
    logoInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            const logoDisplay = document.getElementById('logoDisplay');
            logoDisplay.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });
}

// Function to navigate sections
function navigateTo(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => {
        sec.style.display = 'none';
    });
    document.getElementById(section).style.display = 'block';
}

// Initialize functionalities
uploadLogo();

// Example of event listener for navigation 
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        navigateTo(this.dataset.target);
    });
});
