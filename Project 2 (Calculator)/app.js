const screeninput = document.querySelector(".screen");
const allbuttonselement = document.querySelectorAll(".btn");
const equalbutton = document.querySelector(".btn-equal");
const clearbutton = document.querySelector(".btn-clear");


allbuttonselement.forEach(function(singlebutton){
    singlebutton.addEventListener("click", function(event){
        event.preventDefault();
        const currentelement = event.target;
        const buttonvalue = currentelement.getAttribute("data-num");
        screeninput.value += buttonvalue; 
    });
});

equalbutton.addEventListener("click", function (event){
    event.preventDefault();
    screeninput.value = eval(screeninput.value)
});

clearbutton.addEventListener("click", function(event){
    event.preventDefault();
    screeninput.value = "";
});

screeninput.addEventListener("input", function (event){
    event.preventDefault();
    const currentelement = event.target;
    if(onlyLetters(currentelement.value)) {
        currentelement.value = "";
    }
});



function onlyLetters(str) {
    return /[a-zA-z]+$/.test(str);
  }