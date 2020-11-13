
let mainCont = document.getElementById('main-content')
let seeCat = async ()=>{
    array.forEach(cat => mainCont.innerHTML+=categoryRow(cat))
    // let movieList = document.querySelectorAll('.movie-list')
    // console.log(movieList)
    // array.forEach(async (cat) =>  {
    //     let category = await fetch(url+cat, {headers})
    //     i = await category.json()
    //     console.log(i)
    //     for(let a=0; a < movieList.length; a++){
    //         i.forEach(obj => movieList[a].innerHTML += putMovie(obj.imageUrl, obj.name, obj.description))
    //     }
    // })
    
}

window.onload = async ()=>{
    let response = await fetch(url, {headers})
    array = await response.json()
    console.log(array)
    seeCat()
    let category = document.querySelectorAll('.movie-cat h4')
    let movieList = document.querySelectorAll('.movie-list') 
    for(let i=0; i < category.length; i++){
        console.log(category[i].innerHTML)
        let fetcher = async () =>{
            let response = await fetch(url+category[i].innerHTML, {headers})
            let result = await response.json()
            console.log(result)
            for(let a = 0; a<result.length; a++){
                movieList[i].innerHTML += putMovie(result[a].imageUrl, result[a].name, result[a].description)
                console.log(result[a])
            } 
        }
        fetcher()
    }
}

const categoryRow = (title)=>{
    return category=`
    <div class='row movie-cat'>
        <h4>${title}</h4>
        <div class='movie-list'>
        </div>
    </div>
    `
}
const putMovie = (img, title, plot)=>{
    return movieImg = `
    <div class='movie'>
        <img src='${img}'/>
        <div class='infos'>
            <h6>${title}</h6>
            <p class='plot'>${plot}</p>
        </div>
    </div>
    `

}