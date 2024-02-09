document.addEventListener('DOMContentLoaded', function () {
    const starryNight = document.getElementById('starry-night');
    let numberOfStars;

    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';

        // Set random size
        const starSize = Math.random() * 3 + 1; // Adjust size range by changing multiplier and adding a base value
        star.style.width = `${starSize}px`;
        star.style.height = `${starSize}px`;

        // Set initial position
        const initialLeft = Math.random() * 100;
        const initialTop = Math.random() * 100;
        star.style.left = `${initialLeft}vw`;
        star.style.top = `${initialTop}vh`;

        // Set random velocities
        const velocityX = (Math.random() - 0.5) * 0.02; // Adjust speed by changing multiplier
        const velocityY = (Math.random() - 0.5) * 0.02; // Adjust speed by changing multiplier

        // Set random animation duration for blinking effect
        const animationDuration = `${Math.random() * 6 + 1}s`;
        star.style.animationDuration = animationDuration;

        // Animation function
        function animateStar() {
            let left = initialLeft;
            let top = initialTop;

            function move() {
                left += velocityX;
                top += velocityY;
                star.style.left = `${left}vw`;
                star.style.top = `${top}vh`;

                // Wrap around if star goes out of view
                if (left < -2 || left > 102 || top < -2 || top > 102) {
                    left = initialLeft;
                    top = initialTop;
                }

                requestAnimationFrame(move);
            }

            move();
        }

        animateStar();

        starryNight.appendChild(star);
    }

    // Calculate number of stars based on viewport size
    function calculateNumberOfStars() {
        const screenSizeFactor = 10000; // Adjust this factor based on your preference
        numberOfStars = Math.round((window.innerWidth * window.innerHeight) / screenSizeFactor);
    }

    // Create initial stars
    calculateNumberOfStars();
    for (let i = 0; i < numberOfStars; i++) {
        createStar();
    }

    // Recalculate number of stars on window resize
    window.addEventListener('resize', function () {
        // Clear existing stars
        starryNight.innerHTML = '';
        // Recalculate and create new stars
        calculateNumberOfStars();
        for (let i = 0; i < numberOfStars; i++) {
            createStar();
        }
    });
});
