/**
 * @implements task:build-login-ui-0002
 * @implements feature:login-form-0001
 */
import React from "react";
import LoginForm from "@/components/forms/LoginForm";

export default function LoginPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
            <LoginForm />
        </main>
    );
}
