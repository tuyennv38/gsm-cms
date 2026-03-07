/**
 * @implements task:build-login-ui-0002
 * @implements feature:login-form-0001
 */
"use client";

import React, { useState } from "react";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submit clicked:", { email, password });
        alert("Đã nhấn đăng nhập (Mockup)");
    };

    return (
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-center text-gray-800">Đăng Nhập</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-sm transition-colors duration-200"
                >
                    Đăng Nhập
                </button>
            </form>
        </div>
    );
}
