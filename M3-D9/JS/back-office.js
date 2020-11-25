//FILL FORM - BUTTONS
let addImg = document.getElementById('add-img')
let addTitle = document.getElementById('add-title')
let addBrand = document.getElementById('add-brand')
let addDesc = document.getElementById('add-desc')
let addPrice = document.getElementById('add-price')
//PREVIEW - CARD
let prodImg = document.querySelector('.card img')
let prodTitle = document.querySelector('.card-body .card-title')
let prodDesc = document.querySelector('.card-text')
let prodBrand = document.querySelector('.brand')
let prodPrice = document.querySelector('.price')

//FILL FORM - FUNCTIONS
const prevImg = ()=>{
    let imgUrl = document.querySelector('#fill-form input[type=text]:nth-of-type(1)').value
    prodImg.src=imgUrl
}
addImg.addEventListener('click', prevImg)

const prevTitle = ()=>{
    let title = document.getElementById('title-text').value
    prodTitle.innerText=title
}
addTitle.addEventListener('click', prevTitle)

const prevBrand = ()=>{
    let brand = document.getElementById('brand-text').value
    prodBrand.innerText=brand
}
addBrand.addEventListener('click', prevBrand)

const prevDesc = ()=>{
    let description = document.querySelector('#fill-form textarea').value
    prodDesc.innerText=description
}
addDesc.addEventListener('click', prevDesc)

const prevPrice = ()=>{
    let price = document.getElementById('price-text').value
    prodPrice.innerText=price
}
addPrice.addEventListener('click', prevPrice)

//ADD TO WEBSITE
let addToWebSite = document.getElementById('add-toWebSite')

let newProdObj = {}

const createProdObj = ()=>{
    let card = document.querySelector('.card')
    newProdObj = {
        name : prodTitle.innerText,
        description : prodDesc.innerText,
        brand : prodBrand.innerText,
        imageUrl : prodImg.src,
        price : parseFloat(prodPrice.innerText)
    }
    console.log(card)
    console.log(newProdObj)
}

addToWebSite.addEventListener('click', createProdObj)

//POST PRODUCT

let postProdBtn = document.getElementById('confirm')

const postProduct = async () =>{
    let response = await fetch(url, {
        method:'POST',
        body: JSON.stringify(newProdObj),
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NjNmYjk4MzViMDAwMTc1ODRlZTYiLCJpYXQiOjE2MDYxNDU1MjYsImV4cCI6MTYwNzM1NTEyNn0.cdbDtk23jtEpsN1HX5Y9tjMgSNOlfx0H-y_lP-DD1NI" 
        })
    })
    let product =  await response.json()

    console.log(product)
    let card = document.querySelector('.card')
    card.style.animation = 'send 3s 1'
    setTimeout(()=>{ window.location.reload()},2800)
}

postProdBtn.addEventListener('click', postProduct)

//EDIT

let prodList = document.getElementById('list-of-prod')
let prodListBtn = document.querySelector('#main-content p input')
let id =''

//OLDPRODUCT ITEM
const prodListItem = (title)=>{
    return prodItem = `
    <li class='prod-item'>${title}</li>
    `
}

//PREAPARE CARD FOR EDIT
const fillOldProd = (oldId, oldImg, oldTitle, oldBrand, oldDesc, oldPrice)=>{
    let imgUrl = document.querySelector('#fill-form input[type=text]:nth-of-type(1)')
    imgUrl.value = oldImg
    prevImg()
    let title = document.getElementById('title-text')
    title.value = oldTitle
    prevTitle()
    let brand = document.getElementById('brand-text')
    brand.value = oldBrand
    prevBrand()
    let description = document.querySelector('#fill-form textarea')
    description.value = oldDesc
    prevDesc()
    let price = document.getElementById('price-text')
    price.value = oldPrice
    prevPrice()

    addToWebSite.value = 'Edit'
    addToWebSite.removeAttribute('data-target')
    addToWebSite.setAttribute('data-target','#edited-prod')

    id = oldId

    console.log(id)
    return id
}

//EDIT BUTTON - PUT METHOD
let editBtn = document.getElementById('confirm-edit')

const editProd = async () =>{
    console.log(url+id)
    let response = await fetch(url+id, {
        method:"PUT",
        body: JSON.stringify(newProdObj),
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzRjYzRiY2RlMTAwMTc2MTZhODEiLCJpYXQiOjE2MDUwOTI1NTYsImV4cCI6MTYwNjMwMjE1Nn0.tzfVOZoX-9PLte7QWS3tQnxK9K_a-13E2cLi0NqI3fM" 
        })
    })
    let product =  await response.json()
    console.log(product)
    window.location.reload()
}

editBtn.addEventListener('click', editProd)

//PUT ALL THE OLD PRODUCTS IN THE LIST
const fillList = ()=>{
    prodList.innerHTML = ''
    array.forEach(prod => {
        prodList.innerHTML += prodListItem(prod.name)
    })
    
    let prodItem = document.querySelectorAll('.prod-item')

    for(let i = 0; i < prodItem.length; i++){
        prodItem[i].addEventListener('click', ()=>{
            fillOldProd(array[i]._id, array[i].imageUrl, array[i].name, array[i].brand, array[i].description, array[i].price)
        })
    }
}

prodListBtn.addEventListener('click', fillList)

//DELETE
let deleteBtn = document.getElementById('delete')

const deleteProd = async ()=>{
    let response = await fetch(url+id, {method:"DELETE", headers})
    console.log(response)
    window.location.reload()
}

deleteBtn.addEventListener('click', deleteProd)