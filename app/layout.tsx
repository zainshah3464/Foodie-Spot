import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

// Base URL – replace with your actual domain
const baseUrl = "https://foodiespot.pk";

// Custom SVG favicon (inline data URI)
const svgFavicon = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%23ea580c"/><text x="50" y="65" font-size="50" font-family="Arial, sans-serif" font-weight="bold" text-anchor="middle" fill="white">FS</text></svg>`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Foodie Spot – Delicious Food, Delivered Hot & Fresh",
    template: "%s | Foodie Spot",
  },
  description:
    "Order directly on WhatsApp – No Commission, No App Download. Fresh, hygienic & tasty food delivered to your doorstep.",
  keywords: [
    "food delivery",
    "whatsapp ordering",
    "lahore food",
    "burgers",
    "pizza",
    "biryani",
    "bbq",
    "foodie spot",
    "online food order",
  ],
  authors: [{ name: "Foodie Spot", url: baseUrl }],
  creator: "Foodie Spot",
  publisher: "Foodie Spot",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: svgFavicon, type: "image/svg+xml" },
    ],
    shortcut: svgFavicon,
    apple: [
      { url: svgFavicon, sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Foodie Spot",
    title: "Foodie Spot – Delicious Food, Delivered Hot & Fresh",
    description:
      "Order directly on WhatsApp – No Commission, No App Download. Fresh, hygienic & tasty food delivered to your doorstep.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop", // High-quality OG image
        width: 1200,
        height: 630,
        alt: "Foodie Spot - Delicious Food",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foodie Spot – Delicious Food, Delivered Hot & Fresh",
    description:
      "Order directly on WhatsApp – No Commission, No App Download. Fresh, hygienic & tasty food delivered to your doorstep.",
    images: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans bg-[#0d0d0d] text-white antialiased`}>
        {/* Optional JSON-LD structured data for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Foodie Spot",
              image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
              url: baseUrl,
              telephone: "+923710371689",
              priceRange: "PKR 150 - PKR 1200",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Shop # 12, Main Boulevard",
                addressLocality: "Lahore",
                addressCountry: "PK",
              },
              servesCuisine: ["Burgers", "Pizza", "Biryani", "Chinese", "BBQ", "Desserts"],
              openingHours: "Mo-Su 12:00-24:00",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "500",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}