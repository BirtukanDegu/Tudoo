import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#f97316",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title:
    "Todo app: Organize your tasks with ease | Task Organizer",
  description:
    "Organize your tasks with ease using our simple and intuitive Todo app. Stay on top of your to-do list and boost your productivity.",
  keywords: [
    "todo app",
    "task organizer",
    "task manager",
    "task list",
    "to-do list",
    "task tracker",
    "task planner",
    "task reminder",
    "task organization",
    "task scheduling",
    "task prioritization",
    "task completion",
    "task productivity",
    "task efficiency",
    "task management software",
    "task management tool",
    "task management app",
    "task management system",
    "task management solution",
    "task management platform",
    "task management techniques",
    "task management strategies",
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "Todo App: Organize your tasks with ease | Task Organizer",
    description:
      "Organize your tasks with ease using our simple and intuitive Todo app. Stay on top of your to-do list and boost your productivity.",
    url: process.env.NEXT_PUBLIC_URL,
    type: "website",
    images: "/og-image.jpeg",
    siteName: "Task Organizer",
    locale: "en-US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@birtukan",
    creator: "@birtukan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased scrollbar"
      >
        {children}
      </body>
    </html>
  );
}
