const header = document.querySelector(".header");

window.addEventListener("scroll", function() {
    header.classList.toggle("header--scroll", window.scrollY > 0);
});
console.log(header)