// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

export const EliminarDuplicados = () => {
    const [numeros,setNumeros]=useState([]);
    const [valor,setValor]=useState('');
    const agregarValorAlArray=()=>{
     numeros.push(Number(valor));
     const nuevoNumeros= [...numeros];
     setNumeros(nuevoNumeros);
    }
    const eliminarDuplicados=()=>{
    const numerosSet= new Set(numeros);
    setNumeros([...numerosSet]);
    }
    const reset =()=>{
      setValor('');
      setNumeros([]);
    }
  return (
    <div className="contenedor-promedio">
    <h2>Eliminar Duplicados:Ingrese números a un array!</h2>
    <input
      type="text"
      placeholder="Ingrese un numero"
      name="numero"
      value={valor}
      onChange={(e) => setValor(e.target.value)}
    />
    {numeros.length == 0 ? null : <h3>{`[${numeros}]`}</h3>}
    <button onClick={agregarValorAlArray}>Ingresar numeros al array</button>
    <button onClick={eliminarDuplicados} disabled={numeros.length < 2}>Eliminar Duplicados</button>
    <button onClick={reset}>Reset</button>
    <br />
  </div>
  )
}
