import { CarritoAcciones } from '../reducers/carritoUseReducer';
import type {guitarras} from '../types/index'

type guitarrasProps={
  guitar: guitarras, 
  dispatch: React.Dispatch<CarritoAcciones>
}

export default function Guitar({ guitar, dispatch }: guitarrasProps) {

  const { name, image, description, price } = guitar;

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">${price}</p>
        <button
          type="button"
          className="btn btn-dark w-100"
          onClick={() => dispatch({type: 'addCart', payload: {item:guitar}})}
        >Agregar al Carrito</button>
      </div>
    </div>

  )
}
