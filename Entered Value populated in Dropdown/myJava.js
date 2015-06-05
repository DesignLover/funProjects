function addName(){
var name = document.getElementById('nameID').value;
localStorage.setItem('nameOfPr',localStorage.getItem('nameOfPr') + ", " + name);
console.log("name of Prabhu in Localstorage is " + localStorage.getItem('nameOfPr'));
}



function refList(){
var arrOfPr = localStorage.getItem('nameOfPr').split(", ");
console.log(arrOfPr);

    var x = document.getElementById('people');
    for(var i=0; i<arrOfPr.length; i++){
          var opt = document.createElement('option');
          opt.innerHTML= arrOfPr[i];
          opt.value=arrOfPr[i];
          console.log(arrOfPr[i]);
          x.appendChild(opt);

      }
}
