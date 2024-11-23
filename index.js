var userinput = document.getElementById("input-box");
var listContainer = document.getElementById("list-container");

function addbtn() {
    if (userinput.value === "") {
        alert("please enter your task")
    } else {
        var li = document.createElement("li");
        li.innerHTML = userinput.value
        listContainer.appendChild(li);
        var span = document.createElement("span");
        span.innerHTML = "X"
        li.appendChild(span);
    }
    userinput.value = ""
    saveData();
}
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}


function showTask(){
    listContainer.innerHTML =localStorage.getItem("data")
}
showTask();