$(document).ready(function(){
  $('#btncan').click(function(){
    $('div.container').toggle("explode");
  });
});



function addPrabhu(){

  var prabhuName = document.getElementById('inpName').value;
  var mobNo = document.getElementById('inpMobno').value;

var names;
var tempName = localStorage[name];
if(tempName != null)
{
  var name = [JSON.parse(localStorage[name]), prabhuName];
  names = JSON.stringify(name);
}

localStorage[name] = names;

console.log(JSON.parse(localStorage[name]));
/*
   localStorage.setItem("name[i]",prabhuName);
   localStorage.setItem("mobno[i]",mobNo);
  console.log(localStorage.getItem("name[i]"));


for(var j=0; j<=i; j++){
console.log(j);
console.log(localStorage.getItem("name[j]"));
console.log(localStorage.getItem("mobno[j]"));
}

i++; */



}
