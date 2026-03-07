/**
 * @implements task:setup-dashboard-layout-0006
 * @implements feature:dashboard-navigation-0003
 */
"use client";

import React from "react";
import { Bell, Search, UserCircle } from "lucide-react";

export default function DashboardHeader() {
    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10 shadow-sm">
            <div className="flex items-center gap-4 flex-1">
                <div className="relative w-full max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        className="w-full bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white rounded-lg pl-10 pr-4 py-2 outline-none transition-all text-sm"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <button className="relative text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-gray-50">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <div className="flex items-center gap-3 pl-6 border-l border-gray-200 group cursor-pointer">
                    <div className="text-right">
                        <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Admin User</p>
                        <p className="text-xs text-gray-500">Quản trị viên</p>
                    </div>
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                        <UserCircle size={24} />
                    </div>
                </div>
            </div>
        </header>
    );
}
