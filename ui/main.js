console.log('Loaded!');

var but=document.getElementById("counter");
var counter=0;
but.onclick() = function(){
    counter++;
    var count=document.getElementById("count");
    count.innerHTML=counter;
}


