# Product Backlog — GSM CMS

> **Traceability:** Mọi PBI đều được trích xuất từ [PRD.md](../PRDs/PRD.md) và gán mã định danh duy nhất.

---

### PBI: Form Đăng nhập (Login Form UI)
- **ID:** `feature:login-form-0001`
- **Implements:** `prd:login-page-0001`
- **User Story:** Với vai trò là người dùng, tôi muốn thấy giao diện form đăng nhập gồm email và password để có thể nhập thông tin xác thực.
- **Acceptance Criteria:**
  - [ ] AC1: Có trường nhập Email với placeholder phù hợp.
  - [ ] AC2: Có trường nhập Mật khẩu ẩn ký tự (type="password").
  - [ ] AC3: Có nút "Đăng nhập" để gửi form.
  - [ ] AC4: Giao diện mang phong cách sáng (Light mode) chuẩn Tailwind CSS.
  - [ ] AC5: Responsive hoàn hảo trên Mobile, Tablet và Desktop.
- **Priority:** 🔴 Critical
- **Story Points:** 3
- **Status:** 📋 Backlog

### PBI: Kiểm tra dữ liệu Form (Form Validation)
- **ID:** `feature:form-validation-0002`
- **Implements:** `prd:login-page-0001`
- **User Story:** Với vai trò là người dùng, tôi muốn nhận được thông báo lỗi tiếng Việt khi nhập sai định dạng để có thể sửa lại thông tin chính xác.
- **Acceptance Criteria:**
  - [ ] AC1: Email không được để trống ("Vui lòng nhập email").
  - [ ] AC2: Email phải đúng định dạng chuẩn ("Email không đúng định dạng").
  - [ ] AC3: Mật khẩu không được để trống ("Vui lòng nhập mật khẩu").
  - [ ] AC4: Mật khẩu phải có ít nhất 6 ký tự ("Mật khẩu phải có ít nhất 6 ký tự").
  - [ ] AC5: Thông báo lỗi xuất hiện ngay dưới trường nhập liệu với màu đỏ.
- **Priority:** 🔴 Critical
- **Story Points:** 2
- **Status:** 📋 Backlog

---

## Phụ lục: Bảng tổng hợp PBI

| ID | Implements | Tên PBI | Priority | Points | Status |
|----|------------|---------|----------|--------|--------|
| `feature:login-form-0001` | `prd:login-page-0001` | Login Form UI | 🔴 Critical | 3 | 📋 Backlog |
| `feature:form-validation-0002` | `prd:login-page-0001` | Form Validation | 🔴 Critical | 2 | 📋 Backlog |
