
/*NAVBAR TOGGLER*/

let navbar = document.querySelector('.navbar')
let navToggler = document.querySelector('.navbar .toggler')

const toggleNav = () => {

    if(window.innerWidth > 768){
        if(navbar.style.marginTop !== '0px'){
            navbar.style.marginTop = '0px'
        }
        else{
            navbar.style.marginTop = '-64px'
        }
    }
    else if(window.innerWidth < 769){
        if(navbar.style.marginLeft !== '0px'){
            navbar.style.marginLeft = '0px'
        }
        else{
            navbar.style.marginLeft = '-150px'
        }
    }
}

navToggler.addEventListener('click', toggleNav)