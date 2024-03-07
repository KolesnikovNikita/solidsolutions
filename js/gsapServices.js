gsap.registerPlugin(ScrollTrigger);

gsap.from('.cards-list__item', {
    scrollTrigger: {
        trigger: '.head-content',
        start: '-500px top',
    },
    x: -100,
    opacity: 0,
    duration: 0.4,
    stagger: 0.2,
});

gsap.from('.tech-list', {
    scrollTrigger: {
        trigger: '.services-page__technologies',
        start: '-500px top',
    },
    y: -100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.4,
});

gsap.from('.desktop-animation__image-background', {
    scrollTrigger: {
        trigger: '.card-list',
        start: 'center end',
    },
    y: -50,
    opacity: 0,
    duration: 0.8,
});

gsap.from('.desktop-animation-part', {
    scrollTrigger: {
        trigger: 'services-page__plan',
        start: 'center end',
    },
    scale: 1.2,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
});
