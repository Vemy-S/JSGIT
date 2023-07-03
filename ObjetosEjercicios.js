// SECCIÓN 7 (Curso Udemy)
// Arreglar lo que se pidió

// Crea un OBJETO con 5 propiedades
const producto ={
    nombre: 'iphone',
    Precio: 400,
    disponible: true,
    color: 'morado',
    empresa: 'Entel',
}

// Accede a 3 valores de tu objeto
console.log(producto.Precio)
console.log(producto.empresa)
console.log(producto.nombre)

//Agrega nueva propiedad a tu objeto
producto.descripcion = 'este producto es reacondicionado'
producto.generacion = '4G'
//Elimina una propiedad de tu objeto
delete producto.empresa



// Haz un Destructuring de 4 propiedades de tu objeto.
 const{nombre,Precio,disponible,color}= producto;


 