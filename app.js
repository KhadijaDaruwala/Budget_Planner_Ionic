const inputReason = document.querySelector('#input-reason')
const inputAmount = document.querySelector('#input-amount')
const btnCancel = document.querySelector('#btn-cancel')
const btnConfirm = document.querySelector('#btn-confirm')
const listExpense = document.querySelector('#expenses-list')

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
    clear();
});

btnCancel.addEventListener('click', clear);