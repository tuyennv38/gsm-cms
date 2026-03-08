/**
 * @implements task:build-profile-menu-0010
 * @implements feature:profile-menu-0005
 */
"use client";

import React, { useState, useRef, useEffect } from "react";
import { UserCircle, LogOut, Key, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const handleLogout = () => {
        // Tạm thời giả lập logout
        router.push("/login");
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={menuRef}>
            <div 
                className="flex items-center gap-3 pl-6 border-l border-gray-200 group cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="text-right">
                    <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Admin User</p>
                    <p className="text-xs text-gray-500">Quản trị viên</p>
                </div>
                <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                    <UserCircle size={24} />
                </div>
            </div>

            {isOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-50 mb-1">
                        <p className="text-sm font-medium text-gray-900">Admin User</p>
                        <p className="text-xs text-gray-500 truncate">admin@example.com</p>
                    </div>

                    <div className="px-2">
                        <Link 
                            href="/dashboard/profile"
                            className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            <User size={16} />
                            Thông tin tài khoản
                        </Link>
                        
                        <Link 
                            href="/dashboard/change-password"
                            className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <Key size={16} />
                            Đổi mật khẩu
                        </Link>
                    </div>

                    <div className="border-t border-gray-50 mt-1 px-2 pt-1">
                        <button 
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                            <LogOut size={16} />
                            Đăng xuất
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
