import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import RecipesPage, { loader as recipesLoader } from "./pages/RecipesPage";
import AddRecipePage from "./pages/AddRecipePage";
import RecipeDetailsPage, {
  loader as itemLoader,
} from "./pages/RecipeDetailsPage";
import ErrorPage from "./pages/ErrorPage";
import MyRecipes,{loader as myRecipesLoader} from "./pages/MyRecipes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "recipes",
          children: [
            {
              index: true,
              element: <RecipesPage />,
              id: "recipes-data",
              loader: recipesLoader,
            },
            {
              path: ":recipeId",
              element: <RecipeDetailsPage />,
              loader: itemLoader,
            },
          ],
        },
        {
          path: "addRecipe",
          element: <AddRecipePage />,
        },
        {
          path: "myRecipes",
          children: [
            {
              index: true,
              element: <MyRecipes />,
              loader: myRecipesLoader
            },
            {
              path: ":recipeId",
              element: <RecipeDetailsPage />,
              loader:itemLoader
              
            },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
