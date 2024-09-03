// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

export const ContarPalabras = () => {
    const [frase,setFrase]=useState('');
    const [resultado,setResultado]=useState('');
    const contarPalabras=()=>{
        setResultado(frase.split(' ').length);    
    }
    const reset=()=>{
     setFrase('');
     setResultado('');
    }
    
  return (
    <div className="contenedor-promedio">
      <h2>Ingrese una frase:</h2>
      <input
        className='frase'
        type="text"
        placeholder="ingrese una frase"
        name="frase"
        value={frase}
        onChange={(e) => setFrase(e.target.value)}
      />
      
      <h3>{frase}</h3>
      <button onClick={contarPalabras} disabled={frase.length==0}>Contar Palabras</button>
      <button onClick={reset}>Reset</button>
      <h2>{frase.length!=0? `Cantidad de palabras:${resultado}`:'No se ingreso ninguna frase o palabra'}</h2>
      <br />
    </div>
  )
}
