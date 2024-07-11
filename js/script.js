const popUp = document.getElementById('popUp');
const icon = document.querySelector('.icon');

icon.addEventListener('mouseenter', function () {
	popUp.style.display = 'flex';
});

icon.addEventListener('mouseleave', function () {
	setTimeout(() => {
		if (!popUp.matches(':hover')) {
			popUp.style.display = 'none';
		}
	}, 100);
});

popUp.addEventListener('mouseenter', function () {
	popUp.style.display = 'flex';
});

popUp.addEventListener('mouseleave', function () {
	popUp.style.display = 'none';
});
