"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

/**
 * Schema validation tiếng Việt theo PRD 4. Validations
 * @implements feature:form-validation-0002
 */
const loginSchema = z.object({
    email: z
        .string()
        .min(1, "Vui lòng nhập email")
        .email("Email không đúng định dạng"),
    password: z
        .string()
        .min(1, "Vui lòng nhập mật khẩu")
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

/**
 * @implements task:build-login-ui-0002
 * @implements task:add-validation-0003
 * @implements feature:login-form-0001
 * @implements feature:form-validation-0002
 */
const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: LoginFormValues) => {
        setIsLoading(true);
        setSuccessMsg("");

        // Giả lập xử lý đăng nhập (Mockup)
        console.log("Dữ liệu đăng nhập:", data);

        setTimeout(() => {
            setIsLoading(false);
            setSuccessMsg("Đăng nhập thành công! (Mô phỏng)");
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {successMsg && (
                <div className="p-3 text-sm font-medium text-green-600 bg-green-50 rounded-xl border border-green-200 animate-in fade-in slide-in-from-top-2">
                    {successMsg}
                </div>
            )}

            <Input
                id="email"
                label="Địa chỉ Email"
                type="email"
                placeholder="ten@vi-du.com"
                autoComplete="email"
                error={errors.email?.message}
                {...register("email")}
            />

            <Input
                id="password"
                label="Mật khẩu"
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
                error={errors.password?.message}
                {...register("password")}
            />

            <div className="pt-2">
                <Button type="submit" isLoading={isLoading}>
                    Đăng nhập ngay
                </Button>
            </div>

            <p className="text-center text-xs text-slate-500">
                Bằng cách đăng nhập, bạn đã đồng ý với các{" "}
                <span className="text-blue-600 hover:underline cursor-pointer">Điều khoản dịch vụ</span>.
            </p>
        </form>
    );
};

export default LoginForm;
