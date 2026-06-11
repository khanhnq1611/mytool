import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "IT Tools Hub - Tải phần mềm miễn phí",
  description:
    "Tải phần mềm miễn phí cho Windows, Mac, Linux và Android. Bảo mật, lập trình, tiện ích và nhiều hơn nữa.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
