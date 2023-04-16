import React, {useEffect, useState}  from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [plates, setPlates] = useState([]);
  const [budget, setBudget] = useState(100);

  useEffect(getSushiData,[]);

  function getSushiData(){
    fetch(API)
    .then(r => r.json())
    .then(sushis => setSushis(sushis))
  }
  
  function handleEatPlate(id, price){
    setPlates([...plates,id]);
    setBudget(budget - price);
  }

  return (
    <div className="app">
      <SushiContainer 
        sushis={sushis} 
        plates={plates}
        budget={budget}
        onEatPlate={handleEatPlate} 
      />
      <Table plates={plates} budget={budget}/>
    </div>
  );
}

export default App;
