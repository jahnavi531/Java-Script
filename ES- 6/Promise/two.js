let employees=[
    {eid:101,ename:'Rahul',esal:45000},
    {eid:102,ename:'Priya',esal:55000}
]
let createEmployee= (emp)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let flag = true;
            flag ? resolve("Data Inserted"): reject("Failed");
            employees.push(emp);
        
        },4000)  
    });
   
}
let getEmployee=()=>{
    setTimeout(()=>{
        let rows="";
        for(let emp of employees){
        //employees.forEach((emp)=>{
            rows=rows+`<tr>
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                        <td>${emp.esal}</td>
                      </tr>  `
        }
        document.getElementById('abc').innerHTML=rows;
    },1000)
}
createEmployee({eid:103,ename:"Sona",esal:65000})
.then((msg)=>{
    console.log(msg)
    getEmployee();
})                             //reslove call back                  
.catch((err)=>{
    console.log(err)
})                            //reject callback

                                                   