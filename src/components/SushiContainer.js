import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";
const numSushiToDisplay = 4;

function SushiContainer({sushis, plates, budget, onEatPlate}) {

  const [sushiIndex, setSushiIndex] = useState(0);
  console.log(sushiIndex, plates);
  const displayedSushis = sushis
    .slice(sushiIndex,sushiIndex+numSushiToDisplay)
    .map(sushi => {
      const isEaten = plates.find(plate => plate === sushi.id);
      return {...sushi, isEaten:isEaten}
    });

  function handleMoreClick(){
    if (sushiIndex < sushis.length-numSushiToDisplay){
      setSushiIndex(sushiIndex + numSushiToDisplay);
    }else{
      setSushiIndex(0);
    }
  }

  return (
    <div className="belt">
      {displayedSushis.map(sushi => 
        <Sushi 
          key={sushi.id} 
          sushi={sushi} 
          onEatPlate={onEatPlate}
          budget={budget}
        />)}
      <MoreButton onMoreClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
