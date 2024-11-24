document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                container.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(container);
});