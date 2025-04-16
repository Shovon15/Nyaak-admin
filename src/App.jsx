import { Outlet } from "react-router-dom";
// import { ScreenHolder } from './Components/Partials/Layout/ScreenHolder/ScreenHolder';
// import SideAndNavBar from './Components/Partials/Layout/SideAndNavBar/SideAndNavBar';
// import { AuthContext } from './Contexts/GlobalContexts/AuthContext';
// import { Loader } from './Components/Partials/Elements/Loader/Loader';
// import { LayoutContext } from './Contexts/GlobalContexts/LayoutContext';
import { Toaster } from "react-hot-toast";

import "./App.css";

const App = () => {
  // const { employee, logout } = useContext(AuthContext);
  // const { isLoading, expandSidebar } = useContext(LayoutContext);
  // const navigate = useNavigate();

  // const { pathname } = useLocation();

  // useEffect(() => {
  //   if (pathname === '/') {
  //     navigate('/main/dashboard');
  //   }
  // }, [navigate, pathname]);

  // axios.interceptors.response.use(
  //   (res) => {
  //     return res;
  //   },
  //   (err) => {
  //     if (err?.response?.status === 401) {
  //       logout();
  //     }
  //     return Promise.reject(err);
  //   },
  // );
  // const employee = true;
  // const isLoading = false;
  // const expandSidebar = true;

  return (
    <main
    // className={`main ${employee ? "employee" : "auth"} ${
    //   expandSidebar ? "expanded" : ""
    // }`}
    >
      {/* {employee && <SideAndNavBar />} */}

      <Outlet />
      <Toaster position="top-center" reverseOrder={false} />

      {/* {isLoading && <Loader />} */}
    </main>
  );
};

export default App;
