import { useState } from "react";
import Botao from "./Botao";
import "../App.css";

export default function Fundo() {
  const [dark, setDark] = useState(false);
  return (
    <div className="absolute bg-gradient-to-b from-black to-stone-800 w-full h-full overflow-hidden">
      <div
        className={`${
          dark ? "opacity-0 " : " opacity-100  "
        } h-full w-full absolute top-0 left-0 z-10 bg-gradient-to-b from-blue-600 to-blue-300 transition-opacity delay-100`}
      ></div>
      <img
        src="/img/fundo.png"
        className={`z-30 absolute delay-100 transition-all bottom-0 left-0 ${
          dark ? "grayscale opacity-75" : "opacity-100"
        }`}
        alt=""
      />

      <div
        className={`lua rounded-[50%] bg-stone-300 absolute z-[25] top-[50px] right-[50px] transition-all delay-100 w-[125px] h-[125px] ${
          dark ? "translate-y-0" : "translate-y-[1000px]"
        }`}
      ></div>
      <div
        className={`sol rounded-[50%] bg-orange-500 absolute z-[25] top-[50px] left-[50px] transition-all delay-100 w-[125px] h-[125px] ${
          dark ? "translate-y-[1000px]" : "translate-y-0"
        }`}
      ></div>
      <Botao dark={dark} setDark={setDark} />
    </div>
  );
}
