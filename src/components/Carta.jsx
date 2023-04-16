import { BsFillArrowLeftSquareFill as Atras } from "react-icons/bs";

export default function Carta({
  image,
  nombre,
  status,
  species,
  gender,
  data,
  setCarta,
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
              <span>Estado: </span> {status === "Alive" ? "Vivo" : status === "Dead" ? "Muerto" : "Desconocido"}
            </h2>

            <h2>
              {" "}
              <span>Especie:</span> {species === "Human" ? "Humano" : species === "Alien" ? "Alien" : "Desconocido"}
            </h2>

            <h2>
              {" "}
              <span>Género:</span>{" "}
              {gender === "Male"
                ? "Masculino"
                : gender === "Female"
                ? "Femenino"
                : "Desconocido"}
            </h2>
          </div>
        </div>

        <p className="descripcion-personaje">{data}</p>
      </div>
    </>
  );
}
