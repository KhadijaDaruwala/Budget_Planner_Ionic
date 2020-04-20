const inputReason = document.querySelector('#input-reason');
const inputAmount = document.querySelector('#input-amount');
const btnCancel = document.querySelector('#btn-cancel');
const btnConfirm = document.querySelector('#btn-confirm');
const listExpense = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
//const alertCtrl = document.querySelector('#ion-alert-controller');
const alert = document.createElement('ion-alert')

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
        console.log('Reached create')

        // alertCtrl.createElement({
        //     message: 'Please enter a valid reason and amount!',
        //     header: 'Invalid',
        //     buttons: ['Okay']
        // }).then(alertElement => {
        //     console.log('Reached alertElement')
        //     alertElement.present();
        // });
        alert.header = 'Invalid Inputs!';
        alert.message = 'Please enter a valid reason and amount!';
        alert.buttons = ['Okay'];
        document.body.appendChild(alert);
        alert.present();
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.innerHTML = `${enteredReason}: <strong>&nbsp; $${enteredAmount}</strong>`
   // newItem.textContent = enteredReason + ': $' + enteredAmount;
    listExpense.appendChild(newItem);
    totalExpenses += +enteredAmount;
   // totalExpensesOutput.textContent = '$' + totalExpenses;
    totalExpensesOutput.innerHTML = `<strong> $${totalExpenses}</strong>`
    clear();
});

btnCancel.addEventListener('click', clear);