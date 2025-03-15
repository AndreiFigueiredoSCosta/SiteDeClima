import { Search } from "lucide-react";
import { useState } from "react";
import Sugestao from "./Sugestao";

export default function Pesquisar({
  setPesquisou,
  pesquisou,
  buscarClima,
  setCidade,
  cidade,
}) {
  const [erro, setErro] = useState(null);

  const handlePesquisa = () => {
    if (!cidade || !cidade.trim()) {
      setErro("Insira um nome válido!");
      setPesquisou(false);
      return;
    }

    setErro(null);
    buscarClima(cidade);
    setPesquisou(true);
    setCidade("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handlePesquisa();
    }
  };

  return (
    <div
      className={`${
        pesquisou ? "translate-x-[-1000px]" : ""
      }  mb-8 transition-transform translate-x-0 flex flex-col justify-center items-center space-y-8 duration-[1s] `}
    >
      <h1 className="sm:text-3xl text-2xl text-center mx-6">
        Veja o clima de qualquer cidade
      </h1>
      <div className="flex text-black w-[90%] sm:w-3/5">
        <button
          className="bg-white p-2 rounded-tl-lg rounded-bl-lg hover:bg-stone-400 transition w-[20%] h-[60px]  flex justify-center items-center"
          onClick={(event) => {
            event.preventDefault();
            handlePesquisa();
          }}
        >
          <Search />
        </button>
        <input
          className="outline-none p-2 rounded-tr-lg rounded-br-lg w-[80%] h-[60px] text-xl"
          type="text"
          placeholder="Pesquisar..."
          onChange={(event) => setCidade(event.target.value)}
          value={cidade}
          onKeyDown={handleKeyDown}
        />
      </div>

      {erro && <p className="text-red-500">{erro}</p>}

      <div className="w-[90%] space-y-6 mx-10">
        <h1 className="sm:text-3xl text-4xl text-center mb-4">Sugestões</h1>
        <div className="grid grid-cols-2 grid-rows-3 sm:grid-rows-2 sm:grid-cols-3 gap-4 text-white">
          <Sugestao
            onClick={() => {
              buscarClima("osaka");
              setPesquisou(true);
            }}
            nome="Osaka"
            pais="JP"
          />
          <Sugestao
            onClick={() => {
              buscarClima("paris");
              setPesquisou(true);
            }}
            nome="Paris"
            pais="FR"
          />
          <Sugestao
            onClick={() => {
              buscarClima("xique-xique");
              setPesquisou(true);
            }}
            nome="Xique-Xique"
            pais="BR"
          />
          <Sugestao
            onClick={() => {
              buscarClima("lisboa");
              setPesquisou(true);
            }}
            nome="Lisboa"
            pais="PT"
          />
          <Sugestao
            onClick={() => {
              buscarClima("santa maria");
              setPesquisou(true);
            }}
            nome="Santa Maria"
            pais="BR"
          />
          <Sugestao
            onClick={() => {
              buscarClima("formigueiro");
              setPesquisou(true);
            }}
            nome="Formigueiro"
            pais="BR"
          />
        </div>
      </div>
    </div>
  );
}
