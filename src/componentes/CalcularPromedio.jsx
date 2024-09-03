// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export const CalcularPromedio = () => {
  const [resultado, setResultado] = useState("");
  const [numeros, setNumeros] = useState([]);
  const [valor, setValor] = useState(0);

  const agregarValorAlArray = (e) => {
    if (isNaN(e.target.parentNode.children[1].value)) {
      alert("Ingrese un dato valido: un numero!");
    } else {
      numeros.push(Number(valor));
      const nuevoArray = [...numeros];
      setNumeros(nuevoArray);
      console.log(numeros);
    }
  };
  const calcularPromedio = () => {
    if (numeros.length == 0) {
      alert("El array esta vació");
    } else {
      setResultado(
        (numeros.reduce((a, num) => a + num, 0) / numeros.length).toFixed(2)
      );
    }
    setValor(0);
  };
  const reset = () => {
    setNumeros([]);
    setResultado('');
  };
  return (
    <div className="contenedor-promedio">
      <h2>Ingrese números y calcule su promedio</h2>
      <input
        type="text"
        placeholder="Ingrese un numero"
        name="numero"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      {numeros.length == 0 ? null : <h3>{`[${numeros}]`}</h3>}
      <button onClick={agregarValorAlArray}>Ingresar numeros al array</button>
      <button onClick={calcularPromedio}>Calcular Promedio</button>
      <button onClick={reset}>Reset</button>
      <hr />
      <h2>{resultado}</h2>
    </div>
  );
};
