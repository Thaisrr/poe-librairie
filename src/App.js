import './App.css';
import Librairie from './components/Librairie.js';
import Title from './components/Title.js';
import Connexion from "./components/Connexion.js";
import {useState} from "react";

function App() {
  const [isConnected, setConnected] = useState(false);

  return (
    <div className="App">
      <Title/>
      <Connexion isConnected={isConnected} setConnected={setConnected}/>

        { (isConnected)? <Librairie/> : <p>Veuillez vous connecter</p> }


    </div>
  );
}

export default App;
