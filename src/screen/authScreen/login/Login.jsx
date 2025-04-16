import { AuthWrapper } from "@/components/auth/AuthWrapper";
import React from "react";

const LoginPage = () => {
  return (
    <AuthWrapper
      headerTitle="Login"
      headerLabel="Welcome Back Chief"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
    >
      <p>hello</p>
      {/* <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <InputFieldWrapper
              control={form.control}
              name="email"
              formLabel="Email"
              placeholder="johnDoe@example.com"
              required={true}
          />
          <InputFieldWrapper
              control={form.control}
              name="password"
              formLabel="Password"
              placeholder="******"
              required={true}
              passwordShowButton={true}
          />

          <FormError message={error} />
          <FormSuccess message={success} />
          <Button disabled={isLoading} type="submit" className="w-full">
              {isLoading ? <Spinner /> : "login"}
          </Button>
      </form>
  </Form> */}
    </AuthWrapper>
  );
};

export default LoginPage;
