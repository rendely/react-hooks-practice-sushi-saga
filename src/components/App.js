import React, {useEffect, useState}  from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [plates, setPlates] =  useState([]);

  useEffect(getSushiData,[]);

  function getSushiData(){
    fetch(API)
    .then(r => r.json())
    .then(sushis => setSushis(sushis))
  }
  
  function handleEatPlate(){
    setPlates([...plates,0])
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatPlate={handleEatPlate}/>
      <Table plates={plates}/>
    </div>
  );
}

export default App;
