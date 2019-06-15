var first = "Qobaiche";
var second = "Mohamed Amine";
var third = " Please Check Your Order";

var full = first + " " + second + " " + third + " " + ":";

document.getElementById("Welcome").innerHTML = full;

/////////////////////////////////////////////////

var fourth = "Montague";
var fifth = "House";

fufu = fourth + " " + fifth;

document.getElementById("sig").innerHTML = fufu;

/////////////////////////////////////////////////

var sixth = fufu.length;

document.getElementById("subtotal").textContent = sixth;

/////////////////////////////////////////////////

var seven = sixth * 5;

document.getElementById("shh").textContent = "$" + seven;

/////////////////////////////////////////////////

var nine = 4;
var ten = 3;

var yey = nine + ten;

document.getElementById("totalship").innerHTML = "$" + yey;

/////////////////////////////////////////////////

var eleven = seven + yey;

document.getElementById("total").textContent = "$" + eleven;

////////////////////// End ///////////////////////////
