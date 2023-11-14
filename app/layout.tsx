import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/session_provider";

type RootLayoutProps = {
  children: React.ReactNode;
};

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News Portal",
  description: "News Portal",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='en' className='scroll-smooth'>
      <AuthProvider>
        <body className={roboto.className}>{children}</body>
      </AuthProvider>
    </html>
  );
};

export default RootLayout;
