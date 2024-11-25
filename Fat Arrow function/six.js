/*function greet(){
    console.log('GM');        //GN
    
}
greet();

function greet(){
    console.log('GN');           //GN                function overriding conflict
    
}
greet();*/

var greet=()=>{
    console.log('GM');            //GM
    
}
greet();
var greet=()=>{
    console.log('GN');            //GN          overriding is not happening - reslove overriding
    
}
greet();