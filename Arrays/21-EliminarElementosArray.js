//Seccion 8 (Cap 54 Udemy)
//Elimina el primer y último elemento del Array
// Utiliza los metodos .pop .shift
const Array = ["Enero", "Lunes" , "Martes", "Miercoles" , "Abril"]


//En la linea 8 estas diciendome que borras del Array Enero, que no existe, nada? No pusiste q borras algo.
Array.shift("Enero")


//Lo mismo que en la linea 8, el Array Abril no existe...
Array.pop("Abril")



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

carritodecompras.splice(1,1);


//Esta malo, nisiquiera existe el array Celular

//Como vas a mostrar Celular, nisiquiera lo borraste bien y practicamente si lo intentas borrar, no debería existir
//No puedes mostrar algo que no existe, no es obvio?.






console.log(carritodecompras) // No editar




