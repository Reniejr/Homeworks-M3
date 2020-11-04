//1) When pressing on Load Images button, load the pictures from http://www.splashbase.co/api/v1/images/search?query=your query

let loadImg = document.querySelector('#load-image')
let cardImg = document.querySelectorAll('.card img')


//6) Replace the "9 mins" string in the card template with the ID of the Image
let idImg = document.querySelectorAll('.id-image')

const getImage = ()=>{
    fetch('http://www.splashbase.co/api/v1/images/search?query=cars',{
        'method':'GET'
    })
    .then(res => res.json())
    .then(image => {
        console.log(
        image.images//ARRAY OF IMAGES
            )
        let count=0
        for(let a = 0; a < cardImg.length; a++){
            cardImg[a].src=image.images[a].url
            idImg[a].innerText =  `ID = ${image.images[a].id}`
            count=count+1
            }
        alert(`There are ${count} images loaded`)
        }
        
    )
}

loadImg.addEventListener('click', getImage)

//2) When pressing on Load Seconday Images, load the pictures from http://www.splashbase.co/api/v1/images/search?query=your secondary query


//7) Add in the "jumbotron" a search field. If there is a value there and the user press "Load Seconday Image" the API call should use the specified query as query

let loadSecondImg = document.getElementById('load-image2')
let searchImg = document.getElementById('search-for')

const getSecondImg = () =>{
    fetch(`http://www.splashbase.co/api/v1/images/search?query=${searchImg.value}`,{
        'method':'GET'
    })
    .then(res => res.json())
    .then(image => {
        console.log(
        image.images//ARRAY OF IMAGES
            )
        for(let b = 0; b < cardImg.length; b++){
            cardImg[b].src=image.images[b].url
            idImg[b].innerText = `ID = ${image.images[b].id}`  
            }
        }
        
    )
}

loadSecondImg.addEventListener('click', getSecondImg)

//3) When the user clicks on the "VIEW" button inside the Card, open the specified image in a modal view

let viewBtn = document.querySelectorAll('.view')

for(let b = 0; b < viewBtn.length; b++){

    const openImg = () =>{

        let modal = `
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
            <div class="modal-body">
                <img src='${cardImg[b].src}' class='modal-image'/>
            </div>
        </div>
        </div>
        </div>
        `
        document.body.innerHTML = document.body.innerHTML + modal
    }


    viewBtn[b].addEventListener('click', openImg)
}

//4) The Edit button should be replace with a "Hide" button.
//5) When the hide button is pressed, the whole picture card disappears.

let hideBtn = document.querySelectorAll('.hide')

for(let c = 0; c < hideBtn.length; c++){

    const hideImage = () =>{
            cardImg[c].style.opacity = '0'
            cardImg[c].style.transition = 'opacity 2s ease'
    }

    hideBtn[c].addEventListener('click', hideImage)
}

//8) After every button is pressed, display in an alert for 5 seconds the result of the operation (es.: 20 images loaded)

//9) Handle API error gracefully using alert components with the message inside
