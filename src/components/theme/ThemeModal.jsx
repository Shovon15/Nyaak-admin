import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Settings } from "lucide-react";

export function ThemeModal({ trigger }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger ? (
        <DialogTrigger asChild>{trigger}</DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
            <span className="sr-only">Open theme settings</span>
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-md">
        {/* <DialogHeader>
          <DialogTitle>Theme Settings</DialogTitle>
          <DialogDescription>
            Customize the appearance of the application by selecting a theme
            color and light/dark mode.
          </DialogDescription>
        </DialogHeader> */}
        <div className="flex flex-col space-y-4 py-4">
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm font-medium">Theme Colors</h3>
            <p className="text-sm text-muted-foreground">
              Select a color theme for the application.
            </p>
          </div>
          <ThemeSwitcher />
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Export a function to create a button that opens the theme modal
export function useThemeModal() {
  const [open, setOpen] = useState(false);

  const ThemeModalButton = ({ children, ...props }) => {
    return (
      <>
        <Button onClick={() => setOpen(true)} {...props}>
          {children || (
            <>
              <Settings className="h-4 w-4 mr-2" />
              Theme Settings
            </>
          )}
        </Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-md">
            {/* <DialogHeader>
              <DialogTitle>Theme Settings</DialogTitle>
              <DialogDescription>
                Customize the appearance of the application by selecting a theme
                color and light/dark mode.
              </DialogDescription>
            </DialogHeader> */}
            <div className="flex flex-col space-y-4 py-4">
              <div className="flex flex-col space-y-2">
                <h3 className="text-sm font-medium">Theme Colors</h3>
                <p className="text-sm text-muted-foreground">
                  Select a color theme for the application.
                </p>
              </div>
              <ThemeSwitcher />
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  };

  return {
    open,
    setOpen,
    ThemeModalButton,
  };
}
