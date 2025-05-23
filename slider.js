const sliderContainer = document.getElementById("slideContainer")
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("prevBtn");
const prevBtn = document.getElementById("nextBtn")
const indicatorsContainer = document.getElementById("indicators");
const slider = document.getElementById("heroSlider");

let currentIndex = 0;
let sliderInterval;

let timeInterval = 5000;


// creating the indicators

slides.forEach((index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot')

    if (index === 0) {
        dot.classList.add("active");
    }
    dot.setAttribute('aria-label', `go to slide ${index + 1}`);
    
    dot.addEventListener('click', () => {
        goToSlide(index);
    });

    indicatorsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");


function goToSlide() {
    currentIndex = index;
    updateSlider();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider()
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}


function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    
    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    dots[currentIndex].classList.add("active");
}

function startAutoPlay() {
    sliderInterval = setInterval(() => {
        nextSlide();
    }, timeInterval);
}

function stopAutoPlay() {
    clearInterval(sliderInterval);

}

//eventListeners

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

slider.addEventListener("mouseenter", stopAutoPlay);

slider.addEventListener("mouseleave", startAutoPlay);