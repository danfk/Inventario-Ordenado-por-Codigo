class Producto {
    constructor(codigo, nombre, cantidad, costo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    }

    info(){
        return this.codigo + " " + this.nombre + " " + this.cantidad + " " + " $" + this.costo;
    }
}

class Inventario {
    constructor(){
        this.inv = [];
    }

    agregar(product){
        this.inv.push(product);
    }

    buscar(codigo){
        for (let i = 0; i < this.inv.length; i++){
            if (codigo == this.inv[i].codigo){
                return this.inv[i];
            }
        }
        return null;
    }

    listar(){
        let datos="";
        this.inv.forEach((inv, i)=>{
            datos+=`${i+1}- ${this.inv[i].info()}`;
        })
        return datos;
    }
}

let btnAgregar = document.getElementById("agregar");
let btnBuscar = document.getElementById("buscar");
let btnListar = document.getElementById("listar");

let resultado = document.getElementById("resultado");

btnAgregar.addEventListener('click', agregar);
btnBuscar.addEventListener('click', buscar);
btnListar.addEventListener('click', listar);

let i = new Inventario();


function agregar(codigo, nombre, cantidad, costo){
    codigo = parseFloat(document.getElementById("codigo").value);
    nombre = parseFloat(document.getElementById("nombre").value);
    cantidad = parseFloat(document.getElementById("cantidad").value);
    costo = parseFloat(document.getElementById("costo").value);
    let nuevo = new Producto(codigo, nombre, cantidad, costo);
    i.agregar(nuevo);
    resultado.innerHTML = "Se agrego 1 producto al inventario"
}

function buscar(codigo){
    codigo = parseFloat(document.getElementById("codigo").value);
    resultado.innerHTML = i.buscar(codigo);
}

function listar(){
    resultado.innerHTML = i.listar();
}

module.exports = {agregar, buscar, listar};

//Pruebas de consola
//let p = new Producto(1, "Ladrillo", 500, 4);
//console.log(p.info());
//console.log(i.listar());