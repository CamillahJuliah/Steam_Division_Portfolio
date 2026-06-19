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
    currentX += (targetX - currentX) * 0.12;
    currentY += (targetY - currentY) * 0.12;

    iris.style.transform = `translate(${currentX}px, ${currentY}px) scale(1.08)`;

    requestAnimationFrame(animateEye);
}

animateEye();