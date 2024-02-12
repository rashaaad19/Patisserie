import { NavLink } from "react-router-dom";
import classes from "./MainNav.module.css";
const MainNav = () => {
  return (
    <header className={classes.mainNav}>
      <nav>
        <ul>
          <NavLink
            to={""}
            className={({ isActive }) => isActive ? `${classes.active}`:undefined}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to={"/recipes"}
            className={({ isActive }) => isActive ? `${classes.active}`:undefined}
          >
            <li>Recipes</li>
          </NavLink>
          <NavLink
            to={"/addRecipe"}
            className={({ isActive }) => isActive ? `${classes.active}`:undefined}
          >
            <li>Add recipe</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
