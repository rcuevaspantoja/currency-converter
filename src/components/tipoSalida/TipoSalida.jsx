import React from "react";

function TipoSalida(props) {
  const { cambiarFormato } = props;

  return (
    <select
      className="form-select tipoSalida"
      aria-label="Default select example"
      onChange={cambiarFormato}
      defaultValue={"Truncate"}
    >
      <option value="Truncate">Truncate</option>
      <option value="Roundout">Roundout</option>
      <option value="Exact">Exact</option>
    </select>
  );
}

export default TipoSalida;
