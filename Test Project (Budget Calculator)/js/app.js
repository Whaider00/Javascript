const budgetform = document.querySelector("#budget-form");
const budgetinput = document.querySelector("#budget-input");
const budgetsubmit = document.querySelector("#budget-submit")
const budgetshow = document.querySelector("#budget-amount");
const budgetexpenses = document.querySelector("#expense-amount");
const budgetbalance = document.querySelector("#balance-amount");

const expenseform = document.querySelector("#expense-form");
const expenseinput = document.querySelector("#expense-input")
const expenseamount = document.querySelector("#amount-input");
const expensesubmit = document.querySelector("#expense-submit");
const expensetitle = document.querySelector(".expense-title");
const expensecharges = document.querySelector(".expense-amount");
const expenseListItems = document.querySelector("#expense-list");



budgetform.addEventListener("submit", onbudgetsubmithandler)

function onbudgetsubmithandler(event){
    event.preventDefault();
    const budgetinputvalue = budgetinput.value;
    if(!budgetinputvalue) {
        alert("please input your budget")
        return;
    }

    budgetappendwithdelete(budgetinputvalue);

}

function budgetappendwithdelete(budgetinputvalue){
    
    budgetshow.innerText = budgetinputvalue;
    budgetinput.value = "";
    const balancevalue = budgetbalance;
    balancevalue.innerHTML = eval(budgetshow.innerHTML - budgetexpenses.innerHTML);
}

expenseform.addEventListener("submit", onexpensesubmithandler)

function onexpensesubmithandler(event){
    event.preventDefault();
    const expenseinputvalue = expenseinput.value;
    const expenseamountvalue = expenseamount.value;
        if(!expenseinputvalue) {
        alert("please enter your expense");
        return;
    }
        
        titleappendwithdelete(expenseinputvalue);
        amountappendwithdelete(expenseamountvalue);
        expensevalueappendinexpenses(expenseamountvalue)
        deleteexpense();
 }
 
 function titleappendwithdelete(expenseinputvalue){

    expensetitle.append(expenseinputvalue);
    expenseinput.value = "";

}
   
function amountappendwithdelete(expenseamountvalue){
    expensecharges.append(expenseamountvalue);
    expenseamount.value = "";
}

function expensevalueappendinexpenses(expenseamountvalue){
    budgetexpenses.append(expenseamountvalue);

}
    
// expenseform.addEventListener("submit", onexpensesubmithandler)

// function onexpensesubmithandler(event){
//     event.preventDefault();      
//     const expenseinputvalue = expenseinput.value;
//     const expenseamountvalue = expenseamount.value;
//         if(!expenseinputvalue) {
//         alert("please enter your expense");
//         return;
//     }
//     expenseListItems.innerHTML += 
//     `<div class="expense">
//     <div class="expense-item d-flex justify-content-between align-items-baseline">

//      <h6 class="expense-title mb-0 text-uppercase list-item">-${expenseinput}</h6>
//      <h5 class="expense-amount mb-0 list-item">${expenseamount}</h5>

//      <div class="expense-icons list-item">

      
//       <a href="#" class="delete-icon" data-id="${expense.id}">
//        <i class="fas fa-trash"></i>
//       </a>
//      </div>
//     </div>

//    </div>`
        
//         titleappendwithdelete(expenseinputvalue);
//         // amountappendwithdelete(expenseamountvalue);
//         expensevalueappendinexpenses(expenseamountvalue)
    
//         deleteexpense();
//  }
 
//  function expenseappendwithdelete(expenseListItems){
//     // const expenseShow = expenseinputvalue.innerText
//     expensetitle.innerText = expenseListItems;
//     expensecharges.innerText = expenseListItems;
//     expenseListItems.value = "";

// }
   
// // function amountappendwithdelete(expenseamountvalue){
// //     expensecharges.innerText = expenseamountvalue;
// //     expenseamount.value = "";
// // }

// function expensevalueappendinexpenses(expenseamountvalue){
//     budgetexpenses.append(expenseamountvalue);

// }

function deleteexpense(){
    const deleteallexpenses = document.querySelectorAll(".delete-icon i");

    deleteallexpenses.forEach(function (singleexpense) {
        singleexpense.addEventListener("click", removeexpensehandler);
    });
       
}
function removeexpensehandler(event) {
    event.preventDefault();
    
    const currentElement = event.target;
    console.log(currentElement);
    if (confirm("Are you sure ?")) {
       const selectlielements = currentElement.parentElement.parentElement.parentElement;
              selectlielements.remove();
      }
    budgetexpenses.innerHTML = "";
    const balancevalue = budgetbalance;
    balancevalue.innerHTML = eval(budgetshow.innerHTML - budgetexpenses.innerHTML);
}
