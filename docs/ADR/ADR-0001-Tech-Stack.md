# ADR-0001: Next.js + Tailwind CSS for Frontend

`adr:tech-stack-0001`
> Implements: `prd:tech-stack-0002`

## Bối cảnh (Context)
Cần xây dựng một trang đăng nhập tĩnh (Mockup) bằng framework hiện đại, có hiệu năng tốt và tiết kiệm thời gian Styling.

## Quyết định (Decision)
Chọn sử dụng:
- **Framework**: Next.js (Mới nhất) vì tính năng App Router tối ưu, dễ cấu hình UI.
- **Styling**: Tailwind CSS (Mới nhất) tích hợp mặc định trong Next.js, giúp triển khai giao diện nhanh chóng, mang phong cách sáng (Light mode).

## Hệ quả (Consequences)
- ✅ Tiết kiệm thời gian cấu hình Webpack/Babel.
- ✅ Tối ưu hiệu năng render của React server components.
- ✅ Thư viện Utility-first styling của Tailwind giúp code gọn gàng, dễ bảo trì.
- ⚠️ Cần làm quen với App Router của Next.js (đối với dev chưa thạo).

## Trạng thái
- [x] Đề xuất (Proposed)
- [x] Được chấp thuận (Accepted)
- [ ] Bị thay thế (Superseded by ADR-{NNN})
