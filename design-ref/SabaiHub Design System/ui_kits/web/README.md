# SabaiHub Web UI Kit

High-fidelity click-through prototype of the Operation Relaxing web app.

## Screens

| Screen | File | Notes |
|---|---|---|
| Dashboard | `Dashboard.jsx` | Stats, today's appointments table, revenue chart |
| Appointments | `Appointments.jsx` | Filterable appointment table with status chips |
| Clients | `Clients.jsx` | Card grid with search, client stats |

## Usage

Open `index.html` in a browser. Click sidebar items to switch screens.

## Components

- `Sidebar.jsx` — collapsible nav with sections, sub-items, onboarding widget
- `Navbar.jsx` — breadcrumb, notification bell, language pill, user menu
- `Dashboard.jsx` — full dashboard screen
- `Appointments.jsx` — appointment management screen
- `Clients.jsx` — client directory screen

## Design tokens

All colors reference `../../colors_and_type.css`. Fonts: Noto Sans (primary), Noto Serif (decorative), Noto Sans Mono (technical). Icons: Lucide React inline SVGs.

## Design notes

The visual language uses:
- Warm off-white `hsl(60,5%,95%)` app canvas
- Cream `hsl(40,15%,96%)` card surfaces
- Forest green `hsl(140,35%,35%)` primary brand
- Sage hover states `hsl(100,15%,86%)`
- Subtle shadows: `0 1px 3px hsla(0,0%,0%,0.06)`
- Rounded corners: cards 10px, buttons 7px, badges full
