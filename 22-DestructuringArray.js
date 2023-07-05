// Es un poco distinto al Destructuring con Objetos (Te recomiendo veas la clase)
//Sección 8 (Cap 55 Udemy)- (Minuto 1:45 hacia delante)

//Crea un Array y extrae la tercera posición mostrandolo en pantalla.


// ESTO NISIQUIERA ES UN ARRAY, ES UN O B J E T O,
const fruta = {
    nomb: 'Piña',
    tamaño: 'Mediano',
    Color: 'Amarillo'
}

console.log("Amarillo")

//destructuring
//ESTO nisiquiera es un destructuring de array, es de OBJETO ??????? 
const { tamaño } = fruta;
console.log( tamaño );




//Destructuring + Spread Operator

const Arraysito = [1, 2, 3, 4, 5]

// que es esto ? nisiquiera pedi algo como esto
const[segundo] = Arraysito;

console.log(segundo);

// Esto tampoco lo pedi.
const Arraysito1 = [...primero];

// igualmente extrae la posición 3 del array y los ultimos 2 elementos guardalos dentro del destructuring
// Utilizando spread operator.

//DIJE UTILIZANDO SPREAD OPERATOR.
console.log(Arraysito[3])


//Tomaste la posición 1 xd
const [cuarto, ...quinto] = Arraysito;