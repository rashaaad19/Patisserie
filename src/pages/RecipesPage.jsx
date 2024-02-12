import { useLoaderData } from "react-router-dom";
import RecipesList from "../components/RecipesList";

const RecipesPage = () => {
  const data =useLoaderData();
  console.log(data.recipes)
  return (
    <>
      <RecipesList recipes={data.recipes} />
    </>
  );
};

export default RecipesPage;

export const loader = async () => {
  const response = await fetch(
    "https://api.spoonacular.com/recipes/random?apiKey=e9ea301602fd4a2490254abb5a13e2ab&include-tags=dessert&number=15"
  );
  return response;
};
