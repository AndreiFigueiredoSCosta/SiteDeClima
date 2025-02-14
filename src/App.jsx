import Sugestoes from "./components/Sugestoes";
import Pesquisar from "./components/Pesquisar";
import Clima from "./components/Clima";
import { useState } from "react";
import { ChevronLeftIcon } from "lucide-react";

function App() {
  const [clima, setClima] = useState("null");
  const [pesquisou, setPesquisou] = useState(false);
  const [loading, setLoading] = useState(false);

  const buscarClima = async (cidade) => {
    setPesquisou(true);
    setLoading(true);
    try {
      const apiKey = "2734360be99689f318dacd39c912783d";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt`;

      const resposta = await fetch(url, { method: "GET" });
      if (!resposta.ok) {
        throw new Error("Cidade não encontrada");
      }

      const dados = await resposta.json();
      const climaFormatado = {
        cidade: dados.name,
        pais: dados.sys.country,
        temperatura: Math.round(dados.main.temp),
        umidade: dados.main.humidity,
        vento: dados.wind.speed,
        icon: dados.weather[0].icon,
      };

      console.log(dados);
      setClima(climaFormatado);
    } catch (erro) {
      console.error("Erro ao buscar clima:", erro.message);
      setClima(null);
    } finally {
      setLoading(false); // Desativa o loading após a resposta
    }
  };

  const resetarPesquisa = () => {
    setClima(undefined);
    setPesquisou(false);
    setLoading(false);
  };

  const renderizarConteudo = () => {
    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center">
          <p className="text-white mt-8">Carregando...</p>
        </div>
      );
    }

    if (!pesquisou) {
      return <Sugestoes buscarClima={buscarClima} />;
    }

    if (clima) {
      return (
        <div className="flex flex-col items-center justify-center">
          <Clima {...clima} />
          <button
            className="mt-6 px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-300 transition duration-200"
            onClick={resetarPesquisa}
          >
            <ChevronLeftIcon />
          </button>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center">
        <p className="text-white mt-8">Cidade não encontrada!</p>
        <button
          className="mt-6 px-4 py-2 bg-white text-cyan-950 font-semibold rounded-md hover:bg-gray-300 transition duration-200"
          onClick={resetarPesquisa}
        >
          Voltar
        </button>
      </div>
    );
  };

  return (
    <div className="bg-[url('/img/fundo.jpg')] min-h-screen bg-cover bg-center flex justify-center">
      <div className="flex flex-col items-center sm:w-3/5 min-h-screen bg-cyan-950/50  rounded-md sm:mt-4 sm:mb-4  ">
        <Pesquisar buscarClima={buscarClima} />
        {renderizarConteudo()}
      </div>
    </div>
  );
}

export default App;
