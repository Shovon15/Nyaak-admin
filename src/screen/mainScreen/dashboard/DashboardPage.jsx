import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      <p className="bg-background text-foreground">DashboardPage</p>

      <Button className="bg-secondary dark:bg-primary">Button</Button>

      <Input
        type="text"
        placeholder="Search"
        className="bg-background dark:bg-foreground"
      />
    </div>
  );
};

export default DashboardPage;
