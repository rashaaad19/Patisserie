import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import RecipesPage,{loader as recipesLoader} from "./pages/RecipesPage";
import AddRecipePage from "./pages/AddRecipePage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement:<ErrorPage/>,
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
              loader:recipesLoader
            },
            {
              path: "recipeDetails/:recipeId",
              element: <RecipeDetailsPage />,
            },
          ],
        },
        {
          path: "addRecipe",
          element: <AddRecipePage />,
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
