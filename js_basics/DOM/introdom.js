const container =document.querySelector("#container");
const btn = document.querySelector("#btn");
 const display= container.firstElementChild;
const control= container.lastElementChild;



// // access display dicision.....

// const display= container.firstElementChild;
// const control= container.lastElementChild;

// display.style.cssText="color:red;background:black";
// control.textContent="Twayihinduye"
// control.innerHTML="<button>Click me</button>"


// btn.onclick = () => 
//     {
//         alert("Hello Everyone");
//     }




btn.addEventListener("click", ()=>{


display.style.cssText="color:red;background:black";
control.textContent="Twayihinduye"
control.innerHTML="<button>Click me</button>"

})