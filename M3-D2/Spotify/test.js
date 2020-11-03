let card = document.querySelector('.card')
let frontFace = document.querySelector('.face:nth-of-type(1)')
let backFace = document.querySelector('.face:nth-of-type(2)')

frontFace.addEventListener('click', ()=>{
    if(card.style.transform = 'rotateY(0)'){
        card.style.transform = 'rotateY(-180deg)'
    }
})

backFace.addEventListener('click', ()=>{
    if(card.style.transform = 'rotateY(-180deg)'){
        card.style.transform = 'rotateY(0deg)'
    }
})

let showLogin = document.getElementById('show-login')
let loginBox = document.querySelector('.login-box')
let login = document.getElementById('login')

showLogin.addEventListener('click', ()=>{
    if(loginBox.style.marginTop = '-100%'){
        loginBox.style.marginTop = '0px'
    }
    else if(loginBox.style.marginTop = "0px"){
        loginBox.style.marginTop = '-100%'
    }
})

login.addEventListener('click', ()=>{
    if(loginBox.style.marginTop === '0px'){
        loginBox.style.marginTop = '-100%'
    }

})

