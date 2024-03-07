document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.industries-page__list-item');
    const screenWidth = window.innerWidth;
    console.log(screenWidth);

    if (screenWidth > 1200) {
        items.forEach(function (item) {
            const image = item.querySelector('.cardItem');
            if (image) {
                image.style.display = 'none';
            }

            item.addEventListener('mouseover', function () {
                image.style.display = 'block';
                image.style.position = 'absolute';
                image.style.bottom = '50px';
            });

            item.addEventListener('mouseout', function () {
                image.style.display = 'none';
            });
        });
    }
});
