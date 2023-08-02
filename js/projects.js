function techFilter() {
	const filterContainer = document.getElementById('techs-container');
	const links = filterContainer.querySelectorAll('.select-button');

	links.forEach(function (link) {
		link.addEventListener('click', function () {
			if (!link.classList.contains('active-select')) {
				link.classList.add('active-select');
			} else {
				link.classList.remove('active-select');
			}
		});
	});
}

techFilter();
