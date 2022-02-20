// 19 - Feb - 2022 

const menuBtn = document.getElementById('menuBtn');
const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');

const loginClose = document.querySelector('#loginCloseBtn');
const loginBtn = document.querySelector('#loginBtn');
const loginForm = document.querySelector('.loginFormContainer');

loginBtn.onclick = () => {
    loginForm.classList.toggle('userClick');
}

loginClose.onclick = () => {
    loginForm.classList.remove('userClick');
}

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('userClick');
}

window.onscroll = () => {

    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('userClick');

    if (window.scrollY > 0) {
        header.classList.add('userScrolling');
    } else {
        header.classList.remove('userScrolling');
    }
}


/* after page refresh, then get this effect again
📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌 */
window.onload = () => {
    if (window.scrollY > 0) {
        header.classList.add('userScrolling');
    } else {
        header.classList.remove('userScrolling');
    }
}



/* Mouse Moving effect... 
📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌
📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌
📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌
*/
const home = document.querySelector('.home');
const homeParallax = document.querySelectorAll('.home-parallax');
home.addEventListener('mousemove', (e) => {
    homeParallax.forEach(element => {
        let speed = element.getAttribute('data-speed');
        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;
        element.style.transform = `translateX(${y}px) translateY(${x}px)`;
    });
});

home.addEventListener('mouseleave', () => {
    homeParallax.forEach(element => {
        element.style.transform = `translateX(0px) translateY(0px)`;
    });
});


/* Scroll Navigation | Scroll Navigation | Scroll Navigation
📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌
📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌
📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌
*/
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = "";

    // how much page we scroll? ans: 
    // console.log(window.pageYOffset)

    sections.forEach(section => {

        const eachSectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= (eachSectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id')
        }
    });

    links.forEach(a => {
        a.classList.remove('active');

        if (a.innerHTML == current) {
            a.classList.add('active');
        }
    });
});
/*
📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌
📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌
📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌
*/



/* Number On Load Counting functionality...
✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
*/

document.addEventListener('DOMContentLoaded', () => {

    function counter(id, start, end, duration) {

        let obj = document.getElementById(id);
        let current = start;
        let range = end - start;
        let increment = end > start ? 1 : -1;
        let step = Math.abs(Math.floor(duration / range));

        let timer = setInterval(() => {

            current += increment;
            obj.innerHTML = current;

            if (current == end) {
                obj.innerHTML += "<span>+</spam>"
                clearInterval(timer);
            }

        }, step);
    }
    counter('count1', 0, 150, 9000);
    counter('count2', 0, 1270, 8000);
    counter('count3', 0, 590, 8000);
    counter('count4', 0, 890, 8000);
});




/* swiper-slider functionality...
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
*/

let vehiclesSlider = new Swiper('.vehicles-slider', {

    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: true,

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        // type: "fraction",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});


// Featured + Reviews Slider together... 
let featured_and_reviews_Slider = new Swiper('.featured-slider', {

    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: true,

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        // type: "fraction",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1040: {
            slidesPerView: 3,
        },
    },
});