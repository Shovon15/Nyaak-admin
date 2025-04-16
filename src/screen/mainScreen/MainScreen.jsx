import AppNavbar from "@/components/navbar/AppNavbar";
import { AppSidebar } from "@/components/sidebar/AppSidebar";

import {
  SidebarInset,
  SidebarProvider,
 
} from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

function MainScreens() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppNavbar />
        <div className="w-full h-full">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default MainScreens;
