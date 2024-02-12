import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
const RecipeForm = () => {


  const handleOnSubmit = (event) => {
    let added_recipe = {};
    event.preventDefault();
    const form_data = new FormData(event.target);
    added_recipe = {
      name: form_data.get("name"),
      serving: form_data.get("serving"),
      time: form_data.get("time"),
      ingredients: form_data.get("ingredients"),
      summary: form_data.get("summary"),
    };
    console.log(added_recipe);
    event.target.reset();
  };



  
  return (
    <form onSubmit={handleOnSubmit}>
      <Input id="name" name="name" type="text" label="Recipe name" required />
      <Input
        id="serving"
        name="serving"
        type="number"
        label="Serving up to"
        required
      />
      <Input
        id="time"
        name="time"
        type="number"
        label="Cooking time in minutes"
        required
      />
      <Textarea
        id="ingredients"
        name="ingredients"
        label="Ingredients"
        rows="5"
        required
      />
      <Textarea id="summary" name="summary" label="Summary" rows="5" required />

      <button>Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
