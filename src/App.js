import './App.css';
import Librairie from './components/Librairie.js';
import Title from './components/Title.js';
import Connexion from "./components/Connexion.js";
import {useState} from "react";

function App() {
  const [isConnected, setConnected] = useState(false);
  const [name, setName] = useState("");

  return (
    <div className="App">
      <Title name={name}/>
      <Connexion
          isConnected={isConnected}
          setConnected={setConnected}
          setName={setName}
      />
        { (isConnected)? <Librairie/> : <p>Veuillez vous connecter</p> }
    </div>
  );
}

export default App;
