/*NAVBAR TOGGLER*/

let navbar = document.querySelector('.navbar')
let navToggler = document.querySelector('.navbar .toggler')
let togglerIcon1 = document.querySelector('.toggler-icon')

if(window.innerWidth < 769){
    togglerIcon1.classList.remove('fa-sort-up')
    togglerIcon1.classList.add('fa-caret-left')
}
else if(window.innerWidth > 768){
    togglerIcon1.classList.remove('fa-caret-left')
    togglerIcon1.classList.add('fa-sort-up')
}
const toggleNav = () => {

    if(window.innerWidth > 768){
        if(navbar.style.marginTop !== '0px'){
            navbar.style.marginTop = '0px'
            togglerIcon1.classList.remove('fa-sort-down')
            togglerIcon1.classList.add('fa-sort-up')
        }
        else{
            navbar.style.marginTop = '-64px'
            togglerIcon1.classList.remove('fa-sort-up')
            togglerIcon1.classList.add('fa-sort-down')
        }
    }
    else if(window.innerWidth < 769){
        if(navbar.style.marginLeft !== '0px'){
            navbar.style.marginLeft = '0px'
            togglerIcon1.classList.remove('fa-caret-right')
            togglerIcon1.classList.add('fa-caret-left')
        }
        else{
            navbar.style.marginLeft = '-150px'
            togglerIcon1.classList.remove('fa-caret-left')
            togglerIcon1.classList.add('fa-caret-right')
        }
    }
}

navToggler.addEventListener('click', toggleNav)

//HOMEWORKS PART

let homeworks = document.querySelector('.option:nth-of-type(1)')
homeworks.addEventListener('click',()=>{window.location.assign('homeworks.html')})