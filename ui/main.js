console.log('Loaded!');

var counter=document.getElementById('counter');
var count=0;
counter.onclick = function(){
  count++;
  var first=document.getElementById('count');
  first.innerHTML=count;
};

