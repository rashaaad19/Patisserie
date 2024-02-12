import { Link } from "react-router-dom";
import RecipeItem from "./RecipeItem";
import classes from "./RecipesList.module.css";
const RecipesList = ({ recipes }) => {
  return (
    <>
      <div className={classes.recipesContainer}>
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`${recipe.id}`}>
            <RecipeItem
              title={recipe.title}
              servings={recipe.servings}
              duration={recipe.readyInMinutes}
              image={recipe.image}
              score={recipe.spoonacularScore}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default RecipesList;
