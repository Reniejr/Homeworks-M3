window.onload = ()=>{
    addedBook = getFromStore('book')
    let cartList = document.getElementById('cart-list')
    cartList.innerHTML = cartList.innerHTML + addedBook
}