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

const list = document.querySelectorAll('.item')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const slider = document.querySelector('.slider')

let count = list.length
let active = 0

function changeSlide(direction) {

    const activeOld = document.querySelector('.item.active')

    activeOld.classList.remove('active')

    if (direction === 'next') {
        active = active >= count - 1 ? 0 : active + 1
    } else {
        active = active <= 0 ? count - 1 : active - 1
    }

    list[active].classList.add('active')
}

/* BOTÕES */

next.addEventListener('click', () => {
    changeSlide('next')
})

prev.addEventListener('click', () => {
    changeSlide('prev')
})

/* SWIPE MOBILE */

let touchStartX = 0
let touchEndX = 0

slider.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX
})

slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX

    handleSwipe()
})

function handleSwipe() {

    const distance = touchStartX - touchEndX

    /* evita swipe acidental */
    if (Math.abs(distance) < 50) return

    if (distance > 0) {
        changeSlide('next')
    } else {
        changeSlide('prev')
    }
}