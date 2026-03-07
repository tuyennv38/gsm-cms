---
description: Quy trình phát triển phần mềm Agile/Scrum — Từ PRD đến sản phẩm hoàn chỉnh
---
# 🚀 Agile/Scrum Development Workflow
> **Mục tiêu:** Chuyển đổi tài liệu PRD trong `docs/PRDs/` thành sản phẩm cuối cùng theo quy trình Agile/Scrum tiêu chuẩn, đảm bảo **truy vết hai chiều** (bidirectional traceability) xuyên suốt.
---
## Tổng quan quy trình
```
PRD → Backlog Refinement → System Design (Architect) → Sprint Planning → Implementation → Code Review → Testing → Sprint Review → Retrospective → Release
```
Quy trình gồm **3 giai đoạn chính**:
1. **Giai đoạn 1: Chuẩn bị (Pre-Sprint)** — Phân tích PRD, tạo Product Backlog, **Thiết kế hệ thống (Architect)**
2. **Giai đoạn 2: Sprint Execution** — Lặp lại theo chu kỳ Sprint
3. **Giai đoạn 3: Release & Retrospective** — Phát hành và cải tiến liên tục
---
## Giai đoạn 1: Chuẩn bị (Pre-Sprint)
### Bước 1.1: Phân tích PRD & Tạo Product Backlog
> **Input:** `docs/PRDs/*.md`
> **Output:** `docs/backlog/product-backlog.md`
1. Đọc tất cả file PRD trong `docs/PRDs/`.
2. Trích xuất tất cả **feature** (các ID có prefix `feature:*`) từ PRD.
3. Với mỗi feature, tạo một **Product Backlog Item (PBI)** bao gồm:
   - ID (giữ nguyên Universal ID từ PRD)
   - Mô tả (User Story format: "Với vai trò là... tôi muốn... để...")
   - Tiêu chí chấp nhận (Acceptance Criteria)
   - Mức độ ưu tiên (Priority: Critical / High / Medium / Low)
   - Ước lượng Story Points (Fibonacci: 1, 2, 3, 5, 8, 13)
   - Tham chiếu ngược: `Implements: prd:*`
4. Lưu vào `docs/backlog/product-backlog.md`.
**Template Product Backlog Item:**
```markdown
### PBI: {Tên feature}
- **ID:** `feature:{name}-{XXXX}`
- **Implements:** `prd:{name}-{XXXX}`
- **User Story:** Với vai trò là [persona], tôi muốn [hành động] để [lợi ích].
- **Acceptance Criteria:**
  - [ ] AC1: {Tiêu chí 1}
  - [ ] AC2: {Tiêu chí 2}
- **Priority:** {Critical | High | Medium | Low}
- **Story Points:** {1 | 2 | 3 | 5 | 8 | 13}
- **Status:** 📋 Backlog
```
### Bước 1.2: Thiết lập cấu trúc thư mục dự án
> **Output:** Cấu trúc thư mục chuẩn
// turbo
Tạo cấu trúc thư mục theo mô hình dự án:
```
gsm-cms/
├── docs/
│   ├── PRDs/              # Tài liệu yêu cầu (đã có)
│   ├── ID-CONVENTION.md   # Quy ước ID (đã có)
│   ├── backlog/           # Product Backlog
│   ├── sprints/           # Sprint records
│   ├── architecture/      # System Design & Architecture documents
│   ├── ADR/               # Architecture Decision Records
│   └── test-plans/        # Test plans
├── src/                   # Source code
├── tests/                 # Test files
└── .agents/               # Agent skills & workflows
```
### Bước 1.3: Architecture Decision Records (ADR)
> **Output:** `docs/ADR/ADR-{NNN}_{tên-quyết-định}.md`
Trước khi bắt đầu code, ghi nhận các quyết định kiến trúc quan trọng:
1. Đọc `prd:tech-stack-*` từ PRD để xác định tech stack.
2. Tạo ADR cho mỗi quyết định kỹ thuật quan trọng, bao gồm:
   - **Bối cảnh (Context):** Tại sao cần quyết định này?
   - **Quyết định (Decision):** Chọn giải pháp gì?
   - **Hệ quả (Consequences):** Tác động tích cực/tiêu cực?
   - **ID:** `adr:{tên}-{XXXX}` → `Implements: prd:tech-stack-{XXXX}`
3. Lưu file theo format: `docs/ADR/ADR-{NNN}_{tên-quyết-định}.md`
**Template ADR:**
```markdown
# ADR-{NNN}: {Tiêu đề quyết định}
`adr:{tên}-{XXXX}`
> Implements: `prd:tech-stack-{XXXX}`
## Bối cảnh (Context)
{Tại sao phải đưa ra quyết định này?}
## Quyết định (Decision)
{Chọn giải pháp gì?}
## Hệ quả (Consequences)
- ✅ {Tác động tích cực}
- ⚠️ {Tác động tiêu cực / rủi ro}
## Trạng thái
- [x] Đề xuất (Proposed)
- [ ] Được chấp thuận (Accepted)
- [ ] Bị thay thế (Superseded by ADR-{NNN})
```
### Bước 1.4: System Architecture & Design (Vai trò Architect)
> **Input:** PRD (`docs/PRDs/*.md`), ADR (`docs/ADR/*.md`)
> **Output:** `docs/architecture/system-design.md`
> ⚠️ **Bước này rất quan trọng!** Architect chịu trách nhiệm thiết kế kiến trúc hệ thống TRƯỚC KHI dev bắt đầu code. Nếu bỏ qua bước này, dự án dễ gặp vấn đề về structure, scalability, và technical debt.
Architect thực hiện các công việc sau:
#### 1.4.1: Thiết kế kiến trúc tổng thể (High-Level Architecture)
- Xác định kiến trúc hệ thống (Monolith, Microservices, Serverless, JAMstack, v.v.).
- Vẽ **System Context Diagram** — hệ thống tương tác với các actor/hệ thống bên ngoài nào?
- Vẽ **Container Diagram** — các thành phần chính (Frontend, Backend, Database, 3rd-party services).
- ID: `research:arch-design-{XXXX}` → `Implements: prd:tech-stack-{XXXX}`
#### 1.4.2: Thiết kế Component (Component Design)
- Xác định **cấu trúc folder/module** trong source code:
  ```
  src/
  ├── app/              # Next.js App Router pages
  │   ├── login/        # Login page
  │   └── layout.tsx    # Root layout
  ├── components/       # Reusable UI components
  │   ├── ui/           # Atomic UI (Button, Input, etc.)
  │   └── forms/        # Composite form components
  ├── lib/              # Utilities, helpers
  ├── hooks/            # Custom React hooks
  ├── styles/           # Global styles, theme
  └── types/            # TypeScript type definitions
  ```
- Vẽ **Component Diagram** — quan hệ giữa các component (dùng Mermaid).
- Xác định **component interface** — props, state, events cho mỗi component chính.
#### 1.4.3: Data Flow & State Management
- Thiết kế **luồng dữ liệu (Data Flow)** — dữ liệu đi từ đâu đến đâu?
- Xác định chiến lược **state management** (React state, Context, Zustand, Redux, v.v.).
- Nếu có API: thiết kế **API contract** (endpoints, request/response schema).
- Nếu có database: thiết kế **data model / ERD**.
#### 1.4.4: Quy ước kỹ thuật (Technical Conventions)
- **Coding Standards:** naming conventions, file naming, import order.
- **Error Handling:** chiến lược xử lý lỗi thống nhất.
- **Responsive Strategy:** Mobile-first hay Desktop-first? Breakpoints nào?
- **Accessibility (a11y):** WCAG level nào? Semantic HTML, ARIA labels.
- **Performance Budget:** Target Lighthouse score, bundle size limits.
#### 1.4.5: Đánh giá rủi ro kỹ thuật (Technical Risk Assessment)
- Liệt kê các rủi ro kỹ thuật có thể gặp.
- Đánh giá mức độ ảnh hưởng (Impact) và xác suất (Likelihood).
- Đề xuất biện pháp giảm thiểu (Mitigation).
**Template System Design Document:**
```markdown
# System Design Document
`research:arch-design-{XXXX}`
> Implements: `prd:tech-stack-{XXXX}`
## 1. Tổng quan kiến trúc
{Mô tả kiến trúc tổng thể — diagram bằng Mermaid}
## 2. Component Design
### 2.1 Cấu trúc thư mục
{Folder structure}
### 2.2 Component Diagram
{Mermaid diagram}
### 2.3 Component Interface
| Component | Props | State | Events |
|-----------|-------|-------|--------|
| {Name} | {Props} | {State} | {Events} |
## 3. Data Flow
{Mô tả luồng dữ liệu — diagram bằng Mermaid}
## 4. Quy ước kỹ thuật
- **Coding Standards:** {Mô tả}
- **Error Handling:** {Mô tả}
- **Responsive:** {Strategy + Breakpoints}
- **a11y:** {WCAG level + quy tắc}
## 5. Rủi ro kỹ thuật
| # | Rủi ro | Impact | Likelihood | Mitigation |
|---|--------|--------|------------|------------|
| 1 | {Rủi ro} | {H/M/L} | {H/M/L} | {Biện pháp} |
## 6. Danh mục Technology Stack
| Layer | Technology | Version | Lý do chọn |
|-------|------------|---------|------------|
| Framework | {Tech} | {Ver} | {Lý do} |
| Styling | {Tech} | {Ver} | {Lý do} |
| Testing | {Tech} | {Ver} | {Lý do} |
```
> **Lưu ý:** System Design Document là tài liệu **sống (living document)**. Architect cập nhật mỗi khi có thay đổi kiến trúc lớn (và ghi nhận thay đổi qua ADR mới nếu cần).
---
## Giai đoạn 2: Sprint Execution (Lặp lại mỗi Sprint)
> **Chu kỳ Sprint khuyến nghị:** 1-2 tuần (tùy quy mô dự án)
> Mỗi Sprint tập trung hoàn thành một nhóm PBI từ Product Backlog.
### Bước 2.1: Sprint Planning
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
### Bước 2.2: Implementation (Coding)
> **Input:** Sprint Plan
> **Output:** Source code (chưa commit)
Với mỗi task trong Sprint Backlog, thực hiện theo trình tự:
1. **Cập nhật trạng thái task** trong Sprint Plan: `⬜ To Do` → `🔄 In Progress`
2. **Tạo branch** theo convention:
   ```
   feature/{task-id}_{short-description}
   ```
   Ví dụ: `feature/task-setup-project-0001_init-nextjs`
3. **Viết code** triển khai task:
   - Thêm comment truy vết vào đầu file/component:
     ```javascript
     /**
      * @implements task:build-login-ui-0002
      * @implements feature:login-form-0001
      */
     ```
   - Tuân thủ coding standards của dự án.
   - Đảm bảo code build thành công (không lỗi, không warning).
4. **Verify trước khi commit** (xem Bước 2.3):
   - Chạy `npm run build` hoặc `npm run lint` để đảm bảo không lỗi.
   - Kiểm tra nhanh trên trình duyệt (nếu là UI).
> ⚠️ **Sau khi code xong mỗi task, BẮT BUỘC thực hiện Bước 2.3 (Commit & Push) trước khi chuyển sang task tiếp theo.**
### Bước 2.3: Commit & Push (BẮT BUỘC sau mỗi task)
> **Input:** Code đã hoàn thành từ Bước 2.2
> **Output:** Git commit + Push to remote
> ⚠️ **CRITICAL: Bước này KHÔNG ĐƯỢC BỎ QUA. Mỗi task hoàn thành PHẢI có ít nhất 1 commit tương ứng.**
#### Pre-Commit Checklist:
- [ ] Code build thành công (`npm run build` không lỗi)
- [ ] Lint pass (`npm run lint` không warning/error)
- [ ] Có comment `@implements` truy vết trong code
- [ ] Không commit file thừa (node_modules, .env, build artifacts)
- [ ] Các file thay đổi đúng scope của task (không lẫn code của task khác)
#### Quy trình Commit:
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
git add src/app/login/page.tsx src/components/forms/LoginForm.tsx
git commit -m "feat(login): add login form UI with email and password fields
- Create LoginForm component with email and password inputs
- Add submit button with Vietnamese labels
- Implement responsive layout using Tailwind CSS
ID: commit:login-ui-0001
Implements: task:build-login-ui-0002
Refs: feature:login-form-0001"
```
**Bước 3: Push lên remote**
```bash
git push origin feature/{task-id}_{short-description}
```
**Bước 4: Cập nhật trạng thái task** trong Sprint Plan:
- `🔄 In Progress` → `✅ Done`
- Ghi chú mã `commit:XXXX` vừa tạo vào cột "Ghi chú" của task để SM dễ theo dõi.
#### Luồng hoàn chỉnh mỗi task (kể cả Unhappy Case):
```
⬜ To Do → 🔄 In Progress (Bước 2.2: Code) → 📦 Committed (Bước 2.3: Commit & Push) → 🔍 Review/Test (Bước 2.4 & 2.5)
  ↳ Nếu Pass: → ✅ Done
  ↳ Nếu Fail (Có Bug/Change Request): → 🔄 In Progress (Sửa lỗi & Commit tiếp)
```
> **Lưu ý 1:** Nếu task lớn, có thể chia thành nhiều commit nhỏ (atomic commits). Mỗi commit phải có ý nghĩa độc lập và build được.
> **Lưu ý 2 (Fix Commits):** Tất cả các commit sinh ra từ việc sửa lỗi sau khi Review/QA test BẮT BUỘC vẫn phải có đầy đủ `Implements: task...` và `Refs: feature...` giống commit gốc để không làm đứt gãy luồng truy vết.
### Bước 2.4: Code Review & Xử lý Bug (Feedback Loop)
> **Checklist review quan trọng:**
- [ ] Code đúng yêu cầu trong task description?
- [ ] Có comment `@implements` truy vết về task/feature?
- [ ] Commit message tuân thủ Conventional Commits convention?
- [ ] Commit message có `Implements:` và `Refs:` trỏ đúng task/feature?
- [ ] Không có security vulnerabilities?
- [ ] Code clean, readable, không duplicate logic?
- [ ] Performance: Không có bottleneck rõ ràng?
- [ ] Không commit file thừa (node_modules, .env, v.v.)?
> ⚠️ **Quy trình xử lý phản hồi (Unhappy Case):**
> Nếu Code Review fail hoặc QA log bug (từ Bước 2.5):
> 1. Trạng thái task tự động quay về `🔄 In Progress`.
> 2. Dev nhận issue/bug và tiến hành fix trên branch tương ứng.
> 3. **BẮT BUỘC**: Tất cả commit thuộc về bản fix (sửa lỗi) sinh ra sau này vẫn phải gắn đủ `Implements: task:{id}` và `Refs: feature:{id}` để hệ thống Traceability có thể theo dõi biến động lỗi. Reviewer không được duyệt Pull Request nếu các fix commit bị thiếu format.
### Bước 2.5: Testing
> **Output:** `docs/test-plans/sprint-{N}-tests.md`
Với mỗi feature trong Sprint, tạo test cases:
1. **Unit Tests:**
   - Test từng component/function riêng lẻ.
   - ID: `test:{name}-{XXXX}` → `Implements: task:{name}-{XXXX}`
2. **Integration Tests:**
   - Test sự tương tác giữa các component.
3. **UI/E2E Tests** (nếu áp dụng):
   - Test toàn bộ luồng người dùng.
   - Kiểm tra responsive trên các thiết bị.
**Template Test Plan:**
```markdown
# Test Plan — Sprint {N}
| # | Test ID | Implements | Mô tả | Loại | Trạng thái |
|---|---------|------------|--------|------|------------|
| 1 | `test:{name}-{XXXX}` | `task:{name}-{XXXX}` | {Mô tả test} | Unit | ⬜ |
| 2 | `test:{name}-{XXXX}` | `feature:{name}-{XXXX}` | {Mô tả test} | E2E | ⬜ |
```
### Bước 2.6: Sprint Review & Demo
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
### Bước 2.7: Sprint Retrospective
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
---
## Giai đoạn 3: Release & Continuous Improvement
### Bước 3.1: Pre-Release Checklist
> **Trước khi phát hành, kiểm tra:**
- [ ] Tất cả PBI trong scope đã ở trạng thái `✅ Done`
- [ ] Tất cả tests pass (unit, integration, E2E)
- [ ] Code review hoàn tất cho tất cả PR
- [ ] Tài liệu đã cập nhật (README, API docs nếu có)
- [ ] Build production thành công (không lỗi, không warning)
- [ ] Performance audit (Lighthouse score ≥ 90)
- [ ] Accessibility check (a11y)
- [ ] Security review (OWASP top 10)
- [ ] Truy vết đầy đủ: mỗi `prd:*` → ít nhất 1 `feature:*` → ít nhất 1 `task:*` → code/commit
### Bước 3.2: Deployment
// turbo
1. Build production bundle:
   ```bash
   npm run build
   ```
2. Deploy lên Vercel (hoặc platform khác):
   ```bash
   npx vercel --prod
   ```
3. Verify deployment thành công.
### Bước 3.3: Post-Release
1. Tag release trong Git:
   ```bash
   git tag -a v{X.Y.Z} -m "Release v{X.Y.Z}: {Sprint Goal}"
   ```
2. Cập nhật CHANGELOG.md (nếu có).
3. Cập nhật Product Backlog: đánh dấu các PBI đã release.

### Bước 3.4: Sprint Closing & Merge (Hợp nhất nhánh chính)
> **Khi kết thúc và hoàn thành một Sprint, DEV/Lead thực hiện merge toàn bộ code từ feature branch vào nhánh chính (master/main).**
1. Đảm bảo tất cả các task trong Sprint đã ở trạng thái `✅ Done`.
2. Chuyển sang nhánh chính:
   ```bash
   git checkout master
   ```
3. Hợp nhất (Merge) các nhánh feature đã hoàn thành:
   ```bash
   git merge feature/task-{id}_{description}
   ```
4. Giải quyết xung đột (nếu có), chạy lại `npm run build` để kiểm tra lần cuối.
5. Đẩy (Push) lên nhánh chính trên Remote:
   ```bash
   git push origin master
   ```

---
## Áp dụng cho PRD hiện tại: Login Page
Dựa trên `docs/PRDs/PRD.md` hiện có, đây là kế hoạch cụ thể:
### Sprint 1: Login Page MVP
**Sprint Goal:** Hoàn thành giao diện trang đăng nhập với validation cơ bản.
| Thứ tự | Task ID | Implements | Mô tả | Ước lượng |
|--------|---------|------------|--------|-----------|
| 1 | `task:setup-project-0001` | `prd:tech-stack-0002` | Khởi tạo dự án Next.js + Tailwind CSS | 2h |
| 2 | `task:build-login-ui-0002` | `feature:login-form-0001` | Dựng layout và form đăng nhập | 4h |
| 3 | `task:add-validation-0003` | `feature:form-validation-0002` | Thêm validation + hiển thị lỗi tiếng Việt | 3h |
| 4 | `task:test-responsive-0004` | `feature:login-form-0001` | Kiểm tra responsive các thiết bị | 2h |
**Trình tự thực hiện:**
1. Chạy lệnh `/sprint-planning` → Tạo Sprint Plan
2. Với mỗi task, chạy lệnh `/implement` → Coding
3. Sau mỗi task, chạy `/test` → Verify
4. Cuối Sprint, chạy `/sprint-review` → Demo & Review
---
## Mối liên kết giữa các tài liệu (Traceability Map)
```
docs/PRDs/PRD.md
  └─ prd:login-page-0001
       ├── feature:login-form-0001
       │     ├── task:build-login-ui-0002 → code:* → commit:*
       │     └── task:test-responsive-0004 → test:*
       └── feature:form-validation-0002
             └── task:add-validation-0003 → code:* → commit:*
  └─ prd:tech-stack-0002
       ├── research:arch-design-0001 (System Design Document)
       ├── adr:nextjs-tailwind-0001
       └── task:setup-project-0001 → code:* → commit:*
```
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
  git log --grep="task:build-login-ui-0002"
  ```
- **Tìm file code triển khai Feature:**
  ```bash
  grep -r "feature:login-form-0001" src/
  ```
- **Tra cứu nhanh ID trong commit message:**
  ```bash
  git log --oneline --grep="commit:login-ui-0001"
  ```
## Danh mục Workflows liên quan
| Workflow | Mô tả | Khi nào dùng |
|----------|--------|--------------|
| `/sprint-planning` | Tạo Sprint Plan từ Product Backlog | Đầu mỗi Sprint |
| `/system-design` | Thiết kế kiến trúc hệ thống (Architect) | Pre-Sprint, sau khi có PRD |
| `/implement` | Triển khai một task cụ thể | Trong Sprint |
| `/code-review` | Review code theo checklist | Sau khi code xong |
| `/test` | Tạo và chạy test plan | Sau code review |
| `/sprint-review` | Tạo Sprint Review report | Cuối Sprint |
| `/retrospective` | Tạo Sprint Retrospective | Cuối Sprint |
| `/release` | Thực hiện deployment | Khi Sprint hoàn tất |
