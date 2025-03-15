import Fundo from "./components/Fundo";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="relative overflow-hidden w-screen h-screen flex items-center justify-center ">
      <Fundo />
      <Main />
    </div>
  );
}
