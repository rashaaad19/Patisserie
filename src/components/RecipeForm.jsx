import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import classes from "../ui/Input.module.css";
import { generateUniqueID } from "../utilties/functions";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const RecipeForm = () => {
  const [ingredients, setIngredients] = useState([]);
  const [formValid, setFormValid] = useState("wait");
  const ref = useRef();
  const navigate = useNavigate();

  const handleOnSubmit = async (event) => {
    let added_recipe = {};
    event.preventDefault();

    if (formValid === "true") {
      const form_data = new FormData(event.target);
      added_recipe = {
        title: form_data.get("name"),
        servings: form_data.get("serving"),
        readyInMinutes: form_data.get("time"),
        extendedIngredients: [...ingredients],
        summary: form_data.get("summary"),
        image: form_data.get("image"),
        id: generateUniqueID(form_data.get("name")),
      };
      console.log(added_recipe);

      try {
        const response = await fetch(
          "https://foodie-92e3e-default-rtdb.firebaseio.com/recipes.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify(added_recipe),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to add recipe");
        }
      } catch (error) {
        console.log(error);
      }
      event.target.reset();
      setIngredients([]);
      navigate("/myRecipes");
    }
  };

  const handleAddIngredient = () => {
    const addedIngredient = ref.current.ingredients.value;
    if (addedIngredient.length != 0) {
      setIngredients([...ingredients, addedIngredient]);
      ref.current.ingredients.value = "";
      setFormValid("true");
    } else {
      setFormValid("empty-input");
    }
  };

  return (
    <form onSubmit={handleOnSubmit} ref={ref}>
      <Input
        id="name"
        name="name"
        type="text"
        label="Recipe name"
        className={classes.text}
        required
      />
      <Input
        id="image"
        name="image"
        type="url"
        label="Image"
        required
        className={classes.text}
      />

      <Input
        id="serving"
        name="serving"
        type="number"
        label="Serving up to"
        required
        className={classes.number}
      />
      <Input
        id="time"
        name="time"
        type="number"
        label="Cooking time in minutes"
        required
        className={classes.number}
      />
      <div className={classes.ingredients}>
        <Input id="ingredients" name="ingredients" label="Ingredients" />
        <div className={classes.ingredientsLabel}>
          <div>

            {formValid === "empty-input" && (
              <p>Enter at least one ingredient</p>
            )}

            {ingredients.length > 0 && (
              <ul>
                {ingredients.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
          <button type="button" onClick={handleAddIngredient}>
            Add Ingredient
          </button>
        </div>
      </div>
      <Textarea
        id="summary"
        name="summary"
        label="Summary"
        rows="5"
        className={classes.textarea}
        required
      />

      <button className={classes.button}>Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
