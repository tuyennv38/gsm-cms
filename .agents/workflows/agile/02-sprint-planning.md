# Bước 2.1: Sprint Planning

> **Mục tiêu:** Lập kế hoạch Sprint, chọn PBI từ Product Backlog, phân tách thành task, và commit Sprint Plan.

---

## Quy trình

> **Input:** `docs/backlog/product-backlog.md`
> **Output:** `docs/sprints/sprint-{N}/sprint-plan.md`

1. Chọn các PBI từ Product Backlog theo thứ tự ưu tiên.
2. Phân tách mỗi PBI thành các **task** cụ thể (giữ nguyên task ID từ PRD nếu đã có, hoặc tạo mới).
3. Mỗi task phải đáp ứng tiêu chí **SMART**:
   - **S**pecific: Rõ ràng, cụ thể
   - **M**easurable: Có thể đo lường (Definition of Done)
   - **A**chievable: Có thể hoàn thành trong Sprint
   - **R**elevant: Liên quan đến Sprint Goal
   - **T**ime-bound: Ước lượng thời gian
4. Tạo file Sprint Plan:

**Template Sprint Plan:**
```markdown
# Sprint {N} Plan
`plan:sprint-{N}-{XXXX}`

## Sprint Goal
{Mục tiêu Sprint — 1-2 câu mô tả giá trị delivery}

## Sprint Duration
- **Start:** {YYYY-MM-DD}
- **End:** {YYYY-MM-DD}

## Sprint Backlog
| # | Task ID | Implements | Mô tả | Ước lượng | Status |
|---|---------|------------|--------|-----------|--------|
| 1 | `task:{name}-{XXXX}` | `feature:{name}-{XXXX}` | {Mô tả} | {giờ} | ⬜ To Do |
| 2 | `task:{name}-{XXXX}` | `feature:{name}-{XXXX}` | {Mô tả} | {giờ} | ⬜ To Do |

## Definition of Done (DoD)
- [ ] Code đã được viết và build thành công
- [ ] Unit tests pass
- [ ] Code review hoàn tất và không còn comment mở
- [ ] Đã được QA Verify (Pass Test và đóng tất cả bug liên quan)
- [ ] Tài liệu đã cập nhật (nếu cần)
- [ ] Demo thành công trên môi trường staging
```

---

## Commit Sprint Plan (BẮT BUỘC)

> ⚠️ **Sau khi tạo xong Sprint Plan, BẮT BUỘC commit ngay trước khi bắt đầu Implementation.** Điều này giúp lưu lại bản plan gốc để so sánh sau Sprint.

```bash
# Stage Sprint Plan
git add docs/sprints/sprint-{N}/

# Commit Sprint Plan
git commit -m "docs(sprint-{N}): add Sprint {N} Plan

- Sprint Goal: {mô tả ngắn}
- {số lượng} tasks planned

ID: commit:sprint-{N}-plan-{XXXX}
Refs: plan:sprint-{N}-{XXXX}"

# Push lên remote
git push origin <current-branch>
```
