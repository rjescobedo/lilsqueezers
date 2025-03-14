document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".nav-link");
    let offcanvas = document.getElementById("navbarNav");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            let targetId = this.getAttribute("href").substring(1); // Get section ID
            let targetSection = document.getElementById(targetId);

            if (targetSection) {
                event.preventDefault(); // Stop default jump behavior

                // Close the offcanvas
                let bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
                if (bsOffcanvas) {
                    bsOffcanvas.hide();
                }

                // Delay smooth scroll slightly to allow offcanvas to close first
                setTimeout(() => {
                    let offset = targetSection.offsetTop - 70; // Adjust for fixed navbar
                    window.scrollTo({
                        top: offset,
                        behavior: "smooth"
                    });
                }, 300); // Delay in milliseconds
            }
        });
    });
});