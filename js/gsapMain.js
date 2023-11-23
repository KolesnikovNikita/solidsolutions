gsap.registerPlugin(ScrollTrigger);

gsap.from('.chat-image__1, .chat-image-desk__1', {
    scrollTrigger: {
        trigger: '.technologies-used',
        start: 'top center',
    },
    scale: 1.1,
    y: -100,
    autoAlpha: 0,
    duration: 0.8,
});

gsap.from('.chat-image__2, .chat-image-desk__2', {
    scrollTrigger: {
        trigger: '.technologies-used',
        start: 'top center',
    },
    scale: 1.1,
    x: -100,
    autoAlpha: 0,
    duration: 0.8,
});

gsap.from('.chat-image__3, .chat-image-desk__3', {
    scrollTrigger: {
        trigger: '.technologies-used',
        start: 'top center',
    },
    scale: 1.1,
    autoAlpha: 0,
    duration: 0.8,
    delay: 0.4,
});

gsap.from('.chat-image__4, .chat-image-desk__4', {
    scale: 0.6,
    autoAlpha: 0,
    duration: 0.8,
});
gsap.from('.chat-image__5, .chat-image-desk__5', { scale: 0.9, autoAlpha: 0, duration: 0.8, delay: 0.1 });
gsap.from('.chat-image__6, .chat-image-desk__6', { scale: 0.9, autoAlpha: 0, duration: 0.8, delay: 0.5 });
