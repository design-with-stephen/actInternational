//observer
function createIntersectionObserver(className, classToAdd) {
    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(classToAdd);
            } else {
                entry.target.classList.remove(classToAdd);
            }
        });
    });

    const hiddenElements = document.querySelectorAll(className);
    hiddenElements.forEach((el) => observer2.observe(el));
}

createIntersectionObserver('.hiddenToLeft', 'showFromLeft');
createIntersectionObserver('.hiddenToRight', 'showFromRight');
createIntersectionObserver('.hiddenToBottom', 'showFromBottom');
