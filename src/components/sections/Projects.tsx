import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const projects = [
    {
        number: "01",
        title: "E-Commerce Microservices",
        description:
            "Full microservices architecture with ASP.NET Core 9, clean architecture, JWT auth, SQL Server, and Docker. Includes product, order, cart, and identity services.",
        tags: ["ASP.NET Core", "Microservices", "Docker", "SQL Server", "JWT"],
        link: "https://github.com/",
    },
    {
        number: "02",
        title: "Identity & Auth System",
        description:
            "OAuth2 + Identity implementation with role-based access control, refresh tokens, and email confirmation. Fully integrated with ASP.NET Core Identity.",
        tags: ["OAuth2", "ASP.NET Identity", "JWT", "C#", "PostgreSQL"],
        link: "https://github.com/",
    },
    {
        number: "03",
        title: "Saif Portfolio",
        description:
            "This very portfolio — built with React, TypeScript, Three.js, GSAP, and Lenis. 3D animations, scroll effects, editorial black & white design.",
        tags: ["React", "Three.js", "GSAP", "TypeScript", "Tailwind"],
        link: "https://github.com/",
    },
]

export default function Projects() {
    const ref = useRef<HTMLElement>(null)

    useGSAP(() => {
        gsap.from(".project-card", {
            y: 80, opacity: 0, stagger: 0.15, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: ref.current, start: "top 70%" },
        })
    }, { scope: ref })

    return (
        <section ref={ref} className="w-full py-32 px-8 md:px-20 border-t border-[#1a1a1a]">
            <p className="text-[11px] tracking-[0.4em] text-[#444] uppercase mb-16">
                003 &nbsp;/&nbsp; Projects
            </p>

            <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-16">
                Selected<br />Work
            </h2>

            <div className="flex flex-col gap-6">
                {projects.map((project) => (
                    <a
                        key={project.number}
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card group border border-[#1a1a1a] p-8 hover:border-[#333] transition-all duration-500 hover:bg-[#0f0f0f]"
                    >
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                            {/* Number */}
                            <span className="text-[#222] font-black text-5xl leading-none group-hover:text-[#e8ff00] transition-colors duration-300 min-w-[80px]">
                                {project.number}
                            </span>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-[#f0f0f0] transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="text-[#333] group-hover:text-white transition-colors duration-300 text-lg ml-4">
                                        ↗
                                    </span>
                                </div>
                                <p className="text-[#555] text-sm leading-relaxed mb-5 max-w-2xl">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] tracking-widest uppercase text-[#333] border border-[#1f1f1f] px-3 py-1 group-hover:border-[#2a2a2a]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}
