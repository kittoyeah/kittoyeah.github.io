// SabaiHub — Clients v3 (dark prop)
const SabaiClients = ({ dark }) => {
  const amber = 'hsl(35,85%,52%)';
  const primary = dark ? 'hsl(140,35%,48%)' : 'hsl(140,35%,32%)';

  const T = dark ? {
    canvas: 'hsl(140,30%,5%)',
    card: 'hsl(140,25%,8%)',
    fg: 'hsl(40,20%,90%)',
    muted: 'hsl(100,10%,52%)',
    border: 'hsl(140,20%,13%)',
    statsBg: 'hsl(140,22%,10%)',
    inputBg: 'hsl(140,25%,8%)',
    inputBorder: 'hsl(140,20%,16%)',
  } : {
    canvas: 'hsl(40,12%,91%)',
    card: '#fff',
    fg: 'hsl(140,30%,12%)',
    muted: 'hsl(140,8%,42%)',
    border: 'hsl(40,10%,90%)',
    statsBg: 'hsl(40,10%,95%)',
    inputBg: '#fff',
    inputBorder: 'hsl(40,10%,88%)',
  };

  const [search, setSearch] = React.useState('');

  const clients = [
    { name: 'Somchai Wongsawat', phone: '+66 81 234 5678', sessions: 14, spent: 14200, lastVisit: 'Apr 19', tags: ['VIP', 'Thai massage'], therapist: 'Nong', color: 0 },
    { name: 'Malee Pattana', phone: '+66 89 876 5432', sessions: 8, spent: 9600, lastVisit: 'Apr 19', tags: ['Swedish'], therapist: 'Joy', color: 1 },
    { name: 'David Kaczynski', phone: '+1 415 555 0101', sessions: 3, spent: 2700, lastVisit: 'Apr 19', tags: ['Deep tissue'], therapist: 'Fah', color: 2 },
    { name: 'Siriporn Nakorn', phone: '+66 92 111 2233', sessions: 22, spent: 28600, lastVisit: 'Apr 18', tags: ['VIP', 'Aromatherapy'], therapist: 'Nong', color: 3 },
    { name: 'John Morrison', phone: '+44 7911 123456', sessions: 5, spent: 5250, lastVisit: 'Apr 18', tags: ['Thai massage'], therapist: 'Joy', color: 0 },
    { name: 'Wei Chen', phone: '+86 138 0013 8000', sessions: 2, spent: 1600, lastVisit: 'Apr 18', tags: [], therapist: 'Joy', color: 1 },
    { name: 'Pranee Siriwan', phone: '+66 84 456 7890', sessions: 11, spent: 16500, lastVisit: 'Apr 17', tags: ['VIP', 'Hot stone'], therapist: 'Fah', color: 2 },
  ];

  const avatarData = dark ? [
    { bg: 'hsl(140,28%,16%)', fg: 'hsl(140,40%,58%)' },
    { bg: 'hsl(198,35%,14%)', fg: 'hsl(198,65%,60%)' },
    { bg: 'hsl(35,40%,16%)', fg: 'hsl(35,85%,58%)' },
    { bg: 'hsl(148,30%,14%)', fg: 'hsl(148,55%,55%)' },
  ] : [
    { bg: 'hsla(140,35%,35%,0.1)', fg: 'hsl(140,35%,32%)' },
    { bg: 'hsla(198,70%,38%,0.1)', fg: 'hsl(198,70%,35%)' },
    { bg: 'hsla(35,85%,52%,0.12)', fg: 'hsl(30,70%,35%)' },
    { bg: 'hsla(148,45%,34%,0.1)', fg: 'hsl(148,45%,30%)' },
  ];

  const filtered = clients.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ padding: '24px 28px', overflowY: 'auto', flex: 1, background: T.canvas, transition: 'background 0.3s' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: T.fg, letterSpacing: '-0.02em' }}>Clients</h1>
          <p style={{ margin: '3px 0 0', color: T.muted, fontSize: 13 }}>{clients.length} total clients</p>
        </div>
        <button style={{ background: primary, color: 'hsl(40,15%,95%)', border: 'none', borderRadius: 7, padding: '7px 16px', fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, boxShadow: '0 2px 8px hsla(140,35%,32%,0.25)' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add client
        </button>
      </div>

      {/* Search */}
      <div style={{ position: 'relative', marginBottom: 20, maxWidth: 340 }}>
        <svg style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: T.muted }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search clients…"
          style={{ width: '100%', boxSizing: 'border-box', padding: '8px 12px 8px 34px', border: `1px solid ${T.inputBorder}`, borderRadius: 8, fontSize: 13.5, background: T.inputBg, color: T.fg, outline: 'none', fontFamily: 'inherit', transition: 'background 0.3s' }} />
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
        {filtered.map((c, i) => {
          const av = avatarData[c.color];
          return (
            <div key={c.name}
              style={{ background: T.card, border: `1px solid ${T.border}`, borderLeft: `3px solid transparent`, borderRadius: 10, padding: '16px 18px', boxShadow: dark ? '0 1px 3px hsla(0,0%,0%,0.25)' : '0 1px 3px hsla(0,0%,0%,0.05)', cursor: 'pointer', transition: 'box-shadow 0.15s, border-left-color 0.15s, background 0.3s' }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = dark ? '0 4px 16px hsla(0,0%,0%,0.35)' : '0 6px 18px -2px hsla(0,0%,0%,0.11)';
                e.currentTarget.style.borderLeftColor = dark ? 'hsl(140,35%,48%)' : 'hsl(140,35%,38%)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = dark ? '0 1px 3px hsla(0,0%,0%,0.25)' : '0 1px 3px hsla(0,0%,0%,0.05)';
                e.currentTarget.style.borderLeftColor = 'transparent';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: av.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: av.fg, flexShrink: 0 }}>
                  {c.name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase()}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: T.fg }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: T.muted }}>{c.phone}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 0, marginBottom: 12, background: T.statsBg, borderRadius: 7, overflow: 'hidden', border: `1px solid ${T.border}` }}>
                <div style={{ flex: 1, padding: '8px 12px', borderRight: `1px solid ${T.border}` }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: T.fg }}>{c.sessions}</div>
                  <div style={{ fontSize: 10.5, color: T.muted }}>Sessions</div>
                </div>
                <div style={{ flex: 1, padding: '8px 12px', borderRight: `1px solid ${T.border}` }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: T.fg }}>฿{(c.spent/1000).toFixed(1)}k</div>
                  <div style={{ fontSize: 10.5, color: T.muted }}>Total spent</div>
                </div>
                <div style={{ flex: 1, padding: '8px 12px' }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: T.fg }}>{c.lastVisit}</div>
                  <div style={{ fontSize: 10.5, color: T.muted }}>Last visit</div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                  {c.tags.map(t => (
                    <span key={t} style={{
                      background: t === 'VIP' ? (dark ? 'hsl(78,40%,12%)' : 'hsl(78,60%,92%)') : T.statsBg,
                      color: t === 'VIP' ? (dark ? 'hsl(78,75%,60%)' : 'hsl(78,50%,22%)') : T.muted,
                      border: `1px solid ${t === 'VIP' ? (dark ? 'hsl(78,35%,20%)' : 'hsl(78,40%,80%)') : T.border}`,
                      borderRadius: 9999, padding: '2px 8px', fontSize: 11, fontWeight: 600,
                    }}>{t}</span>
                  ))}
                </div>
                <span style={{ fontSize: 11.5, color: T.muted }}>→ {c.therapist}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
Object.assign(window, { SabaiClients });
