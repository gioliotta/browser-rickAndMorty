import { useState, useEffect } from "react";
import SinCoincidencias from "./components/SinCoincidencias";
import CuadroDeBusqueda from "./components/CuadroDeBusqueda";
import CartaPersonaje from "./components/CartaPersonaje";
import CambiarPag from "./components/CambiarPag";
import { PuffLoader as Cargando } from "react-spinners";
import VideoFondo from "./components/VideoFondo";
import Form from "./components/Form";
import ListaPersonajes from "./components/ListaPersonajes";
import ListaPersonajesFiltrados from "./components/ListaPersonajesFiltrados";

/*
TODO:
-
Centrar img con input (móvil)
*/

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [numeroPaginaActual, setNumeroPaginaActual] = useState(1);
  const [filtrarNombre, setFiltrarNombre] = useState("");
  const [cuadroDeBusqueda, setCuadroDeBusqueda] = useState(true);
  const [mostrarTodosPersonajes, setMostrarTodosPersonajes] = useState(false);
  const [cartaPersonaje, setCartaPersonaje] = useState(false);
  const [seleccion, setSeleccion] = useState(null);
  const [inputValor, setInputValor] = useState("");
  const [cargando, setCargando] = useState(false);
  const [filtrarBusqueda, setFiltrarBusqueda] = useState(undefined);
  const [buscarPersonajesFiltrados, setBuscarPersonajesFiltrados] = useState(
    [],
  );

  useEffect(() => {
    const URL_RICK_AND_MORTY = `https://rickandmortyapi.com/api/character?page=${numeroPaginaActual}`;
    const TIEMPO_CARGA = 900;

    fetch(URL_RICK_AND_MORTY)
      .then(res => res.json())
      .then(info => {
        setPersonajes(info.results);
        setTimeout(() => setCargando(false), TIEMPO_CARGA);
      })
      .catch(error => console.log(error));
  }, [numeroPaginaActual]);

  const DETECTAR_RESOLUCION = window.matchMedia(
    "only screen and (max-width: 760px)",
  ).matches;
  const BODY = document.querySelector("BODY");
  const QUITAR_VIDEO = () => BODY.classList.add("fondo-celulares");

  const PERSONAJES_FILTRADOS = () =>
    filtrarBusqueda
      ? buscarPersonajesFiltrados.filter(personaje =>
          personaje.name.toLowerCase().includes(filtrarNombre.toLowerCase()),
        )
      : personajes.filter(personaje =>
          personaje.name.toLowerCase().includes(filtrarNombre.toLowerCase()),
        );

  async function filtrarPersonajes(terminoBusqueda) {
    const ENCONTRAR_PERSONAJES = [];
    let pagina = 1;

    while (true) {
      const URL_RICK_AND_MORTY = `https://rickandmortyapi.com/api/character?page=${pagina}`;
      const RES = await fetch(URL_RICK_AND_MORTY);
      const data = await RES.json();
      ENCONTRAR_PERSONAJES.push(...data.results);

      if (data.info.next === null) break;
      pagina++;
    }

    return ENCONTRAR_PERSONAJES.filter(personaje =>
      personaje.name.toLowerCase().includes(terminoBusqueda.toLowerCase()),
    );
  }

  const BOTON_TODOS_PERSONAJES = () => {
    setCuadroDeBusqueda(!cuadroDeBusqueda);
    setMostrarTodosPersonajes(!mostrarTodosPersonajes);
    setFiltrarBusqueda(false);
  };

  const MANEJAR_CARTA_PERSONAJE = () => setCartaPersonaje(true);

  function obtenerDatosPersonajes(seleccionId) {
    const PERSONAJE_SELECCIONADO = PERSONAJES_FILTRADOS().find(
      personaje => personaje.id === seleccionId,
    );

    return {
      image: PERSONAJE_SELECCIONADO.image,
      nombre: PERSONAJE_SELECCIONADO.name,
      status: PERSONAJE_SELECCIONADO.status,
      species: PERSONAJE_SELECCIONADO.species,
      gender: PERSONAJE_SELECCIONADO.gender,
      location: PERSONAJE_SELECCIONADO.location.name,
      episodes: PERSONAJE_SELECCIONADO.episode.length,
    };
  }

  const LIMPIAR_INPUT = () => {
    setInputValor("");
    setFiltrarNombre("");
    setCuadroDeBusqueda(true);
  };

  const MANEJAR_INPUT = e => setInputValor(e.target.value);

  const MANEJAR_MORTY_ANIMACION = () => {
    const ICON = document.querySelector(".img-morty");
    ICON.classList.remove("img-morty-animacion");
    ICON.classList.add("img-morty-animacion");

    setTimeout(() => ICON.classList.remove("img-morty-animacion"), 2000);
  };

  const MANEJAR_LUPA_ANIMACION = () => {
    const ICON = document.querySelector(".lupa-icono");
    ICON.classList.remove("lupa-icono-animacion");
    ICON.classList.add("lupa-icono-animacion");

    setTimeout(() => ICON.classList.remove("lupa-icono-animacion"), 2000);
  };

  const MANEJAR_LUPA_INPUT = async () => {
    setCargando(true);
    MANEJAR_LUPA_ANIMACION();
    const RESULTADOS = await filtrarPersonajes(inputValor);
    const INPUT = document.getElementById("input-form");

    if (inputValor === "") {
      setCargando(false);
      setFiltrarBusqueda(true);
      setMostrarTodosPersonajes(false);
      setFiltrarNombre(inputValor);
      INPUT.placeholder = "INPUT IS EMPTY";
      INPUT.classList.add("input-form-red");

      setTimeout(() => {
        INPUT.classList.remove("input-form-red");
        INPUT.placeholder = "Look for a character";
      }, 2500);
    }

    setTimeout(() => {
      if (inputValor.trim() !== "") {
        INPUT.placeholder = "Look for a character";
        INPUT.classList.remove("input-form-red");
        setCargando(false);
        setFiltrarBusqueda(true);
        setCuadroDeBusqueda(false);
        setMostrarTodosPersonajes(false);
        setFiltrarNombre(inputValor);
        setInputValor(inputValor);
        setBuscarPersonajesFiltrados(RESULTADOS);
        MANEJAR_MORTY_ANIMACION();
      }
    }, 700);
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
  }

  return (
    <div className="App">
      {DETECTAR_RESOLUCION ? QUITAR_VIDEO() : <VideoFondo />}

      {!cartaPersonaje && (
        <>
          <div
            className={
              !mostrarTodosPersonajes && filtrarNombre === ""
                ? "contenedor-form"
                : ""
            }
          >
            <Form
              MANEJAR_INPUT={MANEJAR_INPUT}
              LIMPIAR_INPUT={LIMPIAR_INPUT}
              MANEJAR_LUPA_INPUT={MANEJAR_LUPA_INPUT}
              inputValor={inputValor}
              filtrarNombre={filtrarNombre}
              BOTON_TODOS_PERSONAJES={BOTON_TODOS_PERSONAJES}
              mostrarTodosPersonajes={mostrarTodosPersonajes}
              cuadroDeBusqueda={cuadroDeBusqueda}
            />

            {cuadroDeBusqueda && !mostrarTodosPersonajes ? (
              <CuadroDeBusqueda />
            ) : !cuadroDeBusqueda &&
              filtrarNombre === "" &&
              !mostrarTodosPersonajes ? (
              <CuadroDeBusqueda />
            ) : null}
          </div>

          {mostrarTodosPersonajes && (
            <>
              {cargando && <Cargando color="#fff" size={80} id="cargando" />}

              {!cargando && (
                <>
                  <CambiarPag
                    numeroPaginaActual={numeroPaginaActual}
                    setNumeroPaginaActual={setNumeroPaginaActual}
                    setCargando={setCargando}
                  />

                  <ListaPersonajes
                    personajes={personajes}
                    setSeleccion={setSeleccion}
                    MANEJAR_CARTA_PERSONAJE={MANEJAR_CARTA_PERSONAJE}
                    cambiarTamañoFuente={cambiarTamañoFuente}
                  />

                  <CambiarPag
                    numeroPaginaActual={numeroPaginaActual}
                    setNumeroPaginaActual={setNumeroPaginaActual}
                    setCargando={setCargando}
                  />
                </>
              )}
            </>
          )}

          {filtrarNombre !== "" && (
            <>
              {cargando && <Cargando color="#fff" size={80} id="cargando" />}

              {!cargando && PERSONAJES_FILTRADOS().length > 0 && (
                <ListaPersonajesFiltrados
                  PERSONAJES_FILTRADOS={PERSONAJES_FILTRADOS}
                  setSeleccion={setSeleccion}
                  MANEJAR_CARTA_PERSONAJE={MANEJAR_CARTA_PERSONAJE}
                  cambiarTamañoFuente={cambiarTamañoFuente}
                />
              )}

              {!cargando && PERSONAJES_FILTRADOS().length === 0 && (
                <SinCoincidencias />
              )}
            </>
          )}
        </>
      )}

      {cartaPersonaje && (
        <CartaPersonaje
          key={seleccion}
          {...obtenerDatosPersonajes(seleccion)}
          setCartaPersonaje={setCartaPersonaje}
        />
      )}
    </div>
  );
}

export default App;
