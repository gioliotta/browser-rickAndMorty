import { BsArrowLeftSquareFill as BtnLeft, BsArrowRightSquareFill as BtnRight } from "react-icons/bs";
import { useEffect } from "react";

export default function CambiarPag({ nextPage, setNextPage, setCargando }) {
  const anteriorPag = () => setNextPage(nextPage === 0 ? 1 : nextPage - 1);
  const siguientePag = () => {
    setNextPage(nextPage + 1)
    setCargando(true);
  };

  useEffect(() => {
    const botones = document.querySelectorAll(".cambiarPag-btn");
    botones.forEach((boton) => {
      boton.addEventListener("click", () =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      );
    });
  }, []);

  return (
    <div className="contenedor-cambiarPag">
      <BtnLeft onClick={anteriorPag} className="cambiarPag-btn" />
      <BtnRight onClick={siguientePag} className="cambiarPag-btn" />
    </div>
  );
};
