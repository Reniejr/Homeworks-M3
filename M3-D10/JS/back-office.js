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
}
