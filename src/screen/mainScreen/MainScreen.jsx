import AppNavbar from "@/components/navbar/AppNavbar";
import { AppSidebar } from "@/components/sidebar/AppSidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/context/ThemeContext";
// import { useState } from "react";
import { Outlet } from "react-router-dom";

function MainScreens() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <AppNavbar />
          <div className="w-full h-full">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default MainScreens;
