import { BsArrowLeftCircle as Atras } from "react-icons/bs";
import { FcSearch as Lupa } from "react-icons/fc";

export default function Form({
  MANEJAR_INPUT,
  LIMPIAR_INPUT,
  MANEJAR_LUPA_INPUT,
  inputValor,
  filtrarNombre,
  BOTON_TODOS_PERSONAJES,
  mostrarTodosPersonajes,
}) {
  const MANEJAR_ENVIO = event => event.preventDefault();

  return (
    <form onSubmit={MANEJAR_ENVIO}>
      {filtrarNombre === "" ? (
        <button
          onClick={BOTON_TODOS_PERSONAJES}
          className={
            mostrarTodosPersonajes
              ? "btn-mostrar-todos btn-acitvo"
              : "btn-mostrar-todos btn-desacitvo"
          }
        >
          SHOW ALL
        </button>
      ) : (
        <div className="contenedor-btn-form">
          <Atras className="btn-limpiarInput" onClick={LIMPIAR_INPUT} />
        </div>
      )}

      <input
        id="input-form"
        onChange={MANEJAR_INPUT}
        value={inputValor}
        placeholder="Look for a character"
      />

      <div className="contenedor-btn-form">
        <Lupa className="lupa-icono" onClick={MANEJAR_LUPA_INPUT} />
      </div>
    </form>
  );
}
