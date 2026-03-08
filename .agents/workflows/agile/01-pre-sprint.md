# Giai đoạn 1: Chuẩn bị (Pre-Sprint)

> **Mục tiêu:** Phân tích PRD, tạo Product Backlog, thiết kế kiến trúc hệ thống, và commit toàn bộ tài liệu trước khi bắt đầu Sprint.

---

## Bước 1.1: Phân tích PRD & Tạo Product Backlog

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

---

## Bước 1.2: Thiết lập cấu trúc thư mục dự án

> **Output:** Cấu trúc thư mục chuẩn

// turbo

> ⚠️ **CRITICAL: KHÔNG ĐƯỢC XOÁ các file/thư mục đã có sẵn trong `docs/` và `.agents/`.** Các thư mục này có thể đã chứa PRD, ADR, architecture docs, sprint records, workflows, skills, v.v. từ trước. Khi khởi tạo dự án hoặc thiết lập cấu trúc, chỉ **tạo thêm** các thư mục con còn thiếu, **TUYỆT ĐỐI không xoá, ghi đè, hay di chuyển** các file hiện có.

Tạo cấu trúc thư mục tài liệu dự án. Phần `docs/` là cố định, phần source code tuỳ theo tech stack:
```
{project-root}/
├── docs/                  # Tài liệu dự án (cố định cho mọi project)
│   ├── PRDs/              # Tài liệu yêu cầu sản phẩm
│   ├── ID-CONVENTION.md   # Quy ước Universal ID
│   ├── backlog/           # Product Backlog
│   ├── sprints/           # Sprint records
│   ├── architecture/      # System Design & Architecture documents
│   ├── ADR/               # Architecture Decision Records
│   └── test-plans/        # Test plans
├── {source-code}/         # Source code (tùy tech stack: src/, Assets/, app/, lib/...)
├── {test-code}/           # Test files (tùy tech stack: tests/, __tests__/, Tests/...)
└── .agents/               # Agent skills & workflows
```
> **Lưu ý:** Cấu trúc source code bên trong (`{source-code}/`) phụ thuộc hoàn toàn vào tech stack và kiến trúc đã chọn. Architect sẽ thiết kế chi tiết ở Bước 1.4.

---

## Bước 1.3: Architecture Decision Records (ADR)

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

---

## Bước 1.4: System Architecture & Design (Vai trò Architect)

> **Input:** PRD (`docs/PRDs/*.md`), ADR (`docs/ADR/*.md`)
> **Output:** `docs/architecture/system-design.md`
> ⚠️ **Bước này rất quan trọng!** Architect chịu trách nhiệm thiết kế kiến trúc hệ thống TRƯỚC KHI dev bắt đầu code. Nếu bỏ qua bước này, dự án dễ gặp vấn đề về structure, scalability, và technical debt.

Architect thực hiện các công việc sau:

### 1.4.1: Thiết kế kiến trúc tổng thể (High-Level Architecture)
- Xác định kiến trúc hệ thống phù hợp với loại dự án:
  - **Web:** Monolith, Microservices, Serverless, JAMstack, MVC, v.v.
  - **Mobile:** MVVM, Clean Architecture, BLoC, v.v.
  - **Game:** ECS (Entity-Component-System), Component-Based, v.v.
  - **Backend:** Layered, Hexagonal, CQRS, Event-Driven, v.v.
- Vẽ **System Context Diagram** — hệ thống tương tác với các actor/hệ thống bên ngoài nào?
- Vẽ **Container Diagram** — các thành phần chính (Frontend, Backend, Database, 3rd-party services).
- ID: `research:arch-design-{XXXX}` → `Implements: prd:tech-stack-{XXXX}`

### 1.4.2: Thiết kế Module/Component (Component Design)
- Xác định **cấu trúc folder/module** trong source code, tuỳ thuộc vào tech stack đã chọn trong ADR.
  > **Lưu ý:** Cấu trúc folder hoàn toàn phụ thuộc vào tech stack và convention của project. Architect cần thiết kế cấu trúc phù hợp với kiến trúc đã chọn ở 1.4.1. Ví dụ:
  > - Web React/Next.js: `src/app/`, `src/components/`, `src/lib/`...
  > - C#/.NET: `Controllers/`, `Services/`, `Models/`, `Data/`...
  > - Java/Spring: `controller/`, `service/`, `repository/`, `dto/`...
  > - Unity: `Assets/Scripts/`, `Assets/Prefabs/`, `Assets/Scenes/`...
  > - Flutter: `lib/screens/`, `lib/widgets/`, `lib/models/`...
- Vẽ **Component/Module Diagram** — quan hệ giữa các module (dùng Mermaid).
- Xác định **interface/contract** — public API, method signatures, data contracts cho mỗi module chính.

### 1.4.3: Data Flow & State Management
- Thiết kế **luồng dữ liệu (Data Flow)** — dữ liệu đi từ đâu đến đâu?
- Xác định chiến lược **state management** phù hợp với tech stack:
  - Web: React state, Context, Zustand, Redux, NgRx, Vuex, v.v.
  - Mobile: Provider, BLoC, GetX, ViewModel, v.v.
  - Game: ScriptableObject, Singleton Manager, Event Bus, v.v.
  - Backend: Repository pattern, Unit of Work, CQRS, v.v.
- Nếu có API: thiết kế **API contract** (endpoints, request/response schema).
- Nếu có database: thiết kế **data model / ERD**.

### 1.4.4: Quy ước kỹ thuật (Technical Conventions)
- **Coding Standards:** naming conventions, file naming, import/using order (theo convention của ngôn ngữ/framework).
- **Error Handling:** chiến lược xử lý lỗi thống nhất.
- **Các quy ước đặc thù** theo loại dự án:
  - *Web:* Responsive Strategy (Mobile/Desktop-first, breakpoints), Accessibility (WCAG level), Performance Budget.
  - *Mobile:* Screen size support, Platform-specific guidelines (Material Design, HIG).
  - *Game:* Target FPS, Platform targets, Asset pipeline.
  - *Backend:* API versioning, Logging strategy, Security standards.

### 1.4.5: Đánh giá rủi ro kỹ thuật (Technical Risk Assessment)
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

## 2. Module/Component Design
### 2.1 Cấu trúc thư mục source code
{Folder structure — tuỳ tech stack}

### 2.2 Module/Component Diagram
{Mermaid diagram}

### 2.3 Interface/Contract
| Module/Component | Public API / Interface | Dependencies |
|------------------|----------------------|--------------|
| {Name} | {Methods / Props / Endpoints} | {Depends on} |

## 3. Data Flow
{Mô tả luồng dữ liệu — diagram bằng Mermaid}

## 4. Quy ước kỹ thuật
- **Coding Standards:** {Mô tả — tuỳ ngôn ngữ/framework}
- **Error Handling:** {Mô tả}
- **Quy ước đặc thù:** {Responsive / Platform / Performance — tuỳ loại dự án}

## 5. Rủi ro kỹ thuật
| # | Rủi ro | Impact | Likelihood | Mitigation |
|---|--------|--------|------------|------------|
| 1 | {Rủi ro} | {H/M/L} | {H/M/L} | {Biện pháp} |

## 6. Danh mục Technology Stack
| Layer | Technology | Version | Lý do chọn |
|-------|------------|---------|------------|
| Language | {Tech} | {Ver} | {Lý do} |
| Framework | {Tech} | {Ver} | {Lý do} |
| Styling/UI | {Tech} | {Ver} | {Lý do} |
| Testing | {Tech} | {Ver} | {Lý do} |
| Build/Deploy | {Tech} | {Ver} | {Lý do} |
```

> **Lưu ý:** System Design Document là tài liệu **sống (living document)**. Architect cập nhật mỗi khi có thay đổi kiến trúc lớn (và ghi nhận thay đổi qua ADR mới nếu cần).

---

## Bước 1.5: Commit tài liệu Pre-Sprint (BẮT BUỘC)

> **Input:** Tất cả tài liệu đã tạo trong Giai đoạn 1
> **Output:** Git commit chứa toàn bộ tài liệu Pre-Sprint

> 🛑 **USER APPROVAL REQUIRED:** Trước khi thực hiện lệnh commit dưới đây, Agent BẮT BUỘC phải dừng lại, báo cáo kết quả Giai đoạn 1 (hiển thị tóm tắt nội dung Backlog, ADR, System Design) và yêu cầu USER duyệt (approve). CHỈ KHI USER đồng ý thì mới tiến hành commit.

> ⚠️ **CRITICAL: Sau khi được duyệt, BẮT BUỘC commit toàn bộ tài liệu trước khi chuyển sang Giai đoạn 2.** Điều này đảm bảo tài liệu được version control và có thể truy vết lịch sử thay đổi.

### Các file cần commit:
- `docs/backlog/product-backlog.md`
- `docs/ADR/ADR-*.md`
- `docs/architecture/system-design.md`
- Các file tài liệu khác đã tạo/thay đổi trong Giai đoạn 1

### Quy trình:
```bash
# Stage toàn bộ tài liệu Pre-Sprint
git add docs/backlog/ docs/ADR/ docs/architecture/ docs/PRDs/

# Commit với message mô tả
git commit -m "docs: add Pre-Sprint documents (backlog, ADR, system design)

- Product Backlog with PBIs extracted from PRD
- Architecture Decision Records
- System Design Document

ID: commit:pre-sprint-docs-{XXXX}
Refs: prd:{name}-{XXXX}"

# Push lên remote
git push origin <current-branch>
```
