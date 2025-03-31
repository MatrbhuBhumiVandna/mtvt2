/**
 * Countdown Timer for Janta Raja Natak 2025
 * Starts: May 2, 2025 8:00 PM IST
 * Ends: May 8, 2025
 */

document.addEventListener('DOMContentLoaded', function() {
    // Set the target date and time (May 2, 2025 8:00 PM IST)
    const targetDate = new Date("May 2, 2025 20:00:00 GMT+0530").getTime();
    
    // Get countdown elements
    const daysElement = document.getElementById("countdown-days");
    const hoursElement = document.getElementById("countdown-hours");
    const minutesElement = document.getElementById("countdown-minutes");
    const secondsElement = document.getElementById("countdown-seconds");
    const container = document.getElementById("countdown-container");
    
    // Add animation classes to countdown boxes
    const countdownBoxes = document.querySelectorAll('.countdown-box');
    countdownBoxes.forEach((box, index) => {
        box.style.animationDelay = `${index * 0.1}s`;
        box.classList.add('slide-up');
    });
    
    // Update countdown every second
    const countdownInterval = setInterval(function() {
        // Get current date and time
        const now = new Date().getTime();
        
        // Calculate time remaining
        const distance = targetDate - now;
        
        // If countdown is over
        if (distance < 0) {
            clearInterval(countdownInterval);
            container.innerHTML = `
                <div class="countdown-ended">
                    <h3>Janta Raja Natak 2025 is happening now!</h3>
                    <p>Join us at Matru Bhumi Vandana Trust, Morbi</p>
                    <a href="events.html" class="btn">Event Details</a>
                </div>
            `;
            return;
        }
        
        // Calculate days, hours, minutes, seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the results
        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
        
        // Add pulse animation when any unit reaches below 10
        if (days < 10) daysElement.parentElement.classList.add('pulse');
        if (hours < 10) hoursElement.parentElement.classList.add('pulse');
        if (minutes < 10) minutesElement.parentElement.classList.add('pulse');
        if (seconds < 10) secondsElement.parentElement.classList.add('pulse');
        
    }, 1000);
});
