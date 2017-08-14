console.log('Loaded!');

var but=document.getElementById("counter");
var counter=0;
but.onclick = function(){
    counter=counter+1;
    var ct=document.getElementById("count");
    ct.innerHTML=counter;
    
}


