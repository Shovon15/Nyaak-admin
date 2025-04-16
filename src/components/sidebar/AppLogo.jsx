import React from "react";
import { useSidebar } from "../ui/sidebar";

const AppLogo = () => {
  const { open } = useSidebar();

  return <div className={`${open ? "flex" : "hidden"} text-lg`}>Logo</div>;
};

export default AppLogo;
