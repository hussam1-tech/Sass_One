const MENU = document.querySelector(".menu");
MENU.addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelector("header .navbar").classList.toggle("active");
})