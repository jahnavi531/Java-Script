let emp={
    eid:101,
    ename:"Rahul",
    esal:45000.45
//{ eid: 101, ename: 'Rahul', esal: 45000.45 }
}
//read
console.log(emp)
//how to read object values
console.log(emp.eid)
console.log(emp.ename)
console.log(emp.esal)
console.log(emp.email)       //undefined
/*101
Rahul
45000.45
undefined*/

//update
emp.ename ="Rahul Gandhi"
emp.email = 'rp@pm.com'
console.log(emp)
//{ eid: 101, ename: 'Rahul Gandhi', esal: 45000.45, email: 'rp@pm.com' }



//delete
delete emp.esal
console.log(emp)
//{ eid: 101, ename: 'Rahul Gandhi', email: 'rp@pm.com' }