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

function selectService() {
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
			if (btn.getAttribute('for') == 'other') {
				btns.forEach(function (otherBtn) {
					if (otherBtn != btn) {
						otherBtn.classList.remove('active-checkbox');
					}
				});
			} else {
				if (!btn.classList.contains('active-checkbox')) {
					btn.classList.add('active-checkbox');
				} else {
					btn.classList.remove('active-checkbox');
				}
			}
		});
	});
}

function initComponents() {
	dropDownMenu();
	selectService();
	initCheckbox();
	activateLink();
}

initComponents();
