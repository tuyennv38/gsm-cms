/**
 * @implements task:add-validation-0003
 * @implements feature:form-validation-0002
 */
"use client";

import React, { useState } from "react";

interface FormErrors {
    email?: string;
    password?: string;
}

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<FormErrors>({});

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log("Validation success:", { email, password });
            alert("Đăng nhập thành công (Mockup)");
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
                        placeholder="Nhập email của bạn"
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 outline-none transition-all ${errors.email
                                ? "border-red-500 focus:ring-red-200"
                                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            }`}
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
                        placeholder="Nhập mật khẩu"
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 outline-none transition-all ${errors.password
                                ? "border-red-500 focus:ring-red-200"
                                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            }`}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && (
                        <p className="text-xs text-red-500 font-medium">{errors.password}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-sm transition-colors duration-200 focus:ring-2 focus:ring-blue-300 outline-none"
                >
                    Đăng Nhập
                </button>
            </form>
        </div>
    );
}
