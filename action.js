  // Countdown timer
  function updateCountdown() {
    const classDate = new Date('April 14, 2025 20:00:00').getTime();
    const now = new Date().getTime();
    const distance = classDate - now;
    
    if (distance < 0) {
        document.getElementById('countdown').innerHTML = "<div class='counter-item'>Class has started!</div>";
        return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Confetti effect
function createConfetti() {
    const colors = ['#4a6fa5', '#ff9f1c', '#e63946', '#166088', '#edf2f4'];
    const container = document.querySelector('.cta-section');
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = -10 + 'px';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        container.appendChild(confetti);
        
        const animationDuration = Math.random() * 3 + 2;
        
        const keyframes = [
            { 
                transform: `translate(${Math.random() * 200 - 100}px, ${window.innerHeight}px) rotate(${Math.random() * 360}deg)`,
                opacity: 1 
            },
            { opacity: 0 }
        ];
        
        const options = {
            duration: animationDuration * 1000,
            easing: 'cubic-bezier(0.1, 0.8, 0.9, 1)'
        };
        
        confetti.animate(keyframes, options);
        
        setTimeout(() => {
            confetti.remove();
        }, animationDuration * 1000);
    }
}

// Button interaction
document.getElementById('joinButton').addEventListener('click', function() {
    createConfetti();
    
    // Pulse animation
    this.classList.remove('pulse');
    void this.offsetWidth; // Trigger reflow
    this.classList.add('pulse');
    
    // Open WhatsApp link after a slight delay for better UX
    setTimeout(() => {
        window.location.href = "https://chat.whatsapp.com/ChcAkF8V6Gz8OyrzSWBsfs";
    }, 300);
});

// Animate list items on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('li').forEach((li, index) => {
    li.style.opacity = 0;
    li.style.transform = 'translateX(-20px)';
    li.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    observer.observe(li);
});