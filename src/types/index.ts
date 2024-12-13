export type guitarras = {
    id: number
    name: string
    image: string
    description: string
    price: number
  }

  export type carritoItem = guitarras &{
    cantidad:number
  }