console.log('Loaded!');

var but=document.getElementById("counter");
var counter=0;
but.onclick() = function(){
    counter++;
    var ct=document.getElementById("count");
    ct.innerHTML=counter.toString();
    
}


