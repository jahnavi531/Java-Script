let nums=[41,2,31,18,7,74,378]
let even_nums=[]
//for of
for (let num of nums){
    if(num%2===0){
        even_nums.push(num)
    }
}
console.log(even_nums);

//while
let i=0;
while(i<=nums.length-1){
   if(nums[i]%2===0){
    even_nums.push(nums[i])
   }
   i++
}

//filter 
let even_num = nums.filter((num)=>{
    return num%2===0})
    console.log(even_num);