function changeColor(){

var temperature = document.getElementById('inp1').value;
//alert(temperature);

if(temperature>=0 && temperature<=50)
{

  document.body.style.backgroundColor = "lightblue";
  //alert("Cold");

}
else if(temperature> 50 && temperature<=80)
{

  document.body.style.backgroundColor = "yellow";
//  alert("Med");
}
else
{

  document.body.style.backgroundColor = "red";
  //alert("HAT");
}


}
