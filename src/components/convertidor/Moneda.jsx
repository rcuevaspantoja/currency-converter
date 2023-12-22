import React from "react";

export default function Moneda(props) {
  const { valorID, datosObj, valor, cargando, cambiarMoneda, titulo } = props;

  const listaMonedas = Object.entries(datosObj);

  return (
    <div className="moneda">
      <label>{titulo}</label>
      <select
        id={valorID}
        className="form-select"
        value={valor}
        onChange={cambiarMoneda}
      >
        {cargando && <option>Loading...</option>}
        {datosObj &&
          listaMonedas.map((moneda) => (
            <option value={moneda[0] + moneda[1].symbol} key={moneda[0]}>
              {moneda[0]} ({moneda[1].symbol})
            </option>
          ))}
      </select>
    </div>
  );
}
