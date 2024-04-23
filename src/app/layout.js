import { ADLaM_Display, Inter } from "next/font/google";
import "./globals.css";

const inter = ADLaM_Display({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Sourcecode Reading Recorder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">

      <body className={inter.className}>{children}</body>
    </html>
  );
}
