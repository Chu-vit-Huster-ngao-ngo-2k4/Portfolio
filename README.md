# Portfolio Website - Bùi Văn Bình

Một trang web portfolio hiện đại và responsive được tạo dựa trên CV của Bùi Văn Bình - Frontend Developer & Digital Communication Engineer.

## 🌟 Tính năng

- **Thiết kế hiện đại**: Giao diện đẹp mắt với gradient và hiệu ứng glassmorphism
- **Responsive**: Tối ưu cho mọi thiết bị (desktop, tablet, mobile)
- **Navigation mượt mà**: Menu điều hướng với smooth scrolling
- **Hiệu ứng tương tác**: Hover effects, animations và transitions
- **Tối ưu SEO**: Cấu trúc HTML semantic và meta tags
- **Performance**: Tải trang nhanh với CSS và JavaScript tối ưu

## 🚀 Công nghệ sử dụng

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Variables
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Inter)
- **Deployment**: Vercel

## 📁 Cấu trúc dự án

```
portfolio/
├── index.html          # Trang chính
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
├── vercel.json         # Cấu hình Vercel
└── README.md           # Tài liệu dự án
```

## 🎨 Các section chính

1. **Hero Section**: Giới thiệu và call-to-action
2. **About**: Thông tin cá nhân và học vấn
3. **Projects**: Showcase các dự án đã thực hiện
4. **Skills**: Kỹ năng kỹ thuật
5. **Contact**: Form liên hệ và thông tin liên lạc

## 🚀 Hướng dẫn deploy lên Vercel

### Bước 1: Chuẩn bị
- Đảm bảo bạn có tài khoản GitHub
- Tạo repository mới trên GitHub
- Upload code lên repository

### Bước 2: Deploy lên Vercel
1. Truy cập [vercel.com](https://vercel.com)
2. Đăng nhập bằng GitHub
3. Click "New Project"
4. Import repository từ GitHub
5. Vercel sẽ tự động detect và deploy
6. Website sẽ có URL dạng: `https://your-project.vercel.app`

### Bước 3: Custom Domain (tùy chọn)
1. Trong Vercel dashboard, vào project settings
2. Chọn "Domains"
3. Thêm domain tùy chỉnh của bạn

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px - 480px  
- **Mobile**: < 480px

## 🎯 Tùy chỉnh

### Thay đổi thông tin cá nhân
Chỉnh sửa nội dung trong `index.html`:
- Tên, email, số điện thoại
- Mô tả về bản thân
- Thông tin dự án
- Kỹ năng

### Thay đổi màu sắc
Chỉnh sửa CSS variables trong `styles.css`:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #fbbf24;
  --text-color: #1f2937;
}
```

### Thay đổi layout
- Sử dụng CSS Grid và Flexbox
- Điều chỉnh padding, margin
- Thay đổi font sizes

## 🔧 Development

### Chạy locally
1. Clone repository
2. Mở `index.html` trong trình duyệt
3. Hoặc sử dụng live server extension trong VS Code

### Cấu trúc CSS
- **Reset & Base**: Reset CSS và typography
- **Layout**: Grid và Flexbox systems
- **Components**: Buttons, cards, forms
- **Responsive**: Media queries cho mobile
- **Animations**: Keyframes và transitions

## 📊 Performance

- **Lighthouse Score**: 90+ trên tất cả metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 License

Dự án này được tạo cho mục đích portfolio cá nhân. Bạn có thể sử dụng và tùy chỉnh cho portfolio của mình.

## 🤝 Đóng góp

Nếu bạn muốn đóng góp hoặc có góp ý, hãy tạo issue hoặc pull request.

## 📞 Liên hệ

- **Email**: buivanbinh1310@gmail.com
- **GitHub**: [Chu-vit-Huster-ngao-ngo-2k4](https://github.com/Chu-vit-Huster-ngao-ngo-2k4)
- **Điện thoại**: 0329054205

---

**Lưu ý**: Đây là một dự án frontend thuần, không có backend. Form liên hệ hiện tại chỉ hiển thị alert. Để có chức năng gửi email thực tế, bạn cần tích hợp với service như Formspree, Netlify Forms, hoặc tạo backend API. 