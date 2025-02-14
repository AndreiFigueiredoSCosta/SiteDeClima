import { MapPin } from "lucide-react";

function Sugestao({ nome, pais, buscarClima }) {
  return (
    <button
      className="flex flex-col items-center justify-center p-4 col-span-2 sm:col-span-1 sm:row-span-1 bg-cyan-950/50 rounded-md  hover:bg-cyan-950 transition duration-150"
      onClick={() => buscarClima(nome)}
    >
      <MapPin />
      <h3 className="font-bold text-lg text-center">{nome}</h3>
      <img src={`https://flagsapi.com/${pais}/flat/32.png`} />
    </button>
  );
}

export default Sugestao;
