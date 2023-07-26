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
			if (!btn.classList.contains('active-checkbox')) {
				btn.classList.add('active-checkbox');
			} else {
				btn.classList.remove('active-checkbox');
			}
		});
	});
}

function runString() {
	window.addEventListener('DOMContentLoaded', () => {
		const marqueeContainer = document.querySelector('.marquee-container');
		const marqueeList = document.getElementById('marquee');
		const marqueeItems = marqueeList.querySelectorAll('li');

		// Дублируем элементы для бесконечной прокрутки
		marqueeItems.forEach(item => {
			marqueeList.appendChild(item.cloneNode(true));
		});

		let animationOffset = 0;

		function startMarquee() {
			animationOffset -= 1;
			marqueeList.style.transform = `translateX(${animationOffset}px)`;

			// Если прокрутка достигла конца одной копии списка, переместим начало списка в конец
			const firstItemWidth = marqueeItems[0].offsetWidth;
			if (Math.abs(animationOffset) >= firstItemWidth) {
				animationOffset = 0;
				marqueeList.style.transform = `translateX(${animationOffset}px)`;
			}

			requestAnimationFrame(startMarquee);
		}

		// Устанавливаем ширину контейнера равной ширине прокручиваемого списка
		marqueeContainer.style.width = marqueeList.offsetWidth + 'px';

		// Запускаем анимацию после загрузки контента
		startMarquee();
	});
}

function initComponents() {
	dropDownMenu();
	selectService();
	initCheckbox();
	activateLink();
}

initComponents();
