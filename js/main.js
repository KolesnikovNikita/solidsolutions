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

function changeButtonText() {
	const btn = document.getElementById('learnLink');
	const windowWidth = 1200;
	btn.innerText = 'Learn more';

	if (window.innerWidth > windowWidth) {
		btn.innerText = 'Learn More about us';
	} else {
		btn.innerText = 'Learn more';
	}

	window.addEventListener('resize', changeButtonText);
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

function initComponents() {
	selectService();
	changeButtonText();
	initCheckbox();
}

initComponents();
