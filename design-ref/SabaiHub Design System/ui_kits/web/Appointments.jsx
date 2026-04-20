// SabaiHub — Appointments v3 (dark prop)
const SabaiAppointments = ({ dark }) => {
  const amber = 'hsl(35,85%,52%)';
  const primary = dark ? 'hsl(140,35%,48%)' : 'hsl(140,35%,32%)';

  const T = dark ? {
    canvas: 'hsl(140,30%,5%)',
    card: 'hsl(140,25%,8%)',
    fg: 'hsl(40,20%,90%)',
    muted: 'hsl(100,10%,52%)',
    border: 'hsl(140,20%,13%)',
    rowHover: 'hsl(140,22%,11%)',
    tableHead: 'hsl(140,22%,9%)',
    tableBorder: 'hsl(140,18%,11%)',
    filterBg: 'hsl(140,25%,10%)',
    filterActive: 'hsl(140,25%,8%)',
    exportBtn: 'hsl(140,22%,12%)',
  } : {
    canvas: 'hsl(40,12%,91%)',
    card: '#fff',
    fg: 'hsl(140,30%,12%)',
    muted: 'hsl(140,8%,42%)',
    border: 'hsl(40,10%,90%)',
    rowHover: 'hsl(40,15%,98%)',
    tableHead: 'hsl(40,10%,97%)',
    tableBorder: 'hsl(40,10%,94%)',
    filterBg: 'hsl(100,10%,90%)',
    filterActive: '#fff',
    exportBtn: 'hsl(40,12%,94%)',
  };

  const [filter, setFilter] = React.useState('all');

  const appts = [
    { id: 'APPT-001', date: 'Apr 19', time: '09:00', client: 'Somchai Wongsawat', service: 'Thai Massage', duration: 60, therapist: 'Nong', status: 'completed', amount: 800 },
    { id: 'APPT-002', date: 'Apr 19', time: '10:30', client: 'Malee Pattana', service: 'Swedish Massage', duration: 90, therapist: 'Joy', status: 'checked-in', amount: 1200, notes: 'Soft pressure' },
    { id: 'APPT-003', date: 'Apr 19', time: '13:00', client: 'David Kaczynski', service: 'Deep Tissue', duration: 60, therapist: 'Fah', status: 'booked', amount: 900 },
    { id: 'APPT-004', date: 'Apr 19', time: '14:30', client: 'Siriporn Nakorn', service: 'Aromatherapy', duration: 90, therapist: 'Nong', status: 'booked', amount: 1100, notes: 'Lavender oil only' },
    { id: 'APPT-005', date: 'Apr 19', time: '16:00', client: 'John Morrison', service: 'Thai Massage', duration: 90, therapist: 'Joy', status: 'booked', amount: 1050 },
    { id: 'APPT-006', date: 'Apr 18', time: '11:00', client: 'Pranee Siriwan', service: 'Hot Stone', duration: 90, therapist: 'Fah', status: 'cancelled', amount: 1400 },
    { id: 'APPT-007', date: 'Apr 18', time: '15:00', client: 'Wei Chen', service: 'Swedish Massage', duration: 60, therapist: 'Joy', status: 'no-show', amount: 800 },
  ];

  const statusStyles = {
    booked: { bg: dark ? 'hsl(198,40%,14%)' : 'hsl(198,65%,93%)', fg: dark ? 'hsl(198,65%,72%)' : 'hsl(205,60%,22%)', border: dark ? 'hsl(198,35%,20%)' : 'hsl(198,40%,82%)', label: 'Booked', dot: 'hsl(198,70%,48%)' },
    'checked-in': { bg: dark ? 'hsl(35,45%,14%)' : 'hsl(38,95%,92%)', fg: dark ? 'hsl(35,85%,65%)' : 'hsl(28,85%,24%)', border: dark ? 'hsl(35,40%,22%)' : 'hsl(36,55%,82%)', label: 'Checked in', dot: amber },
    completed: { bg: dark ? 'hsl(148,30%,12%)' : 'hsl(148,40%,92%)', fg: dark ? 'hsl(148,55%,62%)' : 'hsl(152,55%,20%)', border: dark ? 'hsl(148,28%,18%)' : 'hsl(148,25%,80%)', label: 'Completed', dot: dark ? 'hsl(148,55%,48%)' : primary },
    cancelled: { bg: dark ? 'hsl(0,40%,13%)' : 'hsl(0,75%,94%)', fg: dark ? 'hsl(0,70%,65%)' : 'hsl(0,60%,25%)', border: dark ? 'hsl(0,35%,20%)' : 'hsl(0,40%,83%)', label: 'Cancelled', dot: 'hsl(0,60%,50%)' },
    'no-show': { bg: dark ? 'hsl(0,40%,13%)' : 'hsl(0,75%,94%)', fg: dark ? 'hsl(0,70%,65%)' : 'hsl(0,60%,25%)', border: dark ? 'hsl(0,35%,20%)' : 'hsl(0,40%,83%)', label: 'No-show', dot: 'hsl(0,60%,50%)' },
  };

  const filters = ['all', 'booked', 'checked-in', 'completed', 'cancelled'];
  const visible = filter === 'all' ? appts : appts.filter(a => a.status === filter);

  const Badge = ({ status }) => {
    const s = statusStyles[status] || statusStyles.booked;
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: s.bg, color: s.fg, border: `1px solid ${s.border}`, borderRadius: 9999, padding: '2px 9px', fontSize: 11, fontWeight: 600 }}>
        <span style={{ width: 5, height: 5, borderRadius: '50%', background: s.dot, flexShrink: 0 }} />{s.label}
      </span>
    );
  };

  return (
    <div style={{ padding: '24px 28px', overflowY: 'auto', flex: 1, background: T.canvas, transition: 'background 0.3s' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: T.fg, letterSpacing: '-0.02em' }}>Appointments</h1>
          <p style={{ margin: '3px 0 0', color: T.muted, fontSize: 13 }}>Showing {visible.length} appointments</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{ background: T.exportBtn, border: `1px solid ${T.border}`, borderRadius: 7, padding: '7px 14px', fontSize: 13, color: T.muted, cursor: 'pointer' }}>Export</button>
          <button style={{ background: primary, color: 'hsl(40,15%,95%)', border: 'none', borderRadius: 7, padding: '7px 16px', fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, boxShadow: '0 2px 8px hsla(140,35%,32%,0.25)' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add booking
          </button>
        </div>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 2, background: T.filterBg, borderRadius: 8, padding: 3, width: 'fit-content', marginBottom: 18 }}>
        {filters.map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{
            background: filter === f ? T.filterActive : 'transparent',
            border: 'none', borderRadius: 6, padding: '5px 14px',
            fontSize: 12.5, fontWeight: filter === f ? 600 : 400,
            color: filter === f ? T.fg : T.muted,
            cursor: 'pointer', textTransform: 'capitalize',
            boxShadow: filter === f ? '0 1px 3px hsla(0,0%,0%,0.10)' : 'none',
            transition: 'all 0.12s',
          }}>{f === 'all' ? 'All' : (statusStyles[f]?.label || f)}</button>
        ))}
      </div>

      {/* Table */}
      <div style={{ background: T.card, borderRadius: 10, overflow: 'hidden', boxShadow: dark ? '0 1px 3px hsla(0,0%,0%,0.25)' : '0 1px 3px hsla(0,0%,0%,0.06)', transition: 'background 0.3s' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: T.tableHead, borderBottom: `1px solid ${T.border}` }}>
              {['ID','Date & Time','Client','Service','Therapist','Status','Amount',''].map(h => (
                <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visible.map((a, i) => (
              <tr key={a.id} style={{ borderBottom: i < visible.length - 1 ? `1px solid ${T.tableBorder}` : 'none' }}
                onMouseEnter={e => e.currentTarget.style.background = T.rowHover}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <td style={{ padding: '12px 16px', fontSize: 11.5, color: T.muted, fontFamily: 'monospace' }}>{a.id}</td>
                <td style={{ padding: '12px 16px' }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: T.fg }}>{a.time}</div>
                  <div style={{ fontSize: 11.5, color: T.muted }}>{a.date}</div>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: dark ? 'hsl(140,28%,16%)' : 'hsla(140,35%,35%,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: dark ? 'hsl(140,40%,55%)' : primary, flexShrink: 0 }}>
                      {a.client.split(' ').map(w => w[0]).join('').slice(0,2)}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 500, color: T.fg }}>{a.client}</div>
                      {a.notes && <div style={{ fontSize: 11, color: T.muted }}>{a.notes}</div>}
                    </div>
                  </div>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <div style={{ fontSize: 13, color: T.fg }}>{a.service}</div>
                  <div style={{ fontSize: 11.5, color: T.muted }}>{a.duration} min</div>
                </td>
                <td style={{ padding: '12px 16px', fontSize: 13, color: T.fg }}>{a.therapist}</td>
                <td style={{ padding: '12px 16px' }}><Badge status={a.status} /></td>
                <td style={{ padding: '12px 16px', fontSize: 13, fontWeight: 700, color: T.fg }}>฿{a.amount.toLocaleString()}</td>
                <td style={{ padding: '12px 16px' }}>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.muted, padding: 4, borderRadius: 4, display: 'flex' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
Object.assign(window, { SabaiAppointments });
