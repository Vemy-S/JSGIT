//Sección 8 (Cap 52 Udemy)
//Añade los 4 Productos existentes al "Carro de compras" 
//(Crea el último producto tu misma)
//Utiliza metodos (Recomendado .push)

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


const horno = {
     marca: 'thomas',
     modelo: 'industrial',
}

const calefactor = {
    nombre:'atlantic',
    precio:400,

}


const carrodecompras = [];

carrodecompras.push(Celular);
carrodecompras.push(Tablet);
carrodecompras.push(Sarten);
carrodecompras.push(horno);




// Entiendelo bien, asi no se agregan los productos.
//nisiquiera interactuaste con el array carrodecompras que te pedí que agregues los productos.
//Mas encima intentaste agregar 2 y pedí 4.




//Esto lo mostrará en pantalla(No editar)
console.log(carrodecompras)