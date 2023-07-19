function dropDownMenu() {
	const btn = document.querySelector('.burger');
	const burgerImg = document.querySelector('.burger-icon img');

	btn.addEventListener('click', function () {
		const menu = document.querySelector('.mobile-list');
		if (menu.style.display == 'none') {
			menu.style.display = 'block';
			burgerImg.src = '../assets/images/burger-close.svg';
		} else {
			menu.style.display = 'none';
			burgerImg.src = '../assets/images/burger-open.svg';
		}
	});
}

function initComponents() {
	dropDownMenu();
}

initComponents();
