# Foodie Spot – Delicious Food, Delivered Hot & Fresh

![Foodie Spot Banner](https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop)

**Order directly on WhatsApp – No Commission, No App Download.**

Foodie Spot is a modern, fully responsive single-page restaurant website built with Next.js and Framer Motion. It showcases an elegant dark theme with subtle orange accents, smooth scroll-driven animations, and a direct WhatsApp ordering system. The project is a demo – designed to help restaurants and small food businesses establish a professional online presence quickly and easily.

---

## ✨ Features

- **Fully Responsive** – Optimized for mobile, tablet, and desktop.
- **Scroll-Driven Animations** – Parallax effects, progressive reveals, and smooth transitions powered by Framer Motion.
- **WhatsApp Direct Ordering** – Customers can place orders via WhatsApp with pre-filled messages.
- **Dynamic Menu with Category Filters** – Filter dishes by category (Burger, Pizza, Biryani, etc.) with smooth layout animations.
- **Interactive Gallery with Lightbox** – Hover-to-zoom and click-to-preview food images.
- **Testimonials Section** – Customer reviews with star ratings and avatars.
- **Contact & Map** – Embedded Google Map, contact details, and WhatsApp CTA.
- **Professional Metadata** – Open Graph, Twitter Cards, and JSON-LD structured data for SEO and social sharing.
- **Custom SVG Favicon** – Inline SVG favicon with "FS" monogram.
- **Clean, Minimal Design** – Dark background (`#0d0d0d`) with subtle neutral borders and orange accent gradients.

---

## 🚀 Demo

*Live demo link (if deployed):* [https://foodiespot-demo.vercel.app](https://foodiespot-demo.vercel.app)

*(Replace with your actual deployment URL)*

---

## 🧰 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework for production |
| **TypeScript** | Type-safe code |
| **Framer Motion** | Animations and scroll effects |
| **Tailwind CSS** | Styling and responsive design |
| **Google Fonts (Poppins)** | Typography |
| **Unsplash** | High-quality food images (replaceable) |

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/foodie-spot.git
   cd foodie-spot
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
foodie-spot/
├── app/
│   ├── layout.tsx          # Root layout with metadata & fonts
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section with parallax
│   ├── About.tsx           # About/Story section with stats
│   ├── Menu.tsx            # Menu with category filters
│   ├── Gallery.tsx         # Photo gallery with lightbox
│   ├── Reviews.tsx         # Testimonials
│   ├── Contact.tsx         # Contact details & map
│   └── Footer.tsx          # Footer with social links
├── public/                 # Static assets (if any)
├── package.json
└── README.md
```

---

## ⚙️ Customization

### Replace Content

- **Menu items**: Edit the `menuItems` array in `components/Menu.tsx`.
- **Testimonials**: Modify the `reviews` array in `components/Reviews.tsx`.
- **Contact details**: Update the `contactInfo` array and WhatsApp number in `components/Contact.tsx`.
- **Gallery images**: Change the `galleryImages` array in `components/Gallery.tsx`.
- **About stats**: Adjust the `stats` array in `components/About.tsx`.

### Change Colors

The theme uses a dark background (`#0d0d0d`) and orange accent (`#f97316`). You can change these in `globals.css` and by searching for the hex codes or Tailwind classes (`bg-[#0d0d0d]`, `from-orange-400 to-red-500`, etc.).

### Update Metadata & SEO

- Edit `app/layout.tsx`:
  - Replace `baseUrl` with your domain.
  - Update the Open Graph image URL to your own hosted image.
  - Adjust site title, description, and keywords.

### WhatsApp Number

Replace `923710371689` in all `href` attributes (Hero, Menu, Contact, etc.) with your own WhatsApp number (include country code, no plus sign).

---

## 📦 Deployment

### Deploy on Vercel

1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Set the framework preset to **Next.js**.
4. Deploy – no additional configuration needed.

### Deploy on Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables if needed (none required for this demo).

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests. For major changes, please discuss first via an issue.

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Developer

<div align="center">

### **Zain Shah**

**Full-Stack Developer & Software Engineer**

[![Portfolio](https://img.shields.io/badge/Portfolio-zain--main--web.vercel.app-0d9488?style=for-the-badge&logo=vercel&logoColor=white)](https://zain-main-web.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-zainshah3464-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/zainshah3464)
[![Instagram](https://img.shields.io/badge/Instagram-zainshah3464-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/zainshah3464)
[![Email](https://img.shields.io/badge/Email-zainshahzs110@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:zainshahzs110@gmail.com)

</div>
```

---

**Note:** This is a demo project built to showcase modern frontend techniques and can be easily adapted for a real restaurant or food delivery business. Replace all placeholder content (images, text, contact info) with your own before going live.
