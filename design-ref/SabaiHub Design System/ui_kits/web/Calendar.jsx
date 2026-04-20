// SabaiHub — Calendar Screen (Day view)
const SabaiCalendar = ({ dark }) => {
  const amber = 'hsl(35,85%,52%)';
  const primary = dark ? 'hsl(140,35%,48%)' : 'hsl(140,35%,32%)';

  const T = dark ? {
    canvas: 'hsl(140,30%,5%)',
    card: 'hsl(140,25%,8%)',
    fg: 'hsl(40,20%,90%)',
    muted: 'hsl(100,10%,52%)',
    border: 'hsl(140,20%,13%)',
    timeAxisBg: 'hsl(140,28%,7%)',
    headerBg: 'hsl(140,28%,7%)',
    gridLine: 'hsl(140,18%,12%)',
    gridLineHour: 'hsl(140,20%,16%)',
    slotHover: 'hsla(140,30%,100%,0.03)',
    staffHeaderBg: 'hsl(140,25%,9%)',
    summaryBg: 'hsl(140,25%,9%)',
  } : {
    canvas: 'hsl(40,12%,91%)',
    card: '#fff',
    fg: 'hsl(140,30%,12%)',
    muted: 'hsl(140,8%,42%)',
    border: 'hsl(40,10%,88%)',
    timeAxisBg: 'hsl(40,10%,97%)',
    headerBg: '#fff',
    gridLine: 'hsl(40,10%,93%)',
    gridLineHour: 'hsl(40,10%,88%)',
    slotHover: 'hsla(140,35%,35%,0.04)',
    staffHeaderBg: 'hsl(40,10%,97%)',
    summaryBg: 'hsl(40,10%,97%)',
  };

  const statusColors = {
    booked:      { bg: dark ? 'hsl(198,45%,16%)' : 'hsl(198,65%,93%)', border: dark ? 'hsl(198,40%,24%)' : 'hsl(198,45%,78%)', fg: dark ? 'hsl(198,65%,72%)' : 'hsl(205,60%,22%)', dot: 'hsl(198,70%,45%)' },
    'checked-in':{ bg: dark ? 'hsl(35,50%,16%)' : 'hsl(38,100%,91%)', border: dark ? 'hsl(35,45%,26%)' : 'hsl(36,60%,76%)', fg: dark ? 'hsl(35,85%,65%)' : 'hsl(28,80%,24%)', dot: amber },
    completed:   { bg: dark ? 'hsl(148,32%,13%)' : 'hsl(148,40%,92%)', border: dark ? 'hsl(148,30%,20%)' : 'hsl(148,30%,76%)', fg: dark ? 'hsl(148,55%,60%)' : 'hsl(152,55%,20%)', dot: dark ? 'hsl(148,50%,46%)' : primary },
    blocked:     { bg: dark ? 'hsl(140,15%,14%)' : 'hsl(40,10%,92%)', border: dark ? 'hsl(140,15%,20%)' : 'hsl(40,10%,82%)', fg: dark ? 'hsl(140,10%,45%)' : 'hsl(140,8%,50%)', dot: 'hsl(140,10%,55%)' },
  };

  // Hours 09:00–19:00, 30min slots
  const START_HOUR = 9;
  const END_HOUR = 19;
  const SLOT_H = 48; // px per 30min
  const HOUR_H = SLOT_H * 2;
  const TIME_W = 52;
  const COL_W = 160;

  const hours = Array.from({ length: (END_HOUR - START_HOUR) * 2 }, (_, i) => {
    const totalMins = START_HOUR * 60 + i * 30;
    const h = Math.floor(totalMins / 60);
    const m = totalMins % 60;
    return `${String(h).padStart(2,'0')}:${m === 0 ? '00' : '30'}`;
  });

  const staff = [
    { name: 'Nong', initials: 'N', color: primary, appts: 4 },
    { name: 'Joy', initials: 'J', color: 'hsl(198,60%,38%)', appts: 3 },
    { name: 'Fah', initials: 'F', color: 'hsl(35,75%,45%)', appts: 2 },
    { name: 'Ploy', initials: 'P', color: 'hsl(278,45%,48%)', appts: 1 },
  ];

  // Appointments: { staffIdx, startMin (from 9:00), durationMin, client, service, status, amount }
  const appointments = [
    { staffIdx: 0, startMin: 0,   dur: 60,  client: 'Somchai W.', service: 'Thai Massage', status: 'completed', amount: '฿800' },
    { staffIdx: 0, startMin: 90,  dur: 90,  client: 'Malee P.',   service: 'Aromatherapy', status: 'checked-in', amount: '฿1,100' },
    { staffIdx: 0, startMin: 210, dur: 60,  client: 'Siriporn N.', service: 'Thai Massage', status: 'booked', amount: '฿800' },
    { staffIdx: 0, startMin: 360, dur: 90,  client: 'Wei C.',     service: 'Deep Tissue', status: 'booked', amount: '฿900' },
    { staffIdx: 1, startMin: 30,  dur: 90,  client: 'David K.',   service: 'Swedish',     status: 'completed', amount: '฿1,200' },
    { staffIdx: 1, startMin: 150, dur: 60,  client: 'John M.',    service: 'Thai Massage', status: 'checked-in', amount: '฿800' },
    { staffIdx: 1, startMin: 300, dur: 120, client: 'Pranee S.',  service: 'Hot Stone',   status: 'booked', amount: '฿1,400' },
    { staffIdx: 2, startMin: 60,  dur: 60,  client: 'Anong T.',   service: 'Swedish',     status: 'completed', amount: '฿1,000' },
    { staffIdx: 2, startMin: 240, dur: 90,  client: 'Chris B.',   service: 'Deep Tissue', status: 'booked', amount: '฿1,100' },
    { staffIdx: 3, startMin: 120, dur: 60,  client: 'Walk-in',    service: 'Thai Massage', status: 'booked', amount: '฿700' },
    // Blocked time
    { staffIdx: 3, startMin: 0,   dur: 60,  client: 'Lunch break', service: '', status: 'blocked', amount: '' },
    { staffIdx: 2, startMin: 180, dur: 30,  client: 'Break', service: '', status: 'blocked', amount: '' },
  ];

  // Current time indicator (10:45 = 105 mins from 9:00)
  const currentMin = 105;
  const currentTop = (currentMin / 30) * SLOT_H;

  const [selectedAppt, setSelectedAppt] = React.useState(null);
  const [view, setView] = React.useState('day');

  const totalRevenue = appointments
    .filter(a => a.status !== 'blocked')
    .reduce((sum, a) => sum + parseInt(a.amount.replace(/[฿,]/g,'') || '0'), 0);

  const ApptBlock = ({ appt, staffColor }) => {
    const top = (appt.startMin / 30) * SLOT_H;
    const height = (appt.dur / 30) * SLOT_H;
    const sc = statusColors[appt.status];
    const isBlocked = appt.status === 'blocked';
    const isShort = height <= SLOT_H;

    return (
      <div
        onClick={() => !isBlocked && setSelectedAppt(appt)}
        style={{
          position: 'absolute',
          top, left: 4, right: 4, height: height - 2,
          background: sc.bg,
          border: `1.5px solid ${sc.border}`,
          borderRadius: 7,
          padding: isShort ? '3px 7px' : '6px 8px',
          cursor: isBlocked ? 'default' : 'pointer',
          overflow: 'hidden',
          transition: 'opacity 0.12s',
          zIndex: 1,
          borderLeft: isBlocked ? `3px solid ${sc.dot}` : `3px solid ${sc.dot}`,
        }}
        onMouseEnter={e => { if (!isBlocked) e.currentTarget.style.opacity = '0.88'; }}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        {isBlocked ? (
          <div style={{ fontSize: 11, color: sc.fg, fontWeight: 500, opacity: 0.7 }}>{appt.client}</div>
        ) : (
          <>
            <div style={{ fontSize: isShort ? 11 : 12, fontWeight: 700, color: sc.fg, lineHeight: 1.2, marginBottom: isShort ? 0 : 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{appt.client}</div>
            {!isShort && <div style={{ fontSize: 11, color: sc.fg, opacity: 0.75, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{appt.service}</div>}
            {height >= SLOT_H * 2 && <div style={{ fontSize: 11, fontWeight: 700, color: sc.fg, marginTop: 4 }}>{appt.amount}</div>}
          </>
        )}
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden', background: T.canvas, transition: 'background 0.3s' }}>

      {/* Header bar */}
      <div style={{ background: T.headerBg, borderBottom: `1px solid ${T.border}`, padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0, transition: 'background 0.3s' }}>
        {/* Date nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <button style={{ background: 'none', border: `1px solid ${T.border}`, borderRadius: 6, padding: '4px 8px', cursor: 'pointer', color: T.muted, display: 'flex', alignItems: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <div style={{ fontWeight: 700, fontSize: 15, color: T.fg, padding: '0 6px', minWidth: 160, textAlign: 'center' }}>
            Saturday, Apr 19
          </div>
          <button style={{ background: 'none', border: `1px solid ${T.border}`, borderRadius: 6, padding: '4px 8px', cursor: 'pointer', color: T.muted, display: 'flex', alignItems: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <button style={{ background: T.border, border: 'none', borderRadius: 6, padding: '5px 12px', fontSize: 12, fontWeight: 600, color: T.muted, cursor: 'pointer', marginLeft: 4 }}>Today</button>
        </div>

        {/* View switcher */}
        <div style={{ display: 'flex', gap: 2, background: dark ? 'hsl(140,22%,11%)' : 'hsl(40,10%,91%)', borderRadius: 7, padding: 3, marginLeft: 8 }}>
          {['Day','3-Day','Week'].map(v => (
            <button key={v} onClick={() => setView(v.toLowerCase())} style={{
              background: view === v.toLowerCase() ? T.card : 'transparent',
              border: 'none', borderRadius: 5, padding: '4px 12px',
              fontSize: 12, fontWeight: view === v.toLowerCase() ? 600 : 400,
              color: view === v.toLowerCase() ? T.fg : T.muted,
              cursor: 'pointer', boxShadow: view === v.toLowerCase() ? '0 1px 3px hsla(0,0%,0%,0.08)' : 'none',
              transition: 'all 0.12s', fontFamily: 'inherit',
            }}>{v}</button>
          ))}
        </div>

        <div style={{ flex: 1 }} />

        {/* Daily summary pills */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ background: dark ? 'hsl(148,28%,12%)' : 'hsl(148,40%,92%)', border: `1px solid ${dark ? 'hsl(148,28%,20%)' : 'hsl(148,25%,80%)'}`, borderRadius: 9999, padding: '4px 12px', fontSize: 12, fontWeight: 600, color: dark ? 'hsl(148,55%,60%)' : 'hsl(152,55%,20%)' }}>
            9 bookings
          </div>
          <div style={{ background: dark ? 'hsl(35,40%,14%)' : 'hsl(35,90%,93%)', border: `1px solid ${dark ? 'hsl(35,38%,22%)' : 'hsl(35,60%,78%)'}`, borderRadius: 9999, padding: '4px 12px', fontSize: 12, fontWeight: 700, color: dark ? 'hsl(35,85%,65%)' : 'hsl(30,80%,28%)' }}>
            ฿{totalRevenue.toLocaleString()}
          </div>
        </div>

        {/* Add booking */}
        <button style={{ background: primary, color: 'hsl(40,15%,95%)', border: 'none', borderRadius: 7, padding: '7px 14px', fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, boxShadow: '0 2px 6px hsla(140,35%,32%,0.25)', fontFamily: 'inherit' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add booking
        </button>
      </div>

      {/* Calendar grid */}
      <div style={{ flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>

        {/* Staff header row */}
        <div style={{ display: 'flex', flexShrink: 0, position: 'sticky', top: 0, zIndex: 10, background: T.staffHeaderBg, borderBottom: `1px solid ${T.border}`, transition: 'background 0.3s' }}>
          {/* Time gutter header */}
          <div style={{ width: TIME_W, flexShrink: 0, borderRight: `1px solid ${T.border}` }} />
          {/* Staff columns */}
          {staff.map((s, i) => (
            <div key={s.name} style={{ width: COL_W, flexShrink: 0, borderRight: `1px solid ${T.border}`, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 30, height: 30, borderRadius: '50%', background: `${s.color}22`, border: `2px solid ${s.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12, color: s.color, flexShrink: 0 }}>
                {s.initials}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13, color: T.fg }}>{s.name}</div>
                <div style={{ fontSize: 10.5, color: T.muted }}>{s.appts} bookings</div>
              </div>
            </div>
          ))}
        </div>

        {/* Time grid body */}
        <div style={{ display: 'flex', flex: 1 }}>
          {/* Time axis */}
          <div style={{ width: TIME_W, flexShrink: 0, borderRight: `1px solid ${T.border}`, background: T.timeAxisBg, position: 'relative', transition: 'background 0.3s' }}>
            {hours.map((t, i) => (
              <div key={t} style={{ height: SLOT_H, borderBottom: `1px solid ${i % 2 === 1 ? T.gridLine : T.gridLineHour}`, display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', paddingRight: 8, paddingTop: 3 }}>
                {t.endsWith(':00') && (
                  <span style={{ fontSize: 10, color: T.muted, fontFamily: 'monospace', fontWeight: 500 }}>{t}</span>
                )}
              </div>
            ))}
          </div>

          {/* Staff columns */}
          {staff.map((s, staffIdx) => (
            <div key={s.name} style={{ width: COL_W, flexShrink: 0, borderRight: `1px solid ${T.border}`, position: 'relative' }}>
              {/* Slot lines */}
              {hours.map((t, i) => (
                <div key={t} style={{ height: SLOT_H, borderBottom: `1px solid ${i % 2 === 1 ? T.gridLine : T.gridLineHour}`, transition: 'background 0.1s' }}
                  onMouseEnter={e => e.currentTarget.style.background = T.slotHover}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                />
              ))}
              {/* Appointments */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
                {appointments.filter(a => a.staffIdx === staffIdx).map((appt, j) => (
                  <ApptBlock key={j} appt={appt} staffColor={s.color} />
                ))}
              </div>
              {/* Current time indicator */}
              {staffIdx === 0 && (
                <div style={{ position: 'absolute', top: currentTop, left: 0, right: 0, height: 2, background: amber, zIndex: 5, pointerEvents: 'none' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: amber, position: 'absolute', left: -4, top: -3 }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Appointment detail popover */}
      {selectedAppt && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => setSelectedAppt(null)}>
          <div style={{ position: 'absolute', inset: 0, background: 'hsla(0,0%,0%,0.4)' }} />
          <div onClick={e => e.stopPropagation()} style={{
            position: 'relative', background: T.card, borderRadius: 12,
            padding: '20px 24px', width: 320,
            boxShadow: '0 20px 40px -4px hsla(0,0%,0%,0.25)',
            border: `1px solid ${T.border}`,
          }}>
            <button onClick={() => setSelectedAppt(null)} style={{ position: 'absolute', top: 14, right: 14, background: 'none', border: 'none', cursor: 'pointer', color: T.muted, display: 'flex' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div style={{ marginBottom: 16 }}>
              {(() => { const sc = statusColors[selectedAppt.status]; return (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: sc.bg, color: sc.fg, border: `1px solid ${sc.border}`, borderRadius: 9999, padding: '3px 10px', fontSize: 11, fontWeight: 600, marginBottom: 10 }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: sc.dot }} />
                  {selectedAppt.status.charAt(0).toUpperCase() + selectedAppt.status.slice(1).replace('-', ' ')}
                </span>
              ); })()}
              <div style={{ fontSize: 17, fontWeight: 700, color: T.fg, marginBottom: 2 }}>{selectedAppt.client}</div>
              <div style={{ fontSize: 13, color: T.muted }}>{selectedAppt.service} · {selectedAppt.dur} min</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 18, padding: '12px', background: dark ? 'hsl(140,22%,11%)' : 'hsl(40,10%,96%)', borderRadius: 8 }}>
              <div>
                <div style={{ fontSize: 10, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 3 }}>Time</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: T.fg }}>{String(START_HOUR + Math.floor(selectedAppt.startMin/60)).padStart(2,'0')}:{String(selectedAppt.startMin%60).padStart(2,'0')}</div>
              </div>
              <div>
                <div style={{ fontSize: 10, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 3 }}>Amount</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: T.fg }}>{selectedAppt.amount}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ flex: 1, background: dark ? 'hsl(140,22%,13%)' : 'hsl(40,10%,93%)', border: `1px solid ${T.border}`, borderRadius: 7, padding: '8px', fontSize: 12.5, fontWeight: 600, color: T.muted, cursor: 'pointer', fontFamily: 'inherit' }}>Edit</button>
              <button style={{ flex: 1, background: primary, border: 'none', borderRadius: 7, padding: '8px', fontSize: 12.5, fontWeight: 700, color: 'hsl(40,15%,95%)', cursor: 'pointer', fontFamily: 'inherit' }}>Check in</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
Object.assign(window, { SabaiCalendar });
