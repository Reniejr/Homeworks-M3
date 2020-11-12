const url = 'https://striveschool-api.herokuapp.com/api/product/'
const headers = {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzRjYzRiY2RlMTAwMTc2MTZhODEiLCJpYXQiOjE2MDUwOTI1NTYsImV4cCI6MTYwNjMwMjE1Nn0.tzfVOZoX-9PLte7QWS3tQnxK9K_a-13E2cLi0NqI3fM" 
}

window.onload = async ()=>{
    let urlParam = new URLSearchParams(window.location.search)
    let id = urlParam.get("id")
    console.log(id)
    let obj ={}
    try{
        let response = await fetch(url+id, {headers})
        obj = await response.json()
    } catch (error){}
    let img = document.querySelector('.col-6:nth-of-type(1) img')
    img.src=obj.imageUrl
    let title = document.querySelector('.col-6:nth-of-type(2) h2')
    title.innerText = obj.name
    let desc = document.querySelector('.col-6:nth-of-type(2) p:nth-of-type(1)')
    desc.innerText =obj.description
    let brand = document.querySelector('.col-6:nth-of-type(2) p:nth-of-type(2)')
    brand.innerText =obj.brand
    let price = document.querySelector('.col-6:nth-of-type(2) p:nth-of-type(2)')
    price.innerText =obj.price + '€'
}

let buyBtn = document.querySelector('input')
buyBtn.addEventListener('click', ()=>{alert('Congratulions you have just bought something useless!!!')})