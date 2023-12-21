
import { useSeleccionMoneda } from "../hooks/useSeleccionMoneda";
useSeleccionMoneda;

export function FuncionCalcular(
  monedaDesde,
  monedaPara,
  cantidad,
  formatoSalida
) {
  let valorRespuesta = null;
let valorTotal
  const { datosObj, cargando } = useSeleccionMoneda(
    `&currencies=${monedaPara}&base_currency=${monedaDesde}`
  );

  {
    datosObj && (valorTotal = cantidad * datosObj[monedaPara]);
  }

  if (formatoSalida == "Roundout") {
    valorRespuesta = Math.round(valorTotal);
    console.log(valorRespuesta);
    return {valorRespuesta, cargando};
  }
  if (formatoSalida == "Truncate") {
    valorRespuesta = Math.trunc(valorTotal);
    console.log(valorRespuesta);
    return {valorRespuesta, cargando};
  }
  if (formatoSalida == "Exact") {
    valorRespuesta = valorTotal;
    console.log(valorRespuesta);
    return {valorRespuesta, cargando};
  }

}
