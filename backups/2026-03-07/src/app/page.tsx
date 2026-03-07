import LoginForm from "@/components/forms/LoginForm";

/**
 * @implements task:build-login-ui-0002
 * @implements feature:login-form-0001
 */
export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50">
            <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">GSM CMS</h1>
                    <p className="mt-2 text-slate-500 text-sm">Vui lòng đăng nhập để tiếp tục</p>
                </div>

                <LoginForm />

                <div className="mt-10 text-center text-xs text-slate-400">
                    © {new Date().getFullYear()} GSM CMS. Bản quyền thuộc về Antigravity.
                </div>
            </div>
        </main>
    );
}
