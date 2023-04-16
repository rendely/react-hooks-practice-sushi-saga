import React, {useState} from "react";

function Sushi({sushi, onEatPlate, budget}) {

  const [isEaten, setIsEaten] = useState(false);

  function handleClickSushi(){
    if (budget >= sushi.price){
      setIsEaten(true);
      onEatPlate(sushi.price);
    }else{
      console.log('Too expensive');
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClickSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name + "Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
