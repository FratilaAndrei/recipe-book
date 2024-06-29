import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage/Home.page";
import {
  FAVORITES_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  RECIPES_PAGE_ROUTE,
} from "./common/data/routes";
import "./index.css";
import FavoritesPage from "./pages/FavoritesPage/Favorites.page";
import RecipesPage from "./pages/RecipesPage/Recipes.page";

const router = createBrowserRouter([
  {
    path: HOME_PAGE_ROUTE,
    element: <HomePage />,
  },
  {
    path: RECIPES_PAGE_ROUTE,
    element: <RecipesPage />,
  },
  {
    path: FAVORITES_PAGE_ROUTE,
    element: <FavoritesPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
