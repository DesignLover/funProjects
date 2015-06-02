var SanjTot = 0;
var BirTot = 0;
var VivTot = 0;
var SharTot = 0;
var RakTot = 0;
var SarTot = 0;


function putDownDet(){

var calen =  document.getElementById('inp1').value;
//alert(calen);
var names =  document.getElementById('inp2').value;
//alert(names);
var amount =  Number(document.getElementById('inp3').value);
//alert(amount);
//var all =  calen+"  "+names+"  "+amount;
//alert(all);
//document.getElementById('inp5').innerHTML = all;


      if(names==="Sanjay")
      {
        SanjTot+=amount;
        //alert(VivTot);
        localStorage.setItem('SanjaysTotal', SanjTot);
      }
      else if (names==="Rakesh")
      {
        RakTot+=amount;
        //alert(VivTot);
        localStorage.setItem('RakeshsTotal', RakTot);
      }
      else if (names==="Biren")
      {
        BirTot+=amount;
        //alert(VivTot);
        localStorage.setItem('BirenssTotal', BirTot);
      }
      else if (names==="Sharat")
      {
        SharTot+=amount;
        //alert(VivTot);
        localStorage.setItem('SharatsTotal', SharTot);
      }
      else if (names==="Vivek")
      {
        VivTot+=amount;
        //alert(VivTot);
        localStorage.setItem('ViveksTotal', VivTot);
      }
      else
      {
        SarTot+=amount;
        //alert(VivTot);
        localStorage.setItem('SaransTotal', SarTot);
      }

}


function getBirExp(){
  document.getElementById('inp5').innerHTML = "Birens Expense for this month is " + localStorage.getItem("BirenssTotal");
}

function getSarExp(){
  document.getElementById('inp5').innerHTML = "Sarans Expense for this month is " + localStorage.getItem("SaransTotal");
}

function getSanExp(){
  document.getElementById('inp5').innerHTML = "Sanjays Expense for this month is " + localStorage.getItem("SanjaysTotal");
}

function getSharExp(){
  document.getElementById('inp5').innerHTML = "Sharats Expense for this month is " + localStorage.getItem("SharatsTotal");
}

function getRakExp(){
  document.getElementById('inp5').innerHTML = "Rakeshs Expense for this month is " + localStorage.getItem("RakeshsTotal");
}

function getVivExp(){
  //alert("EnteredFunction");
  document.getElementById('inp5').innerHTML = "Viveks Expense for this month is " + localStorage.getItem("ViveksTotal");
}



function getPopUp(){
  $('#butn1').click(function(){
     $('#butn1').toggleClass('Sing');

  });


}

$(document).ready(getPopUp);
