# Quy ước Hệ thống Universal ID (Traceability ID Convention)

## 1. Mục đích
Hệ thống Universal ID được sử dụng để gán mã định danh duy nhất cho mọi thành phần trong vòng đời phát triển dự án. Điều này cho phép **truy vết hai chiều (bidirectional traceability)**:
- **Truy ngược (Backward Trace):** Từ code/commit → task → feature → PRD requirement gốc.
- **Truy xuôi (Forward Trace):** Từ PRD requirement → feature → task → code/commit/test.

## 2. Định dạng ID

```
<doc-type>:<component-name-XXXX>
```

Trong đó:
- `doc-type`: Loại tài liệu/thực thể. Là một trong các giá trị sau:

| doc-type   | Mô tả                                                   | Ví dụ                          |
|------------|----------------------------------------------------------|--------------------------------|
| `prd`      | Yêu cầu sản phẩm gốc trong PRD                         | `prd:login-page-0001`          |
| `feature`  | Tính năng cụ thể được phân tách từ PRD                   | `feature:email-input-0001`     |
| `plan`     | Kế hoạch triển khai (Implementation Plan)                | `plan:setup-nextjs-0001`       |
| `task`     | Đơn vị công việc nhỏ nhất có thể giao (Work Item)        | `task:install-tailwind-0001`   |
| `code`     | Module/Component trong source code                       | `code:login-form-0001`         |
| `commit`   | Một Git commit liên kết                                  | `commit:init-project-0001`     |
| `bug`      | Lỗi được ghi nhận                                       | `bug:email-regex-fail-0001`    |
| `test`     | Test case                                                | `test:validate-email-0001`     |
| `adr`      | Architecture Decision Record                             | `adr:tailwind-choice-0001`     |
| `research` | Nghiên cứu, spike, hoặc proof-of-concept                | `research:form-libs-0001`      |

- `component-name`: Tên ngắn gọn, dùng kebab-case, mô tả thành phần.
- `XXXX`: Số thứ tự 4 chữ số (bắt đầu từ 0001), tăng dần trong cùng một `doc-type`.

## 3. Quy tắc sử dụng

### 3.1. Tính duy nhất
- Mỗi ID là **duy nhất trên toàn dự án**. Không bao giờ có 2 thành phần cùng ID.

### 3.2. Tính bất biến
- Một khi ID đã được gán, **không được thay đổi hay tái sử dụng**, kể cả khi thành phần đó bị xóa.

### 3.3. Liên kết chéo (Cross-referencing)
- Mọi tài liệu downstream (plan, task, code, test...) **phải** tham chiếu ngược về ID gốc từ PRD hoặc feature mà nó triển khai.
- Ví dụ: Trong một task triển khai, cần ghi rõ:
  ```
  Implements: feature:email-input-0001
  ```

### 3.4. Phạm vi áp dụng
Hệ thống ID này được áp dụng cho:
- Tài liệu PRD (`docs/PRDs/`)
- Kế hoạch triển khai (`docs/plans/`)
- ADR (`docs/ADR/`)
- Issues / Bug reports
- Git commit messages (ghi ID vào footer hoặc prefix)
- Source code (comment trên component/module)
- Test cases

## 4. Ví dụ luồng truy vết đầy đủ

```
prd:login-page-0001          (Yêu cầu gốc: xây trang đăng nhập)
  └── feature:email-input-0001   (Tính năng: ô nhập email)
        ├── task:create-email-component-0001  (Task: tạo component EmailInput)
        │     └── code:email-input-0001       (Code: src/components/EmailInput.tsx)
        │           └── commit:add-email-input-0001  (Commit: "feat: add EmailInput component")
        └── feature:validate-email-0001  (Tính năng: validate email)
              ├── task:add-email-regex-0001   (Task: thêm regex kiểm tra email)
              └── test:validate-email-0001   (Test: test case kiểm tra email hợp lệ)
```
