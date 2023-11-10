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
