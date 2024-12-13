import { useState, useEffect, useMemo } from "react";

import type { guitarras, carritoItem } from '../types/index'

export const useCarrito = () => {
  const initialCarrito = (): carritoItem[] => {
    const almacenamientoCarrito = localStorage.getItem('carrito');
    if (almacenamientoCarrito == null) {
      return [];
    } else {
      return JSON.parse(almacenamientoCarrito)
    }
  }


  const [carrito, setCarrito] = useState(initialCarrito);

/*   useEffect(() => {  
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito])
 */

/*   function addCart(item: guitarras) {
    const itemExist = carrito.findIndex(p => p.id === item.id);
    if (itemExist >= 0) {
      const actualizarCarrito = [...carrito];
      actualizarCarrito[itemExist].cantidad++;
      setCarrito(actualizarCarrito);
    } else {
      const newItem: carritoItem = { ...item, cantidad: 1 }
      setCarrito([...carrito, newItem])
    }
  } */

/*   function eliminarElemento(id: number) {
    const nuevoCarrito = carrito.filter(p => p.id !== id); 
    setCarrito(nuevoCarrito); 
  } */

/*   function aumentarcantidad(id: number) {
    const itemExist = carrito.findIndex(p => p.id === id);
    if (itemExist >= 0) {
      const actualizarCarrito = [...carrito];
      actualizarCarrito[itemExist].cantidad++;
      setCarrito(actualizarCarrito);
    }
  } */


 /*  function reducirCantidad(id: number) {
    const itemExist = carrito.findIndex(p => p.id === id);
    if (itemExist >= 0) {
      const actualizarCarrito = [...carrito];
      if (actualizarCarrito[itemExist].cantidad > 0) {
        actualizarCarrito[itemExist].cantidad--;
        setCarrito(actualizarCarrito);
      }
      if (actualizarCarrito[itemExist].cantidad === 0) {
        eliminarElemento(actualizarCarrito[itemExist].id)
      }
    }
  }

  function limpiarCarrito() {
    setCarrito([])
  } */

  //const carritoTotal = useMemo( () => carrito.reduce( (total, item ) => total + (item.cantidad * item.price), 0), [carrito] )


  return {

  }

}