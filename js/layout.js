function dropDownMenu() {
	const btn = document.querySelector('.burger');
	const burgerImg = document.querySelector('.burger-icon img');
	const header = document.querySelector('.page-header__navigation');

	btn.addEventListener('click', function () {
		const menu = document.querySelector('.mobile-list');
		if (!header.classList.contains('active-header')) {
			header.classList.add('active-header');
			burgerImg.src = '../assets/images/burger-close.svg';
		} else {
			header.classList.remove('active-header');
			burgerImg.src = '../assets/images/burger-open.svg';
		}
	});
}

function activateLink() {
	const links = document.querySelectorAll('.link-item');

	function chooseLink(linkElement) {
		links.forEach(link => {
			link.classList.remove('active-item');
		});
		linkElement.classList.add('active-item');
	}

	links.forEach(link => {
		link.addEventListener('click', function () {
			chooseLink(this);
		});
	});

	chooseLink(links[0]);
}

function initFunctions() {
	dropDownMenu();
	activateLink();
}

initFunctions();
