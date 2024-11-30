let goToMovie = (Success, failure)=>{
 let bal = 1500;
 if(bal > 500){
 //if(bal <100){                    //Go to PG and Sleep
    Success("Go and Enjoy")
 }
 else{
    failure("Go to PG and Sleep")
 }
}


goToMovie((msg)=>{console.log(msg);
}, (err)=>{
    console.log(err);
    
}) //Go and Enjoy