let container =document.getElementById("#container")

async function loadmovies (){
try{
    
    const response = await fetch("./movie.json");
const movies = await response.json();

     

movies.forEach(data =>{
   let movie= `
     <div class="movie-card w-[25%]">

        <img src="${data.Images[1]}" alt="">
        <p><span class="text-red-700 text-[10px]">Title:${data.Title}</span></p>
        <p><span class="text-red-700 text-[10px]">Year:${data.Year}</span></p>
        <span class="text-red-700 text-[10px]">Rated: ${data.Rated}</span>
    </div>
    `;
    container.innerHTML+=movie;
})
} catch (err){
    console.log("we have erro")
}
}

loadmovies();