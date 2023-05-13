import "./App.css";
import InputField from "./components/InputField";

const App: React.FC = () => {

  return (
    <div className="App container flex flex-col items-center mx-auto min-h-screen w-screen">
      <span className="heading text-3xl my-5 md:text-5xl md:my-8 text-white uppercase  text-center">Todofy</span>
      <InputField />
    </div>
  );
}

export default App;
