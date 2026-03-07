/**
 * @implements prd:login-page-0001
 */
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col space-y-8">
        <h1 className="text-4xl font-bold text-gray-900">GSM CMS</h1>
        <p className="text-xl text-gray-600">Trang quản trị Landing Page cho GSM</p>
        <Link
          href="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Đi tới Trang Đăng Nhập
        </Link>
      </div>
    </main>
  );
}
