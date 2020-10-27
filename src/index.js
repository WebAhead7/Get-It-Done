
let ToDoList = JSON.parse(localStorage.getItem("ToDoList") || "[]");
const Clear = document.querySelector(".clear")
const Toggle = document.querySelector(".toggle")//FILTER
const Add = document.querySelector(".fa-plus-circle")
const list = document.querySelector("#list")

const Deleting = target => {
    ToDoList.splice(target, 1);
    localStorage.setItem("ToDoList", JSON.stringify(ToDoList))
};

// //clear the list:
// const clear = document.querySelector(".clear");
// clear.addEventListener('click', function(){
//     localStorage.clear();
//     location.reload();                         //reload the page
// })

//show today date:
const dateElement = document.getElementById("date");
let options = { weekday: 'long', month: 'short', day: 'numeric' };
let today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//localStorage:

// localStorage.setItem('key', 'value');
// let variable = localStorage.getItem('key');
// localStorage.setItem("TODO", JSON.stringify(LIST));

let LIST, id;
let data = localStorage.getItem("TODO");
if (data) {
    LIST = JSON.parse(data);
    loadToDo(LIST);
    id = LIST.length

} else {
    LIST = [];
    id = 0;
}




const Adding = text => {
    ToDoList.push(
        {
            text: text,
            IsChecked: 0
        }
    )
    localStorage.setItem("ToDoList", JSON.stringify(ToDoList))
};


const Checking = target => {
    ToDoList[target].IsChecked = (ToDoList[target].IsChecked + 1) % 2;
    localStorage.setItem("ToDoList", JSON.stringify(ToDoList))
};

Clear.addEventListener("click", function (event) {
    localStorage.clear();
    ToDoList = JSON.parse(localStorage.getItem("ToDoList") || "[]");
    Render(ToDoList)
    console.log("dssds");

})

Toggle.addEventListener("click", function (event) {
    console.log((Toggle.id));

    if ("false" === Toggle.id) {
        let filtered = ToDoList.filter(mission => !mission.IsChecked)
        Render(filtered)
        Toggle.id = "true";
    }
    else {
        Render(ToDoList);
        Toggle.id = "false"
    }
})

Add.addEventListener("click", function (event) {
    const toDo = input.value;
    console.log(toDo);

    //if the input isn't empty:
    if (toDo) {
        Adding(toDo)
    }
    input.value = "";  //clear the input
    Render(ToDoList)
})

document.addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
        const toDo = input.value;
        //if the input isn't empty:
        if (toDo) {
            Adding(toDo)
        }
        input.value = "";  //clear the input
        Render(ToDoList)
    }
})

list.addEventListener("click", function (event) {
    let element_div = event.target;
    element_id = element_div.parentElement.id;
    if (element_div.getAttribute("job") === "check") {
        console.log(element_div);
        if (element_div)
            Checking(element_id);
    }
    if (element_div.getAttribute("job") === "delete") {
        Deleting(element_id)
    }
    Render(ToDoList);
})

const Render = arr => {
    let html = ``;
    list.innerHTML = ""
    arr.forEach(element => {
        html = `<li class="item"  id="${arr.indexOf(element)}">
            <i class="fa fa-check-circle" id="checked${element.IsChecked}" job="check"></i>
            <p  class="checked${element.IsChecked}">${element.text}</p>
            <i class="fa fa-trash" id="trash" job="delete"></i>
        </li>`
        list.insertAdjacentHTML("beforeend", html);
    });

}

Render(ToDoList);