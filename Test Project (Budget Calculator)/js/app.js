const budgetform = document.querySelector("#budget-form");
const budgetinput = document.querySelector("#budget-input");
const budgetsubmit = document.querySelector("#budget-submit")
const budgetshow = document.querySelector("#budget-amount");
const budgetexpenses = document.querySelector("#expense-amount");
const budgetbalance = document.querySelector("#balance-amount");

const expenseform = document.querySelector("#expense-form");
const expenseinput = document.querySelector("#expense-input");
const expenseamount = document.querySelector("#amount-input")
const expensesubmit = document.querySelector("#expense-submit");
const expensetitle = document.querySelector(".expense-title");
const expensecharges = document.querySelector(".expense-amount");

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
    
    budgetshow.append(budgetinputvalue)
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
