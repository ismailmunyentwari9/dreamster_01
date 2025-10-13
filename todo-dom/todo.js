const container = document.querySelector("#list-container");
const InputValue = document.querySelector("#value");
const btn =document.querySelector("#triggle");


btn.addEventListener('click',()=>{
    const todoItem = InputValue.value.trim(); 
        if(todoItem !==""){
             const ul = document.createElement("ul");
     const checkBox = document.createElement("input");
           checkBox.type="checkbox";
           
           ul.classList.add("flex","justify-between");
           
     const li = document.createElement("li");
     const deleteBtn=document.createElement("span");
     const editBtn = document.createElement("span");
     const iconBox = document.createElement("span");
     iconBox.classList.add("flex","justify-end");
     editBtn.textContent="🖊";
    deleteBtn.textContent="🗑";
    deleteBtn.classList.add("cursor-pointer")
    editBtn.classList.add("cursor-pointer")

     li.textContent=todoItem;
     ul.appendChild(checkBox);
     ul.appendChild(li);
     iconBox.appendChild(deleteBtn);
     iconBox.appendChild(editBtn);
      ul.appendChild(iconBox);
    container.appendChild(ul);


markAsDone(checkBox,li);
removeItem(checkBox,ul,deleteBtn);
editItem(editBtn,ul,li);
InputValue.value="";
        }
        else{
            alert("Please  Enter Task First")
        }

})



const markAsDone =(checkBox,li)=>{
 checkBox.addEventListener("change",()=>{
    
     if(checkBox.checked){
        li.classList.add("line-through");
     }
     else{
     li.classList.remove("line-through");
     }
 })
}

const removeItem=(checkBox,ul,deleteBtn)=>{
         deleteBtn.addEventListener("click",()=>{
              if(checkBox.checked){
                 container.removeChild(ul);
              }
         })
}
const editItem=(editBtn,ul,li)=>{
     editBtn.addEventListener("click",()=>{
    const tempInput = document.createElement("input");
      tempInput.type="text";
      tempInput.value=li.textContent;
      ul.replaceChild(tempInput,li);   
      
      tempInput.addEventListener("keypress",(event)=>{
      if(event.key==="Enter"){
        li.textContent=tempInput.value;
        ul.replaceChild(li,tempInput);  
      }
      })
})
}


// ..............calling functions............
markAsDone();
removeItem();
editItem();
