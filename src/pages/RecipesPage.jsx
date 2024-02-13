import { useLoaderData, json } from "react-router-dom";
import RecipesList from "../components/RecipesList";

const RecipesPage = () => {
  const data = useLoaderData();
  console.log(data.recipes);
  return (
    <>
      <RecipesList recipes={data.recipes} />
    </>
  );
};

export default RecipesPage;

export const loader = async () => {
  const response = await fetch(
    "https://api.spoonacular.com/recipes/random?apiKey=fcdf38efec8043e7a78b498d7e553df9&include-tags=dessert&number=15"
  );
  if (!response.ok) {
    throw json({ message: "Could not fetch recipes " }, { status: 500 });
  }
    return response;

  
};
