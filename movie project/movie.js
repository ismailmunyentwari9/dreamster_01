let container =document.getElementById("#container")

const response = await fetch('./movie.json');
const movies = await response.json();

array_name.forEach(data=>{
    console.log(data);

})
