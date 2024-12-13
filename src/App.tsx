import { useReducer, useEffect } from "react";
import Header from "./components/Header"
import Guitar from "./components/Guitar"
import { carritoReducer, initialState } from "./reducers/carritoUseReducer";

function App() {

    const [state, dispatch] = useReducer(carritoReducer, initialState)
    
    
    useEffect(() => {  
      localStorage.setItem("carrito", JSON.stringify(state.carrito))
    }, [state.carrito])
    

  return (
    <>
      <Header
        carrito={state.carrito}
        dispatch={dispatch}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {state.data.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              dispatch={dispatch}
            />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>

    </>
  )
}

export default App
