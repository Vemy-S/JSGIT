// Es un poco distinto al Destructuring con Objetos (Te recomiendo veas la clase)
//Sección 8 (Cap 55 Udemy)- (Minuto 1:45 hacia delante)

//Crea un Array y extrae la tercera posición mostrandolo en pantalla.

const fruta = {
    nomb: 'Piña',
    tamaño: 'Mediano',
    Color: 'Amarillo'
}

console.log("Amarillo")

//destructuring
const { tamaño } = fruta;
console.log( tamaño );




//Destructuring + Spread Operator

const Arraysito = [1, 2, 3, 4, 5]

const[segundo] = Arraysito;

console.log(segundo);

const Arraysito1 = [...primero];

// igualmente extrae la posición 3 del array y los ultimos 2 elementos guardalos dentro del destructuring
// Utilizando spread operator.

console.log(Arraysito[3])

const [cuarto, ...quinto] = Arraysito;