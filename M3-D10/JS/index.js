/*NAVBAR TOGGLER*/

let navbar = document.querySelector('.personal-navbar')
let navToggler = document.querySelector('.personal-navbar .toggler')
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

let logoToStart = document.getElementById('logo')
logoToStart.addEventListener('click', function(){window.location.assign('starting-page.html')})

const url = 'https://striveschool-api.herokuapp.com/api/movies/'
const headers = {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzRjYzRiY2RlMTAwMTc2MTZhODEiLCJpYXQiOjE2MDUwOTI1NTYsImV4cCI6MTYwNjMwMjE1Nn0.tzfVOZoX-9PLte7QWS3tQnxK9K_a-13E2cLi0NqI3fM" 
}
let array=[]

window.onload = async ()=>{
    let response = await fetch(url, {headers})
    array = await response.json()
    console.log(array)
    array.forEach(async (cat)=>{
        let movie = await fetch(url+cat, {headers})
        let result = await movie.json()
        console.log(result)
    } 
    )
    return array
}

// // const deleteAllProd = async()=>{
// //     let response = await fetch(url+, {headers})
// //     array = await response.json()
// // }
