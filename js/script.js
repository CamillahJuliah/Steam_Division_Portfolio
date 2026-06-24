let breatheTime = 0;
let blinking = false;
let blinkScale = 1;

const eye = document.querySelector(".eye");
const iris = document.querySelector(".iris");

let targetX = 0;
let targetY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", function (event) {
    const eyeRect = eye.getBoundingClientRect();

    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);

    targetX = Math.cos(angle) * 18;
    targetY = Math.sin(angle) * 12;
});

function animateEye() {
    breatheTime += 0.03;

    const microX = Math.sin(breatheTime) * 0.8;
    const microY = Math.cos(breatheTime * 0.8) * 0.5;

    currentX += (targetX - currentX) * 0.12;
    currentY += (targetY - currentY) * 0.12;

    iris.style.transform =
        `translate(${currentX + microX}px, ${currentY + microY}px) scale(1.08)`;

    requestAnimationFrame(animateEye);
}

function blink() {
    if (blinking) return;

    blinking = true;
    eye.classList.add("blink");

    setTimeout(() => {
        eye.classList.remove("blink");
        blinking = false;
    }, 160);
}

function randomBlink() {
    blink();

    const nextBlink = Math.random() * 5000 + 3000;

    setTimeout(randomBlink, nextBlink);
}

animateEye();
setTimeout(randomBlink, 3000);

