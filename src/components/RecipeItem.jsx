import classes from "./RecipeItem.module.css";
import { PiCookingPot } from "react-icons/pi";
import { IoRestaurantOutline } from "react-icons/io5";

const RecipeItem = ({ title, servings, duration, image, score }) => {
  return (
    <>
      <div className={classes.itemContainer}>
        <img src={image} alt="recipe" />
        <h3>{title}</h3>

        <div className={classes.content}>
          <p className={classes.icon}>
            <PiCookingPot />
            {duration + " Minutes"}
          </p>
          <p className={classes.icon}>
            <IoRestaurantOutline />
            {servings + " Person"}
          </p>
        </div>
      </div>
    </>
  );
};

export default RecipeItem;
