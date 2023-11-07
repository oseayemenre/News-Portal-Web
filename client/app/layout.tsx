import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

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
      <body className={roboto.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
