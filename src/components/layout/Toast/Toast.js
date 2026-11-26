"use client";

import { Toaster } from "react-hot-toast";

export default function Toast() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 4000,
        style: {
          fontFamily: "var(--font-vazirmatn)",
          direction: "rtl",
          fontSize: "13px",
          color: "var(--ink)",
          borderRadius: "14px",
          background: "#ffffff",
          boxShadow: "var(--sp-glass-shadow)",
        },
        success: {
          iconTheme: {
            primary: "#087f68",
            secondary: "#ffffff",
          },
        },
        error: {
          iconTheme: {
            primary: "#d75b51",
            secondary: "#ffffff",
          },
        },
      }}
    />
  );
}