let list = document.querySelectorAll('.item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')

let count = list.length
let active = 0

next.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active >= count -1 ? 0 : active + 1
    list[active].classList.add('active')
}

prev.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active <= 0 ? count -1 : active - 1
    list[active].classList.add('active')
}

/*TESTE SWIPE */

const slides = document.querySelectorAll('.item')
const buttonNext = document.getElementById('next')
const buttonPrev = document.getElementById('prev')
const slider = document.querySelector('.slider')

let totalSlides = slides.length
let currentSlide = 0

/* TROCA DE SLIDE */

function changeSlide(direction) {

    const currentActive = document.querySelector('.item.active')

    currentActive.classList.remove('active')

    if (direction === 'next') {
        currentSlide = currentSlide >= totalSlides - 1 ? 0 : currentSlide + 1
    } else {
        currentSlide = currentSlide <= 0 ? totalSlides - 1 : currentSlide - 1
    }

    slides[currentSlide].classList.add('active')
}

/* BOTÕES */

buttonNext.addEventListener('click', () => {
    changeSlide('next')
})

buttonPrev.addEventListener('click', () => {
    changeSlide('prev')
})

/* SWIPE */

let startX = 0
let isDragging = false

slider.addEventListener('pointerdown', (e) => {
    startX = e.clientX
    isDragging = true
})

slider.addEventListener('pointermove', (e) => {

    if (!isDragging) return

    const currentX = e.clientX
    const distance = startX - currentX

    if (Math.abs(distance) > 70) {

        if (distance > 0) {
            changeSlide('next')
        } else {
            changeSlide('prev')
        }

        isDragging = false
    }
})

slider.addEventListener('pointerup', () => {
    isDragging = false
})