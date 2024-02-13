import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import classes from "../ui/Input.module.css";
import { useRef, useState } from "react";
const RecipeForm = () => {
  const [ingredients, setIngredients] = useState([]);
  const ref = useRef();

  const handleOnSubmit = (event) => {
    let added_recipe = {};
    event.preventDefault();
    const form_data = new FormData(event.target);
    added_recipe = {
      name: form_data.get("name"),
      serving: form_data.get("serving"),
      time: form_data.get("time"),
      ingredients: [...ingredients],
      summary: form_data.get("summary"),
      image: form_data.get,
    };
    console.log(added_recipe);
    event.target.reset();
  };

  const handleAddIngredient = () => {
    const addedIngredient = ref.current.ingredients.value;
    setIngredients([...ingredients, addedIngredient]);
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
          // onChange={handleOnChange}
          required
        />
        <div className={classes.ingredientsLabel}>
          <p>
            {ingredients.length > 0 && (
              <ul>
                {ingredients.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </p>
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
