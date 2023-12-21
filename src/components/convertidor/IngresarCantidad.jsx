import React from "react";
import { useSeleccionMoneda } from "../../hooks/useSeleccionMoneda";

export default function IngresarCantidad(props) {
  const { titulo, cambiarValor } = props;

  return (
    <div className="ingresarCantidad">
      <label>{titulo}</label>
      <input
        type="number"
        className="form-control"
        placeholder="0.00"
        onChange={cambiarValor}
      ></input>
    </div>
  );
}
