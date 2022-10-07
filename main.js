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
        this.inv[this.inv.length] = product;
        let aux = this.inv.length;
        for (let i=0; i < aux; i++){
            for (let j=0; j < aux; j++){
                if(j+1 !== aux){
                    if(this.inv[j].codigo > this.inv[j+1].codigo){
                        let add = this.inv[j+1].codigo;
                        this.inv[j+1].codigo = this.inv[j].codigo;
                        this.inv[j].codigo = add;
                    }
                }
            }
        }
        //this.inv.push(product);
    }

    buscar(codigo){
        let min = 0;
        let max = this.inv.length-1;
        while (min <= max){
            let prom = Math.floor((min+max) / 2);
            if (this.inv[prom].codigo === codigo){
                return prom;
            } else if (this.inv[prom].codigo < codigo){
                min = prom;
                prom = Math.floor((min+max) / 2);
                if (this.inv[prom].codigo === codigo){
                    return prom;
                }
            } else if (this.inv[prom].codigo > codigo){
                max = prom;
                prom = Math.floor((min+max) / 2);
                if (this.inv[prom].codigo === codigo){
                    return prom;
                }
            } else {
                return null;
            }
        }
        //for (let i = 0; i < this.inv.length; i++){ //Implementar busqueda binaria AGREGAR LISTAR INVERSO
        //    if (codigo == this.inv[i].codigo){      
        //        return this.inv[i];
        //    }
        //}
        //return null;
    }

    listar(){
        let datos="";
        this.inv.forEach((inv, i)=>{
            datos+=`${i+1}- ${this.inv[i].info()}`;
        })
        return datos;
    }

    listarInverso(){
        let long = this.inv.length;
        for (let i = 0; i < long; i++){
            let temp = this.inv[i];
            let contrario = long - i - 1;
            this.inv[i] = this.inv[contrario];
            this.inv[contrario] = temp;
        }
        return listar;
    }
}

let btnAgregar = document.getElementById("agregar");
let btnBuscar = document.getElementById("buscar");
let btnListar = document.getElementById("listar");
let btnListarInverso = document.getElementById('listarInvesro');

let resultado = document.getElementById("resultado");

btnAgregar.addEventListener('click', agregar);
btnBuscar.addEventListener('click', buscar);
btnListar.addEventListener('click', listar);
btnListar.addEventListener('click', listarInverso);

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

function listarInverso(){
    resultado.innerHTML = i.listarInverso();
}

module.exports = {agregar, buscar, listar, listarInverso};

//Pruebas de consola
//let p = new Producto(1, "Ladrillo", 500, 4);
//console.log(p.info());
//console.log(i.listar());
//console.log(i.listarInverso);