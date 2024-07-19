let slideIndex = 0;
        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slide').length;
        const dots = document.querySelectorAll('.dot');
    
        function showSlide(index) {
            const newTransform = -index * 100 / totalSlides;
            slides.style.transform = `translateX(${newTransform}%)`;
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
    
        function nextSlide() {
            slideIndex = (slideIndex + 1) % totalSlides;
            showSlide(slideIndex);
        }
    
        function prevSlide() {
            slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
            showSlide(slideIndex);
        }
        function currentSlide(index) {
            slideIndex = index;
            showSlide(slideIndex);
        }
    
        // Initialize
        showSlide(slideIndex);
