import React, { useState } from "react";
import { useSeleccionMoneda } from "../../hooks/useSeleccionMoneda";

export default function IngresarCantidad(props) {
  const { titulo, monedaDesde, datosObj, cambiarValor} = props;

  return (
    <div className="ingresarCantidad">
      <label>{titulo}</label>
      <div className="input-group">
        <span className="input-group-text" id="basic-addon1">
          {datosObj && <span>{monedaDesde}</span>}
        </span>

        <input
          type="number"
          className="form-control"
          placeholder="0.00"
          onChange={cambiarValor}
        ></input>
      </div>
    </div>
  );
}
