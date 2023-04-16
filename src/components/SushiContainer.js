import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";
const numSushiToDisplay = 4;

function SushiContainer({sushis, onEatPlate}) {

  const [sushiIndex, setSushiIndex] = useState(0);
  const displayedSushis = sushis.slice(sushiIndex,sushiIndex+numSushiToDisplay);
  console.log(sushiIndex);

  function handleMoreClick(){
    console.log('clicked');    
    setSushiIndex(sushiIndex + numSushiToDisplay);
  }

  return (
    <div className="belt">
      {displayedSushis.map(sushi => 
        <Sushi 
          key={sushi.id} 
          sushi={sushi} 
          onEatPlate={onEatPlate}
        />)}
      <MoreButton onMoreClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
