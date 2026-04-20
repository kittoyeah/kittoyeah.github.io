// SabaiHub — Navbar v3 (dark prop + working theme toggle button)
const SabaiNavbar = ({ shopName = 'Lotus Spa Bangkok', onMenuClick, screen, dark, onToggleDark }) => {
  const [userOpen, setUserOpen] = React.useState(false);
  const amber = 'hsl(35,85%,52%)';

  const T = dark ? {
    bg: 'hsl(140,28%,7%)',
    border: 'hsl(140,20%,13%)',
    fg: 'hsl(40,20%,88%)',
    muted: 'hsl(100,10%,52%)',
    divider: 'hsl(140,20%,14%)',
    pillBorder: 'hsl(140,18%,22%)',
    hoverBg: 'hsl(140,25%,12%)',
    dropdownBg: 'hsl(140,28%,8%)',
    dropdownBorder: 'hsl(140,20%,14%)',
    dropdownSectionBg: 'hsl(140,25%,11%)',
    hoverRowBg: 'hsl(140,25%,11%)',
    destructiveHover: 'hsl(0,40%,14%)',
  } : {
    bg: '#fff',
    border: 'hsl(40,10%,90%)',
    fg: 'hsl(140,30%,12%)',
    muted: 'hsl(140,8%,42%)',
    divider: 'hsl(40,10%,90%)',
    pillBorder: 'hsl(40,10%,86%)',
    hoverBg: 'hsl(40,10%,95%)',
    dropdownBg: '#fff',
    dropdownBorder: 'hsl(40,10%,90%)',
    dropdownSectionBg: 'hsl(40,12%,96%)',
    hoverRowBg: 'hsl(40,10%,96%)',
    destructiveHover: 'hsl(0,75%,97%)',
  };

  const screenLabels = {
    dashboard: 'Dashboard', appointments: 'Appointments', clients: 'Clients',
    staff: 'Staff Hub', payments: 'Payments', vouchers: 'Vouchers',
    reports: 'Reports', settings: 'Settings',
  };

  return (
    <header style={{
      height: 52, flexShrink: 0,
      background: T.bg,
      borderBottom: `1px solid ${T.border}`,
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 22px',
      position: 'sticky', top: 0, zIndex: 10,
      transition: 'background 0.3s, border-color 0.3s',
    }}>
      {/* Left */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button onClick={onMenuClick}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 5px', color: T.muted, display: 'flex', alignItems: 'center', borderRadius: 6 }}
          onMouseEnter={e => e.currentTarget.style.background = T.hoverBg}
          onMouseLeave={e => e.currentTarget.style.background = 'none'}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <div style={{ width: 1, height: 18, background: T.divider }} />
        <span style={{ color: T.muted, fontSize: 13 }}>{shopName}</span>
        <span style={{ color: T.muted, opacity: 0.4 }}>/</span>
        <span style={{ fontWeight: 600, fontSize: 13, color: T.fg }}>{screenLabels[screen] || 'Dashboard'}</span>
      </div>

      {/* Right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {/* Bell */}
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', borderRadius: 7, color: T.muted, position: 'relative', display: 'flex' }}
          onMouseEnter={e => e.currentTarget.style.background = T.hoverBg}
          onMouseLeave={e => e.currentTarget.style.background = 'none'}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <span style={{ position: 'absolute', top: 5, right: 5, width: 6, height: 6, background: amber, borderRadius: '50%', border: `1.5px solid ${T.bg}` }} />
        </button>

        {/* Lang pill */}
        <button style={{ background: 'transparent', border: `1px solid ${T.pillBorder}`, borderRadius: 9999, padding: '4px 11px', fontSize: 11, fontWeight: 600, color: T.muted, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5 }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          EN
        </button>

        {/* Dark mode toggle — functional */}
        <button
          onClick={onToggleDark}
          title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          style={{
            background: dark ? 'hsl(140,30%,14%)' : 'hsl(40,15%,93%)',
            border: `1px solid ${T.pillBorder}`,
            cursor: 'pointer', padding: '5px 10px', borderRadius: 9999,
            color: dark ? 'hsl(78,75%,62%)' : T.muted,
            display: 'flex', alignItems: 'center', gap: 5,
            fontSize: 11, fontWeight: 600,
            transition: 'all 0.2s',
          }}
        >
          {dark
            ? <><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg> Light</>
            : <><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg> Dark</>
          }
        </button>

        <div style={{ width: 1, height: 18, background: T.divider }} />

        {/* Avatar */}
        <div style={{ position: 'relative' }}>
          <button onClick={() => setUserOpen(!userOpen)}
            style={{ width: 30, height: 30, borderRadius: '50%', background: `${amber}22`, border: `1.5px solid ${amber}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontWeight: 700, fontSize: 11, color: 'hsl(30,70%,32%)' }}>
            KY
          </button>
          {userOpen && (
            <div style={{ position: 'absolute', right: 0, top: 38, background: T.dropdownBg, border: `1px solid ${T.dropdownBorder}`, borderRadius: 10, padding: '6px', boxShadow: '0px 10px 24px -4px hsla(0,0%,0%,0.18)', minWidth: 200, zIndex: 100 }}>
              <div style={{ padding: '8px 10px', background: T.dropdownSectionBg, borderRadius: 7, marginBottom: 4 }}>
                <div style={{ fontWeight: 600, fontSize: 13, color: T.fg }}>Kitty Yeah</div>
                <div style={{ fontSize: 11, color: T.muted }}>owner@sabaihub.com</div>
              </div>
              <div style={{ padding: '7px 10px', fontSize: 13, color: T.fg, cursor: 'pointer', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 8 }}
                onMouseEnter={e => e.currentTarget.style.background = T.hoverRowBg}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Profile
              </div>
              <div style={{ height: 1, background: T.dropdownBorder, margin: '4px 0' }} />
              <div style={{ padding: '7px 10px', fontSize: 13, color: 'hsl(0,60%,52%)', cursor: 'pointer', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 8 }}
                onMouseEnter={e => e.currentTarget.style.background = T.destructiveHover}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                Log out
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
Object.assign(window, { SabaiNavbar });
