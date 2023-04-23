export default function ListaPersonajes({
  personajes,
  setSeleccion,
  MANEJAR_CARTA_PERSONAJE,
  cambiarTamañoFuente,
}) {
  return (
    <ul className="ul-personajes">
      {personajes.map(personaje => (
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
