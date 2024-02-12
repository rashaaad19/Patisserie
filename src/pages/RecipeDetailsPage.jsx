import { json, useLoaderData } from "react-router-dom";
import classes from "./RecipeDetailsPage.module.css";
const RecipeDetailsPage = () => {
  const data = useLoaderData();
  console.log(data);

  //changing instruction format from HTML to plain text
  function htmlToPlainText(htmlData) {
    var element = document.createElement("div");
    element.innerHTML = htmlData;
    return element.textContent || element.innerText || "";
  }
  const plainTexInstructions = htmlToPlainText(data.instructions);
  const plainTextSummary = htmlToPlainText(data.summary);

  return (
    <>
      <div className={classes.container}>
        <h1>{data.title}</h1>
        <p>{data.readyInMinutes}</p>
        <p>{data.servings}</p>
        <p>{(data.spoonacularScore*100).toFixed(1)}</p>
        <img src={data.image} />

        <p>{plainTexInstructions}</p>
        <p>{plainTextSummary}</p>
      </div>
    </>
  );
};

export default RecipeDetailsPage;

export const loader = async ({ params }) => {
  const id = params.recipeId;
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=e9ea301602fd4a2490254abb5a13e2ab`
  );
  if (!response.ok) {
    throw json({ message: "Error fetching recipe" }, { status: 500 });
  }
  return response;
};
