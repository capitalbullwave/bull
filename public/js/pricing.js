/* PAGE LOADER */
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 500);
    }
});

/* NAVBAR SHADOW */
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");

    if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 20);
    }
});

/* MOBILE MENU */
function openMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu) {
        mobileMenu.classList.add("open");
        document.body.style.overflow = "hidden";
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu) {
        mobileMenu.classList.remove("open");
        document.body.style.overflow = "";
    }
}

/* CURSOR GLOW */
const cursor = document.querySelector(".cursor-glow");

if (cursor) {
    window.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });
}

/* REVEAL ANIMATION */
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
} else {
    revealElements.forEach(el => {
        el.classList.add("active");
    });
}

/* COUNTER */
const counters = document.querySelectorAll(".counter");

if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = Number(counter.dataset.target || 0);

                let count = 0;

                const updateCounter = () => {
                    const increment = target / 100;
                    count += increment;

                    if (count < target) {
                        counter.innerText = Math.ceil(count).toLocaleString();
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target.toLocaleString();
                    }
                };

                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}