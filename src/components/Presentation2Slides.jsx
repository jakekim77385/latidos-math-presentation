import React from 'react'
import { PanamaFlag } from './PanamaFlag.jsx'

/* ─── Slide 1: Title ─── */
export function P2Slide1({ c }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div className="title-logo-row">
        <PanamaFlag />
        <span className="title-org">{c.org}</span>
        <span className="edition-badge-pill">{c.badge}</span>
      </div>
      <h1 className="title-main">{c.titleMain[0]}<br /><em>{c.titleMain[1]}</em></h1>
      <div className="accent-bar" style={{ margin: '1.2rem auto 1.5rem' }}></div>
      <p className="title-sub">{c.titleSub}</p>
      <div className="author-card">
        <div className="author-info">
          <h3>{c.authorName}</h3>
          <p>{c.authorRole}</p>
        </div>
      </div>
    </div>
  )
}

/* ─── Slide 2: Context & Today's Purpose ─── */
export function P2Slide2({ c }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', marginBottom: '1.2rem' }}>
        <div className="eyebrow">{c.s2Eyebrow}</div>
        <h2 className="section-title">{c.s2Title[0]}<br /><em>{c.s2Title[1]}</em></h2>
        <div className="accent-bar" style={{ margin: '0.8rem auto 0' }}></div>
      </div>
      <p className="p2-context-recap">{c.s2Recap}</p>
      <div className="p2-format-box">
        <h3 className="p2-format-title">{c.s2FormatTitle}</h3>
        {c.s2FormatItems.map((item, i) => (
          <div key={i} className="p2-format-item">
            <span className="p2-format-icon">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
      {c.s2Endorsement && <p className="p2-endorsement">{c.s2Endorsement}</p>}
    </div>
  )
}

/* ─── Slide 3: Agenda Overview ─── */
export function P2SlideOverview({ c }) {
  const prevItems = c.sovItems.filter(i => i.type === 'prev')
  const newItems = c.sovItems.filter(i => i.type === 'new')
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>{c.sovTitle}</h2>
      <div className="accent-bar" style={{ margin: '0 auto 1.8rem' }}></div>
      <div className="p2-overview-container">
        <div className="p2-overview-section">
          <div className="p2-overview-label">{c.sovPrevLabel}</div>
          {prevItems.map((item, i) => (
            <div key={i} className="p2-overview-item p2-overview-prev">
              <span className="p2-overview-num">{item.num}</span>
              <span className="p2-overview-title">{item.title}</span>
            </div>
          ))}
        </div>
        <div className="p2-overview-section">
          <div className="p2-overview-label p2-overview-label-new">{c.sovNewLabel}</div>
          {newItems.map((item, i) => (
            <div key={i} className="p2-overview-item p2-overview-new">
              <span className="p2-overview-num">{item.num}</span>
              <span className="p2-overview-title">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Reusable Agenda Slide Component ─── */
function AgendaSlide({ agendaNum, eyebrow, title, context, questions }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', marginBottom: '1.2rem' }}>
        <div className="p2-agenda-badge">{agendaNum}</div>
        <div className="eyebrow red">{eyebrow}</div>
        <h2 className="section-title">{title[0]}<br /><em>{title[1]}</em></h2>
        <div className="accent-bar" style={{ margin: '0.6rem auto 0' }}></div>
      </div>
      <p className="p2-agenda-context">{context}</p>
      <div className="p2-discussion-grid">
        {questions.map((q, i) => (
          <div key={i} className="p2-discussion-card">
            <span className="p2-discussion-icon">{q.icon}</span>
            <h3>{q.question}</h3>
            <p>{q.desc}</p>
            <div className="p2-discussion-cta">💬</div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Slide 3: Agenda 1 — Concept Strengthening ─── */
export function P2Slide3({ c }) {
  return (
    <AgendaSlide
      agendaNum={c.s3AgendaNum}
      eyebrow={c.s3Eyebrow}
      title={c.s3Title}
      context={c.s3Context}
      questions={c.s3Questions}
    />
  )
}

/* ─── Slide 4: Agenda 2 — Student vs Teacher Mode ─── */
export function P2Slide4({ c }) {
  return (
    <AgendaSlide
      agendaNum={c.s4AgendaNum}
      eyebrow={c.s4Eyebrow}
      title={c.s4Title}
      context={c.s4Context}
      questions={c.s4Questions}
    />
  )
}

/* ─── Slide 5: Agenda 3 — Login System ─── */
export function P2Slide5({ c }) {
  return (
    <AgendaSlide
      agendaNum={c.s5AgendaNum}
      eyebrow={c.s5Eyebrow}
      title={c.s5Title}
      context={c.s5Context}
      questions={c.s5Questions}
    />
  )
}

/* ─── Slide 6: Agenda 4 — Participation Process ─── */
export function P2Slide6({ c }) {
  return (
    <AgendaSlide
      agendaNum={c.s6AgendaNum}
      eyebrow={c.s6Eyebrow}
      title={c.s6Title}
      context={c.s6Context}
      questions={c.s6Questions}
    />
  )
}

/* ─── Slide 7: Agenda 5 — Data Usage ─── */
export function P2Slide7({ c }) {
  return (
    <AgendaSlide
      agendaNum={c.s7AgendaNum}
      eyebrow={c.s7Eyebrow}
      title={c.s7Title}
      context={c.s7Context}
      questions={c.s7Questions}
    />
  )
}

/* ─── Slide 8: Closing ─── */
export function P2Slide8({ c }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div className="eyebrow green">{c.s8Eyebrow}</div>
      <h2 className="section-title" style={{ maxWidth: '780px', marginBottom: '0.5rem' }}>
        {c.s8Title[0]}<br /><em>{c.s8Title[1]}</em>
      </h2>
      <div className="accent-bar" style={{ margin: '0.8rem auto 1rem' }}></div>
      <p className="section-sub" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>{c.s8Sub}</p>
      <div className="closing-links">
        <a className="closing-link-card" href="https://jy-matematica-panama.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="link-label">{c.s8L1Label}</div>
          <div className="link-url">jy-matematica-panama.vercel.app</div>
        </a>
        <a className="closing-link-card" href="https://latidos-ninos.vercel.app/p/index.html" target="_blank" rel="noopener noreferrer">
          <div className="link-label">{c.s8L2Label}</div>
          <div className="link-url">latidos-ninos.vercel.app</div>
        </a>
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', fontWeight: 600 }}>
        {c.s8ActionTitle}
      </p>
      <div className="contact-info" style={{ marginTop: '0.8rem' }}>
        <div className="contact-item">jiyun.k.heartitude@gmail.com</div>
        <div className="contact-item">Instagram: @heartitude_ba</div>
      </div>
    </div>
  )
}

/* ─── QR Code Slide ─── */
import { QRCodeSVG } from 'qrcode.react'

export function P2SlideQR() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <QRCodeSVG
        value="https://www.instagram.com/heartitude_ba"
        size={1000}
        level="H"
        includeMargin={false}
        style={{ width: 'min(85vw, 70vh)', height: 'min(85vw, 70vh)' }}
      />
    </div>
  )
}
