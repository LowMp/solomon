import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "솔로몬 복지재단",
  description: "함께 나누는 희망, 더 밝은 내일을 만듭니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${inter.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
