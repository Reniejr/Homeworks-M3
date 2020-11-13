
let mainCont = document.getElementById('main-content')
let seeCat = async ()=>{
    array.forEach(cat => mainCont.innerHTML+=categoryRow(cat))
    let movieList = document.querySelectorAll('.movie-list')
    console.log(movieList)
    array.forEach(async cat =>  {
        let category = await fetch(url+cat, {headers})
        i = await category.json()
        console.log(i)
        console.log(i.imageUrl)
        for(let a=0; a < movieList.length; a++){
            movieList[a].innerHTML += putMovie(i[a].imageUrl)
        }
    })
    
}

window.onload = async ()=>{
    let response = await fetch(url, {headers})
    array = await response.json()
    console.log(array)
    seeCat()
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
const putMovie = (img)=>{
    return movieImg = `
    <img src='${img}'/>
    `

}