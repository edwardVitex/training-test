### Bài test số 2 dành cho level intern

#### Yêu cầu

1. Checkout branch này ra 1 branch mới với tên: `intern-test-2/your_name (vd: intern-test-2/edward)`

2. Trên branch mới vừa checkout, tạo một ứng dụng với các yêu cầu sau:

    - Ứng dụng gồm một `Bottom Tab Navigator` với 2 tab: `Post` và `Photo` (Mỗi tab là một `Stack Navigator`)

    - Trong tab `Post`, Hiển thị danh sách các post (gồm title và body, title hiển thị tối đa trên 1 dòng, body tối đa 2 dòng) với dữ liệu được lấy từ API: <https://jsonplaceholder.typicode.com/posts>

    - Trong tab `Photo`, Hiển thị danh sách các photo với dữ liệu được lấy từ API: <https://jsonplaceholder.typicode.com/photos>

    - Khi ấn vào một item post, chuyển sang màn hình `Post Detail` (hiển thị đầy đủ title và body) với dữ liệu được lấy từ API: <https://jsonplaceholder.typicode.com/posts/${post_id}>

    - Khi ấn vào một item photo, chuyển sang màn hình `Photo Detail` (hiển thị photo và title của photo ngay bên dưới) với dữ liệu được lấy từ API: <https://jsonplaceholder.typicode.com/photos/${photo_id}>

3. Sau khi hoàn thành ứng dụng, đẩy code lên github repo

#### Lưu ý

-   Hiển thị trạng thái `Loading` khi đang tải dữ liệu và ẩn `Loading` khi dữ liệu đã tải xong

-   Chia nhỏ các component để tối ưu performance

-   Sử dụng `React Navigation` để quản lý navigation trong ứng dụng

-   Sử dụng `Axios` để call apis

-   Màn hình `Post Detail` và `Photo Detail` phải nằm trong các `Stack Navigator` tương ứng

-   Mỗi màn hình chi tiết phải có `Header` với nút `Back` để quay lại màn trước đó

-   Sử dụng `StyleSheet` để style cho các màn hình và component trong ứng dụng

-   Bạn có thể style các màn hình và component theo ý thích

-   Tất cả các thư viện cần thiết đã được install và config để có thể dùng được ngay
