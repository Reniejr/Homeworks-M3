
//ELEMENTS
let getArtist = document.getElementById('get-artist')
let searchFor = document.getElementById('search-for')
let searchResult = document.getElementById('search-result')
let headers = {
    "x-rapidapi-key" : "6cc8e6c6femsh03ff5cffd3927e2p12ac5djsn4ad2e0705629",
    "x-rapidapi-host" : "deezerdevs-deezer.p.rapidapi.com"
}

let storage = []

// let result = ''
// let fetchSearch = ()=>{
//     let artist = searchFor.value
//     let result = ''
//     return fetch(`https://rapidapi.p.rapidapi.com/search?q=${artist}`, {
//         "method": "GET",
//         headers
//         })
//         .then(response => response.json())
//         .then(searchJson=>{
//             result = searchJson.data
//             console.log(result)
//             fetchArtist(result)
//         })
// }

// let fetchArtist = (result)=>{
//     let artistSel = ''
//     return fetch(`https://rapidapi.p.rapidapi.com/artist/${result[0].artist.id}`, {
//         "method": "GET",
//         headers
//         })
//         .then(response => response.json())

//         .then(artistData => {
//             console.log(artistData)
//             artistSel = artistData
//             artistIndex(artistSel)
//         })
        
// }

// const artistIndex = (artistSel)=>{
//     let artistResult = `
//                     <div class=result>
//                         <img src='${artistSel.picture_small}' class='artist-image'>
//                         <p id='title-content'>${artistSel.name}</p>
//                     </div>
//                 `
//                 // ANIMATION FOR INDEX
//                             searchResult.style.marginTop = '-100%'
//                             searchResult.innerHTML = searchResult.innerHTML + artistResult
                
//                             if(searchResult.style.marginTop = '-100%'){
//                                 setTimeout(function(){
//                                     searchResult.style.display = 'flex'
//                                 }, 950)
//                                 searchResult.style.opacity = '1'
//                                 searchResult.style.marginTop = '0px'
//                             }
// }

// FUNCTION FOR GET ARTIST BUTTON
const getInfos = ()=>{

    //TAKE ARTIST SEARCH API TO SEARCH AND FETCH
    let artist= searchFor.value
    fetch(`https://rapidapi.p.rapidapi.com/search?q=${artist}`, {
	"method": "GET",
	headers
    })
    .then(response => response.json())
    .then(searchJson=>{
        //CONSOLE LOG DATA SEARCH RESULTS OF ARTIST
        console.log(searchJson.data)

        //TAKE ARTIST API AND FETCH
        fetch(`https://rapidapi.p.rapidapi.com/artist/${searchJson.data[0].artist.id}`, {
        "method": "GET",
        headers
        })
        .then(response => response.json())

        .then(artistData => {
            //console.log(artistData)

            //CREATE INDEX FOR ARTIST ID FROM ARTIST API
            searchResult.innerHTML = ''
            let artistResult = `
                <div class=result>
                    <img src='${artistData.picture_small}' class='artist-image'>
                    <p id='title-content'>${artistData.name}</p>
                </div>
            `
            //ANIMATION FOR INDEX
            searchResult.style.marginTop = '-100%'
            searchResult.innerHTML = searchResult.innerHTML + artistResult

            if(searchResult.style.marginTop = '-100%'){
                setTimeout(function(){
                    searchResult.style.display = 'flex'
                }, 950)
                searchResult.style.opacity = '1'
                searchResult.style.marginTop = '0px'
            }

            //TAKE ARTIST NAME AND ADD TO IT FUNCTION
            let showContentTrigger = document.getElementById('title-content')
            
            //FUNCTION TO SHOW SEARCH API RESULTS
            showContent = ()=>{

                let interval = 200

                //CREATE CARD FOR EACH RESULT
                //  for(let a = 0; a < searchJson.data.length; a++){
                    const card =(track) => {
                        return contentResult = `
                        <div class='col col-12 col-sm-6 col-md-4 col-lg-3 artist-search-result'>
                            <img src='${track.album.cover_medium}'>
                            <p>${track.album.title}</p>
                            <p>${track.title_short}</p>
                            <audio src=${track.preview}></audio>
                        </div>
                    `
                    }
                    
                    
                    //searchResult.innerHTML = searchResult.innerHTML + contentResult
                //}

                searchResult.innerHTML = searchJson.data.reduce((accumulator, track)=> accumulator + card(track), searchResult.innerHTML)

                //ANIMATION FOR EACH CARD
                let albums = document.querySelectorAll('.artist-search-result')
                for(let b = 0; b < albums.length; b++){
                    setTimeout(function(){
                        albums[b].style.opacity = '1'
                    },interval)
                    interval = interval +200
                }


                //PUT AUDIO ON TRACK TITLE
                let tracks = document.querySelectorAll('.artist-search-result p:nth-of-type(2)')
                let audio = document.querySelectorAll('.artist-search-result audio')
                
                for(let c = 0; c < tracks.length; c++){
                    tracks[c].addEventListener('click', function(){
                            if(audio[c].paused){
                                audio[c].play()
                            }
                            else{
                                audio[c].pause()
                            }
                    })
                }
            }
            //ADD FUNCTION TO ARTIST NAME
            showContentTrigger.addEventListener('click', showContent)
        })

        //CATCH ERROR ARTIST API
        .catch(err => {
            console.error(err);
        });

    })
    //CATCH ERROR SEARCH API
    .catch(err => {
	console.error(err);
    });
}

//GENRE LIST
let getgenre = ()=>{
    fetch("https://deezerdevs-deezer.p.rapidapi.com/genre/132/artists", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "6cc8e6c6femsh03ff5cffd3927e2p12ac5djsn4ad2e0705629",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
})
.then(response => {
	return response.json();
})
.then(data => console.log(data.data))
.catch(err => {
	console.error(err);
});
}
    
//ADD FUNCTION TO GET ARTIST BUTTON
getArtist.addEventListener('click', getInfos)

const storeIt = (key,value) => {
    localStorage.setItem(key,JSON.stringify(value));// you can only stores string
    return value;
}
const getFromStore = (key) => {
    return JSON.parse(localStorage.getItem(key));
}
