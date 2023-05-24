import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Login = () => {
  //user session
  const { data: session } = useSession();
  const { query } = useRouter();

  useEffect(() => {
    redirectToLogin();
  }, [query, session]);

  const redirectToLogin = async () => {
    await signIn("google", {
      redirect: true,
      callbackUrl: "/",
    });
  };

  return <div className="login"></div>;
};

export default Login;
