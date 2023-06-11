const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function AddTask(){
    if(inputBox.value === ''){
        alert("Вы должны ввести текст!")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
        // let linkA = document.createElement("a");
        // li.appendChild(linkA);
        // linkA.innerHTML = inputBox.value;
        // linkA.href = inputBox.value;
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// function showTask(){
//     listContainer.innerHTML = localStorage.getItem("data");
// }

showTask();