import { writeFileSync } from 'node:fs';

const cats = [
  { t: 'Language & Framework', hue: 'blue',   items: ['Next.js 16', 'React 19', 'TypeScript'] },
  { t: 'UI',                   hue: 'purple', items: ['Tailwind CSS', 'Radix UI', 'lucide-react', 'sonner', 'cmdk'] },
  { t: 'Data & State',         hue: 'green',  items: ['TanStack Query', 'TanStack Table', 'Prisma', 'Supabase Postgres'] },
  { t: 'Auth',                 hue: 'amber',  items: ['Supabase Auth', 'jose (JWT)'] },
  { t: 'Forms & Validation',   hue: 'teal',   items: ['React Hook Form', 'Zod'] },
  { t: 'Dates & Scheduling',   hue: 'blue',   items: ['date-fns', 'rrule', 'react-day-picker'] },
  { t: 'Email',                hue: 'purple', items: ['Resend'] },
  { t: 'Monitoring',           hue: 'rose',   items: ['Sentry'] },
  { t: 'Testing',              hue: 'green',  items: ['Playwright', 'Testing Library'] },
  { t: 'Tooling',              hue: 'slate',  items: ['ESLint', 'Prisma CLI', 'style-dictionary', 'tsx'] },
  { t: 'Hosting & CI',         hue: 'amber',  items: ['Vercel', 'GitHub'] },
];

const HUE = {
  blue:   { bg: '#EEF3FB', title: '#1F65D3' },
  purple: { bg: '#F1EEF9', title: '#5B43A8' },
  green:  { bg: '#EDF4EE', title: '#2E7D46' },
  amber:  { bg: '#F8F1E3', title: '#8B6318' },
  teal:   { bg: '#E9F3F2', title: '#1E7E74' },
  slate:  { bg: '#EEF0F2', title: '#4A5568' },
  rose:   { bg: '#F9EEEE', title: '#B0413E' },
};

const W = 1600, COLS = 4, MX = 100, GAP = 26;
const CW = (W - MX * 2 - GAP * (COLS - 1)) / COLS; // card width
const CH = 300, ROWGAP = 30, TOP = 250;

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
let cards = '';
cats.forEach((c, i) => {
  const col = i % COLS, row = Math.floor(i / COLS);
  const x = MX + col * (CW + GAP);
  const y = TOP + row * (CH + ROWGAP);
  const h = HUE[c.hue];
  let items = '';
  c.items.forEach((it, j) => {
    items += `<text x="${x + 26}" y="${y + 116 + j * 36}" fill="#181818" font-size="18" font-family="'Space Grotesk', sans-serif">${esc(it)}</text>`;
  });
  cards += `
  <rect x="${x}" y="${y}" width="${CW}" height="${CH}" rx="12" fill="${h.bg}" stroke="#D8D5CF"/>
  <text x="${x + 26}" y="${y + 48}" fill="${h.title}" font-family="'JetBrains Mono', monospace" font-size="14" letter-spacing="1.5">${esc(c.t.toUpperCase())}</text>
  <line x1="${x + 26}" y1="${y + 66}" x2="${x + CW - 26}" y2="${y + 66}" stroke="#D8D5CF"/>
  ${items}`;
});

const H = TOP + 3 * CH + 2 * ROWGAP + 60;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="'Space Grotesk', 'Segoe UI', sans-serif">
  <rect width="${W}" height="${H}" fill="#F5F4F1"/>
  <text x="${MX}" y="120" fill="#6A6A6A" font-family="'JetBrains Mono', monospace" font-size="22" letter-spacing="6">// TECH STACK</text>
  <text x="${MX}" y="180" fill="#181818" font-size="48" font-weight="600" letter-spacing="-1">SabaiHub</text>
  <text x="${MX}" y="218" fill="#555555" font-size="20">The real toolset, straight from package.json.</text>
  ${cards}
</svg>`;

writeFileSync('/Users/chaiyeah/Code/operation-relaxing/../kittoyeah.github.io/assets/sabaihub-techstack.svg', svg);
console.log('written, viewBox 0 0', W, H);
