console.log('Loaded!');
alert("Hi");
var element=document.getElementById('first');
element.innerHTML='Hi';
var marginLeft=0;
function move(){
    marginLeft=marginLeft + 10;
    img.style.marginLeft=marginLeft +"px";
}
var img=document.getElementById("mai");
img.onclick =function(){
   var interval=setInterval(move,3000);
};