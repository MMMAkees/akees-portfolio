import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohamed Akees | Full-Stack Developer & Data Analytics Enthusiast",
  description:
    "Portfolio of Mohamed Akees — Junior Full-Stack Developer specializing in MERN stack and Data Analytics. Building modern web apps and turning data into insights.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
