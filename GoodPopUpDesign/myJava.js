$(document).ready(function(){
  $('#btncan').click(function(){
    $('div.container').toggle("explode");
  });
});


var i;
function addPrabhu(){

  var prabhuName = document.getElementById('inpName').value;
  var mobNo = document.getElementById('inpMobno').value;

/*var names;
var tempName = localStorage[name];
if(tempName != null)
{
  var name = [JSON.parse(localStorage[name]), prabhuName];
  names = JSON.stringify(name);
}

localStorage[name] = names;

console.log(JSON.parse(localStorage[name]));
*/

mobNo = {'name':'tom' , 'name1':'kom' , 'name2':'dom'};



console.log(JSON.stringify(mobNo));
var retobj = localStorage.getItem('mobNo');

console.log(JSON.parse(retobj));





}
