const shareIcon = document.getElementById('#shareIcon');
const share = (document.getElementById = '#shareButton');
const svg = document.getElementById('#svg');

shareIcon.addEventListener('click', () => {
	btnCloseOpen();
});

function btnCloseOpen() {
	if (share.classList.contains('visible')) {
		share.classList.remove('visible');
		share.classList.add('visibleC');
		shareIcon.classList.remove('shareA');
		svg.classList.remove('active');
	} else {
		share.classList.add('visible');
		share.classList.remove('visibleC');
		shareIcon.classList.add('shareA');
		svg.classList.add('active');
	}
}
