// animate counters

function countWhenVisible(element, targetCount, speed) {
    let hasCounted = false;
    let startTime = null;
    let observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
            hasCounted = true;
            startTime = performance.now();
            let count = 0;
            let duration = speed;
            let interval = setInterval(() => {
                let elapsedTime = performance.now() - startTime;
                let progress = elapsedTime / duration;
                if (progress >= 1) {
                    clearInterval(interval);
                    element.innerHTML = targetCount;
                } else {
                    count = Math.floor(progress * targetCount);
                    element.innerHTML = count;
                }
            }, 20);
        }
    });
    observer.observe(element);
}
countWhenVisible(
    document.querySelector(".business-counter .counter-number"),
    5,
    1000
);
countWhenVisible(
    document.querySelector(".tires-counter .counter-number"),
    640,
    1000
);
countWhenVisible(
    document.querySelector(".wheels-counter .counter-number"),
    2200,
    2000
);
countWhenVisible(
    document.querySelector(".oil-counter .counter-number"),
    5000,
    3000
);
