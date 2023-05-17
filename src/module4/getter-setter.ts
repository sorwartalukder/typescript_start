class BankAccount {
    public id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    private getTestBlance(): number {
        return this._balance;
    };
    get test(): number {
        return this.getTestBlance();
    }
    //getter
    get balance(): number {
        return this._balance;
    }
    // getBalance(): number {
    //     return this._balance
    // }

    //setter
    set deposit(amount: number) {
        this._balance = this._balance + amount;
    }
    // addDeposit(amount: number) {
    //     this._balance = this._balance + amount;
    // }
}

class StudentAccount extends BankAccount {

}

const myAccount = new BankAccount(444, 'sorwar', 1020);
console.log(myAccount.balance);
myAccount.deposit = 1020;
console.log(myAccount.balance);