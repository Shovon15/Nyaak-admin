"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./navMain";

import { NavUser } from "./navUser";
import AppLogo from "./AppLogo";
import { sidebarLinks } from "@/routes/SideLinks";
import { ThemeModal } from "../theme/ThemeModal";
import { Button } from "../ui/button";

// This is sample data.
const userData = {
  user: {
    name: "Shovon Mahmud",
    email: "shovonrnbd@gmail.com",
    avatar: "https://picsum.photos/200/300?grayscale",
  },
};

export function AppSidebar({ ...props }) {
  // Method 2: Using a custom trigger with the ThemeModal component
  const customTrigger = <Button variant="outline">Theme</Button>;
  return (
    <Sidebar className="bg-red-500" collapsible="icon" {...props}>
      <SidebarHeader>
        <AppLogo />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarLinks.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <ThemeModal trigger={customTrigger} />
        <NavUser user={userData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
