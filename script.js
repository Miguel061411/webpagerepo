const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const menulinks = document.querySelectorAll('.nav-menu a[href^="#"]');

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("Aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

menulinks.forEach(menulink => {
	menulink.addEventListener("click", function() {
		navMenu.classList.remove("nav-menu_visible")
	})
})

/* responsive del nav bar*/

/*AQUI ESTA EL JS DEL SLIDER*/
const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}
/*AQUI TERMINA EL JS DEL SLIDER*/

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("scrolldown",window.scrollY>0);
})

/* preloader js */
var loader = document.getElementById("pre-loader");

window.addEventListener("load", function(){
    this.setTimeout(function(){
        loader.style.display = "none";
    }, 3000);
});

/*SCROLL REVEAL*/

ScrollReveal().reveal('.slider', {
    delay: 500,
    duration: 500,
    reset: true
});

ScrollReveal({ distance: '60px'});
ScrollReveal().reveal('.container', { 
	origin: 'left', 
	delay:200
});
ScrollReveal().reveal('.pabout', { 
	origin: 'top', 
	reset: true,
	delay:100
});
ScrollReveal().reveal('.h1about', { 
	origin: 'top', 
	reset: true,
	delay:100
});
ScrollReveal().reveal('.h5about', { 
	origin: 'bottom', 
	reset: true,
	delay:100
});


ScrollReveal().reveal('.imgabout', {
    rotate: {
        x: 20,
        z: 20
    },
	reset: true,
});

ScrollReveal().reveal('.imagegalery', { 
	scale: 0.90,
	reset: true 
});

ScrollReveal().reveal('.imgclients', { 
	scale: 0.100,
	reset: true 
});

ScrollReveal().reveal('.containerserv', { 
	easing: 'ease-out' ,
	reset:true
});

ScrollReveal().reveal('.cardblog', {
    distance: '500px',
    opacity: 0.9,
	reset: true,
	delay:300,
	origin: 'left'
});

ScrollReveal().reveal('form', { 
	origin: 'top', 
	reset: true,
	delay:100
});
ScrollReveal().reveal('.contacth1', { 
	origin: 'top', 
	reset: true,
	delay:100
});
ScrollReveal().reveal('.data', { 
	origin: 'left', 
	reset: true,
	delay:100
});
ScrollReveal().reveal('.links', { 
	origin: 'left', 
	reset: true,
	delay:100
});