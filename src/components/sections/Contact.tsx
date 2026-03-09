import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
    const ref = useRef<HTMLElement>(null)
    const [sent, setSent] = useState(false)

    useGSAP(() => {
        gsap.from(".contact-reveal", {
            y: 50, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: ref.current, start: "top 75%" },
        })
    }, { scope: ref })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Wire up EmailJS here later
        setSent(true)
    }

    return (
        <section
            ref={ref}
            id="contact"
            className="relative w-full py-32 px-8 md:px-20 border-t border-[#1a1a1a] overflow-hidden"
        >
            {/* Big background text */}
            <span className="absolute bottom-0 right-0 text-[clamp(5rem,18vw,16rem)] font-black text-[#0f0f0f] leading-none select-none pointer-events-none uppercase">
                CONTACT
            </span>

            <p className="contact-reveal text-[11px] tracking-[0.4em] text-[#444] uppercase mb-16">
                004 &nbsp;/&nbsp; Contact
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                {/* Left */}
                <div>
                    <h2 className="contact-reveal text-4xl md:text-6xl font-black text-white uppercase leading-tight mb-6">
                        Let's Build<br />
                        <span className="text-[#e8ff00]">Together.</span>
                    </h2>
                    <p className="contact-reveal text-[#555] text-sm leading-relaxed mb-8">
                        Open to backend roles, internships, freelance projects,
                        and collaboration. Drop a message and I'll get back to you.
                    </p>
                    <a
                        href="mailto:saif@email.com"
                        className="contact-reveal text-sm text-[#888] border-b border-[#222] pb-1 hover:text-white hover:border-white transition-all duration-300"
                    >
                        saif@email.com
                    </a>
                </div>

                {/* Right — Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {sent ? (
                        <div className="contact-reveal text-[#e8ff00] text-sm tracking-widest uppercase pt-10">
                            ✓ Message sent. I'll reply soon.
                        </div>
                    ) : (
                        <>
                            <div className="contact-reveal">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    className="w-full bg-transparent border-b border-[#1f1f1f] py-3 text-sm text-[#ccc] placeholder-[#333] focus:outline-none focus:border-[#e8ff00] transition-colors duration-300"
                                />
                            </div>
                            <div className="contact-reveal">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    required
                                    className="w-full bg-transparent border-b border-[#1f1f1f] py-3 text-sm text-[#ccc] placeholder-[#333] focus:outline-none focus:border-[#e8ff00] transition-colors duration-300"
                                />
                            </div>
                            <div className="contact-reveal">
                                <textarea
                                    placeholder="Message"
                                    rows={4}
                                    required
                                    className="w-full bg-transparent border-b border-[#1f1f1f] py-3 text-sm text-[#ccc] placeholder-[#333] focus:outline-none focus:border-[#e8ff00] transition-colors duration-300 resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="contact-reveal self-start mt-2 px-8 py-3 text-xs tracking-[0.3em] uppercase border border-[#e8ff00] text-[#e8ff00] hover:bg-[#e8ff00] hover:text-black transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </>
                    )}
                </form>
            </div>

            {/* Footer line */}
            <div className="relative z-10 mt-24 pt-8 border-t border-[#1a1a1a] flex justify-between items-center">
                <span className="text-xs text-[#333] uppercase tracking-widest">Saif Lotfy © 2026</span>
                <span className="text-xs text-[#333] uppercase tracking-widest">Cairo, Egypt</span>
            </div>
        </section>
    )
}
