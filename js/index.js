function dropDownMenu() {
	const btn = document.querySelector('.burger');

	btn.addEventListener('click', function () {
		const menu = document.querySelector('.mobile-list');
		if (menu.style.display == 'none') {
			menu.style.display = 'block';
		} else {
			menu.style.display = 'none';
		}
	});
}

function initComponents() {
	dropDownMenu();
}

initComponents();
