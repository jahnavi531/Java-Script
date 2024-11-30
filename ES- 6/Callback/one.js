let calc = (a,b,operation)=>{
  if (operation === "Sum"){
    return a+b;
  }
  if(operation === "multi"){
    return a*b;
  }


}

let r1 = calc(10,20,"Sum")
let r2 = calc(10,20,"multi")
console.log(r1);           //30
console.log(r2);       //200
