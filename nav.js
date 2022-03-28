export function nav() {
	const nav = document.querySelector(".nav");
	const logo = document.querySelector(".nav__logo");
	const backgroundNav = document.querySelector(".nav-background");

	window.document.addEventListener("scroll", () => {
		if (window.scrollY >= 100) {
			nav.style.marginTop = "20px";
			logo.style.fontSize = 3.2 + "rem";
			backgroundNav.classList.add("nav-background--show");
		} else if (window.scrollY < 1) {
			nav.style.marginTop = "40px";
			logo.style.fontSize = 4.8 + "rem";
			backgroundNav.classList.remove("nav-background--show");
		}
	});
}
