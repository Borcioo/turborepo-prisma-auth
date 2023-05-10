"use client";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { LoginForm } from "ui/admin";

export function AuthGate({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <SessionWrapper>{children}</SessionWrapper>
    </SessionProvider>
  );
}

const SessionWrapper = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div></div>;
  }

  if (!session) {
    return <LoginForm signIn={signIn} />;
  }

  return <>{children}</>;
};
