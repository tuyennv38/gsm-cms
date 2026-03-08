# Product Backlog
`backlog:product-0001`
> This document manages all proposed features for the project.

---

### PBI: Login Form UI
- **ID:** `feature:login-form-0001`
- **Implements:** `prd:login-page-0001`
- **User Story:** Với vai trò là người dùng, tôi muốn thấy form đăng nhập gồm email, mật khẩu và nút đăng nhập để tôi có thể bắt đầu quy trình xác thực.
- **Acceptance Criteria:**
  - [ ] AC1: Có trường nhập Email hiển thị nhãn tiếng Việt.
  - [ ] AC2: Có trường nhập Mật khẩu (ẩn ký tự) hiển thị nhãn tiếng Việt.
  - [ ] AC3: Có nút Đăng nhập hiển thị chữ tiếng Việt.
  - [ ] AC4: Giao diện mang phong cách sáng (Light mode).
  - [ ] AC5: Toàn bộ thành phần UI tuân theo thiết kế Tailwind CSS.
- **Priority:** Critical
- **Story Points:** 3
- **Status:** ✅ Done (Sprint 1)

### PBI: Form Validation
- **ID:** `feature:form-validation-0002`
- **Implements:** `prd:login-page-0001`
- **User Story:** Với vai trò là người dùng, tôi muốn thấy thông báo lỗi khi nhập sai thông tin để tôi biết cách sửa lại cho đúng.
- **Acceptance Criteria:**
  - [ ] AC1: Validate email không trống (lỗi: "Vui lòng nhập email").
  - [ ] AC2: Validate email đúng định dạng (lỗi: "Email không đúng định dạng").
  - [ ] AC3: Validate mật khẩu không trống (lỗi: "Vui lòng nhập mật khẩu").
  - [ ] AC4: Validate mật khẩu tối thiểu 6 ký tự (lỗi: "Mật khẩu phải có nhất 6 ký tự").
  - [ ] AC5: Thông báo lỗi màu đỏ ngay dưới ô nhập.
- **Priority:** High
- **Story Points:** 2
- **Status:** ✅ Done (Sprint 1)

### PBI: Dashboard Layout & Navigation
- **ID:** `feature:dashboard-navigation-0003`
- **Implements:** `prd:dashboard-0003`
- **User Story:** Với vai trò là người quản trị, tôi muốn thấy khung Dashboard sau khi đăng nhập để bắt đầu thao tác quản lý.
- **Acceptance Criteria:**
  - [ ] AC1: Logo dự án hiển thị ở góc trên.
  - [ ] AC2: Sidebar hoặc Navbar chứa menu "Tổng quan", "Báo cáo".
  - [ ] AC3: Chuyển hướng thành công từ `/login` sang `/dashboard` sau khi click Đăng nhập (Mockup).
- **Priority:** High
- **Story Points:** 3
- **Status:** 📋 Backlog

### PBI: Revenue Chart (7 Days)
- **ID:** `feature:revenue-chart-0004`
- **Implements:** `prd:dashboard-0003`
- **User Story:** Với vai trò là người quản trị, tôi muốn xem biểu đồ doanh thu 7 ngày qua để nắm được xu hướng bán hàng.
- **Acceptance Criteria:**
  - [ ] AC1: Có biểu đồ đường hiển thị giá trị doanh thu.
  - [ ] AC2: Hiển thị đúng 7 ngày (từ hiện tại lùi lại).
  - [ ] AC3: Có Tooltip khi hover vào các điểm trên biểu đồ.
  - [ ] AC4: Giao diện đồng bộ với phong cách Light mode.
- **Priority:** Medium
- **Story Points:** 5
- **Status:** 📋 Backlog

### PBI: Profile Menu
- **ID:** `feature:profile-menu-0005`
- **Implements:** `prd:user-profile-0005`
- **User Story:** Với vai trò là người dùng, tôi muốn bấm vào avatar trên navbar để mở menu chứa thông tin tài khoản, nút đổi mật khẩu và nút đăng xuất.
- **Acceptance Criteria:**
  - [ ] AC1: Có avatar hoặc icon + tên giả lập trên Navbar.
  - [ ] AC2: Click vào hiện dropdown.
  - [ ] AC3: Dropdown có hiển thị thông tin, nút Đổi mật khẩu và nút Đăng xuất.
- **Priority:** Medium
- **Story Points:** 2
- **Status:** ✅ Done (Sprint 3)

### PBI: Change Password Page
- **ID:** `feature:change-password-0006`
- **Implements:** `prd:user-profile-0005`
- **User Story:** Với vai trò là người dùng, tôi muốn xem trang form đổi mật khẩu và nhận được thông báo sau khi điền đúng thông tin giả lập.
- **Acceptance Criteria:**
  - [ ] AC1: Có form với 3 trường: mật khẩu hiện tại, mật khẩu mới, xác nhận mật khẩu mới.
  - [ ] AC2: Validate các trường không trống, mật khẩu mới >= 6 ký tự, xác nhận khớp.
  - [ ] AC3: Xử lý logic giả lập (mock): mật khẩu đúng là "123456", hiện thông báo thành công sau đó redirect về Dashboard.
- **Priority:** High
- **Story Points:** 3
- **Status:** ✅ Done (Sprint 3)
