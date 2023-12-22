import React, { useState } from "react";
import { FuncionCalcular } from "../../helpers/FuncionCalcular";
import TipoSalida from "../tipoSalida/TipoSalida";

function Resultado(props) {
  const { titulo, monedaDesde, monedaPara, cantidad } = props;

  const [formatoSalida, setFormatoSalida] = useState("Truncate");
  const { valorRespuesta, cargando, textoSalida } = FuncionCalcular(
    monedaDesde,
    monedaPara,
    cantidad,
    formatoSalida
  );

  return (
    <div className="resultadoBox">
      <div className="encabezadoRespuesta">
        <h2>{titulo}</h2>
        <TipoSalida cambiarFormato={(e) => setFormatoSalida(e.target.value)} />
      </div>
      <div className="resultado">
        <p className="resultadoExplicado">
          {monedaDesde} TO {monedaPara} ({textoSalida})
        </p>

        {cargando && (
          <div className=" resultadoValor spinner-border" role="status"></div>
        )}
        {!cargando && (
          <p className="resultadoValor">
            = {valorRespuesta} {monedaPara}
          </p>
        )}
      </div>
    </div>
  );
}

export default Resultado;
