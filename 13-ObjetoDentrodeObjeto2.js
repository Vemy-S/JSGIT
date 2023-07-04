// Sección 7 (Curso Udemy) (Clase 39 - 40 - 43)

//Hacer lo que se pidió

const Objeto = {
    nombre : "Objeto clasificado",
    precio : "Incalculable",

        Descripcion : {
            medida : "100m",
            peso : "500k",

            DescripcionClasificada : {
                precioreal : 500.000
            }
        }

}


//Ingresa al valor de peso del objeto creado
console.log(Objeto.Descripcion.peso)


//Ingresa al valor de precioreal del objeto creado
console.log(Objeto.DescripcionClasificada.precioreal)


//Haz un destructuring de los objetos anidados (Accede a peso y precioreal)
const{Descripcion:{peso}} = Objeto;
const{DescripcionClasificada:{precioreal}} = Objeto;

// const{Descripcion,Descripcion:{medida,medida:{peso: {peso} } } } = Objeto;




//const{Objetobjeto, DescripcionClasificada, DescripcionClasificada:{precioreal:{precioreal}}} = Objeto;



// Congela el objeto para que sea inmodificable
console.log(Object.isFrozen(Objeto));