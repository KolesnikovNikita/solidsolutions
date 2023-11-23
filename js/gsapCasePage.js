gsap.registerPlugin(ScrollTrigger);

gsap.from('.anim-item', {
    scrollTrigger: {
        trigger: '.case-content__roadmap',
        start: 'top center',
    },
    scale: 1.2,
    stagger: 0.1,
    opacity: 0,
    duration: 0.8,
});
