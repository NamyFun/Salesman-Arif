
// Tahun otomatis di footer
document.getElementById("year").textContent = new Date().getFullYear();


// Menu mobile
function toggleMenu() {
    const menu = document.querySelector(".nav-menu");

    menu.classList.toggle("active");
}


// Tutup menu setelah klik link
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        document.querySelector(".nav-menu").classList.remove("active");
    });
});

function bukaMotor() {
    document.getElementById("motor").scrollIntoView({
        behavior: "smooth"
    });
}


