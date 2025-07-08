 function toggleMenu() {
          const navList = document.querySelector('nav ul');
          navList.classList.toggle('show');
        }

        document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.querySelector(".back-to-top");

    // Scroll to top smoothly when clicked
    backToTop.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Show or hide based on scroll position
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });
});

