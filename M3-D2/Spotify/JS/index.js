//RESPONSIVE CONTAINER CENTERED
/*let introContainer = document.createElement('div')
introContainer.className = 'col'
introContainer.style.width = '100%'
introContainer.style.position = 'absolute'
introContainer.style.top = '30%'
introContainer.style.padding = '0'
introContainer.style.margin = '0'

//VIDEO-INTRO
let intro = document.createElement('video')
intro.src = './Media/Logo Animato RJD Developer.mp4'
intro.style.width = '100%'
intro.style.height = 'auto'
intro.style.position = 'absolute'
intro.autoplay = 'true'
intro.muted = 'true'
intro.play

//PROJECT (ACTUAL BODY)
let project = document.getElementById('project')
project.style.display = 'none'


window.onload = function (){

//BODY SIZE NO SCROLLBARS
document.body.style.position = 'relative'
document.body.style.width = '100%'
document.body.style.height = '100vh'

//VIDEO INTRO CREATED AND APPENDED
introContainer.appendChild(intro)
document.body.appendChild(introContainer)

//ANIMATION AT THE END OF THE VIDEO
intro.addEventListener('ended', function(){

    //ANIMATION VIDEO
    intro.style.transform = 'scale(0.1, 0.1)'
    intro.style.transition = 'transform 0.5s linear'

    //REMOVE VIDEO
    setTimeout(function(){document.body.removeChild(introContainer)},499)

    //RESET BODY SIZES
    setTimeout(function(){document.body.style.height = 'auto'}, 501)

    //PROJECT FADE-IN ANIMATION
    setTimeout(function(){
        project.style.display = 'block'
        project.style.opacity = '0'
    }, 502)

    setTimeout(function(){
        project.style.opacity = '1'
        project.style.transition = 'opacity 2s ease'
    }, 702)

},false)

}*/

/* SIDEBAR-------------------------------------------------------------------------------------------------------- */
const sidebar = document.getElementById('sidebar')
const sideOpen = document.querySelector('#toggler i:nth-of-type(1)')
const sideClose = document.querySelector('#toggler i:nth-of-type(2)')
const mainContent = document.querySelector('#content')

sideOpen.addEventListener('click', openSide)
sideClose.addEventListener('click', closeSide)

function openSide(){
    if(sidebar.style.marginLeft = '-180px'){
        sidebar.style.marginLeft = '0'
        mainContent.style.marginLeft = '180px'
        setTimeout(function(){
            sideOpen.style.display = 'none'
            sideClose.style.display = 'block'
        }, 10)
    }
}

function closeSide(){
    if(sidebar.style.marginLeft = '0'){
        sidebar.style.marginLeft = '-180px'
        mainContent.style.marginLeft = '0'
        setTimeout(function(){
            sideClose.style.display = 'none'
            sideOpen.style.display = 'block'
        }, 10)
    }
}

/* PLAYER-------------------------------------------------------------------------------------------------------- */

/*LIKE BUTTON */
let like = document.getElementById('like')
like.addEventListener('click', ()=>{
    if(like.name === 'heart-outline'){
        like.name='heart'
    }
    else if(like.name === 'heart'){
        like.name='heart-outline'
    }
})

/*VOLUME BUTTON */

let volumeButton = document.querySelector('#volume ion-icon')
let volumeBar = document.getElementById('volume-bar')

volumeBar.addEventListener('click', ()=>{
    if(parseInt(volumeBar.value) > 0 && parseInt(volumeBar.value) < 40){
        volumeButton.name = 'volume-low'
    }
    else if(parseInt(volumeBar.value) > 39 && parseInt(volumeBar.value) < 75){
        volumeButton.name = 'volume-medium'
    }
    else if(parseInt(volumeBar.value) > 74 && parseInt(volumeBar.value) < 101){
        volumeButton.name = 'volume-high'
    }
    else if(parseInt(volumeBar.value) === 0){
        volumeButton.name = 'volume-off'
    }
    
})
    



/* SEARCH-------------------------------------------------------------------------------------------------------- */
let getArtist = document.getElementById('get-artist')
let searchFor = document.getElementById('search-for')
let searchResult = document.getElementById('search-result')

const getInfos = ()=>{
    let artist= searchFor.value
    fetch(`https://rapidapi.p.rapidapi.com/search?q=${artist}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "6cc8e6c6femsh03ff5cffd3927e2p12ac5djsn4ad2e0705629",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
    })
    .then(response => response.json())
    .then(searchJson=>{
        console.log(searchJson.data)

        fetch(`https://rapidapi.p.rapidapi.com/artist/${searchJson.data[0].artist.id}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "6cc8e6c6femsh03ff5cffd3927e2p12ac5djsn4ad2e0705629",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
        })
        .then(response => response.json())

        .then(artistData => {
            console.log(artistData)
            searchResult.innerHTML = ''
            let artistResult = `
                <div class=result>
                    <img src='${artistData.picture_small}' class='artist-image'>
                    <p id='title-content'>${artistData.name}</p>
                </div>
            `
            searchResult.style.marginTop = '-100%'
            searchResult.innerHTML = searchResult.innerHTML + artistResult

            if(searchResult.style.marginTop = '-100%'){
                setTimeout(function(){
                    searchResult.style.display = 'block'
                }, 950)
                searchResult.style.opacity = '1'
                searchResult.style.marginTop = '0px'
            }

            let showContentTrigger = document.getElementById('title-content')
            showContent = ()=>{
                for(let a = 0; a < searchJson.data.length; a++){
                    let contentResult = `
                    <div class='artist-content row'>
                        <div class='artist-search-result col-12 col-sm-6 col-md-4 col-lg-3'>
                        <img src='${searchJson.data[a].album.cover_small}'>
                        <p>${searchJson.data[a].album.title}</p>
                        <p>${searchJson.data[a].title_short}</p>
                        </div>
                    </div>
                    `
                    searchResult.innerHTML = searchResult.innerHTML + contentResult
                }
            }
            showContentTrigger.addEventListener('click', showContent)
        })

        .catch(err => {
            console.error(err);
        });

    })
    .catch(err => {
	console.error(err);
    });
}
    

getArtist.addEventListener('click', getInfos)

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */
