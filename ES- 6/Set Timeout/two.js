setTimeout(()=>{
    console.log("Request - 1");
          } , 10000)
setTimeout(()=>{console.log("Request - 2")} , 1000)
setTimeout(()=>{console.log("Request - 3")} , 6000)
setTimeout(()=>{console.log("Request - 4")} , 3000)
/*Request - 2
Request - 4
Request - 3
Request - 1*/
