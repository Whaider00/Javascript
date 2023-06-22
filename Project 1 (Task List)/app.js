const taskform = document.querySelector('#task-form')
const taskinput = document.querySelector('#task')
const collection = document.querySelector(".collection")
const clearbtn = document.querySelector(".clear-tasks")
const filtertiput = document.querySelector("#filter")

taskform.addEventListener("submit", ontasksubmithandler)

function ontasksubmithandler(event){
    event.preventDefault();
    const taskinputvalue = taskinput.value;
    if(!taskinputvalue) {
        alert("please input the task value")
        return;
    }
    
    taskappendwithdelete(taskinputvalue);
    storetasksinstorage(taskinputvalue);
    taskinputvalue = "";
}

function taskappendwithdelete(taskinputvalue){
    const elementlist = document.createElement("li");
    elementlist.className = "collection-item";
    elementlist.innerHTML = `
    ${taskinputvalue}
        <a href="#" class="delete-item secondary-content">
            <i class="fa fa-remove"></i>
        </a>
    `;
    collection.append(elementlist);
    taskinput.value = "";
    deletetaskicons();
}

function deletetaskicons(){
    const deleteallicons = document.querySelectorAll(".delete-item i");

    deleteallicons.forEach(function (singleicon) {
        singleicon.addEventListener("click", removetaskhandler);
    });
       
}
function removetaskhandler(event) {
    event.preventDefault();
    
    const currentElement = event.target;
    console.log(currentElement);
    if (confirm("Are you sure ?")) {
       const selectlielements = currentElement.parentElement.parentElement;
       taskremovefromstorage(selectlielements.innerText);
       selectlielements.remove();
      }
    
}

clearbtn.addEventListener("click", taskclearhandler);
function taskclearhandler(event){
    event.preventDefault();
    if(confirm("Are you sure?")){
        collection.innerHTML = "";
        localStorage.removeItem("tasks");
    }

}

filtertiput.addEventListener("input", filterinputhandler);

function filterinputhandler(event){
    event.preventDefault();
    const currentelement = event.target;
    const searchfiltervalue = currentelement.value.toLowerCase();

    const selectallitems = document.querySelectorAll(".collection-item");

    selectallitems.forEach(function (singleitem){
        const textitem = singleitem.innerText.toLowerCase();
        if (textitem.indexOf(searchfiltervalue) == -1) {
            singleitem.style.display = "none";
        } else {
            singleitem.style.display = "block";
        }
    });
}

function gettaskfromstorage() {
    const getoldtaskfromstorage = localStorage.getItem("tasks");

    if (getoldtaskfromstorage) {
        return JSON.parse(getoldtaskfromstorage);
    } else {
        return [];
    }
}

function storetasksinstorage(taskinputvalue){

    const oldtasks = gettaskfromstorage();
    oldtasks.push(taskinputvalue);

    localStorage.setItem("tasks", JSON.stringify(oldtasks))
}

document.addEventListener("DOMContentLoaded", gettaskfromstorageandappend);

function gettaskfromstorageandappend(){
    const oldtasks = gettaskfromstorage();
    oldtasks.forEach(function (singletask) {
        taskappendwithdelete(singletask);
    });
}

function taskremovefromstorage(taskvalue) {
    const oldtasks = gettaskfromstorage();
    oldtasks.forEach(function (singletaskfromstorage, index){
        if (singletaskfromstorage === taskvalue){
            oldtasks.splice(index, 1);
        }
    })
    localStorage.setItem("tasks", JSON.stringify(oldtasks));
}