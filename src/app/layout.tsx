import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import AkeeBot from "@/components/ui/AkeeBot";

export const metadata: Metadata = {
  title: "Mohamed Akees | Full-Stack Developer & Data Analytics Enthusiast",
  description:
    "Portfolio of Mohamed Akees — Full-Stack Developer specializing in MERN stack and Data Analytics. Building modern web apps and turning data into insights.",
  keywords: [
    "Mohamed Akees",
    "Full-Stack Developer",
    "Data Analytics",
    "MERN Stack",
    "React",
    "Node.js",
    "Portfolio",
    "Sri Lanka",
  ],
  authors: [{ name: "Mohamed Akees" }],
  openGraph: {
    title: "Mohamed Akees | Full-Stack Developer & Data Analytics Enthusiast",
    description:
      "Building Modern Web Apps & Turning Data into Insights",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans overflow-x-hidden w-full relative">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <AkeeBot />
        </ThemeProvider>
      </body>
    </html>
  );
}
