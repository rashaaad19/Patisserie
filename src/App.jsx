import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import AddRecipePage from "./pages/AddRecipePage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
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
        // ,{
        //   path:'recipeDetails',
        //   element:<RecipeDetailsPage/>
        // }
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
