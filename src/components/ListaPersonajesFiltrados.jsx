export default function ListaPersonajesFiltrados({
  PERSONAJES_FILTRADOS,
  setSeleccion,
  MANEJAR_CARTA_PERSONAJE,
  cambiarTamañoFuente,
}) {
  return (
    <ul className="ul-personajes">
      {PERSONAJES_FILTRADOS().map(personaje => (
        <div className="contenedor-personaje" key={personaje.id}>
          <img
            src={personaje.image}
            onClick={() => {
              setSeleccion(personaje.id);
              MANEJAR_CARTA_PERSONAJE();
            }}
            className="imagen"
          />
          <li ref={cambiarTamañoFuente}>{personaje.name}</li>
        </div>
      ))}
    </ul>
  );
}
