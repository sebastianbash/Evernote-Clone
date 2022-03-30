import React from "react";
import Login from "components/login/Login";
import { useRouter } from "next/router"
import { signIn, useSession, getSession } from "next-auth/react"

const login = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status !== "loading" && status === "authenticated") {
    router.push("/");
  }
  return <Login />;
};

export default login;
