let start = document.getElementById('start')
let logo1 = document.querySelector('.logo1')
let logo2 = document.querySelector('.logo2')

const startAnimation = ()=>{
    logo1.style.marginLeft = '100vh'
    logo1.style.transition = 'margin-left .5s ease'
    logo2.style.marginLeft = '-100vh'
    logo2.style.transition = 'margin-left .5s ease'
    start.style.opacity = '0'
    start.style.transition = 'opacity .5s ease'
    setTimeout(()=>{
        location.href = 'index.html'
    }, 600)
}

start.addEventListener('click', startAnimation)