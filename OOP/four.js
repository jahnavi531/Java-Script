class Account{
    acc_Name = 'Rahul';
    acc_Bal = 0;
    
    deposit_Amount(amount){
        console.log(amount);
        
    }
}
let a1 = new Account();
console.log(a1);                    //Account { acc_Name: 'Rahul', acc_Bal: 0 }
console.log(a1.acc_Bal);           //0 
console.log(a1.acc_Name);            //Rahul
a1.deposit_Amount(501)               //501
a1.deposit_Amount(50)             //50
       
