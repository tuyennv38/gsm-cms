# Giai đoạn 3: Release & Continuous Improvement

> **Mục tiêu:** Phát hành sản phẩm, merge code, và chuẩn bị cho Sprint tiếp theo.

---

## Bước 3.1: Pre-Release Checklist

> **Trước khi phát hành, kiểm tra:**

- [ ] Tất cả PBI trong scope đã ở trạng thái `✅ Done`
- [ ] Tất cả tests pass (unit, integration, E2E)
- [ ] Code review hoàn tất cho tất cả PR
- [ ] Tài liệu đã cập nhật (README, API docs nếu có)
- [ ] Build production thành công (không lỗi, không warning)
- [ ] Quality audit đạt tiêu chuẩn (tuỳ loại dự án: performance, security, accessibility, v.v.)
- [ ] Truy vết đầy đủ: mỗi `prd:*` → ít nhất 1 `feature:*` → ít nhất 1 `task:*` → code/commit

---

## Bước 3.2: Deployment

// turbo
1. Build production bundle (tuỳ tech stack):
   ```bash
   # Ví dụ — thay bằng lệnh build phù hợp:
   # Web:    npm run build / yarn build
   # .NET:   dotnet publish -c Release
   # Java:   mvn package / gradle build
   # Unity:  Unity Build Pipeline
   # Go:     go build -o ./bin/app
   ```
2. Deploy lên môi trường production (tuỳ platform):
   ```bash
   # Ví dụ — thay bằng lệnh/quy trình deploy phù hợp:
   # Vercel:     npx vercel --prod
   # Docker:     docker compose up -d
   # Azure:      az webapp deploy ...
   # AWS:        aws ecs update-service ...
   # Manual:     scp / rsync / FTP
   ```
3. Verify deployment thành công.

---

## Bước 3.3: Post-Release

1. Tag release trong Git:
   ```bash
   git tag -a v{X.Y.Z} -m "Release v{X.Y.Z}: {Sprint Goal}"
   ```
2. Cập nhật CHANGELOG.md (nếu có).
3. Cập nhật Product Backlog: đánh dấu các PBI đã release.

---

## Bước 3.4: Sprint Closing & Merge (Hợp nhất nhánh chính)

> **Khi kết thúc và hoàn thành một Sprint, DEV/Lead thực hiện merge toàn bộ code từ feature branch vào nhánh chính (main/master/develop — tuỳ Git workflow của dự án).**

1. Đảm bảo tất cả các task trong Sprint đã ở trạng thái `✅ Done`.

2. Chuyển sang nhánh chính:
   ```bash
   git checkout <main-branch>
   ```

3. Hợp nhất (Merge) các nhánh feature đã hoàn thành:
   ```bash
   git merge feature/task-{id}_{description}
   ```

4. Giải quyết xung đột (nếu có), chạy lại build/test để kiểm tra lần cuối.

5. Đẩy (Push) lên nhánh chính trên Remote:
   ```bash
   git push origin <main-branch>
   ```
