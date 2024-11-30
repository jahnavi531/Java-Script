let prices = [98, 198, 298, 398, 498, 598]
//inner price value +1 and collect into new Array
let new_prices = []
for(let price of prices){
    new_prices.push(price+1)
}
console.log(new_prices);                //[ 99, 199, 299, 399, 499, 599 ]
