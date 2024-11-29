/*let nums =[10,20,30,40]
//create new Array based on existing Array

let new_nums = []
for(let num of nums){
    new_nums.push(num);
}
console.log(new_nums); */       //[ 10, 20, 30, 40 ]

 
/*let nums =[10,20,30,40]
let new_nums = nums.map((num)=>{return num;})

console.log(new_nums);  */             //[ 10, 20, 30, 40 ]



let nums=[10,20,30,40]
 let a = nums;                //aliasing

 a[0] = 100;   
 console.log(a);                //[ 100, 20, 30, 40 ]
 console.log(nums);
 //[ 100, 20, 30, 40 ]
 
 