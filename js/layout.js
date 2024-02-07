function dropDownMenu() {
    const btn = document.querySelector('.burger');
    const burgerImg = document.querySelector('.burger-icon img');
    const header = document.querySelector('.page-header__navigation');

    btn.addEventListener('click', function () {
        if (!header.classList.contains('active-header')) {
            header.classList.add('active-header');
            burgerImg.src = '../../assets/images/burger-close.svg';
        } else {
            header.classList.remove('active-header');
            burgerImg.src = '../../assets/images/burger-open.svg';
        }
    });
}

function activateLink() {
    const links = document.querySelectorAll('.link-item');

    function chooseLink(linkElement) {
        links.forEach((link) => {
            link.classList.remove('active-item');
        });
        linkElement.classList.add('active-item');
    }

    links.forEach((link) => {
        link.addEventListener('click', function () {
            chooseLink(this);
        });
    });

    chooseLink(links[0]);
}

function scrollUp() {
    const scrollUp = document.querySelector('.scroll-up');
    const offset = 100;

    function getTop() {
        return window.scrollY || document.documentElement.scrollTop;
    }

    window.addEventListener('scroll', function () {
        if (getTop() > offset) {
            scrollUp.classList.add('scroll-up-active');
        } else {
            scrollUp.classList.remove('scroll-up-active');
        }
    });

    scrollUp.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
}

function initFunctions() {
    dropDownMenu();
    activateLink();
    scrollUp();
}

initFunctions();
