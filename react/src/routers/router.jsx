import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/LayoutPage";
import HomePage from "../pages/HomePage";
import AddUserPage from "../pages/AddUserPage";
import EditUserPage from "../pages/EditUserPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/add",
        element: <AddUserPage />,
      },
      {
        path: "/edit/:id",
        element: <EditUserPage />,
      },
    ],
  },
]);

export default router;
