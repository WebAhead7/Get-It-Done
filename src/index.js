

let ToDoList=[];
const Clear=document.querySelector(".clear")
const Toggle=document.querySelector("toggle")
const Add=document.querySelector("add")
const Delete=document.querySelector("trash")
const list=document.querySelector("#list")


const Deleting=target=>{
    ToDoList.splice(target,1);
};



localStorage.setItem('key', 'value');
let variable = localStorage.getItem('key');
localStorage.setItem("TODO", JSON.stringify(LIST));

let LIST, id;
let data = localStorage.getItem("TODO");
if (data){
  LIST = JSON.parse(data);
  loadToDo(LIST);
  id = LIST.length

} else{
    LIST = [];
    id = 0;
}

  
const Adding=text=>{
    ToDoList.push(
        {
           text:text,
           IsChecked: 0 
        }
    )
};


const Checking=target=>{
    ToDoList[target].IsChecked=(ToDoList[target].IsChecked+1)%2;
};


=======
const Toggling=target=>{
    return ToDoList.filter(obj=>obj.IsChecked==0)
};

document.addEventListener("keyup",function(event){
    if(event.keyCode==13){
        const toDo=input.value;
        if (toDo){
            Adding(toDo)
        }
        input.value="";
        Render(ToDoList)
    }
})

list.addEventListener("click",function(event){
    let element_div=event.target;
    console.log(element_div);

    
})

const Render=arr=>{
    list.innerHTML=""
    arr.forEach(element => {
        let html= `<li class="item">
            <i class="complete" job="complete"></i>
            <p class="text">${element.text}</p>
            <i class="trash" job="delete">O</i>
        </li>`;
        list.insertAdjacentHTML("beforeend",html);
    });
}

