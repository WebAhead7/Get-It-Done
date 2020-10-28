
let ToDoList = JSON.parse(localStorage.getItem("ToDoList") || "[]");
const Clear = document.querySelector(".clear")
const Toggle = document.querySelector(".toggle")//FILTER
const Add = document.querySelector(".fa-plus-circle")
const list = document.querySelector("#list")

const Deleting = target => {
    ToDoList.splice(target, 1);
    localStorage.setItem("ToDoList", JSON.stringify(ToDoList))
};


//show today date:
const dateElement = document.getElementById("date");
let options = { weekday: 'long', month: 'short', day: 'numeric' };
let today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);


//Adding:
const Adding = text => {
    ToDoList.push(
        {
            text: text,
            IsChecked: 0
        }
    )
    localStorage.setItem("ToDoList", JSON.stringify(ToDoList))
};


// Checking:
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


//Toggling:
const Toggling = Toggle_id => {
    if (Toggle_id === "false") {
        let filtered = ToDoList.filter(mission => !mission.IsChecked)
        Toggle.id = "true";
        return filtered;
    }
    else {
        Toggle.id = "false";
        return ToDoList;
    }
};

Toggle.addEventListener("click", function (event) {
    let Toggle_id = Toggle.id;
    Render(Toggling(Toggle_id));
})



Add.addEventListener("click", function (event) {
    const toDo = input.value;
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
        if (element_div)
            Checking(element_id);
    }
    if (element_div.getAttribute("job") === "delete") {
        Deleting(element_id)
    }
    Render(ToDoList);
})



//Rendering:
const Render = arr => {
    let html = ``;
    list.innerHTML = ""
    arr.forEach((element, index) => {
        html = `<li class="item"  id="${arr.indexOf(element)}">
            <p class="fa fa-check-circle" id="checked${element.IsChecked}" job="check"></p>
            <p  class="checked${element.IsChecked}"></p>
            <p class="fa fa-trash" id="trash" job="delete"></p>
        </li>`
        list.insertAdjacentHTML("beforeend", html);
        list.lastChild.childNodes[3].textContent = element.text
    });

}

Render(ToDoList);