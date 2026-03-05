import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient();

export const signUp = {
  email: async (credentials: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      const response = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          error: {
            message: data.message || "Sign up failed",
          },
        };
      }

      return {
        data,
        error: null,
      };
    } catch (error) {
      return {
        error: {
          message: error instanceof Error ? error.message : "An error occurred",
        },
      };
    }
  },
};
