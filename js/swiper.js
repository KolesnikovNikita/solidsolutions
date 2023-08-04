function updateSlidesPerView() {
	var windowWidth = window.innerWidth;
	var slidesPerView = 1;

	if (windowWidth >= 1024) {
		slidesPerView = 2;
	}

	swiper.params.slidesPerView = slidesPerView;
	swiper.update();
}

const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,

	slidesPerView: 1,
	slidesPerGroup: 1,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

window.addEventListener('resize', updateSlidesPerView);
updateSlidesPerView();
