import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layout/app-layout";
import { MainPage } from "./pages/mainPage/main-page";
import { ProductPage } from "./pages/productPage/productPage";
import { SearchPage } from "./pages/search/search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/p/:slug", element: <ProductPage /> },
      { path: "/search", element: <SearchPage /> },
    ],
  },
]);
