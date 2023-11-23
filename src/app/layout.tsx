import "@/styles/globals.css";
import { Analytics } from '@vercel/analytics/react'
import { Inter } from "next/font/google";
// import { cookies } from "next/headers";

// import { TRPCReactProvider } from "@/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Ai Lak",
  description: "Ai Lak",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        {/* <TRPCReactProvider cookies={cookies().toString()}> */}
        {children}
        {/* </TRPCReactProvider> */}
        <Analytics />
      </body>
    </html>
  );
}
