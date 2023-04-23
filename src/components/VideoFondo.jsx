import videoRickAndMorty from "../assets/video/rick-and-morty.mp4";

export default function VideoFondo() {
  return (
    <video autoPlay muted loop id="video-fondo">
      <source src={videoRickAndMorty} type="video/mp4" />
    </video>
  );
}
