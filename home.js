document.addEventListener("DOMContentLoaded", function(event) {
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    function showSlide() {
        slides.forEach(slide => {
            slide.style.display = "none";
        });
        slides[index].style.display = "block";
    }

    function nextSlide() {
        slides[index].style.display = "none";
        index = (index + 1) % slides.length;
        showSlide();
    }

    // Show the first slide initially
    showSlide();

    // Change slide every 3 seconds
    setInterval(nextSlide, 3000);
});
document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.features > div');

    features.forEach(feature => {
        feature.addEventListener('mouseover', function() {
            this.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            this.style.transform = 'scale(1.1)';
        });

        feature.addEventListener('mouseout', function() {
            this.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            this.style.transform = 'scale(1)';
        });
    });
});
