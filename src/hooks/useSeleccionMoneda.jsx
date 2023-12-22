import { useState, useEffect } from "react";

export function useSeleccionMoneda(url, arg) {
  const [datosObj, setDatosObj] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  const urlBase = `https://api.freecurrencyapi.com/v1/${arg}?apikey=${
    import.meta.env.VITE_APIKEY
  }`;

  useEffect(() => {
    setCargando(true);
    fetch(urlBase + url)
      .then((res) => res.json())
      .then((data) => setDatosObj(data.data))
      .catch((err) => setError(err))
      .finally(() => setCargando(false));
  }, [url]);
  return { cargando, error, datosObj };
}
