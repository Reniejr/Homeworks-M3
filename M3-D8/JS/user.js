let mainContent = document.getElementById('here')
let getProdBtn = document.getElementById('get-products')

getProdBtn.addEventListener('click', function(){
    console.log(array)
    array.forEach(cards => {
        cards = productCard(cards.imageUrl, cards.name, cards.description, cards.price)
        mainContent.innerHTML = mainContent.innerHTML + cards
    })
})
    