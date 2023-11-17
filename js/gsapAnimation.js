gsap.registerPlugin(ScrollTrigger);

// gsap.from('.cards-list__item', {
//     scrollTrigger: {
//         trigger: '.head-content',

//         start: '-500px top',
//     },
//     x: -100,
//     opacity: 0,
//     duration: 0.4,
//     stagger: 0.2,
// });

// gsap.from('.tech-list', {
//     scrollTrigger: {
//         trigger: '.services-page__technologies',
//         markers: true,
//         start: '-500px top',
//     },
//     y: -100,
//     opacity: 0,
//     duration: 0.8,
//     stagger: 0.4,
// });

gsap.from('.chat-image__1', {
    scrollTrigger: {
        trigger: '.technologies-used',
        start: 'top center',
    },
    y: -100,
    autoAlpha: 0,
    once: true,
    duration: 0.8,
    scale: 1.1,
});
