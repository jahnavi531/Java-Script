class Account{
    acc_Id = 101;
    acc_Bal = 5000;

    open_Account(){
        console.log('A/c opened');  
    }
    deposit_Amount(){
        console.log('Amount Deposited');
        
    }

}
let a1 = new Account();
console.log(a1.acc_Id);    //101
console.log(a1.acc_Bal);      //5000
a1.open_Account()           //A/c opened
a1.deposit_Amount()                 //Amount Deposited