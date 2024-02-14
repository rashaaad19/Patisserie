import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import classes from "../ui/Input.module.css";
import { useRef, useState } from "react";
const RecipeForm = () => {
  const [ingredients, setIngredients] = useState([]);
  const ref = useRef();


  function generateUniqueID(name) {
    const firstWord = name.toLowerCase().split(' ')[0];
    const randomNumber = Math.floor(Math.random() * 10000);
    return `${firstWord}-${randomNumber}`;
  }
  
  const handleOnSubmit = async (event) => {
    let added_recipe = {};
    event.preventDefault();
    const form_data = new FormData(event.target);
    added_recipe = {
      name: form_data.get("name"),
      serving: form_data.get("serving"),
      time: form_data.get("time"),
      ingredients: [...ingredients],
      summary: form_data.get("summary"),
      image: form_data.get("image"),
      id:generateUniqueID(form_data.get("name"))

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
    setIngredients([])
  };

  const handleAddIngredient = () => {
    const addedIngredient = ref.current.ingredients.value;
    setIngredients([...ingredients, addedIngredient]);
    ref.current.ingredients.value="";
  };
  console.log(ingredients);

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
        <Input
          id="ingredients"
          name="ingredients"
          label="Ingredients"
          required={!ingredients.length > 0}
          />
        <div className={classes.ingredientsLabel}>
          <div>
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
