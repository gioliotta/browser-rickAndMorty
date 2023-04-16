import { useState, useEffect } from "react";
import SinCoincidencias from "./components/SinCoincidencias";
import PrimeraVez from "./components/PrimeraVez";
import videoFondo from "./assets/video/videoFondo.mp4";
import Carta from "./components/Carta";
import PERSONAJE_DATA from "./dataPersonajes";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [filtrarNombre, setFiltrarNombre] = useState("");
  const [primeraVez, setPrimeraVez] = useState(undefined);
  const [todos, setTodos] = useState(false);
  const [carta, setCarta] = useState(false);
  const [seleccion, setSeleccion] = useState(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setPersonajes(data.results))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => setPrimeraVez(true), []);

  const mostrarTodos = () => {
    setPrimeraVez(false);
    setTodos(!todos);
  };
  const handleSubmit = (event) => event.preventDefault();
  const handleChangeInput = (e) => {
    setPrimeraVez(false);
    setTodos(false);
    setFiltrarNombre(e.target.value);
    setInputValue(e.target.value);
  };

  function personajesFiltrados() {
    return personajes.filter((personaje) =>
      personaje.name.toLowerCase().includes(filtrarNombre.toLowerCase())
    );
  }

  const manejarCarta = () => setCarta(true);

  const manejarData = (nombrePersonaje) => {
    const personajeData = PERSONAJE_DATA.find(
      (data) => data.nombre === nombrePersonaje
    );
    return personajeData.data === "" ? "No hay información de momento"  : personajeData.data;
  };

  function obtenerDatos(seleccion) {
    const personajeSeleccionado = personajesFiltrados().find(
      (personaje) => personaje.id === seleccion
    );

    return {
      image: personajeSeleccionado.image,
      nombre: personajeSeleccionado.name,
      status: personajeSeleccionado.status,
      species: personajeSeleccionado.species,
      gender: personajeSeleccionado.gender,
      data: manejarData(personajeSeleccionado.name),
    };
  }

  return (
    <div className="App">
      <video autoPlay muted loop id="video-fondo">
        <source src={videoFondo} type="video/mp4" />
      </video>

      {carta ? (
        personajesFiltrados().find(
          (personaje) => personaje.id === seleccion
        ) ? (
          <Carta
            key={seleccion}
            {...obtenerDatos(seleccion)}
            setCarta={setCarta}
          />
        ) : null
      ) : (
        <>
          <div
            className={!todos && filtrarNombre === "" ? "contenedor-form" : ""}
          >
            <form onSubmit={handleSubmit}>
              <input onChange={handleChangeInput} value={inputValue} />
              {filtrarNombre === "" && (
                <button
                  onClick={mostrarTodos}
                  className={
                    todos ? "boton-todos-acitvo" : "boton-todos-desacitvo"
                  }
                >
                  Mostrar Todos
                </button>
              )}
            </form>

            {primeraVez ? (
              <PrimeraVez />
            ) : filtrarNombre === "" && !todos ? (
              <PrimeraVez />
            ) : (
              ""
            )}
          </div>

          {todos ? (
            <ul>
              {personajes.map((personaje) => (
                <div key={personaje.id}>
                  <img
                    src={personaje.image}
                    alt={`Imagen de ${personaje.name}`}
                    onClick={() => {
                      setSeleccion(personaje.id);
                      manejarCarta();
                    }}
                    className="imagen"
                  />

                  <li>{personaje.name}</li>
                </div>
              ))}
            </ul>
          ) : !todos && filtrarNombre !== "" ? (
            <>
              {personajesFiltrados().length > 0 ? (
                <ul>
                  {personajesFiltrados().map((personaje) => (
                    <div key={personaje.id}>
                      <img
                        src={personaje.image}
                        alt={`Imagen de ${personaje.name}`}
                        onClick={() => {
                          setSeleccion(personaje.id);
                          manejarCarta();
                        }}
                        className="imagen"
                      />

                      <li>{personaje.name}</li>
                    </div>
                  ))}
                </ul>
              ) : (
                <SinCoincidencias />
              )}
            </>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}

export default App;
