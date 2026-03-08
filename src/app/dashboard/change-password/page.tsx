/**
 * @implements task:build-change-password-ui-0011
 * @implements task:add-change-password-validation-0012
 * @implements feature:change-password-0006
 */
import React from 'react';
import ChangePasswordForm from '@/components/forms/ChangePasswordForm';

export default function ChangePasswordPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-2xl text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Quản Lý Tài Khoản</h1>
                <p className="text-gray-500">Cập nhật mật khẩu để bảo vệ tài khoản của bạn</p>
            </div>
            
            <ChangePasswordForm />
        </div>
    );
}
