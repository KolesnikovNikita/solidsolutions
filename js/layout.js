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

function initCheckbox() {
	const checkboxContainer = document.querySelector('.checkbox-container');
	const btns = checkboxContainer.querySelectorAll('.checkbox-button');

	btns.forEach(function (btn) {
		btn.addEventListener('click', function () {
			const forValue = btn.getAttribute('for');

			if (forValue === 'other') {
				btns.forEach(function (otherBtn) {
					if (otherBtn !== btn) {
						otherBtn.classList.remove('active-checkbox');
					}
				});
			} else {
				const otherBtn = checkboxContainer.querySelector('label[for="other"]');
				if (otherBtn) {
					otherBtn.classList.remove('active-checkbox');
				}
			}

			if (!btn.classList.contains('active-checkbox')) {
				btn.classList.add('active-checkbox');
			} else {
				btn.classList.remove('active-checkbox');
			}
		});
	});
}

function initFunctions() {
	dropDownMenu();
	initCheckbox();
	activateLink();
}

initFunctions();
