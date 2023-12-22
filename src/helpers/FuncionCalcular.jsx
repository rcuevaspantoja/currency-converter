import { useSeleccionMoneda } from "../hooks/useSeleccionMoneda";
useSeleccionMoneda;

export function FuncionCalcular(
  monedaDesde,
  monedaPara,
  cantidad,
  formatoSalida
) {
  let valorRespuesta = null;
  let valorTotal = 0;
  let textoSalida = ""
  const { datosObj, cargando } = useSeleccionMoneda(
    `&currencies=${monedaPara}&base_currency=${monedaDesde}`, "latest"
  );

  {
    datosObj && (valorTotal = cantidad * datosObj[monedaPara]);
  }

  if (formatoSalida == "Roundout") {
    valorRespuesta = Math.round(valorTotal * 100) / 100;
    textoSalida = "Roundout"
    return { valorRespuesta, cargando, textoSalida };
  }
  if (formatoSalida == "Truncate") {
    valorRespuesta = Math.trunc(valorTotal);
    textoSalida = "Truncated"
    return { valorRespuesta, cargando, textoSalida };
  }
  if (formatoSalida == "Exact") {
    valorRespuesta = valorTotal;
    textoSalida = "Exact"
    return { valorRespuesta, cargando, textoSalida };
  }
}
