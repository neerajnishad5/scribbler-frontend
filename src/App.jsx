import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// importing components
import RootLayout from "./components/RootLayout/RootLayout.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import UserProfile from "./components/UserProfile/UserProfile.jsx";
import NewBlog from "./components/NewBlog/NewBlog.jsx";
import EditPost from "./components/EditPost/EditPost";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

// exporting App function
export default function App() {
  const browserRouterObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/user-profile",
          element: <UserProfile />,
        },
        {
          path: "/new-blog",
          element: <NewBlog />,
        },
        {
          path: "/write-blog",
          element: <EditPost />,
        },
      ],
    },
  ]);

  // returning app component
  return (
    <div className="App">
      <div>
        <RouterProvider router={browserRouterObj}></RouterProvider>
      </div>
    </div>
  );
}
