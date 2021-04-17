//Ejercicio 2: Introduccion a programacion orientada a objetos
/*
*Crea un objeto "persona", deberá incluir los siguientes atributos:
- nombre: Mario
- edad : 12
- colorDeCabello : negro
*/
let obj = {
  Persona: {nombre: "Mario", edad: 12, colorDeCabello:"negro"}
}


/*
*Agrega 2 nuevos atributos a persona:
- colorFavorito
- hobbie
Puedes darle cualquier valor correspondiente a los atributos
*/
obj["Persona"]["colorFavorito"] = "Azul"
obj["Persona"]["Hobbie"] = "Natación"
console.log(obj)
//Cambia el valor del atributo nombre. Puede ser por cualquier otro diferente al que ya tiene
obj["Persona"]["nombre"] = "Fernando"
console.log(obj)

//Elimina el atributo colorDeCabello de persona
delete obj["Persona"]["colorDeCabello"]
console.log(obj)
