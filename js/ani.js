document.addEventListener("DOMContentLoaded", function() {
    const animations = [
        'animate__slideInLeft',
        'animate__zoomInLeft',
        'animate__zoomInRight',
        'animate__slideInRight',
        'animate__fadeInUpBig',
        'animate__heartBeat',
        'animate__bounceInLeft'
    ];

    let observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let animationClass = entry.target.dataset.animation;
                entry.target.classList.add(animationClass);
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    });

    document.querySelectorAll('.animate-on-scroll').forEach(section => {
        observer.observe(section);
    });
});
