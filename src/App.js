import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router/router";

function App() {
  return (
    <div className="mx-auto max-w-[1440px] dark:bg-black min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
