/**
 * @implements feature:user-profile-page-0007
 * @implements task:build-profile-page-0013
 */
"use client";

import React from "react";
import { UserCircle, Mail, Shield, Activity, Edit2 } from "lucide-react";
import { mockUser } from "@/lib/mock-data";

export default function ProfilePage() {
    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Thông tin tài khoản</h1>
                    <p className="text-sm text-gray-500 mt-1">Quản lý và cập nhật thông tin cá nhân của bạn</p>
                </div>
                
                <button 
                    onClick={() => alert("Chức năng đang phát triển")}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm shadow-sm"
                >
                    <Edit2 size={16} />
                    Chỉnh sửa
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8 border-b border-gray-100 flex flex-col items-center sm:flex-row gap-6">
                    <div className="bg-blue-50 text-blue-600 p-4 rounded-full">
                        <UserCircle size={80} strokeWidth={1.5} />
                    </div>
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl font-bold text-gray-900">{mockUser.name}</h2>
                        <p className="text-gray-500 mt-1">{mockUser.role}</p>
                        <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium border border-green-200">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            {mockUser.status}
                        </div>
                    </div>
                </div>

                <div className="p-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Chi tiết liên hệ</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-2">
                                    <UserCircle size={16} />
                                    Tên hiển thị
                                </label>
                                <p className="text-gray-900 font-medium">{mockUser.name}</p>
                            </div>
                            
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-2">
                                    <Mail size={16} />
                                    Địa chỉ Email
                                </label>
                                <p className="text-gray-900 font-medium">{mockUser.email}</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-2">
                                    <Shield size={16} />
                                    Phân quyền
                                </label>
                                <p className="text-gray-900 font-medium">{mockUser.role}</p>
                            </div>
                            
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-2">
                                    <Activity size={16} />
                                    Trạng thái
                                </label>
                                <p className="text-gray-900 font-medium">{mockUser.status}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
