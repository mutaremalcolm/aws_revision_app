import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { ThemeProvider } from "next-themes";
import AppLayout from "./components/AppLayout";
import GoogleAnalytics from "./components/GoogleAnalytics";

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: "AWS Revision Tool",
  description: "Prepare for your AWS exam with our comprehensive quizzes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>AWS Revision Tool</title>
        <GoogleAnalytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ThemeProvider attribute="class"> 
        <AppLayout>
            {children}
        </AppLayout>
      </ThemeProvider> 
      </body>
    </html>
  );
}
