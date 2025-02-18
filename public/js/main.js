document.addEventListener("DOMContentLoaded", function () {
    // **🔹 漢堡選單功能**
    const menuButton = document.querySelector(".hamburger-menu");
    const menu = document.querySelector(".navbar-auth-slide");
    const overlay = document.querySelector(".menu-overlay");
    const closeButton = document.querySelector(".close-menu");

    if (menuButton && menu && overlay && closeButton) {
        menuButton.addEventListener("click", function () {
            menu.classList.add("open");
            overlay.classList.add("open");
        });

        closeButton.addEventListener("click", function () {
            menu.classList.remove("open");
            overlay.classList.remove("open");
        });

        overlay.addEventListener("click", function () {
            menu.classList.remove("open");
            overlay.classList.remove("open");
        });
    }

    // **🔹 語言切換**
    document.querySelectorAll(".dropdown-menu li").forEach((item) => {
        item.addEventListener("click", function () {
            const lang = item.getAttribute("data-lang");
            if (lang) {
                localStorage.setItem("language", lang);
                location.reload();
            }
        });
    });

    // **🔹 Swiper (輪播) 功能**
    const slides = document.querySelectorAll(".swiper-slide");
    const prevButton = document.querySelector(".swiper-button-prev");
    const nextButton = document.querySelector(".swiper-button-next");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    if (slides.length > 0 && prevButton && nextButton) {
        prevButton.addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        });

        nextButton.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        });

        showSlide(currentIndex);
    }
});
