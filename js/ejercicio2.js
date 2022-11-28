//Ejercicio dos calcular la hipotenusa de un triangulo con el teorema de pitagoras
var
cat1,cat2,hipotenusa;
cat1=prompt("Escribe el valor de un cateto");
cat2=prompt("Escribe el valor del otro cateto");
cat1=parseFloat(cat1);
cat2=parseFloat(cat2);
hipo=Math.sqrt(cat1*cat1+cat2*cat2);
alert("La hipotenusa del triangulo de catetos"+cat1+"y"+cat2+"es"+hipo);




