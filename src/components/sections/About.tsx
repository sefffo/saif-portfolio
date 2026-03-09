import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
    const ref = useRef<HTMLElement>(null)

    useGSAP(() => {
        gsap.from(".about-num", {
            textContent: 0,
            duration: 2,
            ease: "power1.out",
            snap: { textContent: 1 },
            scrollTrigger: { trigger: ref.current, start: "top 70%" },
        })
        gsap.from(".about-reveal", {
            y: 60, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: ref.current, start: "top 75%" },
        })
    }, { scope: ref })

    return (
        <section ref={ref} className="w-full py-32 px-8 md:px-20 border-t border-[#1a1a1a]">
            {/* Section label */}
            <p className="about-reveal text-[11px] tracking-[0.4em] text-[#444] uppercase mb-16">
                001 &nbsp;/&nbsp; About
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
                {/* Left — Statement */}
                <div>
                    <h2 className="about-reveal text-3xl md:text-5xl font-bold leading-tight text-white mb-8">
                        I build systems that work<br />
                        <span className="text-[#e8ff00]">under the hood.</span>
                    </h2>
                    <p className="about-reveal text-[#666] text-base leading-relaxed mb-6">
                        Backend engineer obsessed with clean architecture,
                        microservices, and systems that scale. Based in Cairo,
                        studying Computer Science while shipping real production code.
                    </p>
                    <p className="about-reveal text-[#444] text-sm leading-relaxed">
                        I work with ASP.NET Core, C#, PostgreSQL, SQL Server, and Docker.
                        I care deeply about code that other humans can actually read.
                    </p>

                    {/* Optional photo — replace /your-photo.jpg with your actual image */}
                    {/* 
          <div className="mt-10 w-48 h-64 overflow-hidden grayscale contrast-110 opacity-80">
            <img src="/your-photo.jpg" alt="Saif Lotfy" className="w-full h-full object-cover" />
          </div>
          */}
                </div>

                {/* Right — Facts */}
                <div className="flex flex-col gap-8">
                    {[
                        { label: "Location", value: "Cairo, Egypt 🇪🇬" },
                        { label: "Role", value: "Backend Engineer" },
                        { label: "Stack", value: "ASP.NET Core · C# · PostgreSQL" },
                        { label: "Education", value: "Computer Science Student" },
                        { label: "Experience", value: "CodeWay Internship" },
                    ].map((item) => (
                        <div key={item.label} className="about-reveal flex justify-between items-start border-b border-[#1a1a1a] pb-5">
                            <span className="text-xs tracking-widest uppercase text-[#444]">{item.label}</span>
                            <span className="text-sm text-[#ccc] text-right">{item.value}</span>
                        </div>
                    ))}

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-6 pt-4">
                        <div className="about-reveal">
                            <span className="about-num text-5xl font-black text-white">3</span>
                            <p className="text-xs text-[#444] mt-1 uppercase tracking-widest">Years Coding</p>
                        </div>
                        <div className="about-reveal">
                            <span className="about-num text-5xl font-black text-white">10</span>
                            <p className="text-xs text-[#444] mt-1 uppercase tracking-widest">Projects Built</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
