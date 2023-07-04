// SECCIÓN 7 (Curso Udemy)

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
<<<<<<< HEAD
 const{nombre , Precio , disponible , color}= producto;
=======
 const{nombre, Precio, disponible, color}= producto;
>>>>>>> 1e6b414a800637df7855e168602d04da643403ba


 