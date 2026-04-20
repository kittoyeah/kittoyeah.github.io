// SabaiHub — Sidebar v3 (dark prop: ultra-dark in dark mode)
const SabaiSidebar = ({ active, onNav, collapsed, dark }) => {
  const nav = [
    { id: 'dashboard', label: 'Dashboard', icon: 'grid' },
    { id: 'calendar', label: 'Appointments', icon: 'calendar', sub: ['Calendar view', 'Manage list', 'Add booking'] },
    { id: 'clients', label: 'Clients', icon: 'users' },
    { id: 'staff', label: 'Staff Hub', icon: 'users2', sub: ['Profiles', 'Roster', 'Payouts'] },
    { id: 'payments', label: 'Payments', icon: 'dollar' },
    { id: 'vouchers', label: 'Vouchers', icon: 'ticket' },
    { id: 'reports', label: 'Reports', icon: 'file' },
  ];
  const settings = [{ id: 'settings', label: 'Settings', icon: 'settings' }];

  const Icon = ({ name, size = 15 }) => {
    const icons = {
      grid: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>,
      calendar: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
      users: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
      users2: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
      dollar: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
      ticket: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 5v2"/><path d="M15 11v2"/><path d="M15 17v2"/><path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4V7a2 2 0 0 1 2-2z"/></svg>,
      file: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
      settings: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
      sparkle: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>,
      chevron: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>,
    };
    return icons[name] || null;
  };

  const [expanded, setExpanded] = React.useState(['appointments']);
  const toggleExpand = (id) => setExpanded(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);

  const amber = 'hsl(35,85%,52%)';
  // Sidebar is always dark — just adjust depth
  const bg = dark ? 'hsl(140,40%,5%)' : 'hsl(140,38%,13%)';
  const borderColor = dark ? 'hsla(140,20%,100%,0.06)' : 'hsla(140,20%,100%,0.08)';
  const sectionFg = 'hsla(100,20%,100%,0.28)';
  const itemFg = 'hsla(100,15%,100%,0.60)';
  const activeItemFg = '#fff';
  const activeBg = dark ? 'hsla(140,30%,100%,0.10)' : 'hsla(140,30%,100%,0.08)';
  const hoverBg = 'hsla(140,30%,100%,0.06)';

  const NavItem = ({ item }) => {
    const isActive = active === item.id;
    const isExpanded = expanded.includes(item.id);
    const hasSub = item.sub && item.sub.length > 0;
    return (
      <div>
        <div
          onClick={() => { if (hasSub) toggleExpand(item.id); onNav(item.id); }}
          style={{
            display: 'flex', alignItems: 'center', gap: 9,
            padding: collapsed ? '8px 0' : '7px 10px 7px 12px',
            borderRadius: 7, cursor: 'pointer', userSelect: 'none',
            color: isActive ? activeItemFg : itemFg,
            background: isActive ? activeBg : 'transparent',
            fontWeight: isActive ? 600 : 400,
            fontSize: 13.5, lineHeight: '20px',
            transition: 'background 0.1s, color 0.1s',
            justifyContent: collapsed ? 'center' : 'flex-start',
            marginBottom: 1, position: 'relative',
          }}
          onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = hoverBg; }}
          onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
        >
          {isActive && <span style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: 3, height: 20, background: amber, borderRadius: '0 3px 3px 0' }} />}
          <span style={{ flexShrink: 0, color: isActive ? amber : itemFg }}><Icon name={item.icon} /></span>
          {!collapsed && <span style={{ flex: 1 }}>{item.label}</span>}
          {!collapsed && hasSub && (
            <span style={{ opacity: 0.4, transform: isExpanded ? 'rotate(90deg)' : 'none', transition: 'transform 0.15s' }}>
              <Icon name="chevron" size={12} />
            </span>
          )}
        </div>
        {!collapsed && hasSub && isExpanded && (
          <div style={{ marginLeft: 24, borderLeft: `1px solid ${borderColor}`, paddingLeft: 10, marginBottom: 2 }}>
            {item.sub.map(s => (
              <div key={s} style={{ padding: '5px 8px', fontSize: 12.5, color: 'hsla(100,15%,100%,0.42)', cursor: 'pointer', borderRadius: 5, transition: 'color 0.1s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'hsla(100,15%,100%,0.75)'}
                onMouseLeave={e => e.currentTarget.style.color = 'hsla(100,15%,100%,0.42)'}
              >{s}</div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{
      width: collapsed ? 52 : 220, flexShrink: 0,
      background: bg,
      display: 'flex', flexDirection: 'column',
      padding: '0 8px',
      height: '100%', overflowY: 'auto',
      transition: 'width 0.2s, background 0.3s',
    }}>
      <div style={{ padding: collapsed ? '16px 0 14px' : '16px 6px 14px', display: 'flex', alignItems: 'center', gap: 10, justifyContent: collapsed ? 'center' : 'flex-start', borderBottom: `1px solid ${borderColor}`, marginBottom: 12 }}>
        {/* Lotus mark — สบาย = relax */}
        <div style={{ width: 30, height: 30, borderRadius: 8, background: `linear-gradient(135deg, ${amber} 0%, hsl(30,90%,60%) 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 2px 8px hsla(35,85%,52%,0.35)` }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 20C12 20 4.5 15.5 4.5 9.5C4.5 7 6.5 5 9 5C10.5 5 11.5 5.8 12 7C12.5 5.8 13.5 5 15 5C17.5 5 19.5 7 19.5 9.5C19.5 15.5 12 20 12 20Z" fill="hsl(30,40%,15%)" fillOpacity="0.9"/>
            <path d="M12 20C12 20 8.5 13.5 12 7.5C15.5 13.5 12 20 12 20Z" fill="hsl(30,40%,15%)" fillOpacity="0.45"/>
          </svg>
        </div>
        {!collapsed && (
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
              <span style={{ fontWeight: 800, fontSize: 14, color: '#fff', letterSpacing: '-0.02em' }}>SabaiHub</span>
              <span style={{ fontSize: 11, color: amber, fontWeight: 600, opacity: 0.85 }}>สบาย</span>
            </div>
            <div style={{ fontSize: 10.5, color: 'hsla(100,20%,100%,0.32)', marginTop: 1 }}>Lotus Spa Bangkok</div>
          </div>
        )}
      </div>

      {!collapsed && <div style={{ fontSize: 10, fontWeight: 600, color: sectionFg, letterSpacing: '0.07em', textTransform: 'uppercase', padding: '0 12px 6px' }}>Menu</div>}
      <div style={{ flex: 1 }}>
        {nav.map(item => <NavItem key={item.id} item={item} />)}
      </div>

      <div style={{ borderTop: `1px solid ${borderColor}`, paddingTop: 10, marginTop: 8, paddingBottom: 12 }}>
        {settings.map(item => <NavItem key={item.id} item={item} />)}
        {!collapsed && (
          <div style={{ marginTop: 12, borderRadius: 8, border: `1px solid hsla(78,60%,60%,0.2)`, padding: '10px 12px', background: 'hsla(78,60%,50%,0.07)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
              <span style={{ color: 'hsl(78,85%,55%)' }}><Icon name="sparkle" /></span>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'hsl(78,85%,72%)' }}>Setup guide</span>
            </div>
            <div style={{ height: 3, borderRadius: 9999, background: 'hsla(78,60%,50%,0.2)', marginBottom: 6 }}>
              <div style={{ height: '100%', width: '60%', borderRadius: 9999, background: 'hsl(78,75%,50%)' }} />
            </div>
            <div style={{ fontSize: 11, color: 'hsla(78,30%,100%,0.40)' }}>3 of 5 steps complete</div>
          </div>
        )}
      </div>
    </div>
  );
};
Object.assign(window, { SabaiSidebar });
