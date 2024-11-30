let emp={
    eid:101,
    ename:'Rahul',
    esal:45000,
    email:'Rg@gmail.com'
}
let details={
    email:'Rg@gmail.com',
    loc:'New Delhi'
}
let emp_Details={...emp,...details}
console.log(emp_Details);
/*{
  eid: 101,
  ename: 'Rahul',
  esal: 45000,
  email: 'Rg@gmail.com',
  loc: 'New Delhi'
}*/