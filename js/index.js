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

function initTabs() {
	function switchTab(newIndex) {
		tabPanels.forEach(function (tabPanel, index) {
			tabPanel.hidden = !(index === newIndex);
		});
	}

	const tabItems = document.querySelectorAll('.tab-item');
	const tabPanels = document.querySelectorAll('.tab-content');

	switchTab(0);

	tabItems.forEach(function (tabItem, index) {
		tabItem.addEventListener('click', function (event) {
			tabItems.forEach(function (tab) {
				tab.classList.remove('active-link');
			});
			event.preventDefault();
			this.classList.add('active-link');
			switchTab(index);
		});
	});
}

function initComponents() {
	dropDownMenu();
	initTabs();
}

initComponents();
