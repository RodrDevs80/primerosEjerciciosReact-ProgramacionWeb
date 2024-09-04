// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export const OrdenarArray = () => {
  const [valor, setValor] = useState(0);
  const [numeros, setNumeros] = useState([]);
  const [order, setOrder] = useState("");
  const agregarValorAlArray = () => {
    if(isNaN(valor)){
        alert('Ingrese un numero valido!📢')
    }else{
        const newNumeros = [...numeros];
        newNumeros.push(Number(valor));
        setNumeros(newNumeros);
    }
    
  };
  const ordenar = (o) => {
    if (numeros.length == 0) {
      alert("El Array esta vacío!📢");
    } else {
      if (o == "ascendente") {
        numeros.sort((a, b) => a - b);
       const ordenadoAscendente= [...numeros]
        setNumeros(ordenadoAscendente);
      } else if(o=='descendente') {
        numeros.sort((a, b) => b - a);
        const ordenadoDescendente= [...numeros]
        setNumeros(ordenadoDescendente);
      }
    }
  };
  const reset = () => {
    setNumeros([]);
    setOrder("");
    setValor(0);
  };
  console.log(order);
  console.log(numeros);
  return (
    <div className="contenedor-promedio">
      <h2>Ingrese números a un array, para luego ordenarlos</h2>
      <input
        type="text"
        placeholder="Ingrese un numero"
        name="numero"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      {numeros.length == 0 ? null : <h3>{`[${numeros}]`}</h3>}
      <button onClick={agregarValorAlArray}>Ingresar numeros al array</button>
      <button onClick={() => ordenar(order)}>Ordenar</button>
      <samp>Elige el orden</samp>
      <select
        name="orden"
        id="orden"
        value={order}
        onChange={(e) => setOrder(e.target.value)}
      >
        <option value="ascendente">Ascendente</option>
        <option value="descendente">Descendente</option>
      </select>
      <button onClick={reset}>Reset</button>
      <br />
    </div>
  );
};
