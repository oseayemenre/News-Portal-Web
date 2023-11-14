"use client";

import { SessionProvider } from "next-auth/react";

type authProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: authProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
