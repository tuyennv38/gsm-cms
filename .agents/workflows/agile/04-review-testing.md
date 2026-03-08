# Bước 2.4 & 2.5: Code Review + Testing

> **Mục tiêu:** Đảm bảo chất lượng code qua review và testing, xử lý bug/feedback theo quy trình truy vết.

---

## Bước 2.4: Code Review & Xử lý Bug (Feedback Loop)

### Checklist review quan trọng:
- [ ] Code đúng yêu cầu trong task description?
- [ ] Có comment `@implements` truy vết về task/feature?
- [ ] Commit message tuân thủ Conventional Commits convention?
- [ ] Commit message có `Implements:` và `Refs:` trỏ đúng task/feature?
- [ ] Không có security vulnerabilities?
- [ ] Code clean, readable, không duplicate logic?
- [ ] Performance: Không có bottleneck rõ ràng?
- [ ] Không commit file thừa (dependencies, secrets, build output, v.v.)?

### Quy trình xử lý phản hồi (Unhappy Case):

> ⚠️ Nếu Code Review fail hoặc QA log bug (từ Bước 2.5):
> 1. Trạng thái task tự động quay về `🔄 In Progress`.
> 2. Dev nhận issue/bug và tiến hành fix trên branch tương ứng.
> 3. **BẮT BUỘC**: Tất cả commit thuộc về bản fix (sửa lỗi) sinh ra sau này vẫn phải gắn đủ `Implements: task:{id}` và `Refs: feature:{id}` để hệ thống Traceability có thể theo dõi biến động lỗi. Reviewer không được duyệt Pull Request nếu các fix commit bị thiếu format.

---

## Bước 2.5: Testing

> **Output:** `docs/test-plans/sprint-{N}-tests.md`

Với mỗi feature trong Sprint, tạo test cases:

1. **Unit Tests:**
   - Test từng module/class/function riêng lẻ.
   - ID: `test:{name}-{XXXX}` → `Implements: task:{name}-{XXXX}`

2. **Integration Tests:**
   - Test sự tương tác giữa các module/component.

3. **E2E / System Tests** (nếu áp dụng):
   - Test toàn bộ luồng người dùng hoặc luồng hệ thống.
   - Kiểm tra trên các môi trường/platform target (tuỳ loại dự án).

**Template Test Plan:**
```markdown
# Test Plan — Sprint {N}

| # | Test ID | Implements | Mô tả | Loại | Trạng thái |
|---|---------|------------|--------|------|------------|
| 1 | `test:{name}-{XXXX}` | `task:{name}-{XXXX}` | {Mô tả test} | Unit | ⬜ |
| 2 | `test:{name}-{XXXX}` | `feature:{name}-{XXXX}` | {Mô tả test} | E2E | ⬜ |
```
