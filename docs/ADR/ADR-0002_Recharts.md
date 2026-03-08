# ADR-0002: Thư viện biểu đồ (Chart Library)
`adr:recharts-0002`
> Implements: `prd:dashboard-tech-0004`

## Bối cảnh (Context)
Trang Dashboard cần hiển thị biểu đồ đường (Line Chart) để thể hiện dữ liệu doanh thu của 7 ngày gần nhất giả lập. Cần một dung lượng thư viện nhẹ, dễ dàng cấu hình, style tốt với React/Next.js.

## Quyết định (Decision)
Chọn thư viện **Recharts**.

## Hệ quả (Consequences)
- ✅ **Tác động tích cực:** Rất phổ biến, native React, sử dụng các component chuẩn của React để cấu trúc biểu đồ, dễ cài đặt và tương thích trơn tru với Next.js cũng như Tailwind CSS. Tài liệu đầy đủ, dễ custom.
- ⚠️ **Tác động tiêu cực / rủi ro:** Gói thư viện cài thêm sẽ làm tăng bundle size một chút (tuy nhiên với Recharts thì mức tăng này rất nhỏ và chấp nhận được cho Dashboard).

## Trạng thái
- [ ] Đề xuất (Proposed)
- [x] Được chấp thuận (Accepted)
- [ ] Bị thay thế (Superseded)
