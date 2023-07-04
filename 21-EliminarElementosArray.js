//Seccion 8 (Cap 54 Udemy)
//Elimina el primer y último elemento del Array
// Utiliza los metodos .pop .shift
const Array = ["Enero", "Lunes" , "Martes", "Miercoles" , "Abril"]




//Ejercicio
//Elimina el Producto Celular del carritodecompras Utilizando el metodo splice

const Celular = {
    marca: "Apple",
    modelo : "Iphone 14 pro",
    precio : 800.999,
    descripción : "Último modelo con todas las cáracteristicas posibles"
}

const Tablet = {
    marca: "Apple",
    modelo : "Ipad gen 9",
    precio : 650.000
}

const Sarten = {
    marca: "Bra Terra",
    descripción: "Útil para freir huevo",
}

const carritodecompras = [...Tablet , ...Celular, ...Sarten]






console.log(carritodecompras) // No editar




