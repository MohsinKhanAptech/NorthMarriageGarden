// Variable declarations
let navlinks = document.querySelectorAll("nav .navlink");
let navlist = document.querySelector("nav > .navlist");
let navContainer = document.querySelector(".header-container");
let nav = document.querySelector(".nav");
let scrollToTopBtn = document.querySelector(".scroll-to-top-container");

// Function to dim the non-active navlinks when hovering on a navlink
navlinks.forEach((navlink) => {
	navlink.addEventListener("mouseenter", navlinkDim);
	navlink.addEventListener("mouseleave", navlinkDim);
});
function navlinkDim() {
	navlist.classList.toggle("navlist-dim");
}

// Function to make logo smaller while scrolling
scrollUpdate();

window.addEventListener("scroll", function () {
	scrollUpdate();
});

function scrollUpdate() {
	let scrollpos = window.scrollY;

	if (scrollpos > 0) {
		navContainer.classList.add("scrolled");
	} else {
		navContainer.classList.remove("scrolled");
	}
}

// Function to show nav on hover
navContainer.addEventListener("mouseenter", navShow);
navContainer.addEventListener("mouseleave", navHide);
function navShow() {
	nav.classList.add("nav-show");
}
function navHide() {
	nav.classList.remove("nav-show");
}

// Function to smooth scroll to top
scrollToTopBtn.addEventListener("click", scrollToTop);
function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}
