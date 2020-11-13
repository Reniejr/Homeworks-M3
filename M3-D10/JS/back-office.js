//FILL ELEMENTS
let addImg = document.getElementById('img-text')
let addTitle = document.getElementById('title-text')
let addCat = document.getElementById('category-text')
let addDesc = document.querySelector('textarea')
//FILL ELEMENTS BUTTONS
let addImgBtn = document.getElementById('add-img')

//PREVIEW ELEMENTS
let cardImg = document.querySelector('.card-img-top')
let cardTitle = document.querySelector('.card-title')
let cardCat = document.querySelector('.category')
let cardDesc = document.querySelector('.card-text')

//CREATE PREVIEW CARD

addImgBtn.onclick = () =>(cardImg.src = addImg.value)
addTitle.oninput = ()=>{cardTitle.innerHTML = addTitle.value}
addCat.oninput = ()=>{cardCat.innerHTML = addCat.value}
addDesc.oninput = ()=>{cardDesc.innerHTML = addDesc.value}

//--------------------------------------------------------------------------

//CREATE OBJECT TO POST

let objToPost ={}

let addToWebBtn = document.getElementById('add-toWebSite')

addToWebBtn.onclick = ()=>{
    objToPost = {
        "name": cardTitle.innerHTML,
        "description": cardDesc.innerHTML,
        "category": cardCat.innerHTML,
        "imageUrl": cardImg.src 
    }
    console.log(objToPost)
    return objToPost
}

let postBtn = document.getElementById('post-move-btn')

postBtn.onclick = async ()=>{
    let response = await fetch(url, {
        method : "POST",
        body : JSON.stringify(objToPost),
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzRjYzRiY2RlMTAwMTc2MTZhODEiLCJpYXQiOjE2MDUwOTI1NTYsImV4cCI6MTYwNjMwMjE1Nn0.tzfVOZoX-9PLte7QWS3tQnxK9K_a-13E2cLi0NqI3fM" 
        }) 
    })
    let newMovie = await response.json()
    console.log(newMovie)
    window.location.reload()
}
//--------------------------------------------------------------------------

//EDIT POSTED MOVIE

let showCat = document.getElementById('show-categories')
let modalBody = document.getElementById('movie-categories')
let catList = (title)=>{
    return `
    <li class='category'>
        <p>${title}</p>
        <ul class='movies-by-cat'>
        </ul>
    </li>
    `
}

let movieToedit = (title)=>{
    return `
        <li class='movie-to-edit'>${title}</li>
    `
}

showCat.onclick = () =>{
    modalBody.innerHTML = ''
    array.forEach(cat=> modalBody.innerHTML += catList(cat))
    let category = document.querySelectorAll('.category p')
    let moviesListOnCat = document.querySelectorAll('.movies-by-cat')
    for(let i = 0; i < category.length; i++){
        category[i].onclick = async ()=>{
            let response = await fetch(url+category[i].innerText,{headers})
            let movieList = await response.json()
            console.log(movieList)
            for(let b = 0; b<movieList.length; b++){
                moviesListOnCat[i].innerHTML+=movieToedit(movieList[b].name)
            }
            let listMovies = document.querySelectorAll('.movie-to-edit')
            for(let c = 0; c < listMovies.length; c++){
                listMovies[c].onclick = () =>{
                    editMovie(movieList[c])
                }

            }
        }
    }
}

let editMovie = (obj)=>{
    console.log(obj)
    addImg.value = obj.imageUrl
    addTitle.value = obj.name
    addCat.value = obj.category
    addDesc.value = obj.description
    cardImg.src = obj.imageUrl
    cardTitle.innerHTML = obj.name
    cardCat.innerHTML = obj.category
    cardDesc.innerHTML = obj.description

    addToWebBtn.value = 'Edit'
    addToWebBtn.removeAttribute('data-target')
    addToWebBtn.setAttribute('data-target','#edited-movie')
    let postEditBtn = document.getElementById('post-edit-btn')
    postEditBtn.onclick = ()=>{pushEdit(obj._id)}

    let deleteBtn = document.getElementById('delete')
    deleteBtn.onclick = ()=>{deleteMovie(obj._id)}
}

const pushEdit = async (id)=>{
    let response = await fetch(url+id, {
        method:"PUT",
        body: JSON.stringify(objToPost),
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzRjYzRiY2RlMTAwMTc2MTZhODEiLCJpYXQiOjE2MDUwOTI1NTYsImV4cCI6MTYwNjMwMjE1Nn0.tzfVOZoX-9PLte7QWS3tQnxK9K_a-13E2cLi0NqI3fM" 
        })
    })
    console.log(response)
    window.location.reload()
}

//DELETE BUTTON

const deleteMovie = async (id)=>{
    let response = await fetch(url+id, {method:"DELETE", headers})
    console.log(response)
    window.location.reload()
}