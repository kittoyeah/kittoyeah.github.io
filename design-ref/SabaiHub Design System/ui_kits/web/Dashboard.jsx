// SabaiHub — Dashboard v3 (dark prop)
const SabaiDashboard = ({ dark }) => {
  const amber = 'hsl(35,85%,52%)';
  const amberDark = 'hsl(30,80%,28%)';
  const primary = dark ? 'hsl(140,35%,48%)' : 'hsl(140,35%,32%)';
  const spark = 'hsl(78,75%,40%)';

  const T = dark ? {
    canvas: 'hsl(140,30%,5%)',
    card: 'hsl(140,25%,8%)',
    fg: 'hsl(40,20%,90%)',
    muted: 'hsl(100,10%,52%)',
    border: 'hsl(140,20%,13%)',
    rowHover: 'hsl(140,22%,11%)',
    tableHead: 'hsl(140,22%,9%)',
    tableBorder: 'hsl(140,18%,11%)',
  } : {
    canvas: 'hsl(40,12%,91%)',
    card: '#fff',
    fg: 'hsl(140,30%,12%)',
    muted: 'hsl(140,8%,42%)',
    border: 'hsl(40,10%,90%)',
    rowHover: 'hsl(40,15%,98%)',
    tableHead: 'hsl(40,10%,97%)',
    tableBorder: 'hsl(40,10%,94%)',
  };

  const stats = [
    { label: 'Appointments today', value: '12', delta: '+3 from yesterday', deltaColor: primary, accentColor: primary, accentLight: dark ? 'hsl(140,30%,14%)' : 'hsl(140,35%,94%)', icon: 'calendar' },
    { label: 'Revenue this month', value: '฿48,200', delta: '+8% from last month', deltaColor: 'hsl(35,85%,55%)', accentColor: amber, accentLight: dark ? 'hsl(35,40%,14%)' : 'hsl(35,85%,95%)', icon: 'dollar' },
    { label: 'Active clients', value: '284', delta: '+12 this week', deltaColor: dark ? 'hsl(78,75%,55%)' : 'hsl(78,60%,32%)', accentColor: dark ? 'hsl(78,75%,50%)' : spark, accentLight: dark ? 'hsl(78,40%,12%)' : 'hsl(78,75%,94%)', icon: 'users' },
    { label: 'Pending payments', value: '฿3,600', delta: '4 invoices outstanding', deltaColor: 'hsl(0,60%,55%)', accentColor: 'hsl(0,60%,50%)', accentLight: dark ? 'hsl(0,35%,13%)' : 'hsl(0,75%,95%)', icon: 'warning' },
  ];

  const appointments = [
    { time: '09:00', client: 'Somchai W.', service: 'Thai Massage 60 min', therapist: 'Nong', status: 'completed', amount: '฿800' },
    { time: '10:30', client: 'Malee P.', service: 'Swedish 90 min', therapist: 'Joy', status: 'checked-in', amount: '฿1,200' },
    { time: '13:00', client: 'David K.', service: 'Deep Tissue 60 min', therapist: 'Fah', status: 'booked', amount: '฿900' },
    { time: '14:30', client: 'Siriporn N.', service: 'Aromatherapy 90 min', therapist: 'Nong', status: 'booked', amount: '฿1,100' },
    { time: '16:00', client: 'John M.', service: 'Thai Massage 90 min', therapist: 'Joy', status: 'booked', amount: '฿1,050' },
  ];

  const statusStyles = {
    booked: { bg: dark ? 'hsl(198,40%,14%)' : 'hsl(198,65%,93%)', fg: dark ? 'hsl(198,65%,72%)' : 'hsl(205,60%,22%)', border: dark ? 'hsl(198,35%,20%)' : 'hsl(198,40%,82%)', label: 'Booked', dot: 'hsl(198,70%,48%)' },
    'checked-in': { bg: dark ? 'hsl(35,45%,14%)' : 'hsl(38,95%,92%)', fg: dark ? 'hsl(35,85%,65%)' : 'hsl(28,85%,24%)', border: dark ? 'hsl(35,40%,22%)' : 'hsl(36,55%,82%)', label: 'Checked in', dot: amber },
    completed: { bg: dark ? 'hsl(148,30%,12%)' : 'hsl(148,40%,92%)', fg: dark ? 'hsl(148,55%,62%)' : 'hsl(152,55%,20%)', border: dark ? 'hsl(148,28%,18%)' : 'hsl(148,25%,80%)', label: 'Completed', dot: dark ? 'hsl(148,55%,48%)' : primary },
    cancelled: { bg: dark ? 'hsl(0,40%,13%)' : 'hsl(0,75%,94%)', fg: dark ? 'hsl(0,70%,65%)' : 'hsl(0,60%,25%)', border: dark ? 'hsl(0,35%,20%)' : 'hsl(0,40%,83%)', label: 'Cancelled', dot: 'hsl(0,60%,50%)' },
  };

  const Icon = ({ name }) => ({
    calendar: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    dollar: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    users: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    warning: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
    plus: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  }[name] || null);

  const chartBars = [38, 52, 47, 65, 58, 80, 63, 76, 55, 88, 81, 95];
  const months = ['J','F','M','A','M','J','J','A','S','O','N','D'];
  const barBase = dark ? 'hsl(140,20%,18%)' : 'hsl(140,18%,82%)';
  const barGood = dark ? 'hsl(140,28%,32%)' : primary;

  return (
    <div style={{ padding: '24px 28px', overflowY: 'auto', flex: 1, background: T.canvas, transition: 'background 0.3s' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 23, fontWeight: 700, color: T.fg, letterSpacing: '-0.025em' }}>Good morning, Kitty</h1>
          <p style={{ margin: '4px 0 0', color: T.muted, fontSize: 13.5 }}>Saturday, April 19 · Lotus Spa Bangkok</p>
        </div>
        <button style={{ background: primary, color: 'hsl(40,15%,95%)', border: 'none', borderRadius: 8, padding: '9px 18px', fontSize: 13.5, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7, boxShadow: `0 2px 8px hsla(140,35%,32%,0.25)` }}>
          <Icon name="plus" /> New booking
        </button>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 20 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: T.card, borderRadius: 10, overflow: 'hidden', boxShadow: dark ? '0 1px 3px hsla(0,0%,0%,0.25)' : '0 1px 3px hsla(0,0%,0%,0.07), 0 1px 2px -1px hsla(0,0%,0%,0.07)', transition: 'background 0.3s' }}>
            <div style={{ height: 3, background: s.accentColor }} />
            <div style={{ padding: '14px 16px' }}>
              {/* Icon top-left, flows into value, label, delta */}
              <div style={{ background: s.accentLight, borderRadius: 8, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                <span style={{ color: s.accentColor }}><Icon name={s.icon} /></span>
              </div>
              <div style={{ fontSize: 30, fontWeight: 800, color: T.fg, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: T.muted, fontWeight: 500, marginBottom: 10 }}>{s.label}</div>
              <div style={{ fontSize: 11.5, color: s.deltaColor, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 3 }}>
                {i < 3
                  ? <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="18 15 12 9 6 15"/></svg>
                  : <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                }
                {s.delta}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 310px', gap: 14 }}>
        {/* Appointments table */}
        <div style={{ background: T.card, borderRadius: 10, overflow: 'hidden', boxShadow: dark ? '0 1px 3px hsla(0,0%,0%,0.25)' : '0 1px 3px hsla(0,0%,0%,0.07)', transition: 'background 0.3s' }}>
          <div style={{ padding: '15px 20px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${T.border}` }}>
            <span style={{ fontWeight: 700, fontSize: 14, color: T.fg }}>Today's appointments</span>
            <button style={{ background: dark ? 'hsl(140,22%,12%)' : 'hsl(40,12%,94%)', border: 'none', borderRadius: 6, padding: '4px 12px', fontSize: 12, color: T.muted, cursor: 'pointer', fontWeight: 500 }}>View all</button>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${T.border}` }}>
                {['Time','Client','Service','Therapist','Status','Amount'].map(h => (
                  <th key={h} style={{ padding: '8px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.05em', background: T.tableHead }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {appointments.map((a, i) => {
                const st = statusStyles[a.status] || statusStyles.booked;
                return (
                  <tr key={i} style={{ borderBottom: i < appointments.length - 1 ? `1px solid ${T.tableBorder}` : 'none' }}
                    onMouseEnter={e => e.currentTarget.style.background = T.rowHover}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <td style={{ padding: '11px 16px', fontSize: 13, fontWeight: 700, color: T.fg, fontFamily: 'monospace' }}>{a.time}</td>
                    <td style={{ padding: '11px 16px', fontSize: 13, fontWeight: 500, color: T.fg }}>{a.client}</td>
                    <td style={{ padding: '11px 16px', fontSize: 12.5, color: T.muted }}>{a.service}</td>
                    <td style={{ padding: '11px 16px', fontSize: 12.5, color: T.muted }}>{a.therapist}</td>
                    <td style={{ padding: '11px 16px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: st.bg, color: st.fg, border: `1px solid ${st.border}`, borderRadius: 9999, padding: '2px 9px', fontSize: 11, fontWeight: 600 }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: st.dot, flexShrink: 0 }} />{st.label}
                      </span>
                    </td>
                    <td style={{ padding: '11px 16px', textAlign: 'right' }}>
                      <div style={{ fontSize: 18, fontWeight: 800, color: T.fg, letterSpacing: '-0.02em', lineHeight: 1 }}>{a.amount}</div>
                      <div style={{ fontSize: 10, color: T.muted, marginTop: 2 }}>{a.status === 'completed' ? 'collected' : 'pending'}</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Revenue chart */}
        <div style={{ background: T.card, borderRadius: 10, padding: '18px 18px 16px', boxShadow: dark ? '0 1px 3px hsla(0,0%,0%,0.25)' : '0 1px 3px hsla(0,0%,0%,0.07)', transition: 'background 0.3s' }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: T.fg, marginBottom: 2 }}>Monthly revenue</div>
          <div style={{ fontSize: 12, color: T.muted, marginBottom: 18 }}>2025 — April highlighted</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 100, marginBottom: 6 }}>
            {chartBars.map((h, i) => {
              const isApril = i === 3;
              const color = isApril ? amber : (h > 70 ? barGood : barBase);
              return <div key={i} style={{ flex: 1, height: `${h}%`, background: color, borderRadius: '3px 3px 0 0', boxShadow: isApril ? `0 2px 6px hsla(35,85%,52%,0.3)` : 'none' }} />;
            })}
          </div>
          <div style={{ display: 'flex', gap: 5, marginBottom: 16 }}>
            {months.map((m, i) => (
              <div key={i} style={{ flex: 1, textAlign: 'center', fontSize: 9, color: i === 3 ? amber : T.muted, fontWeight: i === 3 ? 700 : 400 }}>{m}</div>
            ))}
          </div>
          <div style={{ borderTop: `1px solid ${T.border}`, paddingTop: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <div style={{ fontSize: 11, color: T.muted, marginBottom: 2 }}>YTD Total</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: T.fg, letterSpacing: '-0.03em' }}>฿486,000</div>
                <div style={{ fontSize: 11.5, color: primary, marginTop: 3, fontWeight: 500 }}>↑ 14% vs last year</div>
              </div>
              <div style={{ background: dark ? 'hsl(78,40%,12%)' : 'hsl(78,75%,94%)', border: `1px solid ${dark ? 'hsl(78,35%,20%)' : 'hsl(78,50%,82%)'}`, borderRadius: 9999, padding: '5px 10px', fontSize: 11, fontWeight: 700, color: dark ? 'hsl(78,75%,60%)' : 'hsl(78,60%,28%)' }}>
                On track ✦
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Object.assign(window, { SabaiDashboard });
