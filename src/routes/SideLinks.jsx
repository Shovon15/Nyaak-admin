import { BookOpen, Bot, Settings2, SquareTerminal } from "lucide-react";

export const sidebarLinks = {
  navMain: [
    {
      title: "Dashboard",
      url: "/main/dashboard",
      icon: SquareTerminal,
      isActive: true,
      items: [],
    },
    {
      title: "category",
      url: "/main/category",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "All category",
          url: "/main/category",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Settings2",
      url: "#",
      icon: Settings2,
      items: [],
    },
  ],
};
