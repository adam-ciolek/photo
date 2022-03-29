let tl = gsap.timeline({ ease: "power2.out" });
gsap.registerPlugin(ScrollTrigger);
// animate front page before hero section and text
// --------- START --------
function animationTop() {
	tl.to("#open-background--title", { y: "-100%", opacity: 0, duration: 1 });

	tl.to(".open-background__top__one", {
		y: "-100%",
		duration: 0.75,
	}).delay(2);
	tl.to(
		".open-background__top__two",
		{ y: "-100%", duration: 1 },
		">-0.75"
	).delay(2);
	tl.to(
		".open-background__top__three",
		{ y: "-100%", duration: 1 },
		">-0.75"
	).delay(2);
	tl.to(
		".open-background__top__four",
		{ y: "-100%", duration: 1 },
		">-0.75"
	).delay(2);

	// remove front page before hero section to make some action
	tl.to(".open-background", { y: "-100%" });
}
// -------- END --------

// animate background hero
// ------ START -----
function animationBackground() {
	tl.fromTo(".background", { scale: 1.1 }, { scale: 1, duration: 2.5 });
}
// ------- END ------

// animate nav show logo and burger
// ------ START ------
function animationShowNav() {
	tl.to([".nav__logo", ".nav__hamburger"], { opacity: 1, duration: 1 });
	tl.fromTo(
		[".hero__title", ".hero__subtitle"],
		{ y: "20px", opacity: 0 },
		{ y: 0, opacity: 1, duration: 1 }
	);
	tl.to(".scroll", { opacity: 1, duration: 1 });
	tl.fromTo(
		".scroll path",
		{ y: "-3px", duration: 1.5 },
		{ y: "3px", repeat: -1, duration: 1.5 }
	);
}
// ------END -------

// animation when all page is loaded

function aniamteGalleryWords() {
	gsap.to(".gallery__one__title", {
		scrollTrigger: {
			trigger: ".gallery__one__title",
			start: "-=400px 300px",
			end: "-=200px 400px",
		},
		y: "-70%",
		duration: 1,
		opacity: 1,
	});

	gsap.to(".gallery__one__right", {
		scrollTrigger: {
			trigger: ".gallery__one__right",
			start: "top 400px",
			end: "100px 430px",
		},
		scale: 1,
		duration: 1,
	});

	gsap.to(".gallery__one__left", {
		scrollTrigger: {
			trigger: ".gallery__one__left",
			start: "top 400px",
			end: "100px 430px",
		},
		scale: 1,
		duration: 1,
	});

	gsap.to(".gallery__two__title", {
		scrollTrigger: {
			trigger: ".gallery__two__title",
			start: "-=400px 300px",
			end: "-=200px 400px",
		},
		y: "-70%",
		duration: 1,
		opacity: 1,
	});

	gsap.to(".gallery__two__left", {
		scrollTrigger: {
			trigger: ".gallery__two__left",
			start: "top 400px",
			end: "100px 430px",
		},
		scale: 1,
		duration: 1,
	});

	gsap.to(".gallery__two__right", {
		scrollTrigger: {
			trigger: ".gallery__two__right",
			start: "top 400px",
			end: "100px 430px",
		},
		scale: 1,
		duration: 1,
	});
}

// Invoked all animation
export function init() {
	animationTop();
	animationBackground();
	animationShowNav();
	aniamteGalleryWords();
}
