//Ejercicio1: Funciones
//Problema 1
/*
*Crea una función "muestraNombre"
*Debe de mostrar un mensaje que diga "Buenos dias, [tu nombre]" cada vez que sea llamada.
*/
function muestraNombre (){
console.log("Buenos dias, Rodrigo")
}


//Problema 2
/*
*Crea una función "cuadrado"
*Esta debe recibir un numero entero como argumento y regresar el valor del cuadrado de dicho numero como resultado.
Ej: si x=4, cuadrado(x)=16
*/
function cuadrado(numero){
  return numero * numero;
}


//Problema 3
/*
*Crea una función "tiraDado"
*Al llamar a la función, esta debe de regresar un mensaje que incluya un numero generado al azar de 1 a 6.
Ejemplo:
"El dado dió 3"
Pista:
Recuerda Math.random() y Math.floor() de la presentacion
*/
function tiraDado (){
  return "el dado dió " + Math.floor(Math.random() * (7-1)+1)
  }

console.log(tiraDado())
console.log(cuadrado(4))
muestraNombre()