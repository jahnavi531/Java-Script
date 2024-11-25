/*function wish(){
    console.log(this);                 //object context - heavy
    
}
wish(); */


//fat Arrow Function
let wish=()=>{
    console.log(this);            //empty object {}
    
}
wish();          