import { Component } from '@angular/core';
import { CartService } from '../core/services/cart.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public cartService:CartService) {}


  crearMensaje():string{
    let parteProductos = '';
    this.cartService.carrito.forEach(productoCarrito => {
      const mensajeProducto = `- ${productoCarrito.producto.nombre} - ${productoCarrito.cantidad}
`;
      parteProductos = parteProductos + mensajeProducto;
    })
    const primeraParte = "https://wa.me/+5493413049280?text=";
    const segundaParte = `Hola, les envio mi carrito/tengo una consulta:

    ${parteProductos}
    Total: ${this.cartService.totalCarrito}
    
    Nuestro horario de atencion es de Lunes a Viernes de 10 hs a 20 hs. Cuando estemos disponible te enviamos tu link de pago o siemplemente responderemos tu consulta.

`;
    const mensaje = encodeURI(primeraParte+segundaParte);
     return mensaje;
  }

  realizarPedido(){
    window.open(this.crearMensaje(), '_blank');
    this.cartService.vaciarCarrito();
  }
}
