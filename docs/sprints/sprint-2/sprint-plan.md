# Sprint 2 Plan: Sales Dashboard Layout & Chart
`plan:sprint-2-0002`
> Mục tiêu: Triển khai Dashboard layout và biểu đồ doanh thu giả lập 7 ngày.

---

## 📅 Sprint Goal
Xây dựng khung Dashboard hoàn chỉnh, tích hợp thư viện Recharts để hiển thị biểu đồ doanh thu từ dữ liệu mock-up, hoàn thiện luồng chuyển hướng từ Login.

## 🕒 Sprint Duration
- **Start:** 2026-03-08
- **End:** 2026-03-15 (1 tuần)

## 📋 Sprint Backlog
| # | Task ID | Implements | Mô tả | Ước lượng | Status | Ghi chú |
|---|---------|------------|--------|-----------|--------|---------|
| 1 | `task:add-chart-lib-0005` | `prd:dashboard-tech-0004` | Cài đặt `recharts` và cấu hình thư viện. | 1h | ✅ Done | commit:dashboard-libs-0001 |
| 2 | `task:setup-dashboard-layout-0006` | `feature:dashboard-navigation-0003` | Dựng khung Layout (Sidebar/Header) cho Dashboard. | 4h | ✅ Done | commit:dashboard-ui-0001 |
| 3 | `task:mock-revenue-data-0007` | `feature:revenue-chart-0004` | Viết hàm sinh dữ liệu ngẫu nhiên 7 ngày cho biểu đồ. | 2h | ✅ Done | commit:dashboard-chart-0001 |
| 4 | `task:build-revenue-chart-0008` | `feature:revenue-chart-0004` | Tích hợp biểu đồ Line Chart vào Dashboard. | 3h | ✅ Done | commit:dashboard-chart-0001 |
| 5 | `task:handle-login-redirect-0009` | `feature:dashboard-navigation-0003` | Cập nhật logic `LoginForm` để redirect sau thành công. | 2h | ✅ Done | commit:login-redirect-0001 |

---

## ✅ Definition of Done (DoD)
- [ ] Biểu đồ Line Chart hiển thị đầy đủ data 7 ngày gần nhất.
- [ ] Hover vào đồ thị hiển thị Tooltip đúng ngày & giá trị.
- [ ] Layout Dashboard hiển thị ổn định trên desktop & mobile.
- [ ] Đăng nhập thành công chuyển hướng đúng về `/dashboard`.
- [ ] Toàn bộ commit tuân thủ `commit:XXXX` và gắn đủ ID Task.
