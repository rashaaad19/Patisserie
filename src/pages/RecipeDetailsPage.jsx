import { json, useLoaderData, useNavigate, useParams } from "react-router-dom";
import classes from "./RecipeDetailsPage.module.css";
import { htmlToPlainText } from "../utilties/functions";
const RecipeDetailsPage = () => {
  const data = useLoaderData();
  const params = useParams();
  const navigate = useNavigate();

  let plainTexInstructions = undefined;
  console.log(params.recipeId);
  if (data.instructions) {
    plainTexInstructions = htmlToPlainText(data.instructions);
  }

  const plainTextSummary = htmlToPlainText(data.summary);

  const ingredientNames = data.extendedIngredients.map(
    (item) => item.original || item
  );

  const handleOnDelete = async () => {
    const proceed = window.confirm(
      "Are you sure you want to delete " + data.title
    );
    if (proceed) {
      const response = await fetch(
        `https://foodie-92e3e-default-rtdb.firebaseio.com/recipes/${params.recipeId}.json`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw json(
          { message: "Could not delete your recipe" },
          { status: 500 }
        );
      }
      navigate("/myRecipes");
    }
  };
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
          {data.spoonacularScore && (
            <p className={classes.control}>
              <span>{data.spoonacularScore.toFixed(1)}%</span>
              <span> score</span>
            </p>
          )}
          {params.recipeId.includes("-") && (
            <p className={`${classes.control} ${classes.controlBtn}`}>
              <button onClick={handleOnDelete}>Delete</button>
            </p>
          )}
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
        {data.instructions && (
          <div className={classes.instructionsContainer}>
            <h3>Instructions</h3>
            <p>{plainTexInstructions}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default RecipeDetailsPage;

export const loader = async ({ params }) => {
  const id = params.recipeId;
  let url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=fcdf38efec8043e7a78b498d7e553df9`;

  if (id.includes("-")) {
    url = `https://foodie-92e3e-default-rtdb.firebaseio.com/recipes/${params.recipeId}.json`;
  }
  const response = await fetch(url);

  if (!response.ok) {
    throw json({ message: "Error fetching recipe" }, { status: 500 });
  }
  return response;
};
