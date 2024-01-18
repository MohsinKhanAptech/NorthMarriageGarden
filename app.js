// Function to dim the non-active navlinks when hovering on a navlink
function navlinkDim(navlist) {
	document.getElementById("nav-navlist").classList.toggle("navlist-dim");
}

// Function to make logo smaller while scrolling
let scrollpos = window.scrollY;
let navContainer = document.querySelector(".nav-container");
let header = document.querySelector("header.nav");

window.addEventListener("scroll", function () {
	scrollpos = window.scrollY;

	if (scrollpos > 0) {
		navContainer.classList.add("scrolled");
		header.classList.add("scrolled");
	} else {
		navContainer.classList.remove("scrolled");
		header.classList.remove("scrolled");
	}

	console.log(scrollpos);
});

// Function
let nav = document.querySelector(".nav");
function navShow() {
	nav.classList.toggle("nav-show");
}
