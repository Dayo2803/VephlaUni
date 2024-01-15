let dropdowns = document.querySelectorAll('.dropdown--menu', '.k-nav-menu');
console.log("Start the program");
console.log(dropdowns);
dropdowns.forEach(element =>  {
    element.addEventListener('mouseout', function () {
        console.log("mouse out");
        element.style.color = "red";
    })
});