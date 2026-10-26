# Healthcare Platform 🏥

A modern, full-stack healthcare platform template built for clinics, hospitals, and medical practices. This project consists of two applications: a patient-facing website and an administrative dashboard for clinic operations.

> **Note**: This is a template/project showcase. All clinic names, locations, contact details, and patient data shown are fictional placeholders.

---

## 📸 Preview

| Patient Website | Admin Dashboard |
|-----------------|-----------------|
| ![Patient Website](life-hearing-care/public/preview-home.png) | ![Admin Dashboard](admin-portal/public/preview-admin.png) |

*Preview images are placeholders. Add your own screenshots to `public/` folders.*

---

## 🏗️ Project Structure

### Overview

```
healthcare-platform/
├── .github/                      # GitHub Actions workflows (CI/CD)
├── .gitignore                    # Git ignore rules
├── LICENSE                       # MIT License
├── README.md                     # This file
│
├── patient-portal/               # 🌐 PATIENT PORTAL (React 19 + Vite 8)
│   ├── public/                   # Static assets served directly
│   │   ├── hero_slides/          # Hero slider images (slide1-6.webp)
│   │   ├── tech_images/          # Treatment/technology section images
│   │   └── *.svg                 # Misc icons
│   │
│   ├── src/
│   │   ├── main.jsx              # App entry point
│   │   ├── App.jsx               # Root component + routing + providers
│   │   ├── App.css               # Global component styles
│   │   ├── index.css             # Tailwind imports + global styles
│   │   ├── supabaseClient.js     # Supabase client with encrypted storage
│   │   │
│   │   ├── context/
│   │   │   └── SettingsContext.jsx  # Clinic settings (name, phone, email, etc.)
│   │   │
│   │   ├── components/           # Reusable UI components
│   │   │   ├── Navbar.jsx        # Responsive navigation with mobile menu
│   │   │   ├── Footer.jsx        # Site footer with links/contact
│   │   │   ├── FloatingCallButton.jsx  # Mobile sticky contact button
│   │   │   └── RevealOnScroll.jsx      # IntersectionObserver animation wrapper
│   │   │
│   │   ├── pages/                # Route-level components (lazy-loaded)
│   │   │   ├── Home.jsx          # Landing page (hero, services, tech, reviews, FAQ)
│   │   │   ├── About.jsx         # Clinic info, team, mission/values
│   │   │   ├── Services.jsx      # Detailed services listing
│   │   │   ├── Treatments.jsx    # Treatment/technology catalog with filters
│   │   │   ├── BookAppointment.jsx # Multi-step booking form
│   │   │   ├── Blog.jsx          # Articles listing + detail view
│   │   │   ├── Reviews.jsx       # Patient testimonials display
│   │   │   ├── AdminLogin.jsx    # Staff login page
│   │   │   └── Admin.jsx         # Protected admin dashboard (basic)
│   │   │
│   │   ├── utils/
│   │   │   └── vitals.js         # Web Vitals reporting
│   │   │
│   │   └── assets/               # Brand assets & medical images
│   │       ├── *.png, *.jpeg     # Brand logos, treatment photos, staff photos
│   │
│   ├── dist/                     # Production build output (gitignored)
│   ├── package.json              # Dependencies & scripts
│   ├── vite.config.js            # Vite config (React, Tailwind, aliases)
│   ├── tailwind.config.js        # Tailwind theme (colors, fonts, spacing)
│   ├── postcss.config.js         # PostCSS plugins (autoprefixer)
│   ├── eslint.config.js          # ESLint flat config
│   ├── vercel.json               # Vercel routing/headers/rewrites
│   ├── .env.example              # Environment variables template
│   └── index.html                # HTML template
│
└── admin-portal/                 # 🔐 ADMIN DASHBOARD (Next.js 15 + App Router)
    ├── public/                   # Static assets
    │   ├── *.svg                 # Icons
    │
    ├── src/
    │   ├── middleware.ts         # Auth protection for /admin/* routes
    │   ├── lib/
    │   │   └── utils.ts          # Utility functions (cn, formatters)
    │   │
    │   ├── hooks/
    │   │   └── use-mobile.ts     # Mobile breakpoint hook
    │   │
    │   ├── components/
    │   │   ├── app-sidebar.tsx   # Main navigation sidebar
    │   │   └── ui/               # shadcn/ui components (15+ components)
    │   │       ├── button.tsx, card.tsx, dialog.tsx, dropdown-menu.tsx
    │   │       ├── input.tsx, select.tsx, table.tsx, tabs.tsx
    │   │       ├── badge.tsx, avatar.tsx, tooltip.tsx, sonner.tsx
    │   │       ├── skeleton.tsx, separator.tsx, sheet.tsx, sidebar.tsx
    │   │
    │   ├── utils/
    │   │   ├── samtrics.ts       # Telemetry/analytics utilities
    │   │   ├── audit-logger.ts   # Admin action audit logging
    │   │   └── supabase/         # Supabase SSR clients
    │   │       ├── client.ts     # Browser client (createBrowserClient)
    │   │       ├── server.ts     # Server client (createServerClient + cookie encryption)
    │   │       ├── middleware.ts # Middleware client for auth checks
    │   │       └── admin.ts      # Service role client for admin ops
    │   │
    │   ├── app/                  # Next.js App Router pages
    │   │   ├── layout.tsx        # Root layout (fonts, providers, toaster)
    │   │   ├── page.tsx          # Landing (redirects to /admin)
    │   │   ├── globals.css       # Tailwind v4 + CSS variables
    │   │   ├── favicon.ico
    │   │   │
    │   │   ├── admin-login/      # Login page
    │   │   │   └── page.tsx
    │   │   │
    │   │   ├── admin/            # Protected admin routes
    │   │   │   ├── layout.tsx    # Admin layout with sidebar
    │   │   │   ├── loading.tsx   # Loading UI
    │   │   │   │
    │   │   │   ├── dashboard/    # Overview dashboard
    │   │   │   │   └── page.tsx
    │   │   │   │
    │   │   │   ├── appointments/ # Appointment management
    │   │   │   │   ├── page.tsx
    │   │   │   │   ├── AppointmentsClient.tsx  # Client component with TanStack Table
    │   │   │   │   ├── data-table.tsx  # Reusable data table wrapper
    │   │   │   │   └── columns.tsx     # Column definitions
    │   │   │   │
    │   │   │   ├── calendar/     # Calendar view
    │   │   │   │   ├── page.tsx
    │   │   │   │   └── CalendarClient.tsx
    │   │   │   │
    │   │   │   ├── patients/     # Patient management
    │   │   │   │   ├── page.tsx
    │   │   │   │   └── PatientSearch.tsx
    │   │   │   │
    │   │   │   ├── analytics/    # Analytics & monitoring
    │   │   │   │   ├── page.tsx
    │   │   │   │   ├── layout.tsx
    │   │   │   │   ├── security/
    │   │   │   │   ├── network/
    │   │   │   │   ├── frontend/
    │   │   │   │   ├── backend/
    │   │   │   │   └── ai/
    │   │   │   │
    │   │   │   ├── backup/       # Database backup
    │   │   │   │   └── page.tsx
    │   │   │   │
    │   │   │   └── settings/     # Clinic settings
    │   │   │       └── page.tsx
    │   │   │
    │   │   ├── api/              # API Routes (Edge/Node)
    │   │   │   ├── analytics/    # Telemetry ingestion
    │   │   │   │   ├── track/route.ts
    │   │   │   │   ├── telemetry/route.ts
    │   │   │   │   ├── ingest/route.ts
    │   │   │   │   └── health/route.ts
    │   │   │   ├── appointments/ # Appointment CRUD
    │   │   │   │   ├── book/route.ts
    │   │   │   │   ├── available-slots/route.ts
    │   │   │   │   └── admin/
    │   │   │   │       ├── route.ts
    │   │   │   │       └── [id]/route.ts
    │   │   │
    │   │   └── actions/          # Server Actions
    │   │       ├── auth.ts       # Login/logout actions
    │   │       ├── appointments.ts # Appointment mutations
    │   │       ├── settings.ts   # Settings updates
    │   │       └── backup.ts     # Backup triggers
    │
    ├── package.json              # Dependencies & scripts
    ├── next.config.ts            # Next.js config (images, headers)
    ├── tailwind.config.ts        # Tailwind v4 config
    ├── postcss.config.mjs        # PostCSS config
    ├── eslint.config.mjs         # ESLint config
    ├── components.json           # shadcn/ui configuration
    ├── tsconfig.json             # TypeScript config
    ├── next-env.d.ts             # Next.js type declarations
    └── .env.example              # Environment variables template
```

### Key Architectural Relationships

```
┌─────────────────────────────────────────────────────────────────┐
│                        SUPABASE BACKEND                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │  Database   │  │    Auth     │  │  Realtime   │              │
│  │  (Postgres) │  │  (Email/    │  │  (WebSocket)│              │
│  │             │  │   OAuth)    │  │             │              │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘              │
└─────────┼────────────────┼────────────────┼─────────────────────┘
          │                │                │
    ┌─────▼─────┐    ┌─────▼─────┐    ┌─────▼─────┐
    │  Patient  │    │   Admin   │    │  Patient  │
    │  Portal   │    │  Portal   │    │  Portal   │
    │ (React)   │    │ (Next.js) │    │ (Admin    │
    │           │    │           │    │  Routes)  │
    └───────────┘    └───────────┘    └───────────┘
```

### Shared vs Separate Dependencies

| Category | Patient Portal | Admin Portal | Shared |
|----------|----------------|--------------|--------|
| **React** | 19.2.6 | 19.2.4 | ✅ Same major |
| **Supabase** | @supabase/supabase-js | @supabase/ssr + @supabase/supabase-js | ✅ |
| **Styling** | Tailwind v3.4 | Tailwind v4 | ❌ Different |
| **Routing** | React Router v7 | Next.js App Router | ❌ |
| **UI Library** | Custom + Material Icons | shadcn/ui (Radix) | ❌ |
| **TypeScript** | ❌ (JS + JSDoc) | ✅ Full TS | ❌ |
| **Build Tool** | Vite 8 | Next.js 15 (Turbopack) | ❌ |

### Route Mapping

#### Patient Portal (`patient-portal`)
| Route | Component | Auth Required |
|-------|-----------|---------------|
| `/` | `Home` | ❌ |
| `/about` | `About` | ❌ |
| `/services` | `Services` | ❌ |
| `/treatments` | `Treatments` | ❌ |
| `/book` | `BookAppointment` | ❌ |
| `/blog` | `Blog` | ❌ |
| `/reviews` | `Reviews` | ❌ |
| `/admin-login` | `AdminLogin` | ❌ |
| `/admin` | `Admin` | ✅ (Staff email) |

#### Admin Portal (`admin-portal`)
| Route | Component | Auth Required |
|-------|-----------|---------------|
| `/` | Redirect → `/admin` | ✅ |
| `/admin-login` | Login page | ❌ |
| `/admin` | Dashboard | ✅ |
| `/admin/appointments` | Appointments table | ✅ |
| `/admin/calendar` | Calendar view | ✅ |
| `/admin/patients` | Patient management | ✅ |
| `/admin/analytics/*` | Analytics | ✅ |
| `/admin/backup` | Database backup | ✅ |
| `/admin/settings` | Clinic settings | ✅ |

### Security Flow

```
User visits /admin
       │
       ▼
middleware.ts ──────► Check Supabase session (encrypted cookie)
       │
       ├─► No session → Redirect to /admin-login
       │
       └─► Session exists → Check email against allowed list
              │
              ├─► Not authorized → Redirect to /admin-login
              │
              └─► Authorized → Allow access to admin layout
```

### Data Flow Examples

#### Appointment Booking (Patient → Admin)
```
1. Patient fills BookAppointment.jsx form
       │
       ▼
2. Client-side Zod validation
       │
       ▼
3. POST /api/appointments/book (admin-portal API route)
       │
       ▼
4. Server Action: appointments.ts → Supabase insert
       │
       ▼
5. Supabase Realtime → Admin dashboard updates live
       │
       ▼
6. Audit log entry created (audit-logger.ts)
```

#### Admin Login
```
1. AdminLogin.jsx / admin-login/page.tsx
       │
       ▼
2. Server Action: auth.ts → supabase.auth.signInWithPassword()
       │
       ▼
3. Success → Encrypted cookie set (server.ts CryptoJS)
       │
       ▼
4. Middleware validates on each request
```

### Configuration Files Quick Reference

| File | App | Purpose |
|------|-----|---------|
| `vite.config.js` | Patient | Vite plugins, path aliases, build config |
| `tailwind.config.js` | Patient | Theme tokens, colors, fonts, plugins |
| `vercel.json` | Patient | SPA routing, headers, API rewrites |
| `next.config.ts` | Admin | Image domains, headers, experimental features |
| `tailwind.config.ts` | Admin | Tailwind v4 CSS-first config |
| `components.json` | Admin | shadcn/ui component registry |
| `middleware.ts` | Admin | Route protection, auth validation |
| `tsconfig.json` | Admin | TypeScript paths, strict mode |

---

## ✨ Features

### 🌐 Patient Portal (`patient-portal`)

| Feature | Description |
|---------|-------------|
| **Hero Slider** | Dynamic slides with CTAs, auto-play, keyboard navigation |
| **Services Showcase** | Configurable service cards with icons and descriptions |
| **Treatment/Technology Catalog** | Interactive horizontal scroll for medical equipment, treatments, or specialties |
| **Insurance & Payment Options** | Support for insurance partners, government schemes, EMI financing |
| **Appointment Booking** | Multi-step form with validation, date/time selection, service selection |
| **Patient Reviews** | Dynamic feedback system with admin approval workflow |
| **Blog/Resources** | Health articles, educational content, news |
| **Floating Contact Button** | Quick call/WhatsApp/email access on mobile |
| **SEO Optimized** | Dynamic meta tags, OpenGraph, Twitter cards per route |
| **Analytics** | Web Vitals reporting + analytics integration ready |

### 🔐 Admin Dashboard (`admin-portal`)

| Feature | Description |
|---------|-------------|
| **Authentication** | Supabase Auth with email allowlist, encrypted cookies |
| **Appointment Management** | Calendar view, status tracking, patient details, filtering |
| **Patient Management** | CRUD operations, medical history, treatment tracking |
| **Inventory/Services Management** | Service catalog, pricing, availability, categories |
| **Analytics Dashboard** | Charts, patient metrics, revenue, occupancy rates |
| **Real-time Updates** | Supabase Realtime for live appointment changes |
| **Audit Logging** | Track all admin actions for compliance |
| **Responsive UI** | shadcn/ui + Tailwind CSS, dark mode support |
| **Role-based Access** | Secure routes with middleware protection |
| **Data Export/Backup** | Automated backup, CSV/PDF export |

---

## 🛠️ Tech Stack

### Patient Portal
| Category | Technology |
|----------|------------|
| **Framework** | React 19 + Vite 8 |
| **Routing** | React Router DOM v7 |
| **Styling** | Tailwind CSS v3.4 + PostCSS |
| **State** | React Context + Hooks |
| **Backend** | Supabase (Auth, Database, Realtime) |
| **Maps** | Leaflet + React-Leaflet (location finder) |
| **Analytics** | Web Vitals + analytics provider agnostic |
| **Security** | DOMPurify, CryptoJS, Zod validation |
| **Linting** | ESLint 10 + React Hooks plugin |

### Admin Dashboard
| Category | Technology |
|----------|------------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 + shadcn/ui |
| **UI Components** | Radix UI primitives, Lucide icons |
| **Charts** | Recharts |
| **Calendar** | React Big Calendar + date-fns |
| **Backend** | Supabase SSR (Server + Browser clients) |
| **Auth** | Supabase Auth + middleware protection |
| **Encryption** | CryptoJS (cookie encryption) |
| **Notifications** | Sonner (toasts) |
| **Animations** | Framer Motion |

### Shared Infrastructure
| Service | Purpose |
|---------|---------|
| **Supabase** | PostgreSQL database, Auth, Realtime, Storage |
| **Vercel** | Hosting, Analytics, Edge Functions (recommended) |
| **GitHub** | Version control, CI/CD |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommend 20+ LTS)
- **pnpm** or **npm** (pnpm recommended)
- **Supabase Account** – [Create a project](https://supabase.com)
- **Hosting Account** (Vercel, Netlify, etc.)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/healthcare-platform.git
cd healthcare-platform
```

### 2. Configure Environment Variables

#### Patient Portal (`patient-portal/.env`)

```env
# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# Security
VITE_API_SECRET=your-32-char-encryption-key

# Staff Access (for admin routes on patient portal)
VITE_STAFF_EMAIL=admin@yourclinic.com

# Optional: Analytics
VITE_ANALYTICS_ID=your-analytics-id
```

#### Admin Portal (`admin-portal/.env.local`)

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Optional: Service Role Key (for server-only operations)
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Optional: SMS/Notifications
TWILIO_ACCOUNT_SID=your-twilio-sid
TWILIO_AUTH_TOKEN=your-twilio-token
TWILIO_PHONE_NUMBER=+1234567890
```

### 3. Install Dependencies

```bash
# Patient portal
cd patient-portal
pnpm install

# Admin portal
cd ../admin-portal
pnpm install
```

### 4. Run Development Servers

```bash
# Terminal 1 - Patient portal (port 5173)
cd patient-portal
pnpm dev

# Terminal 2 - Admin portal (port 3000)
cd admin-portal
pnpm dev
```

### 5. Access Applications

- **Patient Portal**: http://localhost:5173
- **Admin Dashboard**: http://localhost:3000

---

## 🗄️ Database Schema (Supabase)

Key tables for a healthcare platform:

```sql
-- Patient feedback & reviews
CREATE TABLE patient_feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author_name TEXT NOT NULL,
  email TEXT,
  rating INT CHECK (rating BETWEEN 1 AND 5),
  feedback_text TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Newsletter subscribers
CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Appointments
CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  preferred_date DATE NOT NULL,
  preferred_time TIME NOT NULL,
  service_type TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Services / Treatments catalog
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  category TEXT,
  description TEXT,
  price DECIMAL(10,2),
  duration_minutes INT,
  is_active BOOLEAN DEFAULT true,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Patient records
CREATE TABLE patients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  date_of_birth DATE,
  medical_history TEXT,
  insurance_provider TEXT,
  insurance_policy_number TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Staff/Doctors
CREATE TABLE staff (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  role TEXT, -- doctor, nurse, admin, receptionist
  specialization TEXT,
  schedule JSONB, -- availability
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

> **Note**: Run the SQL migrations in your Supabase SQL Editor. Enable Row Level Security (RLS) policies as needed for production.

---

## 📦 Build & Deploy

### Build for Production

```bash
# Patient portal
cd patient-portal
pnpm build

# Admin portal
cd ../admin-portal
pnpm build
```

### Deploy to Vercel (Recommended)

1. **Push to GitHub** – Connect your repo to Vercel
2. **Configure Projects** – Create two Vercel projects:
   - `patient-portal` → Framework: Vite, Root: `patient-portal`
   - `admin-portal` → Framework: Next.js, Root: `admin-portal`
3. **Add Environment Variables** – Copy from `.env` files
4. **Deploy** – Vercel auto-detects build settings

### Environment Variables on Hosting Platform

| Project | Variables |
|---------|-----------|
| `patient-portal` | `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_API_SECRET`, `VITE_STAFF_EMAIL` |
| `admin-portal` | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `TWILIO_*` |

---

## 🔒 Security Features

- **Encrypted Auth Storage** – CryptoJS AES encryption for auth tokens in localStorage/cookies
- **Email Allowlist** – Admin routes restricted to authorized staff emails
- **Input Validation** – Zod schemas on all forms (client & server)
- **XSS Protection** – DOMPurify sanitization for user-generated content
- **RLS Policies** – Supabase Row Level Security on all tables
- **HTTPS Only** – Enforced via hosting platform
- **Security Headers** – Configured in platform config files

---

## 🧪 Testing & Quality

```bash
# Lint patient portal
cd patient-portal
pnpm lint

# Lint admin portal
cd ../admin-portal
pnpm lint

# Type check admin portal
pnpm tsc --noEmit
```

---

## 📁 Key Configuration Files

| File | Purpose |
|------|---------|
| `patient-portal/vite.config.js` | Vite config, plugins, aliases |
| `patient-portal/tailwind.config.js` | Tailwind theme, colors, fonts |
| `patient-portal/vercel.json` | Vercel routing, headers, rewrites |
| `admin-portal/next.config.ts` | Next.js config, images, headers |
| `admin-portal/tailwind.config.ts` | Tailwind v4 config |
| `admin-portal/components.json` | shadcn/ui configuration |
| `admin-portal/middleware.ts` | Auth protection for admin routes |

---

## 🎨 Design System (Customizable)

### Color Palette (CSS Variables)

```css
/* Primary - Trust Blue */
--color-primary: #0D6EFD;
--color-primary-container: #D6E4FF;

/* Secondary - Care Teal */
--color-secondary: #14A3A3;
--color-secondary-container: #CCF2F2;

/* Semantic */
--color-surface: #FFFFFF;
--color-surface-container: #F8F9FA;
--color-on-surface: #1A1C1E;
--color-on-surface-variant: #494D4F;

/* Status Colors */
--color-success: #198754;
--color-warning: #FFC107;
--color-error: #DC3545;
--color-info: #0DCAF0;
```

### Typography

- **Display**: `font-display-lg` (Inter, variable weight)
- **Headline**: `font-headline-md` (Inter, 600)
- **Body**: `text-body-lg` / `text-body-md` (Inter, 400)
- **Labels**: `font-label-md` (Inter, 500)

> **Customize**: Update `tailwind.config.js` (patient) and `tailwind.config.ts` (admin) with your brand colors, fonts, and spacing.

---

## 🏥 Adapting for Your Specialty

This template works for various healthcare domains:

| Specialty | Adaptation Notes |
|-----------|------------------|
| **General Clinic** | Use as-is, customize services list |
| **Dental** | Replace hearing aids with dental treatments, add smile gallery |
| **Dermatology** | Add treatment catalog, before/after gallery (with consent) |
| **Physiotherapy** | Add exercise library, progress tracking |
| **Diagnostics/Lab** | Add test catalog, report portal, home collection booking |
| **Multi-specialty Hospital** | Add department routing, doctor profiles, bed availability |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new treatment comparison feature
fix: resolve appointment booking validation bug
docs: update deployment guide
style: improve hero slider animations
refactor: extract reusable button component
test: add unit tests for feedback form
chore: update dependencies
```

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Supabase** – Backend-as-a-Service platform
- **Vercel** – Hosting and analytics
- **shadcn/ui** – Beautiful, accessible component library
- **Tailwind CSS** – Utility-first styling
- **React Leaflet** – Interactive maps
- **Recharts** – Composable charting library
- **Radix UI** – Unstyled, accessible primitives

---

## 📞 Template Customization Guide

To customize this template for your clinic:

1. **Branding**: Update colors in Tailwind configs, replace logos in `public/` and `src/assets/`
2. **Content**: Edit page components in `src/pages/` (patient) and `src/app/admin/` (admin)
3. **Services**: Modify `services` table schema and `Services.jsx`/`HearingAids.jsx` equivalents
4. **Contact Info**: Update `SettingsContext.jsx` and footer/contact components
5. **Images**: Replace placeholder images in `public/` with your own
6. **SEO**: Update meta titles in `DocumentMetaUpdater` (patient) and `metadata` exports (admin)

---

## 📊 Project Status

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.4/4-38B2AC?logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?logo=supabase)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel)

---

> Built as a production-ready healthcare platform template. Customize, deploy, and scale for your medical practice.