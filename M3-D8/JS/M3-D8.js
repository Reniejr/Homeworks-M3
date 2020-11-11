const url = 'https://striveschool-api.herokuapp.com/api/product/'
const headers = {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzRjYzRiY2RlMTAwMTc2MTZhODEiLCJpYXQiOjE2MDUwOTI1NTYsImV4cCI6MTYwNjMwMjE1Nn0.tzfVOZoX-9PLte7QWS3tQnxK9K_a-13E2cLi0NqI3fM" 
}

let array=[]

window.onload = async ()=>{
    let response = await fetch(url, {headers})
    array = await response.json()
    console.log(array)
}


let row = document.querySelector('.row')


let productCard = (img, title, desc, price)=>{
    return card = `
    <div class="card col col-3">
        <img class="card-img-top" src="${img}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${desc}</p>
            <p class="card-text">${price} €</p>
            <input type='button' value='Add to website' id='add-web'/>
        </div>
    </div>
    `
}

let newObj = {}
let createProduct = document.getElementById('create-product')


const newProduct = ()=>{
    let addImg = document.getElementById('add-img').value
    let addTitle = document.getElementById('add-title').value
    let addDesc = document.getElementById('add-desc').value
    let addPrice = document.getElementById('add-price').value
    newObj = {
        name: addTitle, 
        description: addDesc,
        brand: " ",
        imageUrl: addImg,
        price: parseFloat(addPrice),
    }
}

const postProduct = async (url) =>{
        let response = await fetch(url, {
            method:'POST',
            body: JSON.stringify(newObj),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzRjYzRiY2RlMTAwMTc2MTZhODEiLCJpYXQiOjE2MDUwOTI1NTYsImV4cCI6MTYwNjMwMjE1Nn0.tzfVOZoX-9PLte7QWS3tQnxK9K_a-13E2cLi0NqI3fM" 
            })
        })
        let product =  await response.json()
        console.log(product)
}

const createProd = async ()=>{
    newProduct()
    let card = await productCard(newObj.imageUrl, newObj.name, newObj.description, newObj.price)
    row.innerHTML += card 
    let addWebBtn = document.getElementById('add-web')
    addWebBtn.addEventListener('click',postProduct(url))

}
createProduct.addEventListener('click', createProd)