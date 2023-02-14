import React, { useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import debounce from "lodash/debounce";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const auth = getAuth();

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const router = useRouter();
  const { user } = useAuth();

  const delayedRedirect = useCallback(
    debounce((path: string) => {
      router.push(path);
    }, 1000),
    [router]
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        delayedRedirect("/dashboard");
      }
    });
  }, [delayedRedirect]);

  useEffect(() => {
    if (!user.uid) {
      delayedRedirect("/signin");
    }
  }, [delayedRedirect, user]);

  return <div>{user ? children : null}</div>;
};
