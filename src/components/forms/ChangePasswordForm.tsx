/**
 * @implements task:build-change-password-ui-0011
 * @implements task:add-change-password-validation-0012
 * @implements feature:change-password-0006
 */
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, CheckCircle2 } from "lucide-react";

interface FormErrors {
    currentPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
}

export default function ChangePasswordForm() {
    const router = useRouter();
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState<FormErrors>({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        // Current Password validation
        if (!currentPassword.trim()) {
            newErrors.currentPassword = "Vui lòng nhập mật khẩu hiện tại";
        }

        // New Password validation
        if (!newPassword.trim()) {
            newErrors.newPassword = "Vui lòng nhập mật khẩu mới";
        } else if (newPassword.length < 6) {
            newErrors.newPassword = "Mật khẩu mới phải có ít nhất 6 ký tự";
        } else if (newPassword === currentPassword) {
            newErrors.newPassword = "Mật khẩu mới không được trùng mật khẩu hiện tại";
        }

        // Confirm Password validation
        if (!confirmPassword.trim()) {
            newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu mới";
        } else if (confirmPassword !== newPassword) {
            newErrors.confirmPassword = "Xác nhận mật khẩu không khớp";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (validate()) {
            setIsLoading(true);

            // Giả lập xử lý đổi mật khẩu sau 1s
            setTimeout(() => {
                setIsLoading(false);
                
                // Mật khẩu hiện tại mock = "123456"
                if (currentPassword !== "123456") {
                    setErrors({ currentPassword: "Mật khẩu hiện tại không đúng" });
                } else {
                    // Thành công
                    setIsSuccess(true);
                    
                    // Chuyển hướng sau 2s
                    setTimeout(() => {
                        router.push("/dashboard");
                    }, 2000);
                }
            }, 1000);
        }
    };

    if (isSuccess) {
        return (
            <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Đổi mật khẩu thành công!</h3>
                <p className="text-sm text-gray-500">Hệ thống sẽ chuyển về trang Tổng quan trong giây lát...</p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
                <span className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Lock size={20} />
                </span>
                <h2 className="text-xl font-bold text-gray-800">Đổi Mật Khẩu</h2>
            </div>
            
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                <div className="space-y-2">
                    <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
                        Mật khẩu hiện tại <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="currentPassword"
                        type="password"
                        disabled={isLoading}
                        placeholder="Nhập mật khẩu hiện tại"
                        className={`w-full px-4 py-2 border rounded-lg outline-none transition-all ${errors.currentPassword
                                ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                : "border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                            } ${isLoading ? "bg-gray-50 opacity-70" : ""}`}
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    {errors.currentPassword && (
                        <p className="text-xs text-red-500 font-medium mt-1">{errors.currentPassword}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                        Mật khẩu mới <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="newPassword"
                        type="password"
                        disabled={isLoading}
                        placeholder="Mật khẩu mới (tối thiểu 6 ký tự)"
                        className={`w-full px-4 py-2 border rounded-lg outline-none transition-all ${errors.newPassword
                                ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                : "border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                            } ${isLoading ? "bg-gray-50 opacity-70" : ""}`}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    {errors.newPassword && (
                        <p className="text-xs text-red-500 font-medium mt-1">{errors.newPassword}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                        Xác nhận mật khẩu mới <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="confirmPassword"
                        type="password"
                        disabled={isLoading}
                        placeholder="Nhập lại mật khẩu mới"
                        className={`w-full px-4 py-2 border rounded-lg outline-none transition-all ${errors.confirmPassword
                                ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                : "border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                            } ${isLoading ? "bg-gray-50 opacity-70" : ""}`}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {errors.confirmPassword && (
                        <p className="text-xs text-red-500 font-medium mt-1">{errors.confirmPassword}</p>
                    )}
                </div>

                <div className="pt-4 flex items-center justify-end gap-3 border-t border-gray-100">
                    <button
                        type="button"
                        onClick={() => router.push("/dashboard")}
                        disabled={isLoading}
                        className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
                    >
                        Hủy
                    </button>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="px-5 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Đang xử lý...
                            </>
                        ) : (
                            "Cập nhật mật khẩu"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
