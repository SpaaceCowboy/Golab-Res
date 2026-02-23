<div align="center">

# 🍽️ GoLab Restaurant

### A Modern Restaurant Website with Bilingual Support

An elegant, fully responsive restaurant website built for **GoLab Restaurant** in Istanbul — featuring a complete digital menu, online reservation system, gallery, and seamless English/Turkish language switching.

![Next.js](https://img.shields.io/badge/Next.js_13.5-000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

[Live Demo](#) · [Report Bug](https://github.com/SpaaceCowboy/Golab-Res/issues) · [Request Feature](https://github.com/SpaaceCowboy/Golab-Res/issues)

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Internationalization](#-internationalization)
- [Pages & Sections](#-pages--sections)
- [License](#-license)

---

## 🔍 About the Project

GoLab Restaurant is a real fine-dining restaurant in Istanbul led by the globally recognized **Chef Murat Bozok**. This project is a modern, performant website that serves as the restaurant's digital presence — allowing guests to explore the menu, view the gallery, learn about the team, and make reservations online.

The site is built with **Next.js 13 App Router** and fully supports **English and Turkish** through `next-intl`, making it accessible to both local and international diners.

---

## ✨ Features

- **🌐 Bilingual Support** — Full English & Turkish language switching with `next-intl` and locale-aware routing (`/en/...`, `/tr/...`)
- **📱 Fully Responsive** — Optimized for desktop, tablet, and mobile devices
- **🎬 Smooth Animations** — Page transitions and scroll-triggered animations powered by Framer Motion
- **🍕 Dynamic Menu System** — Categorized menu with search functionality, featuring food, alcoholic drinks, and non-alcoholic drinks sections
- **📅 Online Reservation** — Complete reservation form with date/time picker, guest count, occasion selection, and special requests
- **🖼️ Photo Gallery** — Visual showcase of the restaurant's ambiance, dishes, and events
- **🔍 Menu Search** — Real-time search across dish names, descriptions, and ingredients
- **⚡ Performance Optimized** — Next.js Image optimization, font preloading, and server-side rendering

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 13.5 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + `tailwindcss-animate` |
| **Animations** | Framer Motion |
| **UI Components** | Radix UI Primitives (shadcn/ui) |
| **Internationalization** | `next-intl` v4 |
| **Form Handling** | React Hook Form + Zod validation |
| **Charts** | Recharts |
| **Icons** | Lucide React |
| **Fonts** | Inter + Playfair Display (Google Fonts) |

---

## 📁 Project Structure

```
Golab-Res/
├── app/
│   └── [locale]/              # Locale-aware routing (en/tr)
│       ├── page.tsx            # Homepage
│       ├── layout.tsx          # Root layout with i18n provider
│       ├── menu/               # Menu pages
│       │   ├── food/           # Food menu
│       │   ├── alcoholic-drink-menu/
│       │   └── Non-alcoholic-menu/
│       ├── about/              # About page
│       ├── gallery/            # Gallery page
│       ├── reservation/        # Reservation form
│       └── contact/            # Contact page
├── components/
│   ├── home/                   # Homepage sections
│   │   ├── hero-section.tsx    # Hero with background image
│   │   ├── featured-menu.tsx   # Featured dishes with category filter
│   │   ├── about-section.tsx   # About preview
│   │   ├── gallery-preview.tsx # Gallery teaser
│   │   └── reservation-cta.tsx # Reservation call-to-action
│   ├── layout/                 # Layout components
│   │   ├── header.tsx          # Navbar with scroll effect
│   │   ├── footer.tsx          # Footer
│   │   ├── LocaleSwitcher.tsx  # Language toggle (EN/TR)
│   │   └── LocaleSwitcherSelect.tsx
│   ├── menu/                   # Menu components
│   │   ├── menu-list.tsx       # Full menu with search
│   │   └── food-slider.tsx     # Food category slider
│   └── ui/                     # Reusable UI primitives (shadcn/ui)
├── i18n/                       # Internationalization config
│   ├── routing.ts              # Locale routing definition
│   ├── request.ts              # Server-side message loading
│   └── navigation.ts           # Locale-aware Link, useRouter, etc.
├── lib/
│   ├── data.ts                 # Restaurant data (menu items, categories, etc.)
│   └── utils.ts                # Utility functions
├── messages/
│   ├── en.json                 # English translations
│   └── tr.json                 # Turkish translations
├── types/
│   └── index.ts                # TypeScript interfaces
└── hooks/
    └── use-toast.ts            # Toast notification hook
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ 
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/SpaaceCowboy/Golab-Res.git

# Navigate to the project directory
cd Golab-Res

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:3000`. The default locale is Turkish (`/tr`), and you can switch to English via the locale switcher in the header.

### Build for Production

```bash
npm run build
npm start
```

---

## 🌍 Internationalization

The application supports **two locales**:

| Locale | Language | Default |
|--------|----------|---------|
| `tr` | Turkish | ✅ |
| `en` | English | — |

All translations are stored in the `messages/` directory as JSON files. The `next-intl` library handles locale-aware routing, so all pages are automatically available under both `/en/` and `/tr/` prefixes.

To add a new language, create a new JSON file in `messages/` (e.g., `ar.json`) and add the locale to the routing config in `i18n/routing.ts`.

---

## 📄 Pages & Sections

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero section, featured menu, about preview, gallery preview, reservation CTA |
| **Menu** | `/menu` | Full categorized menu with real-time search |
| **Food Menu** | `/menu/food` | Food items (breakfast, mains, Iranian dishes, pizza, burgers, pasta, salads, desserts) |
| **Alcoholic Drinks** | `/menu/alcoholic-drink-menu` | Cocktails, wine, beer, champagne, alcohol bottles |
| **Non-Alcoholic Drinks** | `/menu/Non-alcoholic-menu` | Coffee & tea, soft drinks, milkshakes & smoothies |
| **About** | `/about` | Restaurant story, Chef Murat Bozok bio, team section |
| **Gallery** | `/gallery` | Photo gallery of dishes, ambiance, and events |
| **Reservation** | `/reservation` | Online table booking with date, time, guest count, and special requests |
| **Contact** | `/contact` | Contact information, location, and operating hours |

---

## 📄 License

This project is proprietary software built for GoLab Restaurant.

---

<div align="center">

**Built with ❤️ by [Shayan Shoeibzade](https://github.com/SpaaceCowboy)**

</div>
