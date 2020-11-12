let newId = ''

let newCard = (id, img, title, desc, brand, price)=>{
    newId = id
    return newProdCard =`
    <div class="card col col-xs-6 col-sm-4 col-md-3">
        <img src="${img}" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${desc}</p>
            <p class="brand">${brand}</p><p class="price">${price}€</p>
            <input
                type="button"
                class="btn btn-primary"
                value="Buy It"
            />
        </div>
    </div>
    `
}
window.onload = async ()=>{
    let response = await fetch(url, {headers})
    array = await response.json()
    console.log(array)
    let prodShow = document.querySelector('.row')
    array.reverse().forEach(prod=>prodShow.innerHTML+=newCard(prod._id, prod.imageUrl, prod.name, prod.description, prod.brand, prod.price))
    let links = document.querySelectorAll('.card-title')
    let imgs = document.querySelectorAll('.card img')
    let buyBtns = document.querySelectorAll('input')
    for(let i = 0; i < links.length; i++){
        links[i].addEventListener('click', ()=>{
            imgs[i].style.animation = 'zoom .5s ease'
            setTimeout(()=>{window.location.assign(`detail.html?id=${newId}`)}, 400) 
        })
        buyBtns[i].addEventListener('click', ()=>{alert('Congratulions you have just bought something useless!!!')})
    }
}