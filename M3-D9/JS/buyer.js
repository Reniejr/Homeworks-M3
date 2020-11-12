let newCard = (id, img, title, desc, brand, price)=>{
    return newProdCard =`
    <div class="card col col-xs-6 col-sm-4 col-md-3">
        <img src="${img}" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title"><a href='detail.html?id=${id}'>${title}</a></h5>
            <p class="card-text">${desc}</p>
            <span class="brand">${brand}</span><span class="price">${price}€</span>
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
    array.forEach(prod=>prodShow.innerHTML+=newCard(prod._id, prod.imageUrl, prod.name, prod.description, prod.brand, prod.price))
}