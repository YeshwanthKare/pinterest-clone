import "./App.css";
import Header from "./components/Header";
import MainBoard from "./components/MainBoard";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <MainBoard />
      </div>
    </div>
  );
}

export default App;
