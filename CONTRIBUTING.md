# Nguyên tắc đóng góp
Cảm ơn bạn đã dành thời gian quý báu của bạn. Sự đóng góp của bạn sẽ làm cho dự án này trở nên tốt hơn! Trước khi gửi đóng góp của bạn, hãy nhớ dành chút thời gian để đọc Hướng dẫn bắt đầu bên dưới.

## Phiên bản ngữ nghĩa
Dự án tuân theo phiên bản ngữ nghĩa. Chúng tôi phát hành số sửa đổi cho các bản sửa lỗi quan trọng, số phiên bản nhỏ cho các tính năng mới hoặc các thay đổi không quan trọng và số phiên bản chính cho các thay đổi lớn và không tương thích.

Mọi thay đổi vi phạm sẽ được ghi vào `changelog`.

## Gửi yêu cầu kéo
1. Fork [kho này](https://github.com/Chanzhaoyu/chatgpt-web), tạo một nhánh từ `main`. Để triển khai các tính năng mới, vui lòng gửi yêu cầu kéo đến nhánh `feature`. Các thay đổi khác được đẩy lên nhánh `main`.
2. Sử dụng `npm install pnpm -g` để cài đặt công cụ `pnpm`.
3. `vscode` đã cài đặt plug-in `Eslint` và các trình soạn thảo khác như `webStorm` đã bật chức năng `eslint`.
4. Thực thi `pnpm bootstrap` trong thư mục gốc.
5. Thực thi `pnpm install` trong thư mục `/service/`.
6. Thực hiện các thay đổi đối với cơ sở mã. Nếu có thể, hãy đảm bảo rằng việc kiểm tra thích hợp được thực hiện.
7. Vui lòng thực thi `pnpm lint:fix` trong thư mục gốc để kiểm tra định dạng mã.
8. Vui lòng thực thi `pnpm type-check` trong thư mục gốc để kiểm tra kiểu.
9. Gửi cam kết git, vui lòng tuân thủ [Thông số cam kết] (#commit-guidelines)
10. Gửi `yêu cầu kéo`. Nếu có `vấn đề` tương ứng, vui lòng [link](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).

## Hướng dẫn cam kết

Thông báo cam kết vui lòng tuân theo [tiêu chuẩn thay đổi thông thường](https://www.conventionalcommits.org/en/v1.0.0/):

``` bash
<loại>[phạm vi tùy chọn]: <mô tả>

[văn bản tùy chọn]

[chú thích cuối trang tùy chọn]
```

### Loại cam kết

Sau đây là danh sách các loại cam kết:

- kỳ công: tính năng hoặc chức năng mới
- sửa lỗi: sửa lỗi
- docs: cập nhật tài liệu
- kiểu: kiểu mã hoặc cập nhật kiểu thành phần
- refactor: tái cấu trúc mã mà không giới thiệu các tính năng mới hoặc sửa lỗi
- perf: tối ưu hóa hiệu suất
- kiểm tra: kiểm tra đơn vị
- việc vặt: các cam kết khác không sửa đổi tệp src hoặc tệp kiểm tra


## Giấy phép

[MIT](./license)
