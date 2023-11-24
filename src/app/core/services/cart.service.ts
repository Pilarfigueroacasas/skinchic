import { Injectable } from '@angular/core';
import { ProductoCarrito } from '../interfaces/carrito';
import { Producto } from '../interfaces/producto';
import { NgFor, NgIf } from '@angular/common';
import { DetalleProductoPage } from 'src/app/pages/detalle-producto/detalle-producto.page';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  carrito: ProductoCarrito[] = [];
  totalCarrito: number = 0;
  subtotalCarrito: number = 0;
  descuentoCarrito: number = 0;
  envioCarrito: number = 0;


  constructor(){
    const guardado = localStorage.getItem("carrito");
    if(guardado){
      this.carrito = JSON.parse(guardado);
      this.calcularTotal()
    }
  }

  agregarAlCarrito(producto:Producto,cantidad:number){
    //reviso si el producto existe en el carrito
    const index = this.carrito.findIndex(item => item.producto.nombre === producto.nombre);
    if(index === -1){
      //si es un producto nuevo creo el elemento producto y lo pongo en el carrito
    const productoActual:ProductoCarrito = {
      cantidad: cantidad,
      producto: producto
    
    }
    this.carrito.push(productoActual);
  } else {
    //si el producto ya existe, modifico el carrito para agregarle las unidades correspondientes.
    this.carrito[index].cantidad = this.carrito[index].cantidad + cantidad;
}

    console.log(this.carrito)
    this.actualizarLocalStorage()
    this.calcularTotal()
  }

  eliminarProducto(nombre: string){
    this.carrito = this.carrito.filter(item => item.producto.nombre !== nombre);
    this.actualizarLocalStorage()
    this.calcularTotal()
  }

  vaciarCarrito(){
    this.carrito = [];
    this.actualizarLocalStorage();
    this.calcularTotal();
  }

  cambiarCantidad(idProducto:number, cantidadACambiar: number){ 
    const index = this.carrito.findIndex(item => item.producto.id === idProducto);
    if(index > -1) {
      this.carrito[index].cantidad = cantidadACambiar; 
     
    }
    this.actualizarLocalStorage();
    
    this.calcularTotal();
  }

  actualizarLocalStorage(){
    localStorage.setItem("carrito",JSON.stringify(this.carrito))
  }

  calcularSubtotal() {
    this.subtotalCarrito = 0;
    this.carrito.forEach(item => {
      this.subtotalCarrito += item.cantidad * item.producto.precio;
    });
    this.calcularTotal();
  }

  calcularTotal(){
      this.subtotalCarrito = 0;
      this.envioCarrito = 0;
      this.totalCarrito = 0;
      this.descuentoCarrito = 0;
      this.carrito.forEach(item => {
      this.subtotalCarrito = this.subtotalCarrito + item.cantidad * item.producto.precio; 
      })

      if (this.subtotalCarrito > 0 && this.subtotalCarrito < 50000) {
        this.envioCarrito = 3500;
      }
     
      else if (this.subtotalCarrito >= 80000) {
        this.descuentoCarrito = 20000;
        
      }
      this.totalCarrito = this.subtotalCarrito + this.envioCarrito - this.descuentoCarrito;

    }


    sumarProducto(productoNombre: string): void {
      let producto = this.carrito.find(item => item.producto.nombre === productoNombre);
      if (producto) {
        producto.cantidad++;
        this.calcularSubtotal();
      }
    }
    
    restarProducto(productoNombre: string) {
      let producto = this.carrito.find(item => item.producto.nombre === productoNombre);
      if (producto && producto.cantidad > 1) {
        producto.cantidad--;
        this.calcularSubtotal();
      }
    }
    
    }