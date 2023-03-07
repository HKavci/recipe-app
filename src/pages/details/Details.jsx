import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import "./style.css"

const Details = () => {
  const { state: item } = useLocation();

  const [totalDailyList, setTotalDailyList] = useState(Object.entries(item.recipe.totalDaily))

  console.log(totalDailyList);

  return (
    <div className="container mx-auto mt-5" style={{ width: "40rem" }}>
      <div className="card-body ms-3">
        <h4 className="card-title text-center mb-3 pt-4">{item.recipe.label}</h4>
        <p>{item.recipe.dietLabels[0]} / {item.recipe.dietLabels[1]}  {item.recipe.dietLabels[2]}</p>
        <h6>Ingredients:</h6>
        <ul className="card-text">
          {item.recipe.ingredientLines.map((elem, i) => {
            return <li key={i}>{elem}</li>;
          })}
        </ul>
        <h6>Nutritional Contents:</h6>
        <ul className="list">
          {totalDailyList.map((element, key)=>{
            return(
              <li key={key}>{element[1].label}: {element[1].unit}{element[1].quantity.toFixed(2)}</li>

            )
          })}
        </ul>
      </div>
      <div className="card-body d-flex gap-3 ms-3 pb-3">
        <a href={item.recipe.url} target="_blank" className="card-link" role="button">
          More Information
        </a>
        <a href={item.recipe.shareAs} target="_blank" className="card-link" role="button">
          Another Link
        </a>
      </div>
    </div>
  );
};

export default Details;