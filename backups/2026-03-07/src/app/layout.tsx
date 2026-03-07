import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
    title: "GSM CMS - Đăng Nhập",
    description: "Trang quản trị GSM CMS",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
