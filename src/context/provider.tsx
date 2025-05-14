"use client";

import { ThemeProvider } from "@/context/themeContext";

interface Props {
  children: React.ReactNode;
}

export default function CustomProvider({ children }: Props) {

  return (
      <ThemeProvider>
          {children}
      </ThemeProvider>
  );
}
