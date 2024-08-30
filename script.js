// JavaScript to animate sections on scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});












const images = [
    'img/background1.jpg',
    'img/background2.jpg',
    'img/background3.jpg',
    // Add more image paths as needed
];

let currentIndex = 0;

function changeBackgroundImage() {
    const header = document.querySelector('header');
    header.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Initial call to set the first image
changeBackgroundImage();

// Change image every 5 seconds
setInterval(changeBackgroundImage, 5000);






//new card

// Example: Simple hover effect using JavaScript (optional)
document.querySelectorAll('.card3').forEach(card3 => {
    card3.addEventListener('mouseenter', () => {
        card3.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
    });
    card3.addEventListener('mouseleave', () => {
        card3.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});














// Show or hide the "Go to Top" button when scrolling
window.onscroll = function() {
    var goTopBtn = document.getElementById("goTopBtn");
    
    // If the page is scrolled more than 300px, show the button
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        goTopBtn.classList.add("show");
    } else {
        goTopBtn.classList.remove("show");
    }
};

// Function to scroll to the top
function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

