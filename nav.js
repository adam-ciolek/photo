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

// burger close/open
let tl = gsap.timeline({ ease: "power2.out" });

const hamOpen = document.querySelector(".nav__hamburger");
const hamClose = document.querySelector(".nav__menu__close");

const linkOne = document.querySelector(".nav__menu__items__one");
const linkTwo = document.querySelector(".nav__menu__items__two");
const linkThree = document.querySelector(".nav__menu__items__three");
const linkFour = document.querySelector(".nav__menu__items__four");

// amimation for open menu
hamOpen.addEventListener("click", () => {
	tl.to(".nav__menu", { x: 0, duration: 1 });
	tl.to(linkOne, { opacity: 1 });
	tl.to(linkTwo, { opacity: 1 });
	tl.to(linkThree, { opacity: 1 });
	tl.to(linkFour, { opacity: 1 });
});

// amimation for close menu
hamClose.addEventListener("click", () => {
	tl.to(linkOne, { opacity: 0 });
	tl.to(linkTwo, { opacity: 0 });
	tl.to(linkThree, { opacity: 0 });
	tl.to(linkFour, { opacity: 0 });
	tl.to(".nav__menu", { x: "100%", duration: 1 });
});

// close hamburger menu when you click on some link
const allLinks = document.querySelectorAll(".nav__menu__items a");

allLinks.forEach((el) => {
	el.addEventListener("click", () => {
		tl.to(linkOne, { opacity: 0 });
		tl.to(linkTwo, { opacity: 0 });
		tl.to(linkThree, { opacity: 0 });
		tl.to(linkFour, { opacity: 0 });
		tl.to(".nav__menu", { x: "100%", duration: 1 });
	});
});

// takes single links and when you hover give link setAttribute scr img
// const boxImg = document.querySelector(".nav__menu__img");
// const newBoxImg = document.createElement("img");

// linkOne.addEventListener("mouseover", () => {
// 	newBoxImg.setAttribute("src", "./assets/bg-front.png");
// 	boxImg.appendChild(newBoxImg);
// });

// linkTwo.addEventListener("mouseover", () => {
// 	newBoxImg.setAttribute("src", "./assets/picture/2.png");
// 	boxImg.appendChild(newBoxImg);
// });

// linkThree.addEventListener("mouseover", () => {
// 	newBoxImg.setAttribute("src", "./assets/picture/3.png");
// 	boxImg.appendChild(newBoxImg);
// });

// linkFour.addEventListener("mouseover", () => {
// 	newBoxImg.setAttribute("src", "./assets/picture/4.png");
// 	boxImg.appendChild(newBoxImg);
// });

// linkOne.addEventListener("mouseout", () => {
// 	newBoxImg.setAttribute("src", "");
// 	boxImg.appendChild(newBoxImg);
// });
// linkTwo.addEventListener("mouseout", () => {
// 	newBoxImg.setAttribute("src", "");
// 	boxImg.appendChild(newBoxImg);
// });
// linkThree.addEventListener("mouseout", () => {
// 	newBoxImg.setAttribute("src", "");
// 	boxImg.appendChild(newBoxImg);
// });
// linkFour.addEventListener("mouseout", () => {
// 	newBoxImg.setAttribute("src", "");
// 	boxImg.appendChild(newBoxImg);
// });
