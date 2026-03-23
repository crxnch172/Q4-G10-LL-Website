const menuBtn = document.querySelector('.menu-btn')
const navigation = document.querySelector('.navigation')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
});

const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.video-slide');
const contents = document.querySelectorAll('.content');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;
const totalSlides = slides.length;

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove('active');
    });

    slides.forEach((slides) => {
        slides.classList.remove('active');
    });

    contents.forEach((contents) => {
        contents.classList.remove('active');
    });

    btns[manual].classList.add('active');
    slides[manual].classList.add('active');
    contents[manual].classList.add('active');
    
    currentSlide = manual;
}

sliderNav(0);

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        sliderNav(i);
    });
});

prevBtn.addEventListener('click', () => {
    let index = currentSlide - 1;
    if(index < 0) {
        index = totalSlides - 1;
    }
    sliderNav(index);
});

nextBtn.addEventListener('click', () => {
    let index = currentSlide + 1;
    if(index >= totalSlides) {
        index = 0;
    }
    sliderNav(index);
});

document.addEventListener('DOMContentLoaded', function() {
    const mediaIcons = document.querySelector('.media-icons');
    const icons = document.querySelectorAll('.media-icons a');
    const iconWidth = icons[0]?.offsetWidth || 36;
    const gap = 20; 
    
    let scrollPosition = 0;
    let autoScrollInterval;
    let isHovering = false;
    function scrollIcons() {
        if (isHovering) return;
        
        scrollPosition += 1;
        const maxScroll = icons.length * (iconWidth + gap);
        
        if (scrollPosition >= maxScroll) {
            scrollPosition = 0;
        }
        
        mediaIcons.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }
    function startAutoScroll() {
        if (!autoScrollInterval) {
            autoScrollInterval = setInterval(scrollIcons, 50);
        }
    }
    function stopAutoScroll() {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            autoScrollInterval = null;
        }
    }

    mediaIcons.addEventListener('mouseenter', function() {
        isHovering = true;
        stopAutoScroll();
    });
    
    mediaIcons.addEventListener('mouseleave', function() {
        isHovering = false;
        startAutoScroll();
    });
    startAutoScroll();
});

