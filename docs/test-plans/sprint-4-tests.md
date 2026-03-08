# Test Plan — Sprint 4
`plan:test-sprint-4-0001`

| # | Test ID | Implements | Mô tả | Loại | Trạng thái |
|---|---------|------------|--------|------|------------|
| 1 | `test:profile-page-render-0001` | `task:build-profile-page-0013` | Đảm bảo trang Profile render tiêu đề và thông tin đúng từ mock (Admin User, admin@example.com). | Unit | ✅ Passed |
| 2 | `test:profile-page-edit-btn-0002` | `task:build-profile-page-0013` | Sự kiện click vào nút "Chỉnh sửa" sẽ gọi alert. | Unit | ✅ Passed |
| 3 | `test:profile-menu-navigation-0003` | `feature:user-profile-page-0007` | Nhấp vào "Thông tin tài khoản" từ dropdown menu điều hướng tới route /dashboard/profile. | E2E | ⬜ To Do |
