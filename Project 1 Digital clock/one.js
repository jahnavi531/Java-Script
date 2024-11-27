
setInterval(() => {
    let dt = new Date();
    let ct=dt.toLocaleTimeString();
    document.querySelector('.ct').innerHTML=ct;
}, 1000);
//document.querySelector('.ct').innerHTML=new Date().toLocalTimeString();
//document.querySelector('.ct').innerHTML="GM";

