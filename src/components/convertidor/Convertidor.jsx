import React, { useState } from "react";
import { useSeleccionMoneda } from "../../hooks/useSeleccionMoneda";
import Moneda from "./Moneda";
import IngresarCantidad from "./IngresarCantidad";
import Resultado from "./Resultado";
import "bootstrap-icons/font/bootstrap-icons.css";

function Convertidor() {
  const [monedaDesde, setMonedaDesde] = useState("AUD");
  const [monedaPara, setMonedaPara] = useState("USD");
  const [cantidad, setCantidad] = useState(0);

  const { cargando, datos, error } = useSeleccionMoneda("&currency");

  const funcionError = () => {
    alert(
      "Ha ocurrido un error, ponerse en contacto con el desarrollador, link al final de la página."
    );
    console.log(error);
  };

  async function cambiarValores() {
    let valorInicial = monedaDesde;
    let valorFinal = monedaPara;

    setMonedaDesde(valorFinal);
    setMonedaPara(valorInicial);
  }

  return (
    <section className="convertidorBox">
      <div className="convertidor">
        {error && funcionError()}

        <div className="seleccionarMoneda">
          <Moneda
            titulo={"FROM"}
            valorID={"monedaDesde"}
            valorBase={monedaDesde}
            datos={datos}
            cargando={cargando}
            cambiarMoneda={(e) => setMonedaDesde(e.target.value)}
          />

          <button className="btn" onClick={cambiarValores}>
            <i className="bi bi-arrow-left-right"></i>
          </button>

          <Moneda
            titulo={"TO"}
            valorID={"monedaPara"}
            valorBase={monedaPara}
            datos={datos}
            cargando={cargando}
            cambiarMoneda={(e) => setMonedaPara(e.target.value)}
          />
        </div>

        <IngresarCantidad
          titulo={"AMOUNT"}
          monedaDesde={monedaDesde}
          monedaPara={monedaPara}
          cambiarValor={(e) => setCantidad(e.target.value)}
        />

        <Resultado
          titulo={"RESULT"}
          monedaDesde={monedaDesde}
          monedaPara={monedaPara}
          cantidad={cantidad}
        />
      </div>
    </section>
  );
}

export default Convertidor;
