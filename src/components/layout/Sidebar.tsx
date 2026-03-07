/**
 * @implements task:setup-dashboard-layout-0006
 * @implements feature:dashboard-navigation-0003
 */
"use client";

import React from "react";
import Link from "next/link";
import { LayoutDashboard, BarChart3, Settings, Users, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";

const menuItems = [
    { icon: LayoutDashboard, label: "Tổng quan", href: "/dashboard" },
    { icon: BarChart3, label: "Báo cáo", href: "/dashboard/reports" },
    { icon: Users, label: "Người dùng", href: "/dashboard/users" },
    { icon: Settings, label: "Cài đặt", href: "/dashboard/settings" },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-gray-900 text-white min-h-screen flex flex-col transition-all duration-300 ease-in-out border-r border-gray-800">
            <div className="p-6">
                <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                    <span className="bg-blue-600 p-1.5 rounded-lg">GSM</span>
                    <span>CMS</span>
                </h1>
            </div>

            <nav className="flex-1 mt-6 px-4">
                <ul className="space-y-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${isActive
                                            ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                                            : "text-gray-400 hover:text-white hover:bg-gray-800"
                                        }`}
                                >
                                    <item.icon size={20} />
                                    <span className="font-medium text-sm">{item.label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="p-4 border-t border-gray-800">
                <Link
                    href="/login"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-red-400 hover:bg-gray-800 transition-colors duration-200 w-full"
                >
                    <LogOut size={20} />
                    <span className="font-medium text-sm">Đăng xuất</span>
                </Link>
            </div>
        </aside>
    );
}
