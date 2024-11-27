class Account{
    acc_Id = 101;
    acc_Bal = 5000;
    acc_Name = 'Rahul';
}
let a1 = new Account();
console.log(a1);                  //Account { acc_Id: 101, acc_Bal: 5000, acc_Name: 'Rahul' }
console.log(a1.acc_Id);          //101
console.log(a1.acc_Bal);    //5000
console.log(a1.acc_Name);    //Rahul




/*class Account{
    acc_Id = 101;
    acc_Name = 'Rahul';
}
let a1 = new Account();
console.log(a1);                  //Account { acc_Id: 101,  acc_Name: 'Rahul' }
console.log(a1.acc_Id);          //101
console.log(a1.acc_Bal);    //undefined          There is no property
console.log(a1.acc_Name);    //Rahul*/
