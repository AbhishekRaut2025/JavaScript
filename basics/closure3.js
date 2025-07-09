// Private Bank Account using closure
function createAccount() {
    let balance = 0;
    return {
        deposit(amount) {
            return balance += amount;
        },
        getBalance() {
            return balance;
        }
    }

}

let account = createAccount();
account.deposit(1000);
account.deposit(500);
console.log(account.getBalance());
console.log(account.balance);