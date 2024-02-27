// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Initially select the first navigation item
    let selectedNavItem = document.querySelector("nav ul li:first-child a");
    selectedNavItem.classList.add("selected");

    document.addEventListener("keydown", function(event) {
        let currentNavItem = selectedNavItem.parentElement;
        let newNavItem;

        switch(event.key) {
            case "ArrowUp":
                newNavItem = currentNavItem.previousElementSibling || currentNavItem;
                break;
            case "ArrowDown":
                newNavItem = currentNavItem.nextElementSibling || currentNavItem;
                break;
            case "ArrowLeft":
                newNavItem = currentNavItem.previousElementSibling || currentNavItem;
                break;
            case "ArrowRight":
                newNavItem = currentNavItem.nextElementSibling || currentNavItem;
                break;
            default:
                break;
        }

        if (newNavItem !== currentNavItem) {
            selectedNavItem.classList.remove("selected");
            selectedNavItem = newNavItem.querySelector("a");
            selectedNavItem.classList.add("selected");
        }
    });
});
