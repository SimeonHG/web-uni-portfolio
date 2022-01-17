const hamburgerMenuButton = document.getElementById('hamburger-menu')
const navList = document.getElementById('nav-list')

function toggleMenu() {
	console.log("asdf")
	navList.classList.toggle('show')
}

hamburgerMenuButton.addEventListener('click', toggleMenu)

function displayPopup(image) {
	document.querySelector('.popup-img').style.display = 'block';
	document.querySelector('.popup-img img').src = image.getAttribute('src');
}

function closePopup() {
	document.querySelector('.popup-img').style.display = 'none';
}


const galleryImages = document.querySelectorAll('.gallery-img img')

galleryImages.forEach(image =>{
	image.onclick = () => {
		displayPopup(image)
	}
});

const x = document.querySelector('.popup-img span')
x.onclick = () =>{ 
	document.querySelector('.popup-img').style.display = 'none';
}

console.log(galleryImages)