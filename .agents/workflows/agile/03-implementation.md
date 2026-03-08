# Bước 2.2 & 2.3: Implementation + Commit & Push

> **Mục tiêu:** Triển khai code cho mỗi task và commit theo convention. Hai bước này luôn đi cùng nhau — code xong task nào, commit task đó.

---

## Bước 2.2: Implementation (Coding)

> **Input:** Sprint Plan
> **Output:** Source code (chưa commit)

Với mỗi task trong Sprint Backlog, thực hiện theo trình tự:

1. **Cập nhật trạng thái task** trong Sprint Plan: `⬜ To Do` → `🔄 In Progress`

2. **Tạo branch** theo convention:
   ```
   feature/{task-id}_{short-description}
   ```
   Ví dụ: `feature/task-setup-project-0001_init-project`

3. **Viết code** triển khai task:
   - Thêm comment truy vết vào đầu file/class/module (cú pháp tuỳ ngôn ngữ):
     ```
     // @implements task:{name}-{XXXX}
     // @implements feature:{name}-{XXXX}
     ```
     > Tuỳ ngôn ngữ, sử dụng cú pháp comment phù hợp:
     > - JavaScript/TypeScript/Java/C#: `/** @implements ... */`
     > - Python: `# @implements ...`
     > - C#/XML Doc: `/// <implements>task:...</implements>`
     > - HTML: `<!-- @implements ... -->`
   - Tuân thủ coding standards của dự án (đã quy định ở System Design Document).
   - Đảm bảo code build thành công (không lỗi, không warning).

4. **Verify trước khi commit** (xem Bước 2.3):
   - Chạy lệnh build/check của dự án để đảm bảo không lỗi:
     > Tuỳ tech stack, ví dụ: `npm run build`, `dotnet build`, `mvn compile`, `flutter build`, `go build ./...`, v.v.
   - Kiểm tra nhanh kết quả (chạy app, chạy game, test API — tuỳ loại dự án).

> ⚠️ **Sau khi code xong mỗi task, BẮT BUỘC thực hiện Bước 2.3 (Commit & Push) trước khi chuyển sang task tiếp theo.**

---

## Bước 2.3: Commit & Push (BẮT BUỘC sau mỗi task)

> **Input:** Code đã hoàn thành từ Bước 2.2
> **Output:** Git commit + Push to remote
> ⚠️ **CRITICAL: Bước này KHÔNG ĐƯỢC BỎ QUA. Mỗi task hoàn thành PHẢI có ít nhất 1 commit tương ứng.**

### Pre-Commit Checklist:
- [ ] Code build thành công (không lỗi)
- [ ] Lint/static analysis pass (nếu có)
- [ ] Có comment `@implements` truy vết trong code
- [ ] Không commit file thừa (dependencies, secrets, build artifacts — đảm bảo `.gitignore` đúng)
- [ ] Các file thay đổi đúng scope của task (không lẫn code của task khác)

### Quy trình Commit:

**Bước 1: Stage files liên quan đến task**
```bash
git add <files-changed>
```
> Chỉ stage các file thuộc scope của task hiện tại. KHÔNG `git add .` nếu có file không liên quan.

**Bước 2: Commit với message theo Conventional Commits và Universal ID**
Mỗi commit message cần bao gồm mã định danh duy nhất cho chính nó (`commit:XXXX`) để có thể truy vấn sau này.
```
<type>(<scope>): <mô tả ngắn>

<body — mô tả chi tiết nếu cần>

ID: commit:<name>-<XXXX>
Implements: task:<name>-<XXXX>
Refs: feature:<name>-<XXXX>
```

**Quy tắc gán ID:**
- Sử dụng ID tiếp theo trong bộ đếm `commit` (ví dụ: `0001`, `0002`).
- Ghi rõ task ID mà commit này trực tiếp triển khai.

**Ví dụ commit hoàn chỉnh:**
```bash
git add <relevant-files>
git commit -m "feat(<scope>): <mô tả ngắn gọn>

- <Chi tiết thay đổi 1>
- <Chi tiết thay đổi 2>

ID: commit:<name>-<XXXX>
Implements: task:<name>-<XXXX>
Refs: feature:<name>-<XXXX>"
```

**Bước 3: Push lên remote**
```bash
git push origin feature/{task-id}_{short-description}
```

**Bước 4: Cập nhật trạng thái task** trong Sprint Plan:
- `🔄 In Progress` → `✅ Done`
- Ghi chú mã `commit:XXXX` vừa tạo vào cột "Ghi chú" của task để SM dễ theo dõi.

---

## Luồng hoàn chỉnh mỗi task (kể cả Unhappy Case):
```
⬜ To Do → 🔄 In Progress (Bước 2.2: Code) → 📦 Committed (Bước 2.3: Commit & Push) → 🔍 Review/Test (Bước 2.4 & 2.5)
  ↳ Nếu Pass: → ✅ Done
  ↳ Nếu Fail (Có Bug/Change Request): → 🔄 In Progress (Sửa lỗi & Commit tiếp)
```

> **Lưu ý 1:** Nếu task lớn, có thể chia thành nhiều commit nhỏ (atomic commits). Mỗi commit phải có ý nghĩa độc lập và build được.

> **Lưu ý 2 (Fix Commits):** Tất cả các commit sinh ra từ việc sửa lỗi sau khi Review/QA test BẮT BUỘC vẫn phải có đầy đủ `Implements: task...` và `Refs: feature...` giống commit gốc để không làm đứt gãy luồng truy vết.
