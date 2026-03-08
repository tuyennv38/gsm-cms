# Product Requirements Document (PRD): Dashboard, Biểu đồ Doanh thu & Quản lý tài khoản

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

## 5. Profile & Đổi mật khẩu (Change Password)
`prd:user-profile-0005`
> Implements: `prd:dashboard-0003`

### 5.1 Menu Profile
`feature:profile-menu-0005`
> Implements: `prd:user-profile-0005`

- **Vị trí**: Trên thanh điều hướng (Navbar/Header) của Dashboard, góc phải.
- **Hiển thị**: Avatar hoặc icon user + tên người dùng (mock data).
- **Dropdown menu**: Khi bấm vào sẽ hiện dropdown với các mục:
  - **Thông tin tài khoản**: Hiển thị email, tên (thông tin giả lập).
  - **Đổi mật khẩu**: Điều hướng tới trang `/dashboard/change-password`.
  - **Đăng xuất**: Quay về trang `/login`.

### 5.2 Trang Đổi mật khẩu
`feature:change-password-0006`
> Implements: `prd:user-profile-0005`

- **Route**: `/dashboard/change-password`
- **Layout**: Sử dụng chung layout Dashboard (Sidebar/Navbar), nội dung chính là form đổi mật khẩu nằm trong một card.
- **Form bao gồm**:
  - **Mật khẩu hiện tại**: Input type password, bắt buộc.
  - **Mật khẩu mới**: Input type password, bắt buộc.
  - **Xác nhận mật khẩu mới**: Input type password, bắt buộc.
  - **Nút "Đổi mật khẩu"**: Submit form.
  - **Nút "Hủy"**: Quay lại trang Dashboard.
- **Validation**:
  - Mật khẩu hiện tại: Không được để trống (báo lỗi: "Vui lòng nhập mật khẩu hiện tại").
  - Mật khẩu mới: Không được để trống ("Vui lòng nhập mật khẩu mới"), tối thiểu 6 ký tự ("Mật khẩu mới phải có ít nhất 6 ký tự"), không được trùng mật khẩu hiện tại ("Mật khẩu mới không được trùng mật khẩu hiện tại").
  - Xác nhận mật khẩu: Phải khớp với mật khẩu mới ("Xác nhận mật khẩu không khớp").
- **Xử lý giả lập (Mock)**:
  - Mật khẩu hiện tại giả lập: `"123456"` (giống mật khẩu đăng nhập mock).
  - Nếu đúng: Hiển thị thông báo thành công ("Đổi mật khẩu thành công!") và chuyển về `/dashboard` sau 2 giây.
  - Nếu sai mật khẩu hiện tại: Báo lỗi "Mật khẩu hiện tại không đúng".
- **Ngôn ngữ hiển thị**: Tiếng Việt.

### 5.3 Trang Thông Tin Tài Khoản (Profile Page)
`feature:user-profile-page-0007`
> Implements: `prd:user-profile-0005`

- **Route**: `/dashboard/profile`
- **Layout**: Sử dụng chung layout Dashboard (Sidebar/Navbar).
- **Giao diện**:
  - Tiêu đề: "Thông tin tài khoản".
  - Hiển thị Avatar/Icon người dùng kích thước lớn.
  - Hiển thị các trường thông tin (giả lập):
    - Tên hiển thị: Admin User
    - Email: admin@example.com
    - Vai trò: Quản trị viên
    - Tình trạng: Đang hoạt động
  - Chức năng: Nút "Chỉnh sửa" (hiện tại bấm vào chỉ Alert: "Chức năng đang phát triển").
- **Tương tác**: Từ dropdown menu ở Header, bấm "Thông tin tài khoản" hệ thống sẽ chuyển hướng hoặc render route tới trang này.
---

## 6. Các bước triển khai tiếp theo (Tasks)

| # | Task ID | Implements | Bước | Trạng thái |
|---|----|------------|------|------------|
| 1 | `task:add-chart-lib-0005` | `prd:dashboard-tech-0004` | Cài đặt và cấu hình Recharts hoặc thư viện liên quan. | ⬜ Chưa làm |
| 2 | `task:setup-dashboard-layout-0006` | `feature:dashboard-navigation-0003` | Dựng khung layout cho Dashboard (Sidebar/Navbar). | ⬜ Chưa làm |
| 3 | `task:mock-revenue-data-0007` | `feature:revenue-chart-0004` | Viết logic sinh data doanh thu 7 ngày gần nhất. | ⬜ Chưa làm |
| 4 | `task:build-revenue-chart-0008` | `feature:revenue-chart-0004` | Tích hợp biểu đồ Line Chart vào trang `/dashboard`. | ⬜ Chưa làm |
| 5 | `task:handle-login-redirect-0009` | `feature:dashboard-navigation-0003` | Cập nhật logic Form Login để chuyển hướng sang Dashboard. | ⬜ Chưa làm |
| 6 | `task:build-profile-menu-0010` | `feature:profile-menu-0005` | Dựng UI dropdown Profile trên Navbar Dashboard (avatar, tên, menu). | ⬜ Chưa làm |
| 7 | `task:build-change-password-ui-0011` | `feature:change-password-0006` | Dựng layout trang đổi mật khẩu với form (mật khẩu cũ, mới, xác nhận). | ⬜ Chưa làm |
| 8 | `task:add-change-password-validation-0012` | `feature:change-password-0006` | Thêm validation form đổi mật khẩu và xử lý mock logic. | ⬜ Chưa làm |
| 9 | `task:build-profile-page-0013` | `feature:user-profile-page-0007` | Dựng UI hiển thị chi tiết thông tin Profile. | ⬜ Chưa làm |

---

## Phụ lục: Bảng tổng hợp ID & Truy vết

| ID | Loại | Implements | Mô tả ngắn |
|----|------|------------|-------------|
| [`prd:dashboard-0003`](#1-tổng-quan) | prd | [`prd:login-page-0001`](PRD.md) | Yêu cầu tổng quan về Dashboard |
| [`prd:dashboard-tech-0004`](#4-yêu-cầu-kỹ-thuật) | prd | [`prd:tech-stack-0002`](PRD.md) | Tech stack cho Dashboard (Recharts) |
| [`prd:user-profile-0005`](#5-profile--đổi-mật-khẩu-change-password) | prd | [`prd:dashboard-0003`](#1-tổng-quan) | Yêu cầu Profile & Đổi mật khẩu |
| [`feature:dashboard-navigation-0003`](#2-các-luồng-người-dùng-user-flows) | feature | [`prd:dashboard-0003`](#1-tổng-quan) | Luồng chuyển hướng và Menu chính |
| [`feature:revenue-chart-0004`](#3-biểu-đồ-doanh-thu-revenue-chart) | feature | [`prd:dashboard-0003`](#1-tổng-quan) | Biểu đồ đường doanh thu 7 ngày |
| [`feature:profile-menu-0005`](#51-menu-profile) | feature | [`prd:user-profile-0005`](#5-profile--đổi-mật-khẩu-change-password) | Dropdown menu Profile trên Navbar |
| [`feature:change-password-0006`](#52-trang-đổi-mật-khẩu) | feature | [`prd:user-profile-0005`](#5-profile--đổi-mật-khẩu-change-password) | Trang đổi mật khẩu với form và validation |
| [`task:add-chart-lib-0005`](#6-các-bước-triển-khai-tiếp-theo-tasks) | task | [`prd:dashboard-tech-0004`](#4-yêu-cầu-kỹ-thuật) | Cài thư viện biểu đồ |
| [`task:setup-dashboard-layout-0006`](#6-các-bước-triển-khai-tiếp-theo-tasks) | task | [`feature:dashboard-navigation-0003`](#2-các-luồng-người-dùng-user-flows) | Dựng UI khung Dashboard |
| [`task:mock-revenue-data-0007`](#6-các-bước-triển-khai-tiếp-theo-tasks) | task | [`feature:revenue-chart-0004`](#3-biểu-đồ-doanh-thu-revenue-chart) | Logic dữ liệu giả lập |
| [`task:build-revenue-chart-0008`](#6-các-bước-triển-khai-tiếp-theo-tasks) | task | [`feature:revenue-chart-0004`](#3-biểu-đồ-doanh-thu-revenue-chart) | Triển khai biểu đồ đường |
| [`task:handle-login-redirect-0009`](#6-các-bước-triển-khai-tiếp-theo-tasks) | task | [`feature:dashboard-navigation-0003`](#2-các-luồng-người-dùng-user-flows) | Logic redirect sau login |
| [`task:build-profile-menu-0010`](#6-các-bước-triển-khai-tiếp-theo-tasks) | task | [`feature:profile-menu-0005`](#51-menu-profile) | Dựng UI dropdown Profile |
| [`task:build-change-password-ui-0011`](#6-các-bước-triển-khai-tiếp-theo-tasks) | task | [`feature:change-password-0006`](#52-trang-đổi-mật-khẩu) | Dựng form đổi mật khẩu |
| [`task:add-change-password-validation-0012`](#6-các-bước-triển-khai-tiếp-theo-tasks) | task | [`feature:change-password-0006`](#52-trang-đổi-mật-khẩu) | Validation + mock logic đổi mật khẩu |
| [`feature:user-profile-page-0007`](#53-trang-thông-tin-tài-khoản-profile-page) | feature | [`prd:user-profile-0005`](#5-profile--đổi-mật-khẩu-change-password) | Trang hiển thị thông tin chi tiết tài khoản |
| [`task:build-profile-page-0013`](#6-các-bước-triển-khai-tiếp-theo-tasks) | task | [`feature:user-profile-page-0007`](#53-trang-thông-tin-tài-khoản-profile-page) | Dựng layout trang profile |
