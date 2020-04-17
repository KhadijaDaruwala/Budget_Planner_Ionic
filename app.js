const inputReason = document.querySelector('#input-reason')
const inputAmount = document.querySelector('#input-amount')
const btnCancel = document.querySelector('#btn-cancel')
const btnConfirm = document.querySelector('#btn-confirm')

btnConfirm.addEventListener('click', () => {
    const enteredReason = inputReason.value;
    const enteredAmount = inputAmount.value;

    if (
        enteredReason.trim().length <= 0 || 
        enteredAmount <= 0 || 
        enteredAmount.trim().length <= 0) {
        return;
    }
    console.log(enteredAmount,enteredReason)
});