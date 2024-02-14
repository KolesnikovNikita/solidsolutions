function dropDownMenu() {
    const btn = document.querySelector('.burger');
    const burgerImg = document.querySelector('.burger-icon img');
    const header = document.querySelector('.page-header__navigation');
    const dropList = document.querySelector('.list-container');

    btn.addEventListener('click', function () {
        if (!header.classList.contains('active-header')) {
            header.classList.add('active-header');
            burgerImg.src = '../../assets/images/burger-close.svg';
            dropList.style.visibility = 'visible';
        } else {
            header.classList.remove('active-header');
            burgerImg.src = '../../assets/images/burger-open.svg';
            dropList.style.visibility = 'hidden';
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

function navigationDropdown() {
    const btn = document.querySelector('.dropdown-button');
    const dropdown = document.querySelector('.dropdown-list');

    btn.addEventListener('click', function () {
        dropdown.classList.toggle('active-dropdown');
    });
}

function initFunctions() {
    dropDownMenu();
    activateLink();
    scrollUp();
    navigationDropdown();
}

initFunctions();
