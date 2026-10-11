# Neva Clinic by J Park Team Official - Website Clone

Trang web sao chép đầy đủ từ giao diện (UI) đến tính năng (UX) của trang web thẩm mỹ viện cao cấp **Neva Clinic by J Park Team** (`https://jparkmedi.com`).

Được xây dựng bằng **Vite**, **Tailwind CSS**, và **Swiper.js**.

---

## 🌟 Tính năng nổi bật đã sao chép & tích hợp

1. **Giao diện chuẩn y khoa cao cấp (Aesthetic Medical UI/UX):**
   - Phối màu đặc trưng: Deep Navy (`#102A43`), Champagne Gold (`#B59A62`), Warm Ivory (`#FFFDF8`).
   - Hỗ trợ 2 chế độ hiển thị linh hoạt: **Mobile Frame (460px)** (chuẩn landing page gốc của ABmedi) và **Desktop Full Width** (cho màn hình lớn).
   - Hỗ trợ chuyển đổi song ngữ: **English (EN)** & **Tiếng Việt (VI)**.

2. **Toàn bộ 16 phần cấu trúc chi tiết:**
   - **Header & Top Bar:** đánh giá 5.0 Google Reviews, hotline WhatsApp, nút bấm "Schedule a Consultation" hiệu ứng pulse glow.
   - **Hero Section:** Banner chính, các chứng nhận uy tín (100% Sterile Suite, Specialist Surgeons, Natural Expression), ticker chạy số liệu lâm sàng tự động.
   - **Section 2 (Khảo sát tình trạng 1 phút):** Form khảo sát tình trạng khuôn mặt tương tác thời gian thực (Dưới 40, Trên 40, Rãnh cười sâu, Da chùng nhão, Đã từng làm phẫu thuật chưa ưng ý).
   - **Section 3 (5 nhóm khuyết điểm khuôn mặt):** Danh thiếp ảnh lâm sàng tương tác, bấm vào thẻ sẽ tự động chọn và cuộn về form đăng ký.
   - **Section 4 (Video Showcase):** Video player với poster chất lượng cao và giao diện điều khiển.
   - **Section 5 (Patient Stories & Real Results):**
     - Slider 10 ảnh tin nhắn phản hồi thực tế từ khách hàng (Private Patient Experiences).
     - Slider 19 ca phẫu thuật trước - sau (Authentic Patient Results) kèm tính năng phóng to Lightbox modal.
   - **Section 6 (Công nghệ độc quyền):** Sơ đồ giải phẫu học cơ SMAS, nâng cơ sâu không biến đổi biểu cảm ("Refresh Only, Not Change").
   - **Section 7 (Quy trình 7 bước chuẩn y khoa):** Khám tư vấn, xét nghiệm sức khỏe, đo vẽ vector, phẫu thuật vô trùng, chăm sóc hậu phẫu, cắt chỉ.
   - **Section 8 (Đội ngũ bác sĩ chuyên khoa):** Hồ sơ Bác sĩ Trần Toàn (Bác sĩ Chuyên khoa I Phẫu thuật Tạo hình & Thẩm mỹ với 10 năm kinh nghiệm).
   - **Section 9 (Cơ sở vật chất):** Slider 7 phòng phẫu thuật, phòng khám và chăm sóc hậu phẫu chuẩn y khoa.
   - **Section 10 (Bảng giá tương tác đa tiền tệ):**
     - Hỗ trợ chuyển đổi nhanh 7 loại tiền tệ: **USD ($), AUD ($), IDR (Rp), MYR (RM), EUR (€), CAD ($), GBP (£)**.
     - Tự động quy đổi tỷ giá trực tiếp trên bảng giá 9 dịch vụ hot.
     - Nút mở toàn bộ danh mục 74+ dịch vụ phẫu thuật thẩm mỹ đầy đủ.
   - **Section 11 (Câu hỏi thường gặp - FAQ):** 10 câu hỏi & giải đáp chi tiết dạng accordion đóng mở mượt mà.
   - **Section 12 (Ưu đãi tháng 10/2026 & Đồng hồ đếm ngược):** Đồng hồ đếm ngược thời gian thực (Ngày, Giờ, Phút, Giây), hiển thị số lượng suất ưu đãi còn lại (09 Spots Left), form đăng ký nhận ưu đãi.
   - **Section 13 (Thông tin phòng khám & Bản đồ):** Địa chỉ 56 Nguyễn Khang, Yên Hoà, Cầu Giấy, Hà Nội; hotline, nút chat WhatsApp trực tiếp, bản đồ Google Maps.
   - **Section 14 (Footer):** Email, liên kết chính sách bảo mật & điều khoản sử dụng.

3. **Hộp công cụ nổi & Popups (Modals & Lightbox):**
   - Nút nổi **GIFT** (hộp quà lắc lư bên trái): Mở popup ưu đãi độc quyền & form đặt cọc $500 / $200 USD qua PayPal / Thẻ tín dụng.
   - Thanh liên hệ nhanh bên phải: WhatsApp, Đăng ký tư vấn, Nút cuộn lên đầu trang (Top).
   - Popup toàn bộ bảng giá (`#prices-list-full`) với 10 danh mục và 74 dịch vụ chuẩn giá gốc ABmedi.
   - Popup form tư vấn nhanh (`#dang-ky`).
   - Popup chính sách bảo mật (`#chinh-sach-bao-mat`) & điều khoản (`#dieu-khoan-su-dung`).
   - Popup phóng to hình ảnh kết quả phẫu thuật (`#imageViewerModal`).
   - Thông báo Toast alert khi gửi form thành công.

4. **Tài nguyên hình ảnh cục bộ (Offline Assets):**
   - Toàn bộ hơn 60 hình ảnh chất lượng cao (logo, poster, bác sĩ, cơ sở vật chất, 19 ca trước sau, 10 feedback) đã được tải về lưu trữ cục bộ tại `public/assets/images/`, giúp tải trang tức thì và hoạt động độc lập không phụ thuộc bên ngoài.

---

## 🚀 Hướng dẫn cài đặt & Khởi chạy

### 1. Khởi chạy môi trường phát triển (Dev Server)

```bash
npm run dev
```

Mở trình duyệt truy cập: `http://localhost:3000` (hoặc cổng hiển thị trên terminal).

### 2. Xây dựng bản phát hành (Build Production)

```bash
npm run build
```

Các file tối ưu sẽ được tạo trong thư mục `dist/`.

### 3. Xem trước bản build (Preview)

```bash
npm run preview
```

---

## 📁 Cấu trúc thư mục

```
Jparkmedi/
├── dist/                   # Bản build hoàn thiện
├── public/
│   └── assets/
│       └── images/         # Hơn 60 hình ảnh gốc của abmedi.com
├── src/
│   ├── data/
│   │   ├── concerns.json   # 5 tình trạng lão hoá khuôn mặt
│   │   ├── facilities.json # 7 ảnh cơ sở vật chất phòng khám
│   │   ├── faqs.json       # 10 câu hỏi thường gặp
│   │   ├── fullPrices.json # Toàn bộ 74 dịch vụ thẩm mỹ
│   │   ├── patientCases.json# 19 ca phẫu thuật & 10 feedback
│   │   ├── pricingConfig.js# Tỷ giá 7 loại tiền tệ & tính toán giá
│   │   └── steps.json      # Quy trình 7 bước chuẩn y khoa
│   ├── main.js             # Toàn bộ logic tương tác, swiper, currency, modal
│   └── style.css           # Tailwind directives & CSS custom
├── index.html              # Trang chủ HTML ngữ nghĩa hoàn chỉnh
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```
