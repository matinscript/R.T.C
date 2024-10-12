import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "R.T.C group",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-[#222222] flex justify-center"
      >
        {children}
      </body>
    </html>
  );
}
