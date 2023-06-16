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
        currentElement.parentElement.parentElement.remove();
      }
    
}

clearbtn.addEventListener("click", taskclearhandler);
function taskclearhandler(event){
    event.preventDefault();
    if(confirm("Are yiu sure?")){
        collection.innerHTML = "";
    }

}

filtertiput.addEventListener("input", filterinputhandler);

function filterinputhandler(event){
    event.preventDefault();
    const currentelement = event.target;
    const searchfiltervalue = currentelement.value.toLowerCase();

    const selectallitems = document.querySelectorAll(".collection-item");

   
}