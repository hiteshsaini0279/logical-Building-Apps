let input=document.getElementById("todo-input");
let addBtn=document.getElementById("add-btn");
let todoList=document.getElementById("todo-list");

addBtn.addEventListener("click",function(){
         let task = input.value;
         if(task.trim() === "") {
              return;
            }
         if(task){
           let li=document.createElement("li");
            li.textContent=task;
            let deleteBtn=document.createElement("button");
            deleteBtn.classList.add("delete-btn");
             deleteBtn.textContent="Delete";
             deleteBtn.addEventListener("click",function(){
                   todoList.removeChild(li);
             })
               li.appendChild(deleteBtn);
   let completeBtn=document.createElement("button");
          completeBtn.classList.add("completed-btn");
               completeBtn.textContent="Done!";
completeBtn.addEventListener("click",function(){
   li.style.textDecoration="line-through";
}) 
li.appendChild(completeBtn);
todoList.appendChild(li);  
input.value="";
      }
});
