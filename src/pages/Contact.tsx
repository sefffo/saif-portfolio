import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const socials = [
  { label: 'GitHub',    href: 'https://github.com/sefffo',                                         desc: 'github.com/sefffo'            },
  { label: 'LinkedIn',  href: 'https://linkedin.com/in/seif-lotfy',                                desc: 'linkedin.com/in/seif-lotfy'   },
  { label: 'Email',     href: 'mailto:saiflotfy26@gmail.com',                                      desc: 'saiflotfy26@gmail.com'        },
  { label: 'Phone',     href: 'tel:+201277934002',                                                  desc: '+20 127 793 4002'             },
]

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [sent, setSent] = useState(false)

  useGSAP(() => {
    gsap.from('.c-reveal', { y: 40, opacity: 0, stagger: 0.08, duration: 0.75, ease: 'power3.out' })
  }, { scope: ref })

  return (
    <div ref={ref} className="pt-32 pb-28 page-enter">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        <p className="c-reveal section-label mb-5">004 / Contact</p>
        <h1 className="c-reveal text-5xl md:text-7xl font-black text-white uppercase leading-[0.9] tracking-tight mb-5">
          Let's <span className="grad-text">Talk.</span>
        </h1>
        <p className="c-reveal text-[#6b7280] text-sm mb-20 max-w-lg leading-relaxed">
          Open to full-time roles, freelance projects, internships, and collaborations.
          Drop a message or reach out directly.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Form */}
          <div className="c-reveal">
            {sent ? (
              <div className="card p-8 rounded-lg text-center">
                <span className="text-3xl mb-4 block">✓</span>
                <p className="text-white font-semibold mb-2">Message sent!</p>
                <p className="text-[#6b7280] text-sm">I'll get back to you shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true) }}
                className="flex flex-col gap-5"
              >
                {[
                  { id: 'name',    label: 'Name',    type: 'text',  placeholder: 'Your name'  },
                  { id: 'email',   label: 'Email',   type: 'email', placeholder: 'your@email.com' },
                ].map(f => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="text-[10px] tracking-[0.3em] uppercase text-[#374151] block mb-2">{f.label}</label>
                    <input id={f.id} type={f.type} placeholder={f.placeholder} required
                      className="w-full bg-[#13161e] border border-[#1f2434] text-[#e8eaf0] text-sm px-4 py-3 rounded focus:outline-none focus:border-[#7c6aff] transition-colors duration-200 placeholder-[#2a3045]" />
                  </div>
                ))}
                <div>
                  <label htmlFor="msg" className="text-[10px] tracking-[0.3em] uppercase text-[#374151] block mb-2">Message</label>
                  <textarea id="msg" rows={5} placeholder="Tell me about your project..." required
                    className="w-full bg-[#13161e] border border-[#1f2434] text-[#e8eaf0] text-sm px-4 py-3 rounded focus:outline-none focus:border-[#7c6aff] transition-colors duration-200 placeholder-[#2a3045] resize-none" />
                </div>
                <button type="submit"
                  className="bg-[#7c6aff] text-white text-[11px] tracking-[0.2em] uppercase font-bold py-3.5 rounded hover:bg-[#6c5ce7] transition-colors duration-300">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Socials + CV */}
          <div className="c-reveal flex flex-col gap-5">
            {socials.map(s => (
              <a key={s.label} href={s.href}
                target={s.href.startsWith('mailto') || s.href.startsWith('tel') ? undefined : '_blank'}
                rel="noreferrer"
                className="card p-5 rounded-lg flex items-center justify-between group hover:border-[#7c6aff]/40 transition-all duration-300">
                <div>
                  <p className="text-white text-sm font-semibold mb-0.5 group-hover:text-[#a78bfa] transition-colors">{s.label}</p>
                  <p className="text-[#4b5563] text-xs">{s.desc}</p>
                </div>
                <span className="text-[#2a3045] group-hover:text-[#7c6aff] transition-colors duration-300 text-lg">↗</span>
              </a>
            ))}

            <a
              href="/Saif-Lotfy_CV.pdf"
              download="Saif-Lotfy_CV.pdf"
              className="cv-btn mt-2 bg-[#7c6aff] text-white text-[11px] tracking-[0.2em] uppercase font-bold py-4 rounded text-center hover:bg-[#6c5ce7] transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v7M3 5l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
