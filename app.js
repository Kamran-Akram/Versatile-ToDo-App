var list = document.getElementById("list")

function addTodo(){

    
    var todo_item = document.getElementById("todoItems")
    if (todo_item.value !==""){
    var li = document.createElement("li")
    li.setAttribute("class","aa")
    var litext = document.createTextNode(todo_item.value)
    li.appendChild(litext)
    

   
    var delbtn = document.createElement("button");
    var deltext = document.createTextNode("Delete Task")
    delbtn.appendChild(deltext)
    delbtn.setAttribute("class" , "btn3")
    delbtn.setAttribute("onclick","delete_item(this)")
    li.appendChild(delbtn)

    var editbtn = document.createElement("button")
    var editText = document.createTextNode("Edit Task")
    editbtn.appendChild(editText)
    editbtn.setAttribute("class","btn3")
    editbtn.setAttribute("onclick","edit(this)")
    li.appendChild(editbtn)
    


    list.appendChild(li)
    todo_item.value = ""
}
}

function delete_item(e){
    e.parentNode.remove()

}
function edit(b){
    var val = b.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value",val)
    
    b.parentNode.firstChild.nodeValue  = editValue

    
}


function deleteAll(){
    list.innerHTML=""
    
}