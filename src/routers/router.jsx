import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App.jsx";
import Home from "../home/Home.jsx";
import Shop from "../shop/Shop.jsx";
import SingleBook from "../shop/SingleBook.jsx";
import DashboardLayout from "../dashboard/DashboardLayout.jsx";
import Dashboard from "../dashboard/Dashboard.jsx";
import Uploadbook from "../dashboard/UploadBook.jsx";
import ManageBooks from "../dashboard/ManageBooks.jsx";
import EditBooks from "../dashboard/EditBooks.jsx";
import Signup from "../components/Signup.jsx";
import Login from "../components/Login.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import Logout from "../components/Logout.jsx";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/shop",
            element: <Shop />,
        },
        {
          path: "/book/:id",
          element: <SingleBook/>,
          loader: ({params}) => fetch(`https://book-store-backend-2-rlxg.onrender.com/book/${params.id}`),
        }
      ]
    },
    {
      path: "/admin/dashboard",
      element: <DashboardLayout/>,
      children: [
        {
          path: "/admin/dashboard",
          element: <PrivateRoute><Dashboard/></PrivateRoute>,
        },
        {
          path: "/admin/dashboard/upload",
          element: <Uploadbook/>
        },
        {
          path: "/admin/dashboard/manage",
          element: <ManageBooks/>
        },
        {
          path: "/admin/dashboard/edit-book/:id",
          element: <EditBooks/>,
          loader: ({params}) => fetch(`https://book-store-backend-2-rlxg.onrender.com/book/${params.id}`),
        }
      ]
    },
    {
      path: "sign-up",
      element: <Signup/>,
    },
    {
      path: "login",
      element:<Login/>,
    },
    {
      path: "logout",
      element: <Logout/>,
    }
  ]);

  export default router;
