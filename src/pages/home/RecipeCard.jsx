import {useNavigate} from "react-router-dom"


const RecipeCard = ({item}) => {
  const navigate = useNavigate()
  
  return (
    <div className="col mt-5">
      <div className="card recipe text-center mx-auto" style={{width: '18rem', height: "25rem"}}>
        <img src={item.recipe.image} className="card-img-top" alt="recipe-img" />
        <div className="card-body">
          <h5 className="card-title">{item.recipe.label}</h5>
          <div className="btn btn-primary" onClick={()=>navigate("/details", {state: item})} >View More</div>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard

