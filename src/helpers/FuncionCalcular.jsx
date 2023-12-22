import { useSeleccionMoneda } from "../hooks/useSeleccionMoneda";
useSeleccionMoneda;

export function FuncionCalcular(
  monedaDesde,
  monedaPara,
  cantidad,
  formatoSalida
) {
  let valorRespuesta = 0;
  let valorTotal = 0;
  let textoSalida = ""

  const { datosObj, cargando } = useSeleccionMoneda(
    `&currencies=${monedaPara.slice(0,3)}&base_currency=${monedaDesde.slice(0,3)}`, "latest"
  );

  {
    datosObj && (valorTotal = cantidad * datosObj[monedaPara.slice(0,3)]);
  }

  if (formatoSalida == "Roundout") {
    valorRespuesta = Math.round(valorTotal * 100) / 100;
    valorRespuesta = valorRespuesta.toString()
    textoSalida = "Rounded"
    return { valorRespuesta, cargando, textoSalida };
  }
  if (formatoSalida == "Truncate") {
    valorRespuesta = Math.trunc(valorTotal);
    valorRespuesta = valorRespuesta.toString()
    textoSalida = "Truncated"
    return { valorRespuesta, cargando, textoSalida };
  }
  if (formatoSalida == "Exact") {
    valorRespuesta = valorTotal;
    valorRespuesta = valorRespuesta.toString()
    textoSalida = "Exact"
    return { valorRespuesta, cargando, textoSalida };
  }


}
