

let getArtist = document.getElementById('get-artist')
let searchFor = document.getElementById('search-for')
let searchResult = document.getElementById('search-result')
let headers = {
    "x-rapidapi-key" : "6cc8e6c6femsh03ff5cffd3927e2p12ac5djsn4ad2e0705629",
    "x-rapidapi-host" : "deezerdevs-deezer.p.rapidapi.com"
}

let storage = []

const getInfos = ()=>{
    let artist= searchFor.value
    fetch(`https://rapidapi.p.rapidapi.com/search?q=${artist}`, {
	"method": "GET",
	headers
    })
    .then(response => response.json())
    .then(searchJson=>{
        console.log(searchJson.data)
        for(let b = 0; b < searchJson.data.length; b++){
            cloneObj(searchJson.data[b])
            console.log(storage)
        }

        fetch(`https://rapidapi.p.rapidapi.com/artist/${searchJson.data[0].artist.id}`, {
        "method": "GET",
        headers
        })
        .then(response => response.json())

        .then(artistData => {
            //console.log(artistData)
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
                    searchResult.style.display = 'flex'
                }, 950)
                searchResult.style.opacity = '1'
                searchResult.style.marginTop = '0px'
            }

            let showContentTrigger = document.getElementById('title-content')
            showContent = ()=>{
                let interval = 200
                for(let a = 0; a < searchJson.data.length; a++){
                    let contentResult = `
                        <div class='col col-12 col-sm-6 col-md-4 col-lg-3 artist-search-result'>
                            <img src='${searchJson.data[a].album.cover_medium}'>
                            <p>${searchJson.data[a].album.title}</p>
                            <p>${searchJson.data[a].title_short}</p>
                        </div>
                    `
                    searchResult.innerHTML = searchResult.innerHTML + contentResult
                }
                let album = document.querySelectorAll('.artist-search-result')
                for(let b = 0; b < album.length; b++){
                    setTimeout(function(){
                        album[b].style.opacity = '1'
                    },interval)
                    interval = interval +200
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

const storeIt = (key,value) => {
    localStorage.setItem(key,JSON.stringify(value));// you can only stores string
    return value;
}
const getFromStore = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

const cloneObj = (obj) => {
    let clone = Object.assign({}, obj)
    storage.push(clone)
    storeIt('track', storage)
}
