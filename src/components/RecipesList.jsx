import { Link } from "react-router-dom";
import RecipeItem from "./RecipeItem";
import classes from "./RecipesList.module.css";
const RecipesList = () => {
  const DUMMY_RECIPES = [
    {
      name: "pizza",
      id: 1,
    },
    {
      name: "sushi",
      id: 2,
    },
    { name: "koshary", id: 3 },
    { name: "koshary", id: 4 },
    { name: "koshary", id: 5 },
    { name: "koshary", id: 6 },
  ];
  return (
    <>
      <h1>RecipesPage</h1>
      <div className={classes.recipesContainer}>
        {DUMMY_RECIPES.map((recipe) => (
          <Link key={recipe.id} to={`recipeDetails/${recipe.id}`}>
            <RecipeItem />
          </Link>
        ))}
      </div>
    </>
  );
};

export default RecipesList;
