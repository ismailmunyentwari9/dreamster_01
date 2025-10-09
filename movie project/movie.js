let movieContainer = document.querySelector(".movie-container");

async function loadMovie(){

try {
// ........all process
const movies = await fetch("./movie.json");
const jsonMovie = await movies.json();

jsonMovie.forEach(item=>{
    let movieCard=`
     <div class="movie-card w-[25%] border-7 border-white">

        <img src="${item.Images[0]}" alt="">
        <p><span class="text-red-700 text-[10px]">Title:${item.Title}</span></p>
        <p><span class="text-red-700 text-[10px]">Year:${item.Year}</span></p>
        <span class="text-red-700 text-[10px]">Rated: ${item.Rated}</span>
    </div>
    `;
    movieContainer.innerHTML +=movieCard;
})


}catch(theErroe){
//display error.........
console.log(theErroe)
}


};
loadMovie();