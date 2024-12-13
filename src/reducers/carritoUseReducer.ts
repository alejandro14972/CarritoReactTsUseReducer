import { guitarras, carritoItem } from "../types";
import { db } from "../data/db";

export type CarritoAcciones =
    { type: 'addCart', payload: { item: guitarras } } |
    { type: 'eliminarElemento', payload: { id: guitarras['id'] } } |
    { type: 'aumentarcantidad', payload: { id: guitarras['id'] } } |
    { type: 'reducirCantidad', payload: { id: guitarras['id'] } } |
    { type: 'limpiarCarrito' }

export type CarritoState = {
    data: guitarras[]
    carrito: carritoItem[]
}


const initialCarrito = (): carritoItem[] => {
    const almacenamientoCarrito = localStorage.getItem('carrito');
    if (almacenamientoCarrito == null) {
      return [];
    } else {
      return JSON.parse(almacenamientoCarrito)
    }
  }

export const initialState: CarritoState = {
    data: db,
    carrito: initialCarrito()
}

export const carritoReducer = (
    state: CarritoState = initialState,
    acction: CarritoAcciones
) => {

    if (acction.type === "addCart") {
        const itemExist = state.carrito.find(p => p.id === acction.payload.item.id);
        console.log(itemExist);
        

        let actualizarCarrito: carritoItem[] = []
        if (itemExist) {
            actualizarCarrito = state.carrito.map(item => {
                if (item.id === acction.payload.item.id) {
                    return { ...item, cantidad: item.cantidad + 1 }
                } else {
                    return item
                }
            })
        } else {
            const newItem: carritoItem = { ...acction.payload.item, cantidad: 1 }
            actualizarCarrito = [...state.carrito, newItem]
        }
        return {
            ...state,
            carrito: actualizarCarrito
        }
    }

    if (acction.type === "eliminarElemento") {
        const cart = state.carrito.filter( item => item.id !== acction.payload.id)
        return{
            ...state,
            carrito: cart
        }
    }


    if (acction.type === "aumentarcantidad") {
        const cartactualizado = state.carrito.map( itemm => {
            if(itemm.id === acction.payload.id) {
                return {
                    ...itemm,
                    cantidad: itemm.cantidad + 1
                }
            }
            return itemm
        })
        
        return {
            ...state,
            carrito: cartactualizado
        }
    }

    if (acction.type === "reducirCantidad") {
        
        const cartactualizado = state.carrito.map( itemm => {
            if(itemm.id === acction.payload.id && itemm.cantidad > 0) {
                return {
                    ...itemm,
                    cantidad: itemm.cantidad - 1
                }
            }
            return itemm
        })
        
        return {
            ...state,
            carrito: cartactualizado
    }
}

    if (acction.type === "limpiarCarrito") {
        return {
            ...state,
            carrito: []
        }
    }
    return state
}