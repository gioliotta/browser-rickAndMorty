import {
  BsArrowLeftSquareFill as BtnLeft,
  BsArrowRightSquareFill as BtnRight,
} from "react-icons/bs";
import { useEffect } from "react";

export default function CambiarPag({
  numeroPaginaActual,
  setNumeroPaginaActual,
  setCargando,
}) {
  const anteriorPag = () =>
    setNumeroPaginaActual(
      numeroPaginaActual === 0 ? 1 : numeroPaginaActual - 1,
    );
  const siguientePag = () => {
    setNumeroPaginaActual(numeroPaginaActual + 1);
    setCargando(true);
  };

  useEffect(() => {
    const botones = document.querySelectorAll(".cambiarPag-btn");
    botones.forEach(boton => {
      boton.addEventListener("click", () =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        }),
      );
    });
  }, []);

  return (
    <div className="contenedor-cambiarPag">
      <BtnLeft onClick={anteriorPag} className="cambiarPag-btn" />
      <BtnRight onClick={siguientePag} className="cambiarPag-btn" />
    </div>
  );
}
