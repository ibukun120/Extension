import { ThemeProvider } from "@/app/components/theme-providers"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/app/components/Nav"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Extensions",
  description: "Elevate your online experience with our powerful browser extension. From streamlined workflows to enhanced functionality, our extension is designed to make your life easier. Explore the possibilities and take your browsing to the next level",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
              <Nav/>
          {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
