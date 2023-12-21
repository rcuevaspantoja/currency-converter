import React from "react";

export default function Moneda(props) {
  const { datos, valorID, valorBase, cargando, cambiarMoneda, titulo } = props;

  return (
    <div className="moneda">
      <label>{titulo}</label>
      <select
        id={valorID}
        className="form-select"
        value={valorBase}
        onChange={cambiarMoneda}
      >
        {cargando && <option>Loading...</option>}
        {datos &&
          datos.map((moneda) => (
            <option value={moneda} key={moneda}>
              {moneda}
            </option>
          ))}
      </select>
    </div>
  );
}
