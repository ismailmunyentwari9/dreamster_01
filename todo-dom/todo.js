const container = document.querySelector("#list-container");
const input = document.querySelector("#value");
const btn = document.querySelector("#triggle");



btn.addEventListener("click", () => {
  const taskValue = input.value.trim();
  if (taskValue !== "") {
    const division = document.createElement("div");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    const listItem = document.createElement("span");
    listItem.textContent = taskValue;
    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "🗑";
    const editBtn = document.createElement("span");
    editBtn.textContent = "🖊";

    //  .............Append childs to all containers...........
    division.appendChild(checkBox);
    division.appendChild(listItem);
    division.appendChild(deleteBtn);
    division.appendChild(editBtn);
    container.appendChild(division);
    input.value = "";

    markDone(checkBox, listItem);
    deleteItem(checkBox, division, deleteBtn);
    editItem(editBtn, division, listItem);
  }
  else {
    alert("Please  Add your To-do List First ☺");
  }


})

// Mark As done.....
const markDone = (Box, todo) => {
  Box.addEventListener("change", () => {

    if (Box.checked == true) {
      todo.classList.add("line-through");
    }
    else {
      todo.classList.remove("line-through");
    }
  })
}


// delete funtionality.....

const deleteItem = (checkBox, division, deleteBtn) => {
  deleteBtn.addEventListener("click", () => {

    if (checkBox.checked == true) {
      container.removeChild(division);
    }
    else {
      alert("Only completed task can be deleted");
    }
  })
  console.log("deleteItem");
}

// edit functionality.................

const editItem = (editBtn, division, listItem) => {
  editBtn.addEventListener("click", () => {
    const tempInput = document.createElement("input");
    tempInput.type = "text";
    tempInput.value = listItem.textContent;
    division.replaceChild(tempInput, listItem);

    tempInput.addEventListener("keypress", (event) => {

      if (event.key === "Enter") {
        listItem.textContent = tempInput.value;
        division.replaceChild(listItem, tempInput);
      }
    }
    )

  })   
}

