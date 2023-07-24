function dropDownMenu() {
	const btn = document.querySelector('.burger');
	const burgerImg = document.querySelector('.burger-icon img');
	const header = document.querySelector('.page-header__navigation');

	btn.addEventListener('click', function () {
		const menu = document.querySelector('.mobile-list');
		if (menu.style.display == 'none') {
			header.classList.add('active-header');
			menu.style.display = 'block';
			burgerImg.src = '../assets/images/burger-close.svg';
		} else {
			menu.style.display = 'none';
			header.classList.remove('active-header');
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

function initCheckbox() {
	const checkboxContainer = document.querySelector('.checkbox-container');
	const btns = checkboxContainer.querySelectorAll('.checkbox-button');

	btns.forEach(function (btn) {
		btn.addEventListener('click', function () {
			if (!btn.classList.contains('active-checkbox')) {
				btn.classList.add('active-checkbox');
			} else {
				btn.classList.remove('active-checkbox');
			}
		});
	});
}

// Slider

function cardSlider() {
	document.addEventListener('DOMContentLoaded', function () {
		const slider = document.querySelector('.customer.slider');
		const cardsContainer = slider.querySelector('.customer__cards');
		const prevButton = slider.querySelector('.prev-button');
		const nextButton = slider.querySelector('.next-button');
		const cards = slider.querySelectorAll('.card');
		const cardWidth = cards[0].offsetWidth; // Фиксированная ширина карточек (310px)
		let currentCardIndex = 0;

		function showCard(index) {
			if (index >= 0 && index < cards.length) {
				const offset = -cardWidth * index;
				// Проверяем, чтобы карточка не выходила за границы видимой области
				const maxOffset = -(cards.length - 1) * cardWidth;
				cardsContainer.style.transform = `translateX(${Math.max(
					offset,
					maxOffset
				)}px)`;
				currentCardIndex = index;
			}
		}

		function showPreviousCard() {
			const newIndex = currentCardIndex - 1;
			showCard(newIndex);
		}

		function showNextCard() {
			const newIndex = currentCardIndex + 1;
			showCard(newIndex);
		}

		prevButton.addEventListener('click', showPreviousCard);
		nextButton.addEventListener('click', showNextCard);
	});
}

function initComponents() {
	dropDownMenu();
	initTabs();
	initCheckbox();
	cardSlider();
}

initComponents();
