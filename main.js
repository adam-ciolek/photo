import { init } from "./animationGSAP.js";
import { nav } from "./nav.js";

// take year
let year = document.querySelector(".year");
const span = document.createElement("span");
const date = new Date().getFullYear();

span.textContent = date;
year.append(span);

function invok() {
	init();
	nav();
}

invok();
