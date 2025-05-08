import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "@/App";
import MainRoutes from "./mainRoutes/MainRoutes";
import AuthRoutes from "./authRoutes/AuthRoutes";
import MainScreens from "@/screen/mainScreen/MainScreen";
import RootRedirect from "@/utils/RootRedirect";
import AuthScreens from "@/screen/authScreen/AuthScreen";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // {
      //   index: true, // when visiting "/"
      //   element: <RootRedirect />, // <-- handle logic inside component
      // },
      {
        path: "/main",
        element: <MainScreens />,
        children: MainRoutes,
      },
      {
        path: "/auth",
        element: <AuthScreens />,
        children: AuthRoutes,
      },
    ],
  },
]);

export default routes;
