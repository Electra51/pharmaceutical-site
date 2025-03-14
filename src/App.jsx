import { RouterProvider } from "react-router";
import "./App.css";
import { router } from "./Routes/Routes";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
      <ScrollToTop smooth color="#f2f0f5" />
    </div>
  );
};

export default App;
