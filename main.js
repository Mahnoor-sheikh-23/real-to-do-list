let listContainer = document.getElementById("item-container")
let inputbox = document.getElementById("input-box")
function addTask(){
    if(inputbox.value === ''){
        alert('Please Add Your Task')
    }else{
        let task = document.createElement("li")
        task.textContent = inputbox.value
        listContainer.appendChild(task)

        let span = document.createElement("span")
        span.textContent = "\u00d7"
        task.appendChild(span)

    }
    inputbox.value = ""
    savedata()
}

listContainer.addEventListener("click",(el)=>{
    if(el.target.tagName == "LI"){
        el.target.classList.toggle("checked")
        savedata()
    }
    else if(el.target.tagName == "SPAN"){
        el.target.parentElement.remove()
        savedata()
    }
})
// function to save data means when we reload our page to our task will not be removed 
function savedata(){
    localStorage.setItem("tasks",listContainer.innerHTML)
}
function showdata(){
    listContainer.innerHTML = localStorage.getItem("tasks")
}
showdata()












