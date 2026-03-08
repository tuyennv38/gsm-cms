# Bước 2.6 & 2.7: Sprint Review + Retrospective

> **Mục tiêu:** Demo kết quả Sprint, thu thập feedback, và rút kinh nghiệm để cải tiến liên tục.

---

## Bước 2.6: Sprint Review & Demo

> **Output:** Cập nhật `docs/sprints/sprint-{N}/sprint-review.md`

1. Demo các feature đã hoàn thành.
2. Thu thập feedback.
3. Cập nhật Product Backlog nếu có thay đổi yêu cầu.
4. Cập nhật trạng thái PBI:
   - `📋 Backlog` → `🔄 In Progress` → `✅ Done`

**Template Sprint Review:**
```markdown
# Sprint {N} Review

## Các item hoàn thành
| PBI ID | Mô tả | Demo Result |
|--------|--------|-------------|
| `feature:{name}-{XXXX}` | {Mô tả} | ✅ Accepted / ⚠️ Needs Revision |

## Feedback & Điều chỉnh
- {Feedback 1} → {Hành động}
- {Feedback 2} → {Hành động}

## Product Backlog Updates
- {Thay đổi nếu có}
```

---

## Bước 2.7: Sprint Retrospective

> **Output:** `docs/sprints/sprint-{N}/retrospective.md`

Đánh giá Sprint vừa qua để cải tiến liên tục:

```markdown
# Sprint {N} Retrospective

## 🟢 Went Well (Điều tốt)
- {Điều 1}
- {Điều 2}

## 🔴 Needs Improvement (Cần cải thiện)
- {Điều 1} → **Action:** {Hành động cải tiến}
- {Điều 2} → **Action:** {Hành động cải tiến}

## 💡 Action Items cho Sprint tiếp theo
| # | Action | Owner | Deadline |
|---|--------|-------|----------|
| 1 | {Hành động} | {Người thực hiện} | Sprint {N+1} |
```
