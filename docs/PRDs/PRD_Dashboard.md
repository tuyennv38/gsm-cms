# Product Requirements Document (PRD): Dashboard & Biểu đồ Doanh thu (Sales Dashboard)

`prd:dashboard-0003`
> Implements: `prd:login-page-0001` (Tiếp nối sau đăng nhập)

---

## 1. Tổng quan
Hệ thống cần cung cấp một trang Dashboard sau khi người dùng đăng nhập thành công. Mục tiêu chính là hiển thị các chỉ số quản trị cơ bản, bắt đầu với biểu đồ doanh thu giả lập trong 7 ngày gần nhất để người dùng có cái nhìn tổng quan về tình hình kinh doanh.

---

## 2. Các Luồng Người dùng (User Flows)
`feature:dashboard-navigation-0003`
> Implements: `prd:dashboard-0003`

- **Sau khi đăng nhập**: Nếu thông tin email/mật khẩu đúng (giả lập), hệ thống chuyển hướng người dùng từ `/login` sang `/dashboard`.
- **Truy cập trực tiếp**: Nếu người dùng chưa đăng nhập, nên được chuyển hướng lại `/login` (Tạm thời bỏ qua bảo mật thực tế, coi như cho phép xem demo).
- **Thanh điều hướng**: Dashboard có Sidebar hoặc Navbar cơ bản chứa các menu "Tổng quan", "Báo cáo".

---

## 3. Biểu đồ Doanh thu (Revenue Chart)
`feature:revenue-chart-0004`
> Implements: `prd:dashboard-0003`

- **Dữ liệu giả lập**: Hệ thống tạo dữ liệu doanh thu cho 7 ngày gần đây (từ ngày hiện tại lùi lại).
- **Loại biểu đồ**: Biểu đồ đường (Line Chart).
- **Trục X (Ngang)**: Hiển thị ngày (vị dụ: 01/03, 02/03...).
- **Trục Y (Dọc)**: Hiển thị giá trị doanh thu (đơn vị: VNĐ hoặc Triệu VNĐ).
- **Thư viện đề xuất**: Recharts hoặc Chart.js (Sử dụng thư viện nhẹ, dễ tích hợp với Next.js).
- **Tương tác**: Có Tooltip hiển thị giá trị cụ thể khi di chuột vào điểm trên biểu đồ.

---

## 4. Yêu cầu kỹ thuật
`prd:dashboard-tech-0004`
> Implements: `prd:tech-stack-0002`

- **Framework**: Tiếp tục sử dụng Next.js (App Router).
- **Thư viện biểu đồ**: **Recharts** (Khuyên dùng vì tương thích tốt với React).
- **Mock Data Layer**: Một utility function đơn giản để sinh dữ liệu ngẫu nhiên cho 7 ngày.
- **Styling**: Tailwind CSS (Light mode), thiết kế sạch sẽ, chuyên nghiệp bằng các card UI.

---

## 5. Các bước triển khai tiếp theo (Tasks)

| # | Task ID | Implements | Bước | Trạng thái |
|---|----|------------|------|------------|
| 1 | `task:add-chart-lib-0005` | `prd:dashboard-tech-0004` | Cài đặt và cấu hình Recharts hoặc thư viện liên quan. | ⬜ Chưa làm |
| 2 | `task:setup-dashboard-layout-0006` | `feature:dashboard-navigation-0003` | Dựng khung layout cho Dashboard (Sidebar/Navbar). | ⬜ Chưa làm |
| 3 | `task:mock-revenue-data-0007` | `feature:revenue-chart-0004` | Viết logic sinh data doanh thu 7 ngày gần nhất. | ⬜ Chưa làm |
| 4 | `task:build-revenue-chart-0008` | `feature:revenue-chart-0004` | Tích hợp biểu đồ Line Chart vào trang `/dashboard`. | ⬜ Chưa làm |
| 5 | `task:handle-login-redirect-0009` | `feature:dashboard-navigation-0003` | Cập nhật logic Form Login để chuyển hướng sang Dashboard. | ⬜ Chưa làm |

---

## Phụ lục: Bảng tổng hợp ID & Truy vết

| ID | Loại | Implements | Mô tả ngắn |
|----|------|------------|-------------|
| `prd:dashboard-0003` | prd | `prd:login-page-0001` | Yêu cầu tổng quan về Dashboard |
| `prd:dashboard-tech-0004` | prd | `prd:tech-stack-0002` | Tech stack cho Dashboard (Recharts) |
| `feature:dashboard-navigation-0003` | feature | `prd:dashboard-0003` | Luồng chuyển hướng và Menu chính |
| `feature:revenue-chart-0004` | feature | `prd:dashboard-0003` | Biểu đồ đường doanh thu 7 ngày |
| `task:add-chart-lib-0005` | task | `prd:dashboard-tech-0004` | Cài thư viện biểu đồ |
| `task:setup-dashboard-layout-0006` | task | `feature:dashboard-navigation-0003` | Dựng UI khung Dashboard |
| `task:mock-revenue-data-0007` | task | `feature:revenue-chart-0004` | Logic dữ liệu giả lập |
| `task:build-revenue-chart-0008` | task | `feature:revenue-chart-0004` | Triển khai biểu đồ đường |
| `task:handle-login-redirect-0009` | task | `feature:dashboard-navigation-0003` | Logic redirect sau login |
