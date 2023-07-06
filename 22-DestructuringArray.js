// Es un poco distinto al Destructuring con Objetos (Te recomiendo veas la clase)
//Sección 8 (Cap 55 Udemy)- (Minuto 1:45 hacia delante)

//Crea un Array y extrae la tercera posición mostrandolo en pantalla.

const frutas = ["Piña","Banana","Durazno","Cereza"]

frutas[3]



//destructuring
const [, , posicion] = frutas
console.log(posicion) // Durazno





//Destructuring + Spread Operator

const Arraysito = [1, 2, 3, 4, 5]

const [,,] = Arraysito;
const[ , ,...dos] = Arraysito;








// igualmente extrae la posición 3 del array y los ultimos 2 elementos guardalos dentro del destructuring
// Utilizando spread operator.


const [, , ,...tres] = Arraysito;
const [, , , ,...cuatro] = Arraysito;




//Tomaste la posición 1 xd
