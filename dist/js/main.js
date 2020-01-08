// Select DOM items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		menuBtn.classList.add('close');
		menu.classList.add('show');
		menuNav.classList.add('show');
		menuBranding.classList.add('show');
		navItems.forEach(item => item.classList.add('show'));

		// Set menu state
		showMenu = true;
	} else {
		menuBtn.classList.remove('close');
		menu.classList.remove('show');
		menuNav.classList.remove('show');
		menuBranding.classList.remove('show');
		navItems.forEach(item => item.classList.remove('show'));

		// Set menu state
		showMenu = false;

	}
}


// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName('img-projects');
var modalImg = document.getElementById("imgPop");
var captionText = document.getElementById("caption");
for (let i = 0; i < images.length; i++) {
	images[i].onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-img")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 
