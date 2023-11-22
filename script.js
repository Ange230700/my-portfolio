function toggleMenu() {
    const menu = document.querySelector(".hamburger-menu__links");
    const hamburgerIcon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    hamburgerIcon.classList.toggle("open");
}