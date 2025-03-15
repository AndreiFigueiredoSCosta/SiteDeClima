import { Moon, Sun, SunDim } from "lucide-react";

export default function Botao({ dark, setDark }) {
  return (
    <button
      className="text-white absolute top-2 right-2 z-40 bg-transparent border-2 border-white rounded-[30px] w-14 h-7 flex justify-around items-center"
      onClick={() => {
        setDark(!dark);
      }}
    >
      <Sun size={20} />
      <Moon size={20} />
      <div
        className={`${
          dark ? "translate-x-[55%]" : "left-1"
        } w-5 h-5 rounded-[50%] bg-white absolute transition-all delay-100`}
      ></div>
    </button>
  );
}
