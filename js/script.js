const eye = document.querySelector(".eye");
const iris = document.querySelector(".iris");

document.addEventListener("mousemove", function (event) {
    const eyeRect = eye.getBoundingClientRect();

    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);

    const moveX = Math.cos(angle) * 18;
    const moveY = Math.sin(angle) * 12;

    iris.style.transform = `translate(${moveX}px, ${moveY}px)`;
});