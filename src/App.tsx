import { RouterProvider } from "react-router-dom";
import { MainPage } from "./pages/mainPage/main-page";
import { router } from "./routes";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
