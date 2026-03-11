import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import emailjs from 'emailjs-com'

const SERVICE_ID  = 'service_218aoh9'
const TEMPLATE_ID = 'template_clm8nwi'
const PUBLIC_KEY  = '1N5NqInKsEjA9_V6z'

const SOCIALS = [
  {
    label: 'GitHub', handle: 'github.com/sefffo',
    href: 'https://github.com/sefffo',
    icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>),
  },
  {
    label: 'LinkedIn', handle: 'Seif Lotfy',
    href: 'https://www.linkedin.com/in/seif-lotfy-769451310/',
    icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>),
  },
  {
    label: 'Email', handle: 'saiflotfy26@gmail.com',
    href: 'mailto:saiflotfy26@gmail.com',
    icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>),
  },
  {
    label: 'Phone', handle: '+20 127 793 4002',
    href: 'tel:+201277934002',
    icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>),
  },
]

type Status = 'idle' | 'sending' | 'sent' | 'error'

// ─────────────────────────────────────────────────────────────
// The key fix: wrapper has relative+padding-top for label space.
// The input itself also has padding-top so the typed value sits
// BELOW the floated label, not under it.
// Label top=0 when lifted (sits at top of wrapper), top=padding-top when resting (sits on the line).
// ─────────────────────────────────────────────────────────────
const LABEL_HEIGHT = 18  // px — space reserved above the input line

function FloatingInput({
  label, type = 'text', value, onChange, placeholder, required,
}: {
  label: string; type?: string; value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string; required?: boolean
}) {
  const [focused, setFocused] = useState(false)
  const lifted = focused || value.length > 0

  return (
    <div className="relative" style={{ paddingTop: LABEL_HEIGHT }}>
      <label
        className="absolute left-0 pointer-events-none select-none transition-all duration-200 leading-none"
        style={{
          top:           lifted ? 0 : LABEL_HEIGHT,
          fontSize:      lifted ? '9px'  : '14px',
          letterSpacing: lifted ? '0.4em': '0',
          textTransform: lifted ? 'uppercase' : 'none',
          color:         focused ? '#7c6aff' : '#4b5563',
          transform:     lifted ? 'none' : 'translateY(-1px)',
        }}
      >
        {label}
      </label>

      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={focused ? placeholder : ''}
        onFocus={() => setFocused(true)}
        onBlur={()  => setFocused(false)}
        className="w-full bg-transparent text-[#e8eaf0] text-sm focus:outline-none transition-colors py-2"
        style={{ borderBottom: `1.5px solid ${focused ? '#7c6aff' : '#1e2235'}` }}
      />

      <div
        className="absolute bottom-0 left-0 h-[1.5px] transition-all duration-300"
        style={{
          width:      focused ? '100%' : '0%',
          background: 'linear-gradient(90deg, #7c6aff, #a78bfa)',
          boxShadow:  '0 0 8px #7c6aff66',
        }}
      />
    </div>
  )
}

function FloatingTextarea({
  label, value, onChange, placeholder, rows = 5, required,
}: {
  label: string; value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder: string; rows?: number; required?: boolean
}) {
  const [focused, setFocused] = useState(false)
  const lifted = focused || value.length > 0

  return (
    <div className="relative" style={{ paddingTop: LABEL_HEIGHT }}>
      <label
        className="absolute left-0 pointer-events-none select-none transition-all duration-200 leading-none"
        style={{
          top:           lifted ? 0 : LABEL_HEIGHT,
          fontSize:      lifted ? '9px'  : '14px',
          letterSpacing: lifted ? '0.4em': '0',
          textTransform: lifted ? 'uppercase' : 'none',
          color:         focused ? '#7c6aff' : '#4b5563',
          transform:     lifted ? 'none' : 'translateY(-1px)',
        }}
      >
        {label}
      </label>

      <textarea
        rows={rows}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={focused ? placeholder : ''}
        onFocus={() => setFocused(true)}
        onBlur={()  => setFocused(false)}
        className="w-full bg-transparent text-[#e8eaf0] text-sm focus:outline-none resize-none transition-colors py-2"
        style={{ borderBottom: `1.5px solid ${focused ? '#7c6aff' : '#1e2235'}` }}
      />

      <div
        className="absolute bottom-0 left-0 h-[1.5px] transition-all duration-300"
        style={{
          width:      focused ? '100%' : '0%',
          background: 'linear-gradient(90deg, #7c6aff, #a78bfa)',
          boxShadow:  '0 0 8px #7c6aff66',
        }}
      />
    </div>
  )
}

export default function Contact() {
  const ref      = useRef<HTMLDivElement>(null)
  const formRef  = useRef<HTMLFormElement>(null)
  const planeRef = useRef<SVGSVGElement>(null)
  const btnRef   = useRef<HTMLButtonElement>(null)

  const [status, setStatus] = useState<Status>('idle')
  const [errMsg,  setErrMsg]  = useState('')
  const [form,    setForm]    = useState({ name: '', email: '', message: '' })

  useGSAP(() => {
    gsap.from('.cl-tag',    { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' })
    gsap.from('.cl-title',  { y: 40, opacity: 0, duration: 0.8, delay: 0.1,  ease: 'power3.out' })
    gsap.from('.cl-sub',    { y: 20, opacity: 0, duration: 0.6, delay: 0.25, ease: 'power3.out' })
    gsap.from('.cl-social', { y: 16, opacity: 0, stagger: 0.08, duration: 0.5, delay: 0.35, ease: 'power3.out' })
    gsap.from('.cr-inner',  { x: 40, opacity: 0, duration: 0.8, delay: 0.2,  ease: 'power3.out' })
  }, { scope: ref })

  const animatePlane = () => {
    if (!planeRef.current || !btnRef.current) return
    const tl = gsap.timeline()
    tl.to(planeRef.current, { x: 60, y: -60, rotation: 45, opacity: 0, duration: 0.5, ease: 'power2.in' })
    tl.to(btnRef.current,   { scale: 0.97, duration: 0.15 }, 0)
    tl.set(planeRef.current, { x: -50, y: 50, rotation: -45 })
    tl.to(planeRef.current, { x: 0, y: 0, rotation: 0, opacity: 1, duration: 0.4, ease: 'power3.out' })
    tl.to(btnRef.current,   { scale: 1, duration: 0.2, ease: 'back.out(1.5)' }, '-=0.3')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return
    setStatus('sending')
    setErrMsg('')
    animatePlane()
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: form.name, email: form.email, message: form.message,
      }, PUBLIC_KEY)
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setErrMsg('Failed to send. Email me at saiflotfy26@gmail.com')
      setStatus('error')
    }
  }

  return (
    <div
      ref={ref}
      className="page-enter flex flex-col lg:flex-row"
      style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)' }}
    >

      {/* ══ LEFT PANEL ══ */}
      <div
        className="relative lg:w-[42%] flex flex-col justify-between overflow-hidden"
        style={{
          padding: 'clamp(2rem, 5vw, 5rem)',
          background: 'linear-gradient(160deg, #12151d 0%, #0d0f14 60%, #0a0b10 100%)',
          // border-bottom on mobile, border-right on desktop
          borderBottom: '1px solid #1e2235',
        }}
      >
        {/* keep border-right on lg+ via inline override isn't possible in Tailwind inline,
            so we use a pseudo via a positioned div */}
        <div
          className="hidden lg:block absolute right-0 top-0 bottom-0 w-px"
          style={{ background: '#1e2235' }}
        />

        {/* glow blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, #7c6aff18 0%, transparent 70%)' }} />
        <div className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 rounded-full"
          style={{ background: 'radial-gradient(circle, #a78bfa0e 0%, transparent 70%)' }} />

        {/* content */}
        <div>
          <p className="cl-tag section-label mb-8">004 / Contact</p>
          <h1 className="cl-title font-black uppercase leading-[0.85] tracking-tight text-white mb-6"
            style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}>
            Let&rsquo;s<br /><span className="grad-text">Talk.</span>
          </h1>
          <p className="cl-sub text-[#4b5563] text-sm leading-relaxed max-w-xs mb-10">
            Open to full-time roles, freelance projects, internships, and collaborations.
            Based in Cairo &mdash; available remotely worldwide.
          </p>

          <div className="flex flex-col gap-5">
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                className="cl-social group flex items-center gap-4"
              >
                <span className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#1e2235] text-[#374151] group-hover:bg-[#7c6aff]/20 group-hover:text-[#a78bfa] transition-all duration-300">
                  {s.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#374151] mb-0.5">{s.label}</p>
                  <p className="text-[#9ca3af] text-sm truncate group-hover:text-white transition-colors duration-200">{s.handle}</p>
                </div>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="flex-shrink-0 text-[#1e2235] group-hover:text-[#7c6aff] transition-all duration-200 opacity-0 group-hover:opacity-100">
                  <path d="M7 17 17 7M7 7h10v10"/>
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* bottom */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]" />
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#4b5563]">Available for work</span>
          </div>
          <div className="glow-line mb-5" />
          <a href="/Saif-Lotfy_CV.pdf" download="Saif-Lotfy_CV.pdf"
            className="cv-btn inline-flex items-center gap-3 border border-[#7c6aff]/30 text-[#a78bfa] text-[10px] tracking-[0.3em] uppercase font-bold px-5 py-3 rounded-lg hover:bg-[#7c6aff] hover:text-white hover:border-[#7c6aff] transition-all duration-300">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Resume
          </a>
        </div>
      </div>

      {/* ══ RIGHT PANEL ══ */}
      <div
        className="flex-1 flex items-start lg:items-center justify-center"
        style={{ padding: 'clamp(2rem, 5vw, 5rem)', background: '#0d0f14' }}
      >
        <div className="cr-inner w-full max-w-lg">

          {status === 'sent' ? (
            <div className="flex flex-col items-center justify-center gap-6 py-16 text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: '#7c6aff14', border: '1px solid #7c6aff44', boxShadow: '0 0 40px #7c6aff22' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#7c6aff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-black text-3xl uppercase tracking-tight mb-3">Message Sent! ✉️</p>
                <p className="text-[#4b5563] text-sm">I’ll get back to you as soon as possible.</p>
              </div>
              <button onClick={() => setStatus('idle')}
                className="mt-2 text-[10px] tracking-[0.35em] uppercase text-[#374151] hover:text-[#7c6aff] transition-colors">
                Send another →
              </button>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <p className="section-label mb-3">Get in touch</p>
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                  Send a <span className="grad-text">Message</span>
                </h2>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <FloatingInput
                    label="Name" value={form.name} placeholder="Your full name" required
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  />
                  <FloatingInput
                    label="Email" type="email" value={form.email} placeholder="you@example.com" required
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  />
                </div>

                <FloatingTextarea
                  label="Message" value={form.message} rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  required
                />

                {status === 'error' && (
                  <p className="text-[#ef4444] text-xs flex items-center gap-2">
                    <span>⚠</span> {errMsg}
                  </p>
                )}

                {/* send button */}
                <button
                  ref={btnRef}
                  type="submit"
                  disabled={status === 'sending'}
                  className="group relative w-full overflow-hidden rounded-xl flex items-center justify-between disabled:opacity-60 transition-all duration-300 active:scale-[0.99]"
                  style={{
                    background: 'linear-gradient(135deg, #7c6aff, #6c5ce7)',
                    padding: '13px 18px',
                    boxShadow: '0 4px 20px #7c6aff33',
                  }}
                >
                  <span className="pointer-events-none absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <span className="text-white font-bold text-sm uppercase tracking-[0.25em]">
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </span>

                  <span className="relative w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors duration-300">
                    {status === 'sending' ? (
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    ) : (
                      <svg
                        ref={planeRef}
                        width="15" height="15" viewBox="0 0 24 24"
                        fill="none" stroke="white" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                        style={{ transformOrigin: 'center' }}
                      >
                        <path d="m22 2-7 20-4-9-9-4 20-7z"/>
                        <path d="M22 2 11 13"/>
                      </svg>
                    )}
                  </span>
                </button>

              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
