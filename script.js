const typingText = document.getElementById("typing-text");
const phrases = [
    "Web Applications.",
    "Data Analysis Tools.",
    "Clean, Aesthetic Code.",
    "Interactive Games."
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        // Remove char
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50; // Faster when deleting
    } else {
        // Add char
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 100;
    }

    // If word is complete
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingDelay = 2000; // Pause at the end of the phrase
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingDelay = 500; // Pause before typing next phrase
    }

    setTimeout(typeEffect, typingDelay);
}

// Start the typing effect when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    if(phrases.length) {
        setTimeout(typeEffect, 1000);
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
