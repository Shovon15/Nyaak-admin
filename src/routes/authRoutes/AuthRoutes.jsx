import LoginPage from "@/screen/authScreen/login/Login";
import RegisterPage from "@/screen/authScreen/register/Register";

const AuthRoutes = [
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  // {
  //     path: "register/:token",
  //     element: <Register />
  // },
  // {
  //     path: "forgotPassword",
  //     element: <ForgotPassword />
  // },
  // {
  //     path: "recoverPassword/:token",
  //     element: <RecoverPassword />
  // },
];

export default AuthRoutes;
