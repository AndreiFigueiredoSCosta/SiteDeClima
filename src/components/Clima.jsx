import { Droplet, MapPin, Wind } from "lucide-react";
import Titulo from "./Titulo";

function Clima(props) {
  return (
    <div className="flex flex-col items-center mt-6 text-white">
      <MapPin />
      <h1 className="text-2xl font-semibold mb-2">{props.cidade}</h1>
      <img src={`https://flagsapi.com/${props.pais}/flat/32.png`} alt="" />
      <div className="mt-4 flex flex-col items-center pt-4 border-t-2 border-white px-12">
        <h1 className="text-8xl">{props.temperatura}°</h1>
        <img
          src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt=""
        />
        <div className="flex justify-center">
          <div className="flex justify-center px-2 border-white">
            <Droplet />
            <p>{props.umidade}%</p>
          </div>
          <div className="flex justify-center px-2 border-white">
            <Wind />
            <p>{props.vento}km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clima;
