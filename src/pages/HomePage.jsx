import classes from "./HomePage.module.css";
import { RiCake3Line } from "react-icons/ri";

const HomePage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.textControl}>
        <h1>Foodies for dessert recipes</h1>
        <p>Best recipes across the internet.</p>
      </div>
      <div className={classes.imagesContainer}>
        <div className={classes.imageControl}>
          <img src="Donuts.png" />
        </div>
        <div className={classes.imageControl}>
          <img src="Macaron.png" />
        </div>

        <div className={classes.imageControl}>
          <img src="Chocolate.png" />
        </div>
        <div className={classes.imageControl}>
        <RiCake3Line size={50}/>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
