const inputReason = document.querySelector('#input-reason');
const inputAmount = document.querySelector('#input-amount');
const btnCancel = document.querySelector('#btn-cancel');
const btnConfirm = document.querySelector('#btn-confirm');
const listExpense = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');

let totalExpenses = 0;

const clear = () => {
    inputReason.value = '';
    inputAmount.value = '';
};

btnConfirm.addEventListener('click', () => {
    const enteredReason = inputReason.value;
    const enteredAmount = inputAmount.value;

    if (
        enteredReason.trim().length <= 0 || 
        enteredAmount <= 0 || 
        enteredAmount.trim().length <= 0) {
        return;
    }
    
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;
    listExpense.appendChild(newItem);
    totalExpenses += +enteredAmount;
    totalExpensesOutput.textContent = '$' + totalExpenses;
    clear();
});

btnCancel.addEventListener('click', clear);