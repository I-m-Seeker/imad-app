console.log('Loaded!');

var counter=document.getElementById('counter');
counter.onclick = function(){
  var request=new XMLHttpRequest();
  request.onreadystatechange = function(){
      if(request.readyState===XMLHttpRequest.DONE){
         if(request.status == 200){
             var count=document.getElementById("count");
             count.innerHTML=request.responseText;
         }
      }
  };
  request.open('GET','http://sparshguptaa8.imad.hasura-app.io/counter',true);
  request.send(null);
};

