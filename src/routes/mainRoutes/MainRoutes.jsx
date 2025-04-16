import CategoryPage from "@/screen/mainScreen/category/CategoryPage";
import DashboardPage from "@/screen/mainScreen/dashboard/DashboardPage";

const MainRoutes = [
  //Absolute route path "/dashboard" nested under path "/main" is not valid. An absolute child route path must start with the combined path of all its parent routes.❌
  {
    path: "dashboard",
    element: <DashboardPage />,
  },
  {
    path: "category",
    element: <CategoryPage />,
  },
];

export default MainRoutes;
