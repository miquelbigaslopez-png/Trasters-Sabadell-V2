/*==================================================
                MENÚ HAMBURGUESA
==================================================*/

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {

    menu.classList.toggle("active");

});

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});


/*==================================================
                COMPTADORS
==================================================*/

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let current = 0;

        const increment = target / 120;

        const updateCounter = () => {

            current += increment;

            if (current < target) {

                counter.innerText = Math.floor(current);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

};


/*==================================================
            OBSERVER SCROLL
==================================================*/

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});


document.querySelectorAll("section").forEach(section => {

    if(section.id !== "hero"){

        section.classList.add("hidden");
        observer.observe(section);

    }

});

/*==================================================
        ACTIVAR COMPTADORS UNA SOLA VEGADA
==================================================*/

let countersStarted = false;

const statsSection = document.querySelector(".stats");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting && !countersStarted) {

            countersStarted = true;

            startCounters();

        }

    });

}, {

    threshold: 0.4

});

counterObserver.observe(statsSection);


/*==================================================
            CALCULADORA
==================================================*/

const boto = document.getElementById("calcular");

boto.addEventListener("click", () => {

    let total = 0;

    document.querySelectorAll(".calc input:checked").forEach(item => {

        total += Number(item.value);

    });

    let resultat = "";

    if (total <= 2) {

        resultat = "Et recomanem un traster de 1 m²";

    }

    else if (total <= 5) {

        resultat = "Et recomanem un traster de 2 m²";

    }

    else if (total <= 8) {

        resultat = "Et recomanem un traster de 4 m²";

    }

    else if (total <= 12) {

        resultat = "Et recomanem un traster de 6 m²";

    }

    else {

        resultat = "Et recomanem un traster de 8 m² o superior";

    }

    document.getElementById("resultat").innerHTML = resultat;

});


/*==================================================
            SCROLL SUAU
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});