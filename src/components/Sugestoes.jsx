import Sugestao from "./Sugestao";
import Titulo from "./Titulo";

function Sugestoes({ buscarClima }) {
  return (
    <div className="mt-4 mb-4 flex flex-col justify-center">
      <Titulo text="Sugestões" />
      <div className="grid grid-cols-2 grid-rows-6 sm:grid-rows-3 gap-2 sm:gap-4 text-white">
        <Sugestao nome="Osaka" pais="JP" buscarClima={buscarClima} />

        <Sugestao nome="Paris" pais="FR" buscarClima={buscarClima} />

        <Sugestao nome="Xique-Xique" pais="BR" buscarClima={buscarClima} />

        <Sugestao nome="Lisboa" pais="PT" buscarClima={buscarClima} />

        <Sugestao nome="Santa Maria" pais="BR" buscarClima={buscarClima} />

        <Sugestao nome="Curitiba" pais="BR" buscarClima={buscarClima} />
      </div>
    </div>
  );
}

export default Sugestoes;
