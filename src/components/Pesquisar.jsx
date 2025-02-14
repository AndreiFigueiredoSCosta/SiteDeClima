import { Search } from "lucide-react";
import Titulo from "./Titulo";
import { useState } from "react";

function Pesquisar({ buscarClima }) {
  const [cidade, setCidade] = useState("");

  return (
    <div className="flex flex-col items-center">
      <Titulo text="Veja o clima de uma cidade" />
      <form
        className="sm:w-3/5 flex justify-center bg-white rounded-md"
        action=""
      >
        <button
          className="bg-white rounded-md py-2 px-4 hover:bg-gray-300 transition duration-200"
          onClick={(event) => {
            event.preventDefault();
            if (!cidade.trim()) {
              return alert("Insira dados validos!");
            }

            buscarClima(cidade);
            setCidade("");
          }}
        >
          <Search />
        </button>
        <input
          className="rounded-md py-2 pr-3 focus:outline-none"
          type="text"
          placeholder="Pesquisar..."
          onChange={(event) => setCidade(event.target.value)}
          value={cidade}
        />
      </form>
    </div>
  );
}

export default Pesquisar;
