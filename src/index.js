


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


