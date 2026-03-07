# Sprint 1 Retrospective
`retro:sprint-1-0001`

## 🟢 Went Well (Điều tốt)
- Khởi tạo dự án Next.js 15 nhanh chóng và cấu hình tsconfig chuẩn để tránh lỗi build khi có các folder tài liệu/backup.
- Phân tách component hợp lý (LoginForm riêng biệt) giúp code dễ quản lý và mở rộng.
- Validation logic bao phủ được các trường hợp PRD yêu cầu với thông báo tiếng Việt chính xác.
- Quy trình Agile/Scrum được tuân thủ nghiêm ngặt từ PRD -> Task -> Commit.

## 🔴 Needs Improvement (Cần cải thiện)
- Lỗi tool subagent khi resize browser (WindowSize issues), cần cẩn trọng hơn khi dùng command trực tiếp trong môi trường Agent.
- Việc đồng bộ git cho các status md có thể làm tốn thêm một số commit nhỏ (atomic commits), cần nhóm hợp lý hơn.

## 💡 Action Items cho Sprint tiếp theo
| # | Action | Owner | Deadline |
|---|--------|-------|----------|
| 1 | Cài đặt thêm các công cụ Unit Test (Jest/React Testing Library) | Dev | Sprint 2 |
| 2 | Nâng cấp component icon (Lucide React) | Dev | Sprint 2 |
| 3 | Triển khai Dashboard layout và Authentication logic (với Mock JWT) | Dev | Sprint 2 |
