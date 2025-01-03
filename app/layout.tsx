import type { Metadata } from "next";
import localfont from "next/font/local";
import { Onest } from "next/font/google";

import "./globals.css";

const onest = Onest({
  variable: "--font-onest-sans",
  subsets: ["latin"],
});

const etude = localfont({
  src: [
    {
      path: "../public/fonts/Etude-Noire-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/Etude-Noire-Bold.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/Etude-Noire-Light.woff2",
      weight: "300",
    },
    {
      path: "../public/fonts/Etude-Noire-Medium.woff2",
      weight: "500",
    },
  ],
  variable: "--font-etude",
});

export const metadata: Metadata = {
  title: "DSRPT",
  description: "DSRPT описание",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${onest.variable} ${etude.variable} antialiased`}>
        <div className="wrapper">{children}</div>
      </body>
    </html>
  );
}
