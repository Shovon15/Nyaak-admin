import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import routes from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <RouterProvider router={routes} /> */}
  </StrictMode>,
);
