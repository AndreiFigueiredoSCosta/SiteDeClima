import { Search } from "lucide-react";
import Sugestao from "./Sugestao";
import Resultado from "./Resultado";
import { useState } from "react";
import Pesquisar from "./Pesquisar";

export default function Main() {
  const [cidade, setCidade] = useState("");
  const [pesquisou, setPesquisou] = useState(false);
  const [loading, setLoading] = useState(false);
  const [clima, setClima] = useState(null);

  const buscarClima = async (cidade) => {
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
      setLoading(false);
    }
  };

  return (
    <main className="sm:w-3/5 py-14 sm:py-10  z-40 flex flex-col items-center justify-center text-white bg-black/50 backdrop-blur-sm rounded-3xl font-inter space-y-6 overflow-hidden">
      <Pesquisar
        buscarClima={buscarClima}
        setPesquisou={setPesquisou}
        pesquisou={pesquisou}
        setCidade={setCidade}
        cidade={cidade}
      />
      <Resultado
        pesquisou={pesquisou}
        setPesquisou={setPesquisou}
        clima={clima}
        loading={loading}
      />
    </main>
  );
}
