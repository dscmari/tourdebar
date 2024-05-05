
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tour de Bar",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession()

  return (
    <html lang="en">
      <body className={inter.className}>
          <SessionProvider session={session}>
            <main className="">
              <NavMenu/>
              {children}
              <div className="">
                <Footer/>
              </div>
            </main>
          </SessionProvider>
      </body>
    </html>
  );
}
