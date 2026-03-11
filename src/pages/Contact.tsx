import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

// ─── EmailJS via CDN (no npm needed) ──────────────────────────────────────────
// Add this to your index.html <head>:
// <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
// <script>emailjs.init("YOUR_PUBLIC_KEY")</script>
// OR install: npm install @emailjs/browser
// Then replace sendEmail() with the real call shown below
// ─────────────────────────────────────────────────────────────────────────────

const SOCIALS = [
  {
    label: 'GitHub',
    handle: '@sefffo',
    desc: 'See my projects & commits',
    href: 'https://github.com/sefffo',
    color: '#e8eaf0',
    bg: '#161b22',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    handle: 'Seif Lotfy',
    desc: 'Connect professionally',
    href: 'https://www.linkedin.com/in/seif-lotfy-769451310/',
    color: '#fff',
    bg: '#0a66c2',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    handle: 'saiflotfy26@gmail.com',
    desc: 'Drop me a direct email',
    href: 'mailto:saiflotfy26@gmail.com',
    color: '#fff',
    bg: '#ea4335',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: 'Phone',
    handle: '+20 127 793 4002',
    desc: 'Call or WhatsApp',
    href: 'tel:+201277934002',
    color: '#fff',
    bg: '#22c55e',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
]

type FormState = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  useGSAP(() => {
    gsap.from('.c-h',     { y: 50, opacity: 0, stagger: 0.08, duration: 0.8, ease: 'power3.out' })
    gsap.from('.c-social',{ x: 40, opacity: 0, stagger: 0.1,  duration: 0.7, delay: 0.3, ease: 'power3.out' })
    gsap.from('.c-form',  { x: -40, opacity: 0, duration: 0.7, delay: 0.2, ease: 'power3.out' })
  }, { scope: ref })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')

    try {
      // ── OPTION 1: EmailJS (recommended, free) ──────────────────────────
      // 1. Go to https://emailjs.com → sign up free
      // 2. Add Email Service (Gmail) → copy SERVICE_ID
      // 3. Create Email Template → copy TEMPLATE_ID
      //    Template variables: {{from_name}}, {{from_email}}, {{message}}
      // 4. Copy your PUBLIC_KEY from Account → API Keys
      // 5. Run: npm install @emailjs/browser
      // 6. Uncomment the block below and fill in your IDs:
      //
      // import emailjs from '@emailjs/browser'
      // await emailjs.sendForm(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formRef.current!,
      //   'YOUR_PUBLIC_KEY'
      // )
      //
      // ── OPTION 2: Formspree (even simpler, zero code) ─────────────────
      // 1. Go to https://formspree.io → create form → get endpoint
      // 2. Replace the fetch below with your endpoint:
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section ref={ref} className="page-wrapper pb-28 page-enter">
      <div className="max-w-7xl mx-auto pt-16">

        {/* Header */}
        <p className="c-h section-label mb-4">004 / Contact</p>
        <div className="c-h flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.9] tracking-tight">
            Let&rsquo;s <span className="grad-text">Talk.</span>
          </h1>
          <p className="text-[#4b5563] text-sm leading-relaxed max-w-xs">
            Open to full-time roles, freelance projects, internships, and collaborations.
            Based in Cairo — available remotely worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* ── LEFT: Form ── */}
          <div className="c-form lg:col-span-3">
            <div className="card rounded-2xl p-8 border border-[#1e2235] hover:border-[#272d42] transition-colors duration-300">
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#272d42] mb-8">Send a Message</p>

              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-16 gap-5">
                  <div className="w-16 h-16 rounded-full bg-[#7c6aff]/10 border border-[#7c6aff]/30 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="#7c6aff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-bold text-lg mb-2">Message sent!</p>
                    <p className="text-[#4b5563] text-sm">I’ll get back to you soon.</p>
                  </div>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-[10px] tracking-[0.3em] uppercase text-[#374151] hover:text-[#7c6aff] transition-colors mt-2"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[9px] tracking-[0.4em] uppercase text-[#374151]">Name</label>
                      <input
                        name="from_name"
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                        placeholder="Saif Lotfy"
                        className="bg-[#0d0f14] border border-[#1e2235] text-[#e8eaf0] text-sm px-4 py-3.5 rounded-lg focus:outline-none focus:border-[#7c6aff] transition-colors placeholder-[#1e2235]"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[9px] tracking-[0.4em] uppercase text-[#374151]">Email</label>
                      <input
                        name="from_email"
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                        placeholder="you@example.com"
                        className="bg-[#0d0f14] border border-[#1e2235] text-[#e8eaf0] text-sm px-4 py-3.5 rounded-lg focus:outline-none focus:border-[#7c6aff] transition-colors placeholder-[#1e2235]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] tracking-[0.4em] uppercase text-[#374151]">Message</label>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      placeholder="Tell me about your project or opportunity..."
                      className="bg-[#0d0f14] border border-[#1e2235] text-[#e8eaf0] text-sm px-4 py-3.5 rounded-lg focus:outline-none focus:border-[#7c6aff] transition-colors placeholder-[#1e2235] resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-[#ef4444] text-xs tracking-wide">
                      ⚠ Something went wrong. Please email me directly at saiflotfy26@gmail.com
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="relative overflow-hidden bg-[#7c6aff] text-white text-[11px] tracking-[0.3em] uppercase font-bold py-4 rounded-lg hover:bg-[#6c5ce7] transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-3"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m22 2-7 20-4-9-9-4 20-7z"/>
                          <path d="M22 2 11 13"/>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ── RIGHT: Social cards ── */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            <p className="text-[10px] tracking-[0.4em] uppercase text-[#272d42] mb-2">Find Me On</p>

            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="c-social group flex items-center gap-4 card p-5 rounded-xl hover:border-[#272d42] transition-all duration-300 hover:-translate-y-0.5"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: s.bg, color: s.color, boxShadow: `0 4px 20px ${s.bg}44` }}
                >
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-semibold mb-0.5 group-hover:text-[#a78bfa] transition-colors">
                    {s.label}
                  </p>
                  <p className="text-[#4b5563] text-xs truncate">{s.handle}</p>
                  <p className="text-[#272d42] text-[10px] mt-0.5">{s.desc}</p>
                </div>
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="text-[#1e2235] group-hover:text-[#7c6aff] transition-colors flex-shrink-0"
                >
                  <path d="M7 17 17 7M7 7h10v10"/>
                </svg>
              </a>
            ))}

            {/* Resume download */}
            <a
              href="/Saif-Lotfy_CV.pdf"
              download="Saif-Lotfy_CV.pdf"
              className="cv-btn mt-2 group flex items-center justify-center gap-3 border border-[#7c6aff]/30 bg-[#7c6aff]/5 text-[#a78bfa] text-[11px] tracking-[0.3em] uppercase font-bold py-4 rounded-xl hover:bg-[#7c6aff] hover:text-white hover:border-[#7c6aff] transition-all duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>

            {/* Availability badge */}
            <div className="mt-2 flex items-center gap-3 px-5 py-4 rounded-xl border border-[#1e2235]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22c55e]" />
              </span>
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#4b5563]">
                Available for work — Cairo / Remote
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
