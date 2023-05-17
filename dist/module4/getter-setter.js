"use strict";
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getTestBlance() {
        return this._balance;
    }
    ;
    get test() {
        return this.getTestBlance();
    }
    //getter
    get balance() {
        return this._balance;
    }
    // getBalance(): number {
    //     return this._balance
    // }
    //setter
    set deposit(amount) {
        this._balance = this._balance + amount;
    }
}
class StudentAccount extends BankAccount {
}
const myAccount = new BankAccount(444, 'sorwar', 1020);
console.log(myAccount.balance);
myAccount.deposit = 1020;
console.log(myAccount.balance);
