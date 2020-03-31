function changeImage() {
	var image = document.getElementById('myImage');
	if (image.src.match("norsu")) {
	image.src = "./kuvat/lightoff.gif";
	
	}else if (image.src.match("lighton")) {
	  image.src = "./kuvat/norsu.gif";
	
	}else {
	image.src = "./kuvat/lighton.gif"; }
	}
	

function myFunction() {
	var age, voteable;
	age = Number(document.getElementById("age").value);
	if (isNaN(age)) {
	voteable = "Input is not a number";
	} else {
	voteable = (age < 18) ? "Too young" : "Old enough";
	}
	document.getElementById("demo").innerHTML = voteable;
}
function aika ()	{		
	var d = new Date();
	var m = d.getMinutes () ;
	document.getElementById("viritys").innerHTML=m;
	tarkastus();
}	
function up () {
	var v = document.getElementById("viritys").innerHTML;
	v++; document.getElementById("viritys").innerHTML=v;
	tarkastus();
	console.log (v)
}
function down () {
	var v = document.getElementById("viritys").innerHTML;
	v--; document.getElementById("viritys").innerHTML=v;
	tarkastus();
	console.log (v)
}
function tarkastus() {	
		var m = document.getElementById("viritys").innerHTML;
		if ( ( m % 2) == 0) {
		document.getElementById("tunti").innerHTML=
		"Arvo on parillinen";
	}else{
		document.getElementById("tunti").innerHTML=
		"Arvo on pariton";
	}
}