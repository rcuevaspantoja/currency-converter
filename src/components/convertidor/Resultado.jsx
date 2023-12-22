import React, { useState } from "react";
import { FuncionCalcular } from "../../helpers/FuncionCalcular";
import TipoSalida from "../tipoSalida/TipoSalida";

function Resultado(props) {
  const { titulo, monedaDesde, monedaPara, cantidad, error } = props;
  const [formatoSalida, setFormatoSalida] = useState("Truncate");
  const { valorRespuesta, cargando, textoSalida } = FuncionCalcular(
    monedaDesde,
    monedaPara,
    cantidad,
    formatoSalida
  );

  const idBotonCopiar = document.getElementById("btnCopiar");
  const idValorFinal = document.getElementById("valorFinal");


  function copiarTexto() {
    navigator.clipboard.writeText(valorRespuesta);
    alert("Copied to the clipboard.");
  }

  //Activar o desactivar botón
  if (idValorFinal) {
    if (valorRespuesta == 0) {
      idBotonCopiar.disabled = true;
    }
    if (valorRespuesta != 0) {

      idBotonCopiar.disabled = false;
    }
  }

  return (
    <div className="resultadoBox">
      <div className="encabezadoRespuesta">
        <h2>{titulo}</h2>
        <TipoSalida cambiarFormato={(e) => setFormatoSalida(e.target.value)} />
      </div>
      <div className="resultado">
        <div className="resultadoExplicado">
          <p>
            {monedaDesde.slice(0, 3)} TO {monedaPara.slice(0, 3)} ({textoSalida}
            )
          </p>
          <button
            id="btnCopiar"
            className="btn botonCopiar"
            onClick={copiarTexto}
          >
            <i className="bi bi-clipboard"></i>
          </button>
        </div>

        {cargando && <div className="spinner-border" role="status"></div>}
        {!cargando && (
          <p id={"resultadoFinal"} className="resultadoValor">
            <span>{monedaPara.slice(3)} </span>
            <span id="valorFinal">{error == 1 ? "ERROR EN EL SERVIDOR." : valorRespuesta}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Resultado;
