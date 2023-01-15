const showFeature = document.querySelector(".show_features");
const showCompany = document.querySelector(".show_company");
const featureDropDown = document.querySelector(".features");
const companyDropDown = document.querySelector(".company")
let icon1 = document.querySelector(".icon1");
let icon2 = document.querySelector(".icon2");
const hambugerMenu = document.querySelector(".links");
const hambugerIcon = document.querySelector(".fa-solid.fa-bars");
const closeIcon = document.querySelector(".fa-solid.fa-xmark");
const toggle = document.querySelector(".toggle");
const menuItems = document.querySelectorAll(".menuItem");

function displayDropDown(displayContainer, icon) {
    displayContainer.classList.toggle("display_none");
    if (icon === icon1) {
        icon.classList.toggle("rotate");
    } else if(icon === icon2) {
        icon.classList.toggle("rotate");
    }
}

// feature dropDown
showFeature.addEventListener("click", function () {
	displayDropDown(featureDropDown, icon1);
});

// company dropDown
showCompany.addEventListener("click", function () {
    displayDropDown(companyDropDown, icon2);
});

// hambuger menu
function toggleMenu() {
    if (hambugerMenu.classList.contains("showMenu")) {
        hambugerMenu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        hambugerIcon.style.display = "block";
    } else {
        hambugerMenu.classList.add("showMenu");
		closeIcon.style.display = "block";
        hambugerIcon.style.display = "none";

    }
}

toggle.addEventListener("click", toggleMenu);

menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", toggleMenu);
});


