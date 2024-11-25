let employees = [
    {eid:101, ename:'Rahul Gandhi',sal:45000},
        {eid:102, ename:'Sonia',sal:55000},
        {eid:103, ename:'Priya',sal:65000},
        {eid:104, ename:'Modi',sal:75000}

]
function displayData(){
    //alert ("Test123")
    let rows=""
    for(let emp of employees){
        rows = rows+ `<tr>
                      <td>${emp.eid}</td>
                      <td>${emp.ename}</td>
                      <td>${emp.sal}</td>
                     </tr>`
    }
    document.getElementById('abc').innerHTML=rows
   // document.getElementById('abc').innerHTML="GM"
}