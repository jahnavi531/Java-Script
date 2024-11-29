/*let nums = [41,2,31,18,74,378]
//collect even numbers into new Array
let even_nums = [];
for(let num of nums) {
       if (num%2 === 0){
       even_nums.push(num);
       }
}
console.log(even_nums);  */    //[ 2, 18, 74, 378 ]


let nums = [41,2,31,18,74,378]
let i = 0;
while(i<=nums.length-1){
    if(nums[i]%2 === 0){
        even_nums.push(nums[i])
    }
    i++;
}
console.log(even_nums);


/*let nums = [41,2,31,18,74,378]
let even_Nums = nums.filter((num)=>{
    return num%2 ===0
})
console.log(even_Nums);     //[ 2, 18, 74, 378 ]*/


