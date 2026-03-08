# Product Requirements Document (PRD): Trang Đăng Nhập (Login Page)

> **Quy ước ID:** Xem chi tiết tại [docs/ID-CONVENTION.md](../ID-CONVENTION.md)

---

## 1. Tổng quan
`prd:login-page-0001`

Dự án yêu cầu xây dựng một trang đăng nhập cơ bản sử dụng framework Next.js. Trang đăng nhập này là một giao diện tĩnh (Mockup/UI Frontend) để hiển thị, không yêu cầu tích hợp logic xác thực với Backend.

---

## 2. Giao diện người dùng (UI)
`feature:login-form-0001`
> Implements: `prd:login-page-0001`

Trang đăng nhập sẽ bao gồm các thành phần cơ bản sau:
- **Trường nhập Email**: Cho phép người dùng nhập địa chỉ email.
- **Trường nhập Mật khẩu (Password)**: Cho phép người dùng nhập mật khẩu (cần ẩn ký tự).
- **Nút Đăng nhập (Submit Button)**: Nút để gửi thông tin xác thực lên server.
- **Lưu ý**: Bỏ qua các tính năng phụ như "Quên mật khẩu (Forgot Password)".

---

## 3. Yêu cầu kỹ thuật
`prd:tech-stack-0002`

- **Framework**: Next.js (Mới nhất).
- **Styling**: **Tailwind CSS** (Mới nhất, đi kèm khi khởi tạo dự án). Giao diện sẽ mang phong cách sáng (Light mode).
- **Loại ứng dụng**: Giao diện tĩnh (Frontend Mockup).
- **Ngôn ngữ hiển thị**: Tiếng Việt.
- **Quản lý Form**: Custom hoặc dùng React Hook Form kết hợp Zod/Yup (Nếu cần xử lý logic mạnh mẽ).

---

## 4. Validations (Kiểm tra dữ liệu)
`feature:form-validation-0002`
> Implements: `prd:login-page-0001`

Cần áp dụng các kiểm tra lỗi cơ bản cho form đăng nhập. Nếu người dùng nhập sai, thông báo lỗi màu đỏ sẽ xuất hiện ngay bên dưới ô nhập tương ứng. Các quy tắc như sau:

- **Trường Email**:
  - Không được để trống (báo lỗi: "Vui lòng nhập email").
  - Phải đúng định dạng email chuẩn, theo Regex phổ biến (báo lỗi: "Email không đúng định dạng").
- **Trường Mật khẩu**:
  - Không được để trống (báo lỗi: "Vui lòng nhập mật khẩu").
  - Phải có ít nhất 6 ký tự (báo lỗi: "Mật khẩu phải có ít nhất 6 ký tự").

---

## 5. Các bước triển khai tiếp theo

| # | ID | Implements | Bước | Trạng thái |
|---|----|------------|------|------------|
| 1 | [`task:setup-project-0001`](#5-các-bước-triển-khai-tiếp-theo) | [`prd:tech-stack-0002`](#3-yêu-cầu-kỹ-thuật) | Khởi tạo dự án Next.js + Tailwind CSS, dọn dẹp file cũ. | ⬜ Chưa làm |
| 2 | [`task:build-login-ui-0002`](#5-các-bước-triển-khai-tiếp-theo) | [`feature:login-form-0001`](#2-giao-diện-người-dùng-ui) | Dựng layout và form đăng nhập (input, button, error message). | ⬜ Chưa làm |
| 3 | [`task:add-validation-0003`](#5-các-bước-triển-khai-tiếp-theo) | [`feature:form-validation-0002`](#4-validations-kiểm-tra-dữ-liệu) | Thêm validation cho form và hiển thị lỗi tiếng Việt. | ⬜ Chưa làm |
| 4 | [`task:test-responsive-0004`](#5-các-bước-triển-khai-tiếp-theo) | [`feature:login-form-0001`](#2-giao-diện-người-dùng-ui) | Kiểm tra giao diện responsive trên các thiết bị. | ⬜ Chưa làm |

---

## Phụ lục: Bảng tổng hợp ID & Truy vết

| ID | Loại | Implements | Mô tả ngắn |
|----|------|------------|-------------|
| [`prd:login-page-0001`](#1-tổng-quan) | prd | — (gốc) | Yêu cầu gốc: xây trang đăng nhập |
| [`prd:tech-stack-0002`](#3-yêu-cầu-kỹ-thuật) | prd | — (gốc) | Yêu cầu kỹ thuật: Next.js + Tailwind CSS + Light mode |
| [`feature:login-form-0001`](#2-giao-diện-người-dùng-ui) | feature | [`prd:login-page-0001`](#1-tổng-quan) | Form đăng nhập (email, password, nút submit) |
| [`feature:form-validation-0002`](#4-validations-kiểm-tra-dữ-liệu) | feature | [`prd:login-page-0001`](#1-tổng-quan) | Validation form: kiểm tra dữ liệu + hiển thị lỗi tiếng Việt |
| [`task:setup-project-0001`](#5-các-bước-triển-khai-tiếp-theo) | task | [`prd:tech-stack-0002`](#3-yêu-cầu-kỹ-thuật) | Khởi tạo dự án + dọn file cũ |
| [`task:build-login-ui-0002`](#5-các-bước-triển-khai-tiếp-theo) | task | [`feature:login-form-0001`](#2-giao-diện-người-dùng-ui) | Dựng giao diện login |
| [`task:add-validation-0003`](#5-các-bước-triển-khai-tiếp-theo) | task | [`feature:form-validation-0002`](#4-validations-kiểm-tra-dữ-liệu) | Thêm validation form |
| [`task:test-responsive-0004`](#5-các-bước-triển-khai-tiếp-theo) | task | [`feature:login-form-0001`](#2-giao-diện-người-dùng-ui) | Kiểm tra responsive |
