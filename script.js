

document.addEventListener("DOMContentLoaded", function() {
    
    const input = document.getElementById("taskInput");
    const button = document.getElementById("addBtn");
    const list = document.getElementById("taskList");

    button.addEventListener("click", function() {
        
        const taskText = input.value;
        
        if(taskText == "") return;

        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        

        li.appendChild(span);
        li.appendChild(deleteBtn);
        list.appendChild(li)

        deleteBtn.addEventListener("click", function() {
            li.remove();
        })
        
        input.value = "";
    });



});