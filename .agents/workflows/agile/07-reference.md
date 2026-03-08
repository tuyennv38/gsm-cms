# Tài liệu tham khảo: Quy tắc, Vai trò & Truy vết

> **Mục tiêu:** Tài liệu tham khảo nhanh cho các quy tắc quan trọng, vai trò trong quy trình, và cách truy vấn traceability.

---

## Quy tắc quan trọng

> [!IMPORTANT]
> 1. **Mọi task/code/commit PHẢI có tham chiếu ngược (`Implements:`)** về feature hoặc PRD gốc.
> 2. **ID không bao giờ thay đổi** — một khi gán, là vĩnh viễn (xem `docs/ID-CONVENTION.md`).
> 3. **Sprint Goal phải tập trung** — không làm quá nhiều thứ trong 1 Sprint.
> 4. **Definition of Done phải nghiêm ngặt** — chỉ chuyển Done khi đạt TẤT CẢ tiêu chí.
> 5. **Tài liệu đi cùng code** — cập nhật docs mỗi khi code thay đổi.

---

## Vai trò trong quy trình

| Vai trò | Trách nhiệm chính | Bước liên quan |
|---------|-------------------|----------------|
| **Product Owner** | Quản lý PRD, ưu tiên backlog, chấp nhận feature | 1.1, 2.6 |
| **Architect** | Thiết kế hệ thống, quyết định tech, review kiến trúc | 1.3, 1.4, 2.4 |
| **Developer** | Triển khai code, viết unit test, commit theo convention | 2.2, 2.3, 2.4, 2.5 |
| **QA/Tester** | Thiết kế test plan, chạy test, báo cáo bug | 2.5 |
| **Scrum Master (USER)** | **Bạn là người điều phối quy trình, tổ chức ceremonies, gỡ blocker** | **2.1, 2.6, 2.7** |

---

## Truy vấn Traceability (Ghi chú cho SM/Architect)

Để truy xuất lịch sử thay đổi theo ID, bạn (Scrum Master) có thể sử dụng các lệnh sau:

- **Tìm tất cả commit cho một Task:**
  ```bash
  git log --grep="task:{name}-{XXXX}"
  ```

- **Tìm file code triển khai Feature:**
  ```bash
  grep -r "feature:{name}-{XXXX}" <source-code-dir>/
  ```

- **Tra cứu nhanh ID trong commit message:**
  ```bash
  git log --oneline --grep="commit:{name}-{XXXX}"
  ```

---

## Mối liên kết giữa các tài liệu (Traceability Map)

```
docs/PRDs/{PRD-file}.md
  └─ prd:{requirement}-{XXXX}
       ├── feature:{feature-name}-{XXXX}
       │     ├── task:{task-name}-{XXXX} → code:* → commit:*
       │     └── task:{task-name}-{XXXX} → test:*
       └── feature:{feature-name}-{XXXX}
             └── task:{task-name}-{XXXX} → code:* → commit:*
  └─ prd:tech-stack-{XXXX}
       ├── research:arch-design-{XXXX} (System Design Document)
       ├── adr:{decision-name}-{XXXX}
       └── task:{setup-task}-{XXXX} → code:* → commit:*
```
