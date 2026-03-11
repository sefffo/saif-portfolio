import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  useGSAP(() => {
    gsap.from('.contact-reveal', {
      y: 50, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
    })
  }, { scope: ref })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Wire EmailJS here: emailjs.send('serviceID','templateID', form)
    setSent(true)
  }

  return (
    <div ref={ref} id="contact" className="relative pt-28 pb-24 px-8 md:px-20 page-enter overflow-hidden">
      {/* Big BG text */}
      <span className="absolute bottom-8 right-0 text-[clamp(4rem,16vw,14rem)] font-black text-[#0f0f0f] leading-none select-none pointer-events-none uppercase">
        CONTACT
      </span>

      <p className="contact-reveal text-[11px] tracking-[0.4em] text-[#444] uppercase mb-6">004 / Contact</p>
      <h1 className="contact-reveal text-5xl md:text-7xl font-black text-white uppercase leading-tight mb-16">
        Let's Build<br /><span className="text-[#e8ff00]">Together.</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        <div>
          <p className="contact-reveal text-[#555] text-sm leading-relaxed mb-8">
            Open to backend roles, internships, freelance projects, and collaboration.
            Drop a message and I'll get back to you.
          </p>
          <div className="contact-reveal flex flex-col gap-4">
            <a href="mailto:saiflotfy26@gmail.com" className="text-sm text-[#888] border-b border-[#222] pb-1 w-fit hover:text-white hover:border-white transition-all duration-300">
              saiflotfy26@gmail.com
            </a>
            <a href="https://github.com/sefffo" target="_blank" rel="noreferrer" className="text-sm text-[#888] border-b border-[#222] pb-1 w-fit hover:text-white hover:border-white transition-all duration-300">
              github.com/sefffo
            </a>
            <a href="https://linkedin.com/in/seif-lotfy" target="_blank" rel="noreferrer" className="text-sm text-[#888] border-b border-[#222] pb-1 w-fit hover:text-white hover:border-white transition-all duration-300">
              linkedin.com/in/seif-lotfy
            </a>
          </div>
          <div className="contact-reveal mt-10">
            <a
              href="/Saif-Lotfy_CV.pdf"
              download
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase border border-[#e8ff00] text-[#e8ff00] px-6 py-3 hover:bg-[#e8ff00] hover:text-black transition-all duration-300"
            >
              <span>↓</span> Download CV
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {sent ? (
            <div className="text-[#e8ff00] text-sm tracking-widest uppercase pt-10">
              ✓ Message sent. I'll reply soon.
            </div>
          ) : (
            <>
              <div className="contact-reveal">
                <input
                  type="text" placeholder="Your Name" required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-[#1f1f1f] py-3 text-sm text-[#ccc] placeholder-[#2a2a2a] focus:outline-none focus:border-[#e8ff00] transition-colors duration-300"
                />
              </div>
              <div className="contact-reveal">
                <input
                  type="email" placeholder="Your Email" required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-[#1f1f1f] py-3 text-sm text-[#ccc] placeholder-[#2a2a2a] focus:outline-none focus:border-[#e8ff00] transition-colors duration-300"
                />
              </div>
              <div className="contact-reveal">
                <textarea
                  placeholder="Message" rows={5} required
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-[#1f1f1f] py-3 text-sm text-[#ccc] placeholder-[#2a2a2a] focus:outline-none focus:border-[#e8ff00] transition-colors duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                className="contact-reveal self-start px-8 py-3 text-xs tracking-[0.3em] uppercase border border-[#e8ff00] text-[#e8ff00] hover:bg-[#e8ff00] hover:text-black transition-all duration-300"
              >
                Send Message
              </button>
            </>
          )}
        </form>
      </div>

      <div className="relative z-10 mt-24 pt-8 border-t border-[#1a1a1a] flex justify-between items-center">
        <span className="text-xs text-[#333] uppercase tracking-widest">Saif Lotfy © 2026</span>
        <span className="text-xs text-[#333] uppercase tracking-widest">Cairo, Egypt</span>
      </div>
    </div>
  )
}
