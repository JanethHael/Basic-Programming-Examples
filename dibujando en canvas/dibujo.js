
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi,xf;
var colorcito = "#FAA";

for(l = 0; l < lineas ; l++){
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea("#999999", 0,yi,xf,300);
  console.log("linea: " + l);

}

for(l = 0; l < lineas ; l++){
  yi = 10 * l;
  xf = 299 - (10 * (l + 1));
  dibujarLinea("#FF0000", 299,yi,xf,300);
  console.log("linea: " + l);

}

for(l = 0; l < lineas ; l++){
  yi = 299 - (10 * (l + 1));
  xf = 299 - (10 * (l + 1));
  dibujarLinea("#00FFFF", 299,yi,xf,0);
  console.log("linea: " + l);

}
for(l = 0; l < lineas ; l++){
  yi = 299 - (10 * (l + 1));
  xf = 10 * l;
  dibujarLinea("#800080", xf,0,0,yi);
  console.log("linea: " + l);

}

dibujarLinea(colorcito, 1,1,1,299);
dibujarLinea(colorcito, 1,299,299,299);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
