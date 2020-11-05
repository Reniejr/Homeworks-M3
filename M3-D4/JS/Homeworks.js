// const fetcher = (url) =>{
//     fetch(`${url}`,{
//         'method' : 'GET'
//     })

//     .then(response => response.json())
//     .then(parsedJson => {
//         console.log(parsedJson)
//         return arr = parsedJson
//     })
//     .catch(err=> console.error(err))
// }


//0) Get all the products from the API using a fetch

//fetcher('https://striveschool-api.herokuapp.com/books')

//1) Display the list of items available on the page using template literals `` and .forEach

const prodCard = (asin, title, img, price, category) =>{
    return card = `
        <div class= 'col col-xs-12 col-s-6 col-md-4 card'>
            <img src='${img}' />
            <h5 class= 'title'>Title : ${title}</h5>
            <p class= 'category'>Category : ${category}</p>
            <p class='price'>Price : ${price} €</p>
            <p class='code'>Code : ${asin}</p>
            <ion-icon name="cart" class="cart-btn"></ion-icon><span>Add to cart</span>
            <input type='button' value='Skip' class='skip-btn'/>
        </div>
    
    `
}

let listProduct = document.getElementById('list')

window.onload = ()=>{
    fetch(`https://striveschool-api.herokuapp.com/books`,{
            'method' : 'GET'
        })
    
        .then(response => response.json())
        .then(arrayProd => {
            console.log(arrayProd)
            arrayProd.forEach(prod => {
                let displayprod = prodCard(prod.asin, prod.title, prod. img, prod.price, prod.category)
                listProduct.innerHTML = listProduct.innerHTML + displayprod
            })
            
            let searchText = document.getElementById('search').value
            let searchBtn = document.getElementById('search-btn')
            const filterBook = (searchText) => {
                newList = arrayProd.filter(book => book.title === searchText)
                newList.forEach(filtered =>{
                    let filtBook = prodCard(filtered.asin, filtered.title, filtered. img, filtered.price, filtered.category)

                    listProduct.innerHTML = listProduct.innerHTML + filtBook
                })
                searchBtn.addEventListener('click', filterBook)
            }
        })
        .catch(err=> console.error(err))

}


/* */


let addedBook = []

let total = document.getElementById('cart-added')


setTimeout(()=>{
    let cartBtn = document.querySelectorAll('.cart-btn')
    let allCards = document.querySelectorAll('.card')

    for(let a=0; a < cartBtn.length; a++){
        const getBook = () =>{{
                    addedBook.push(allCards[a])
                    storeIt('book', addedBook)
                    total.innerText = addedBook.length
                    allCards[a].style.opacity = '0'
                    setTimeout(()=>{allCards[a].style.display = 'none'}, 2000)
                }

        }
        cartBtn[a].addEventListener('click', getBook)

    }

    let skipBtn = document.querySelectorAll('.skip-btn')

    for(let b = 0; b < skipBtn.length; b++){

        const skipBook = ()=>{
            allCards[b].style.opacity = '0'
            allCards[b].innerHTML = ''
            setTimeout(()=>{
                let spam =
            `
                <img src='https://placehold.it/250x200' style='width: 100%'/>
                    <h5>Why not interestd</h5>
                    <p>Don't Worry we have many other books</p>
            `
            allCards[b].innerHTML = allCards[b].innerHTML + spam
            allCards[b].style.opacity = '1'
            }, 100)
            
        }
        skipBtn[b].addEventListener('click', skipBook)
    }

    
    

}, 2000) 


const storeIt = (key,value) => {
    localStorage.setItem(key,JSON.stringify(value));// you can only stores string
    return value;
}
const getFromStore = (key) => {
    return JSON.parse(localStorage.getItem(key));
}



