/**
 * @implements task:handle-login-redirect-0009
 * @implements feature:dashboard-navigation-0003
 */
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface FormErrors {
    email?: string;
    password?: string;
}

export default function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<FormErrors>({});
    const [isLoading, setIsLoading] = useState(false);

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        // Email validation
        if (!email.trim()) {
            newErrors.email = "Vui lòng nhập email";
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                newErrors.email = "Email không đúng định dạng";
            }
        }

        // Password validation
        if (!password.trim()) {
            newErrors.password = "Vui lòng nhập mật khẩu";
        } else if (password.length < 6) {
            newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setIsLoading(true);
            console.log("Validation success:", { email, password });

            // Giả lập thời gian xử lý đăng nhập
            setTimeout(() => {
                setIsLoading(false);
                router.push("/dashboard");
            }, 1000);
        }
    };

    return (
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-center text-gray-800">Đăng Nhập</h2>
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        disabled={isLoading}
                        placeholder="Nhập email của bạn"
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 outline-none transition-all ${errors.email
                                ? "border-red-500 focus:ring-red-200"
                                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            } ${isLoading ? "bg-gray-50 opacity-70" : ""}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                        <p className="text-xs text-red-500 font-medium">{errors.email}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Mật khẩu
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        disabled={isLoading}
                        placeholder="Nhập mật khẩu"
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 outline-none transition-all ${errors.password
                                ? "border-red-500 focus:ring-red-200"
                                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            } ${isLoading ? "bg-gray-50 opacity-70" : ""}`}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && (
                        <p className="text-xs text-red-500 font-medium">{errors.password}</p>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-sm transition-colors duration-200 focus:ring-2 focus:ring-blue-300 outline-none flex items-center justify-center gap-2 ${isLoading ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                >
                    {isLoading ? (
                        <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Đang xử lý...
                        </>
                    ) : (
                        "Đăng Nhập"
                    )}
                </button>
            </form>
        </div>
    );
}
