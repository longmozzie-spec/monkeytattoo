import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import { LayoutPreloader } from "@/components/layout-preloader";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Monkey Tattoo - Tinh Hoa Nghệ Thuật Á Đông Trên Da",
  description:
    "Monkey Tattoo - Chuyên kiến tạo các tác phẩm Oriental & Irezumi đậm chất sử thi. Đặt lịch tư vấn ngay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${openSans.variable} antialiased`}
    >
      <body className="bg-background text-foreground min-h-[100dvh]">
        <LayoutPreloader>{children}</LayoutPreloader>
      </body>
    </html>
  );
}
