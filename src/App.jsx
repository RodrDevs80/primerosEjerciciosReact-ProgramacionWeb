import './App.css'
import { CalcularPromedio } from './componentes/CalcularPromedio'
import { ContarPalabras } from './componentes/ContarPalabras'
import { EliminarDuplicados } from './componentes/EliminarDuplicados'
import { OrdenarArray } from './componentes/OrdenarArray'

function App() {
  

  return (
    <>
      <h1>Ejercicios Programación Web 1 (React Primeros Pasos 🖥):</h1>
      <h2>Profesor: Pablo Aroma 👨‍🏫</h2>
      <CalcularPromedio/>
      <br />
      <hr />
      <OrdenarArray/>
      <br />
      <hr />
      <ContarPalabras/>
      <br />
      <hr />
      <EliminarDuplicados/>
    </>
  )
}

export default App
