import React from "react";


export default function IngresarCantidad(props) {
  const { titulo, monedaDesde, datosObj, cambiarValor} = props;

  return (
    <div className="ingresarCantidad">
      <label>{titulo}</label>
      <div className="input-group">
        <span className="input-group-text">
          {datosObj && <span>{monedaDesde.slice(3)}</span>}
        </span>

        <input
          type="number"
          min={0}
          inputMode="numeric"
          className="form-control"
          placeholder="0.00"
          onChange={cambiarValor}
          maxLength="15"

        >
        </input>
      </div>
    </div>
  );
}
