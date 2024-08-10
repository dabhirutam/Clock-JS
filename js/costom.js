// Select the clock container and all number elements
const clock = document.querySelector('.clock');
const numbers = document.querySelectorAll('.number');

// Calculate the center and radius of the clock
const radius = clock.offsetWidth / 2;
const centerX = clock.offsetWidth / 2;
const centerY = clock.offsetHeight / 2;

// Position the numbers around the clock face
numbers.forEach((number, index) => {
    // Each hour number is positioned at intervals of 30 degrees
    const angle = (index + 10) * 30; // 30 degrees per hour
    const radians = (angle * Math.PI) / 180; // Convert angle to radians

    // Calculate the position of the number
    const x = centerX + radius * 0.8 * Math.cos(radians);
    const y = centerY + radius * 0.8 * Math.sin(radians);

    // Set the position of the number
    number.style.left = `${x}px`;
    number.style.top = `${y}px`;
});

// Select the clock hands and their corresponding elements
let c_sec = document.getElementById('c-sec'); // Second hand
let c_min = document.getElementById('c-min'); // Minute hand
let c_hr = document.getElementById('c-hr');   // Hour hand
let sec = document.getElementById('sec');     // Second display
let min = document.getElementById('min');     // Minute display
let hr = document.getElementById('hr');       // Hour display

// Update the clock every second
setInterval(() => {
    // Function to update the clock display and hands
    const now = new Date(); // Get current date and time
    let h = now.getHours(); // Current hour
    let m = now.getMinutes(); // Current minute
    let s = now.getSeconds(); // Current second
    let ch = 0;
    
    ch = m / 2;
    const pc = (ce, te, hand) => {
        // Function to format numbers to always display two digits
        // Update the display for seconds, minutes, and hours
        ce.innerHTML = te < 10 ? "0" + te : ce.innerHTML = te;
        // Update the rotation of clock hands
        hand.style.transform = `rotate(${te == h ? te * 30 + ch - 180 : te * 6 - 180}deg)`;
    };

    s++;
    pc(sec, s, c_sec);
    pc(min, m, c_min);
    pc(hr, h, c_hr);

    if (s == 60) s = 0, m++;
    if (m == 60) m = 0, h++;
    if (h == 24) h = 0;
}, 1000);
