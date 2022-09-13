let hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];
let tombolDua = hamburgerMenu.getElementsByClassName('dua')[0];
let tombolSatu = hamburgerMenu.getElementsByClassName('satu')[0];
let tombolTiga = hamburgerMenu.getElementsByClassName('tiga')[0];
let ul = document.querySelector('div.navbar ul');
let header = document.getElementsByClassName('header')[0];




hamburgerMenu.addEventListener('click', () =>{
	tombolDua.classList.toggle('open');
	tombolSatu.classList.toggle('rotasi-satu');
	tombolTiga.classList.toggle('rotasi-tiga');
	ul.classList.toggle('tampil');
})


window.addEventListener('scroll', () =>{
	scrollPosition = window.scrollY;

	if(scrollPosition > 20){
		header.classList.add('shadow');
	}else{
		header.classList.remove('shadow');
	}
	
})

var scrollLogo = new SmoothScroll('.logo a[href*="#"]', {
	speed:1000
});

var scroll = new SmoothScroll('.navbar a[href*="#"]', {
	speed:1000
});
