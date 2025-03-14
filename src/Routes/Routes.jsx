import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import MainLayout from "../component/Layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
