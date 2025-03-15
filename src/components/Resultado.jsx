import { ChevronLeftIcon, Droplet, MapPinOff, Wind } from "lucide-react";
import "../App.css";

export default function Resultado({ pesquisou, setPesquisou, clima, loading }) {
  return (
    <div
      className={`${
        pesquisou ? "translate-x-0" : " translate-x-[1000px]"
      }  absolute  flex flex-col items-center justify-center transition-transform duration-[1s]`}
    >
      <button
        className="text-white p-2 rounded-lg border-2 border-white hover:scale-110 "
        onClick={() => {
          setPesquisou(false);
        }}
      >
        <ChevronLeftIcon />
      </button>

      {loading && (
        <div className="flex flex-col justify-center items-center mt-10 space-y-8">
          <h1 className="font-inter text-3xl">Buscando cidade...</h1>
          <div className="carregar w-[30px] h-[30px] rounded-[50%] border-white border-4 border-t-transparent"></div>
        </div>
      )}

      {!clima && !loading && (
        <div className="mt-10 text-center space-y-5 flex flex-col items-center justify-center">
          <h1 className="text-3xl">Cidade não encontrada!</h1>
          <MapPinOff size={60} />
        </div>
      )}

      {clima && !loading && (
        <div className="font-inter text-center mt-10 flex flex-col items-center justify-center space-y-6">
          <div className="flex">
            <h1 className=" text-9xl">{clima.temperatura}°</h1>
            <img
              className="object-contain drop-shadow-cinza"
              src={`https://openweathermap.org/img/wn/${clima.icon}@2x.png`}
              alt=""
            />
          </div>
          <div className=" flex space-x-3 justify-center items-center">
            <h2>{clima.cidade}</h2>
            <img
              className="object-contain"
              src={`https://flagsapi.com/${clima.pais}/flat/32.png`}
              alt=""
            />
          </div>
          <div className="flex space-x-6 justify-between items-center">
            <div className="flex space-x-3">
              <Droplet />
              <h2>{clima.umidade}%</h2>
            </div>
            <p className="text-2xl">|</p>
            <div className="flex space-x-3">
              <Wind />
              <h2>{clima.vento} km/h</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
