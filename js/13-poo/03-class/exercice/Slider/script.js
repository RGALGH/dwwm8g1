"use strict";
import C from "./Slider-v3.js";

C.style();
const carousel = new C(["/ressources/images/sea.jpg", "/ressources/images/lava.jpg"]);
document.body.append(carousel.carousel);
carousel.init();
const carousel2 = new C(["/ressources/images/pizza.jpg", "/ressources/images/space.jpg"]);
document.body.append(carousel2.carousel);
carousel2.init();