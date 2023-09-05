function Addition(x,y){
    var x= parseFloat(document.getElementById("in1").value);
    var y= parseFloat(document.getElementById("in2").value);
    var sum=x+y;
    document.getElementById("total1").innerHTML= sum;
}

function Subraction(x,y){
    var x= parseFloat(document.getElementById("in1").value);
    var y= parseFloat(document.getElementById("in2").value);
    var sub=x-y;
    document.getElementById("total1").innerHTML= sub;
}

function Multiplication(x,y){
    var x= parseFloat(document.getElementById("in1").value);
    var y= parseFloat(document.getElementById("in2").value);
    var mul=x*y;
    document.getElementById("total1").innerHTML= mul;
}

function Division(x,y){
    var x= parseFloat(document.getElementById("in1").value);
    var y= parseFloat(document.getElementById("in2").value);
    var divi=x/y;
    document.getElementById("total1").innerHTML= divi;
}