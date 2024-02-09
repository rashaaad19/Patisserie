import { useParams } from "react-router-dom";

const RecipeDetailsPage = () => {
const {recipeId} = useParams()
  return <>
  <h1>RecipeDetailPage</h1>
  <h2>{recipeId}</h2>
  </>;
};

export default RecipeDetailsPage;
