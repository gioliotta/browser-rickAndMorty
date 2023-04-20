import { useState, useEffect } from "react";
import SinCoincidencias from "./components/SinCoincidencias";
import PrimeraVez from "./components/PrimeraVez";
import videoFondo from "./assets/video/videoFondo.mp4";
import Carta from "./components/Carta";
import CambiarPag from "./components/CambiarPag";
import { MdDeleteOutline as Delete } from "react-icons/md"
import { PuffLoader as Cargando } from "react-spinners";

/*
TODO: 
-
Hacer que el input busque en todas las páginas,
Buscar mejor font family,
Centrar img de personajes con input
*/

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const [filtrarNombre, setFiltrarNombre] = useState("");
  const [primeraVez, setPrimeraVez] = useState(null);
  const [todos, setTodos] = useState(false);
  const [carta, setCarta] = useState(false);
  const [seleccion, setSeleccion] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [cargando, setCargando] = useState(false);

useEffect(() => {
    const URL_RICK_AND_MORTY = `https://rickandmortyapi.com/api/character?page=${nextPage}`;
    fetch(URL_RICK_AND_MORTY)
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.results);
        setTimeout(() => setCargando(false), 900);
      })
      .catch((error) => console.log(error));
  }, [nextPage]);


  function personajesFiltrados() {
    return personajes.filter((personaje) =>
      personaje.name.toLowerCase().includes(filtrarNombre.toLowerCase())
    );
  };


  useEffect(() => setPrimeraVez(true), []);

  //? Resolución.
  const detectarResolucion = window.matchMedia(
    "only screen and (max-width: 760px)"
  ).matches;
  const Body = document.querySelector("body");
  const dispositivoMovil = () => Body.classList.add("fondo-celulares");
  const quitarDispositivoMovil = () => Body.classList.remove("fondo-celulares");

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

  const manejarCarta = () => setCarta(true);

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
      location: personajeSeleccionado.location.name,
      episodes: personajeSeleccionado.episode.length
    };
  };

  function cambiarTamañoFuente(elemento) {
    if (elemento === null) return;

    if (elemento.textContent.length > 16) {
      elemento.style.fontSize = "14px";
    }

    if (elemento.textContent.length > 20) {
      elemento.style.fontSize = "10px";
    }

    if (elemento.textContent.length > 34) {
      elemento.style.fontSize = "8px";
    }
  };

  const limpiarInput = () => {
    setInputValue("");
    setFiltrarNombre("");
    setPrimeraVez(true);
  };

  return (
    <div className="App">
      {detectarResolucion
        ? dispositivoMovil()
        : (quitarDispositivoMovil(),
          (
            <video autoPlay muted loop id="video-fondo">
              <source src={videoFondo} type="video/mp4" />
            </video>
          ))}

      {carta ? (
        personajesFiltrados().find(
          (personaje) => personaje.id === seleccion
        ) && (
          <Carta
            key={seleccion}
            {...obtenerDatos(seleccion)}
            setCarta={setCarta}
          />
        )
      ) : (
        <>
          <div
            className={!todos && filtrarNombre === "" ? "contenedor-form" : ""}
          >
            {!cargando && (
              <form onSubmit={handleSubmit}>
                <input
                  onChange={handleChangeInput}
                  value={inputValue}
                  placeholder="Look for a character"
                />
                {filtrarNombre === "" ? (
                  <button
                    onClick={mostrarTodos}
                    className={
                      todos ? "boton-todos-acitvo" : "boton-todos-desacitvo"
                    }
                  >
                    SHOW ALL
                  </button>
                ) : (
                  <Delete className="btn-limpiarInput" onClick={limpiarInput} />
                )}
              </form>
            )}

            {primeraVez ? (
              <PrimeraVez />
            ) : filtrarNombre === "" && !todos ? (
              <PrimeraVez />
            ) : (
              ""
            )}
          </div>

          {todos ? (
            <>
              {!cargando && (
                <CambiarPag
                  nextPage={nextPage}
                  setNextPage={setNextPage}
                  setCargando={setCargando}
                />
              )}

              {cargando && <Cargando color="#fff" size={80} id="cargando" />}

              {!cargando && (
                <ul className="ul-personajes">
                  {personajes.map((personaje) => (
                    <div className="contenedor-personaje" key={personaje.id}>
                      <img
                        src={personaje.image}
                        onClick={() => {
                          setSeleccion(personaje.id);
                          manejarCarta();
                        }}
                        className="imagen"
                      />
                      <li ref={cambiarTamañoFuente}>{personaje.name}</li>
                    </div>
                  ))}
                </ul>
              )}

              {!cargando && (
                <CambiarPag
                  nextPage={nextPage}
                  setNextPage={setNextPage}
                  setCargando={setCargando}
                />
              )}
            </>
          ) : !todos && filtrarNombre !== "" ? (
            <>
              {personajesFiltrados().length > 0 ? (
                <ul className="ul-personajes">
                  {personajesFiltrados().map((personaje) => (
                    <div className="contenedor-personaje" key={personaje.id}>
                      <img
                        src={personaje.image}
                        onClick={() => {
                          setSeleccion(personaje.id);
                          manejarCarta();
                        }}
                        className="imagen"
                      />
                      <li ref={cambiarTamañoFuente}>{personaje.name}</li>
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