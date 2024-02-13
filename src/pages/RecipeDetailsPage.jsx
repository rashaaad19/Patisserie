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
  console.log(plainTexInstructions);
  const ingredientNames = data.extendedIngredients.map((item) => item.original);
  console.log(ingredientNames);

  return (
    <>
      <div className={classes.container}>
        <h1>{data.title}</h1>
        <div className={classes.headerContainer}>
          <p className={classes.control}>
            <span>{`${data.readyInMinutes}m `}</span>
            <span>cook</span>
          </p>
          <p className={classes.control}>
            <span>{`${data.servings} `}</span>
            <span>servings</span>
          </p>
          <p className={classes.control}>
            <span>{(data.spoonacularScore * 100).toFixed(1)}%</span>
            <span> score</span>
          </p>
        </div>
        <div>
          <img src={data.image} />
          <p>{plainTextSummary}</p>
        </div>

        <div className={classes.ingredientsContainer}>
          <h2>Ingredients</h2>
          <ul>
            {ingredientNames.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={classes.instructionsContainer}>
          <h3>Instructions</h3>
          <p>{plainTexInstructions}</p>
        </div>
      </div>
    </>
  );
};

export default RecipeDetailsPage;

export const loader = async ({ params }) => {
  const id = params.recipeId;
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=fcdf38efec8043e7a78b498d7e553df9`
  );
  if (!response.ok) {
    throw json({ message: "Error fetching recipe" }, { status: 500 });
  }
  return response;
};
