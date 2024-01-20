// Variable declarations
let navlinks = document.querySelectorAll(".navlink");
let navContainer = document.querySelector(".nav-container");
let header = document.querySelector("header.nav");
let nav = document.querySelector(".nav");
let scrollToTopBtn = document.querySelector(".scroll-to-top-container");

// Function to dim the non-active navlinks when hovering on a navlink
navlinks.forEach((navlink) => {
	navlink.addEventListener("mouseenter", navlinkDim);
	navlink.addEventListener("mouseleave", navlinkDim);
});
function navlinkDim() {
	document.getElementById("nav-navlist").classList.toggle("navlist-dim");
}

// Function to make logo smaller while scrolling
window.addEventListener("scroll", function () {
	let scrollpos = window.scrollY;

	if (scrollpos > 0) {
		navContainer.classList.add("scrolled");
		header.classList.add("scrolled");
	} else {
		navContainer.classList.remove("scrolled");
		header.classList.remove("scrolled");
	}
});

// Function to show nav on hover
navContainer.addEventListener("mouseenter", navShow);
navContainer.addEventListener("mouseleave", navShow);
function navShow() {
	nav.classList.toggle("nav-show");
}

// Function to smooth scroll to top
scrollToTopBtn.addEventListener("click", scrollToTop);
function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}
