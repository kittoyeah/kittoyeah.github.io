# SabaiHub Design System

**Product:** Operation Relaxing — multi-tenant massage shop SaaS  
**Company:** SabaiHub  
**Version:** 1.0 (exploration)

---

## About

Operation Relaxing is a multi-tenant SaaS platform for massage shop management. It handles appointments, staff scheduling, payments, commissions, vouchers, client records, and SMS reminders. The app is built for shop owners, managers, and therapists — primarily used in Thailand, with i18n support for EN/TH/ZH-CN.

**Source repository:** `kittoyeah/operation-relaxing` (GitHub)  
**Design system docs in repo:** `docs/design-system/DESIGN_SYSTEM.md`, `DESIGN_SYSTEM_USAGE.md`  
**Token source:** `packages/design-tokens/tokens.json`  
**Global styles:** `apps/web/src/app/globals.css`  
**Tailwind config:** `apps/web/tailwind.config.ts`

---

## Products / Surfaces

| Surface | Notes |
|---|---|
| **Web App** (Next.js) | Primary product — shop management dashboard with sidebar nav, calendar, client & staff management |
| **Booking Page** (public) | Customer-facing online booking flow, per-shop |

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **Professional but warm** — this is a wellness / spa context. Language should feel calm, reassuring, efficient.
- **Direct and functional** — UI copy is concise. Labels are short nouns ("Appointments", "Clients", "Roster").
- **Not casual** — no emoji in UI, no exclamation points in system UI. Docs may use emoji headers.
- **Sentence case everywhere** — nav items, buttons, form labels all use sentence case, not Title Case or ALL CAPS (except badge labels / status codes).
- **First person for system messages:** "Your appointment has been confirmed." User actions: imperative ("Book appointment", "Add client").
- **i18n-first:** All visible strings are translated. Thai is the primary non-English locale.

### Copy Examples
- Button labels: `Book appointment`, `Add client`, `Save changes`, `Cancel`, `Delete`
- Status labels: `Confirmed`, `Pending`, `Cancelled`, `No-show`, `Checked in`
- Nav: `Dashboard`, `Appointments`, `Clients`, `Staff Hub`, `Payments`, `Vouchers`, `Reports`, `Settings`
- Empty states: short noun phrases describing what's missing, with a primary CTA

### Emoji Usage
- **None in UI** — emoji are not used in the app interface
- **Used sparingly in documentation** for section headers only (🚀, 📚, etc.)

---

## VISUAL FOUNDATIONS

### Color System
The palette is grounded in **earthy forest greens** and **warm creams/tans**. It evokes a natural, calm, spa-like atmosphere.

**Primary Brand Color:** Forest green `hsl(140 35% 35%)` — used for CTAs, active nav, links, primary actions  
**Secondary:** Soft sage `hsl(100 15% 86%)` — hover states, chips, secondary buttons  
**Background:** Warm off-white `hsl(60 5% 95%)` — main app canvas  
**Card:** Warm cream `hsl(40 15% 95%)` — elevated surfaces  
**Sidebar:** Warm beige `hsl(40 15% 91%)` — slightly darker than background  
**Accent:** Warm tan `hsl(35 35% 80%)` — hover highlights  
**Muted:** Sage gray `hsl(100 10% 88%)` — disabled states, subtle backgrounds

**Semantic:** Success (green), Warning (amber `hsl(34 90% 50%)`), Info (teal `hsl(198 70% 38%)`), Destructive (red `hsl(0 60% 50%)`)  
**Status colors:** Booked → teal, Checked-in → amber, Completed → green, Cancelled → red, No-show → red  
**Spark:** Lime green `hsl(78 85% 45%)` — for AI/special features

Dark mode: near-black green base `hsl(140 30% 5%)`, elevated surfaces at `hsl(140 25% 8%)`.

### Typography
- **Sans:** Noto Sans — all UI text, body, headings. Chosen for multilingual support (Thai, Chinese).
- **Serif:** Noto Serif — decorative/marketing moments only (marketing pages, emphasis).
- **Mono:** Noto Sans Mono — appointment IDs, codes, technical data.
- **Scale:** Slightly compressed (base ~15px, not 16px). `xs` = 11.5px through `6xl` = 54px.
- **Headings:** `font-semibold tracking-tight` — clean, not heavy.
- **Body:** `font-normal` 400 weight. `font-medium` 500 for emphasis.

### Spacing
4px grid. Common: `p-4` (16px), `p-6` (24px), `p-8` (32px). Custom tokens at 18 (72px), 88 (352px), 128 (512px).

### Border Radius
- Buttons: `rounded-md` (6px)
- Cards: `rounded-lg` (8px)
- Modals: `rounded-xl` (12px)
- Badges, pills: `rounded-full`
- Base radius token: `--radius: 0.5rem` (8px)

### Shadows
Very subtle — thin single shadows, low opacity (0.09–0.43 black). Not dramatic. Cards use `shadow-sm`, modals `shadow-xl`. No colored shadows except `primary/20` on brand elements.

### Backgrounds
- Flat color fills only — no gradients, no textures, no background images in the app shell
- Cards are elevated cream on warm off-white — subtle contrast
- Sidebar is a distinct warm beige, separated from main content by a border

### Animation
- `ease-out` on accordion open/close (0.2s)
- Chevron rotation on expand: CSS `transition-transform`
- Reduced-motion: all animations disabled for `prefers-reduced-motion`
- No bounces, no springs — functional, calm transitions

### Hover & Press States
- Buttons: `hover:bg-primary/90` — slight darken
- Ghost/nav: `hover:bg-sidebar-accent` or `hover:bg-accent` — fill with warm tan
- No scale transforms on hover
- Focus: `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`

### Cards
- Background: `bg-card` (warm cream)
- Rounded: `rounded-lg`
- Shadow: `shadow-sm` (subtle)
- Border: `border border-border` (optional)
- Padding: `p-6`

### Imagery
- No brand photography or illustrations found in repo
- No iconography beyond Lucide React icons
- Avatar fallbacks use initials on a `bg-primary/10` base

### Iconography
See ICONOGRAPHY section below.

---

## ICONOGRAPHY

**Icon library:** Lucide React — stroke-based, 16×16px at 1px stroke weight in UI  
**Usage:** `h-4 w-4` in nav/buttons, `h-5 w-5` for slightly larger contexts  
**Style:** Outline/stroke only. No filled icons, no icon fonts, no SVG sprites.  
**CDN:** Available at `https://unpkg.com/lucide-react` or `lucide.dev`

**Key icons used:**
- `LayoutDashboard` — Dashboard
- `Calendar` — Appointments
- `Users` — Clients
- `Users2` — Staff Hub
- `DollarSign` — Payments
- `Ticket` — Vouchers
- `Gift` — Promotions
- `FileText` — Reports
- `Settings` — Settings
- `Sparkles` — AI / Onboarding
- `Globe` — Language switcher
- `Menu` — Mobile nav toggle
- `ChevronRight` / `ChevronDown` — Expand/collapse
- `Check`, `Lock`, `RotateCcw` — Onboarding states

No custom SVG icons or brand marks found in the public assets directory.

---

## File Index

```
/
├── README.md                   ← This file
├── SKILL.md                    ← Agent skill definition
├── colors_and_type.css         ← CSS custom properties for all tokens
├── assets/                     ← Brand assets (logos, icons, images)
├── preview/                    ← Design System tab cards
│   ├── colors-brand.html
│   ├── colors-neutral.html
│   ├── colors-semantic.html
│   ├── colors-status.html
│   ├── colors-sidebar.html
│   ├── type-families.html
│   ├── type-scale.html
│   ├── type-weights.html
│   ├── spacing-tokens.html
│   ├── radius-shadows.html
│   ├── components-buttons.html
│   ├── components-badges.html
│   ├── components-forms.html
│   ├── components-cards.html
│   └── components-status-alerts.html
└── ui_kits/
    └── web/
        ├── README.md
        ├── index.html          ← Interactive web app prototype
        ├── Sidebar.jsx
        ├── Navbar.jsx
        ├── Dashboard.jsx
        ├── Appointments.jsx
        └── Clients.jsx
```
