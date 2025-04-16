import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export const AuthWrapper = ({
  children,
  headerTitle,
  headerLabel,
  backButtonLabel,
  backButtonHref,
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[100dvh]  px-5">
      <Card className="w-full md:w-[400px] shadow-md">
        <CardHeader>
          <h1 className="text-3xl flex justify-center items-center font-bold">
            {headerTitle}
          </h1>
          <h1 className="text-xl flex justify-center items-center font-md text-muted-foreground py-2">
            {headerLabel}
          </h1>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter>
          <Button
            variant="link"
            className="font-normal w-full"
            size="sm"
            asChild
          >
            <Link to={backButtonHref}>{backButtonLabel}</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
