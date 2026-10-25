const buttonsText = document.querySelectorAll(".buttonText");

buttonsText.forEach(text => {

    const content = text.dataset.text;

    content.split("").forEach((letter, index) => {

        const letterContainer = document.createElement("span");
        letterContainer.className = "letter";

        letterContainer.style.setProperty(
            "--delay",
            `${index * 0.02}s`
        );

        letterContainer.innerHTML = `
            <span>${letter}</span>
            <span>${letter}</span>
        `;

        text.appendChild(letterContainer);
    });

});


const clock = document.getElementById("clock");
const date = document.getElementById("date");


function updateDateTime() {
    const now = new Date();

    // Hora
    clock.textContent = now.toLocaleTimeString("en-GB", {
        hour12: false
    });

    // Fecha
    const weekday = now.toLocaleDateString("en-US", {
        weekday: "long"
    });

    const day = String(now.getDate()).padStart(2, "0");
    const year = now.getFullYear();

    date.textContent = `${weekday} ${day}, ${year}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);

// ELEMENTOS CON ANIMACIÓN
const fadeElements = document.querySelectorAll(".fadeIn");
const textAnimations = document.querySelectorAll(".textAn");

// ANIMACIÓN AL HACER SCROLL
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }

    });

}, {
    rootMargin: "0px 0px -15% 0px"
});

// OBSERVAR AMBOS TIPOS DE ELEMENTOS
fadeElements.forEach(element => observer.observe(element));
textAnimations.forEach(element => observer.observe(element));