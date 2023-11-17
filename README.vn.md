#Web ChatGPT

<div style="font-size: 1.5rem;">
   <a href="./README.cn.md">中文</a> |
   <a href="./README.md">Tiếng Anh</a>
   <a href="./README.vi.md">Tiếng Việt</a>
</div>
</br>

> Tuyên bố miễn trừ trách nhiệm: Dự án này chỉ được phát hành trên GitHub, theo Giấy phép MIT, miễn phí và dành cho mục đích học tập nguồn mở. Sẽ không có bán tài khoản, dịch vụ trả phí, nhóm thảo luận hoặc diễn đàn. Hãy coi chừng lừa đảo.

![cover](./docs/c1.png)
![cover2](./docs/c2.png)

- [Web ChatGPT](#chatgpt-web)
- [Giới thiệu](#giới thiệu)
- [Lộ trình](#lộ trình)
- [Điều kiện tiên quyết](#điều kiện tiên quyết)
- [Nút](#nút)
- [PNPM](#pnpm)
- [Điền phím](#fill-in-the-keys)
- [Cài đặt phụ thuộc](#install-dependency)
- [Phần cuối](#backend)
- [Giao diện người dùng](#frontend)
- [Chạy trong môi trường thử nghiệm](#run-in-test-environment)
- [Dịch vụ phụ trợ](#backend-service)
- [Trang web giao diện người dùng](#frontend-webpage)
- [Bao bì](#packaging)
- [Sử dụng Docker](#using-docker)
- [Ví dụ về tham số Docker](#docker-parameter-example)
- [Docker Build \& Run](#docker-build--run)
- [Docker Compose](#docker-compose)
- [Triển khai với Đường sắt](#deployment-with-railway)
- [Biến môi trường đường sắt](#railway-environment-variables)
- [Đóng gói thủ công](#manual-packaging)
- [Dịch vụ phụ trợ](#backend-service-1)
- [Trang web giao diện người dùng](#frontend-webpage-1)
- [Câu hỏi thường gặp](#câu hỏi thường gặp)
- [Đóng góp](#contributing)
- [Tài trợ](#sponsorship)
- [Giấy phép](#giấy phép)

## Giới thiệu

Hỗ trợ các mô hình kép, cung cấp hai phương thức `ChatGPT API` không chính thức:

| Phương pháp | Miễn phí? | Độ tin cậy | Chất lượng |
| --------------------------------------------- | ------ | ----------- | ------- |
| `ChatGPTAPI(gpt-3.5-turbo-0301)` | Không | Đáng tin cậy | Tương đối vụng về |
| `ChatGPTUnofficialProxyAPI(Web accessToken)` | Có | Tương đối không đáng tin cậy | Thông minh |

So sánh:
1. `ChatGPTAPI` sử dụng `gpt-3.5-turbo-0301` để mô phỏng `ChatGPT` thông qua `API` hoàn thành `OpenAI` chính thức (phương pháp đáng tin cậy nhất, nhưng nó không miễn phí và không sử dụng các mô hình được điều chỉnh riêng cho trò chuyện ).
2. `ChatGPTUnofficialProxyAPI` truy cập `API` phụ trợ của `ChatGPT` thông qua máy chủ proxy không chính thức để vượt qua `Cloudflare` (sử dụng `ChatGPT` thực, rất nhẹ, nhưng phụ thuộc vào máy chủ của bên thứ ba và có giới hạn tốc độ).

[Chi tiết](https://github.com/Chanzhaoyu/chatgpt-web/issues/138)

Phương pháp chuyển đổi:
1. Đi tới tệp `service/.env.example` và sao chép nội dung vào tệp `service/.env`.
2. Đối với `Khóa API OpenAI`, hãy điền vào trường `OPENAI_API_KEY` [(Nhận apiKey)](https://platform.openai.com/overview).
3. Đối với `Web API`, hãy điền vào trường `OPENAI_ACCESS_TOKEN` [(Nhận accessToken)](https://chat.openai.com/api/auth/session).
4. Khi cả hai đều có mặt, `Khóa API OpenAI` sẽ được ưu tiên.

Proxy ngược:

Có sẵn khi sử dụng `ChatGPTUnofficialProxyAPI`.[Chi tiết](https://github.com/transitive-bullshit/chatgpt-api#reverse-proxy)

``` vỏ
# dịch vụ/.env
API_REVERSE_PROXY=
```

Biến môi trường:

Đối với tất cả các biến tham số, hãy kiểm tra [tại đây](#docker-parameter-example) hoặc xem:

```
/service/.env
```

## Lộ trình
[ ✓] Mô hình kép

[ ✓] Lưu trữ nhiều phiên và logic ngữ cảnh

[ ✓] Định dạng và làm đẹp các loại tin nhắn dạng mã

[ ✓] Kiểm soát quyền truy cập

[ ✓] Nhập và xuất dữ liệu

[ ✓] Lưu tin nhắn vào hình ảnh cục bộ

[ ✓] Giao diện đa ngôn ngữ

[ ✓] Chủ đề giao diện

[✗] Thêm...

## Điều kiện tiên quyết

### Nút

`node` yêu cầu phiên bản `^16 || ^18` (`node >= 14` yêu cầu cài đặt [fetch polyfill](https://github.com/developit/unfetch#usage-as-a-polyfill)) và có thể quản lý nhiều phiên bản `node` cục bộ sử dụng [nvm](https://github.com/nvm-sh/nvm).

``` vỏ
nút -v
```

###PNPM
Nếu bạn chưa cài đặt `pnpm` trước đây:
``` vỏ
npm cài đặt pnpm -g
```

### Điền chìa khóa

Nhận `Openai Api Key` hoặc `accessToken` và điền vào các biến môi trường cục bộ [jump](#introduction)

```
# tập tin dịch vụ/.env

# Khóa API OpenAI - https://platform.openai.com/overview
OPENAI_API_KEY=

# thay đổi giá trị này thành `accessToken` được trích xuất từ phản hồi `https://chat.openai.com/api/auth/session` của trang ChatGPT
OPENAI_ACCESS_TOKEN=
```

## Cài đặt phụ thuộc

> Để giúp `nhà phát triển phụ trợ` dễ hiểu hơn, chúng tôi không sử dụng chế độ `không gian làm việc` giao diện người dùng mà lưu trữ nó trong các thư mục khác nhau. Nếu bạn chỉ cần phát triển thứ cấp cho trang giao diện người dùng, hãy xóa thư mục `service`.

### Phần cuối

Nhập thư mục `/service` và chạy lệnh sau

``` vỏ
cài đặt pnpm
```

### Giao diện người dùng
Chạy lệnh sau trong thư mục gốc
``` vỏ
khởi động pnpm
```

## Chạy trong môi trường thử nghiệm
### Dịch vụ phụ trợ

Nhập thư mục `/service` và chạy lệnh sau

``` vỏ
bắt đầu vào buổi chiều
```

### Giao diện trang web
Chạy lệnh sau trong thư mục gốc
``` vỏ
nhà phát triển pnpm
```

## Bao bì

### Sử dụng Docker

#### Ví dụ về tham số Docker

- `OPENAI_API_KEY` một trong hai
- `OPENAI_ACCESS_