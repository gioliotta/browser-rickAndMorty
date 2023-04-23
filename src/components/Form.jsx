import { MdDeleteOutline as Delete } from "react-icons/md";

export default function Form({
  MANEJAR_INPUT,
  LIMPIAR_INPUT,
  inputValor,
  filtrarNombre,
  BOTON_TODOS_PERSONAJES,
  mostrarTodosPersonajes,
}) {
  const MANEJAR_ENVIO = event => event.preventDefault();

  return (
    <form onSubmit={MANEJAR_ENVIO}>
      <input
        onChange={MANEJAR_INPUT}
        value={inputValor}
        placeholder="Look for a character"
      />
      {filtrarNombre === "" ? (
        <button
          onClick={BOTON_TODOS_PERSONAJES}
          className={
            mostrarTodosPersonajes
              ? "boton-todos-acitvo"
              : "boton-todos-desacitvo"
          }
        >
          SHOW ALL
        </button>
      ) : (
        <Delete className="btn-limpiarInput" onClick={LIMPIAR_INPUT} />
      )}
    </form>
  );
}
