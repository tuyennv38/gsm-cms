/**
 * @implements task:setup-dashboard-layout-0006
 */
import React from "react";

export default function DashboardPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Tổng Quan</h2>
                <p className="text-gray-500 mt-1">Chào mừng bạn trở lại với hệ thống quản trị GSM CMS.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Placeholder cards for metrics */}
                {[
                    { label: "Doanh thu ngày", value: "2.400.000đ", change: "+12.5%", color: "text-blue-600" },
                    { label: "Đơn hàng mới", value: "145", change: "+8.2%", color: "text-green-600" },
                    { label: "Người dùng", value: "1,240", change: "+3.1%", color: "text-purple-600" },
                    { label: "Tỷ lệ chuyển đổi", value: "2.4%", change: "-0.5%", color: "text-red-600" },
                ].map((card, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{card.label}</p>
                        <div className="flex items-baseline justify-between mt-4">
                            <h3 className="text-2xl font-bold text-gray-900">{card.value}</h3>
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-gray-50 ${card.color}`}>
                                {card.change}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-h-[400px] flex flex-col">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Biểu đồ Doanh thu (7 ngày gần nhất)</h3>
                    <div className="flex-1 bg-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-200">
                        <div className="text-center">
                            <p className="text-gray-400 font-medium">Bản đồ doanh thu sẽ hiển thị ở đây</p>
                            <p className="text-xs text-gray-400 mt-1 italic">(Sử dụng Recharts trong Task tiếp theo)</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Hoạt động gần đây</h3>
                    <ul className="space-y-6">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <li key={i} className="flex gap-4 border-l-2 border-blue-100 pl-4 relative">
                                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-blue-600"></div>
                                <div>
                                    <p className="text-sm font-medium text-gray-800">Đơn hàng mới #1234{i}</p>
                                    <p className="text-xs text-gray-500 mt-0.5">2 phút trước</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
