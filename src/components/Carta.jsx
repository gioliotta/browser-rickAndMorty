import { BsFillArrowLeftSquareFill as Atras } from "react-icons/bs";

export default function Carta({
  image,
  nombre,
  status,
  species,
  gender,
  location,
  episodes,
  setCarta
}) {
  return (
    <>
      <Atras onClick={() => setCarta(false)} className="carta-boton-atras" />
      <div className="contenedor-carta">
        <div className="hijo-contenedor-carta">
          <img src={image} className="imagen-carta" />
          <div className="info-personaje">
            <h1 className="info-nombre">{nombre}</h1>

            <h2>
              {" "}
              <span>Status: </span> {status}
            </h2>

            <h2>
              {" "}
              <span>Species:</span> {species}
            </h2>

            <h2>
              {" "}
              <span>Gender:</span> {gender}
            </h2>

            <h2>
              {" "}
              <span>Location:</span> {location}
            </h2>

            <h2>
              {" "}
              <span>Episodes:</span> {episodes}
            </h2>

          </div>
        </div>

        <p className="descripcion-personaje">Coming soon description...</p>
      </div>
    </>
  );
}
