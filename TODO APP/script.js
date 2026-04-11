let input=document.getElementById("todo-input");
let addBtn=document.getElementById("add-btn");
let todoList=document.getElementById("todo-list");

addBtn.addEventListener("click",function(){
         console.log("Button Clicked");
         let task = input.value;
         if(task){
            let li=document.createElement("li");
            li.textContent=task;
            todoList.appendChild(li);
            input.value="";
         }
});