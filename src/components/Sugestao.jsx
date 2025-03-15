import { MapPin } from "lucide-react";

function Sugestao({ nome, pais, onClick }) {
  return (
    <button
      onClick={onClick}
      className=" flex flex-col items-center justify-center p-4  col-span-1 row-span-1 bg-black/40 rounded-md hover:scale-110 transition duration-150"
    >
      <MapPin />
      <h3 className=" text-lg text-center">{nome}</h3>
      <img src={`https://flagsapi.com/${pais}/flat/32.png`} />
    </button>
  );
}

export default Sugestao;
