# ADR-001: Lựa chọn Next.js và Tailwind CSS
`adr:nextjs-tailwind-0001`
> Implements: `prd:tech-stack-0002`

## Bối cảnh (Context)
Dự án yêu cầu xây dựng giao diện đăng nhập (Login Page) nhanh chóng, hiệu quả và có phong cách hiện đại (Light mode). Chúng ta cần một Framework hỗ trợ tốt cho phát triển Frontend Mockup và dễ dàng mở rộng sau này.

## Quyết định (Decision)
Chúng ta sẽ sử dụng bộ đôi công nghệ:
1.  **Next.js (App Router):** Tận dụng tính năng server components và cơ chế routing mạnh mẽ của Framework React hiện đại nhất.
2.  **Tailwind CSS:** Để xây dựng giao diện tùy biến, responsive nhanh mà không cần viết CSS thuần phức tạp.

## Hệ quả (Consequences)
- ✅ Phát triển UI cực nhanh nhờ Tailwind utility classes.
- ✅ Cấu trúc dự án rõ ràng, chuẩn hóa theo Next.js App Router.
- ✅ Hỗ trợ SEO tốt (mặc dù hiện tại chỉ làm mockup).
- ⚠️ Cần làm quen với mô hình App Router (nếu chuyển từ Pages Router).

## Trạng thái
- [x] Đề xuất (Proposed)
- [x] Được chấp thuận (Accepted) bởi Scrum Master (USER)
- [ ] Bị thay thế
