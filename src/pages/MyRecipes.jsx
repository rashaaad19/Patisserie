import { json, useLoaderData } from "react-router-dom";
import RecipesList from "../components/RecipesList";

const MyRecipes = () => {
  const data = useLoaderData();
 

  const dataArray = Object.entries(data).map(([key, value]) => {
    return {
      ...value,
      id: key,
    };
  });
  
  console.log(dataArray);

  return (
    <div>
      <RecipesList recipes={dataArray} />
    </div>
  );
};

export default MyRecipes;

export const loader = async () => {
  const response = await fetch(
    "https://foodie-92e3e-default-rtdb.firebaseio.com/recipes.json"
  );
  if (!response.ok) {
    throw json({ message: "Could not fetch your recipes" }, { status: 500 });
  }
  return response;
};


