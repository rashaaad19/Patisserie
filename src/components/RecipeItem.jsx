import classes from "./RecipeItem.module.css";
const RecipeItem = () => {
  return (
    <>
      <div className={classes.itemContainer}>
        <img
          src="https://casuallypeckish.com/wp-content/uploads/2022/01/Soy-sauce-noodles-8.jpg"
          alt="recipe"
        />
        <div className={classes.content}>
          <h3>Name</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </>
  );
};

export default RecipeItem;
