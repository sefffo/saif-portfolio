import { useRef, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SkillsCube from "../canvas/SkillsCube"

gsap.registerPlugin(ScrollTrigger)

const skills = [
    { name: "C#", level: "Expert" },
    { name: "ASP.NET Core", level: "Advanced" },
    { name: "PostgreSQL", level: "Advanced" },
    { name: "SQL Server", level: "Advanced" },
    { name: "Entity Framework", level: "Advanced" },
    { name: "Docker", level: "Intermediate" },
    { name: "Microservices", level: "Advanced" },
    { name: "Clean Architecture", level: "Advanced" },
    { name: "OAuth2 / JWT", level: "Advanced" },
    { name: "REST APIs", level: "Expert" },
    { name: "C++", level: "Advanced" },
    { name: "Git", level: "Advanced" },
]

export default function Skills() {
    const ref = useRef<HTMLElement>(null)

    useGSAP(() => {
        gsap.from(".skill-item", {
            y: 40, opacity: 0, stagger: 0.06, duration: 0.6, ease: "power3.out",
            scrollTrigger: { trigger: ref.current, start: "top 70%" },
        })
        gsap.from(".skills-heading", {
            x: -40, opacity: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: ref.current, start: "top 80%" },
        })
    }, { scope: ref })

    return (
        <section ref={ref} className="w-full py-32 px-8 md:px-20 border-t border-[#1a1a1a]">
            <p className="text-[11px] tracking-[0.4em] text-[#444] uppercase mb-16">
                002 &nbsp;/&nbsp; Tech Stack
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Skills Grid */}
                <div>
                    <h2 className="skills-heading text-4xl md:text-6xl font-black text-white uppercase mb-12">
                        What I<br />Work With
                    </h2>
                    <div className="grid grid-cols-2 gap-3">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="skill-item group flex justify-between items-center border border-[#1a1a1a] px-4 py-3 hover:border-[#e8ff00] transition-colors duration-300"
                            >
                                <span className="text-sm text-[#ccc] group-hover:text-white transition-colors">
                                    {skill.name}
                                </span>
                                <span className="text-[10px] tracking-widest text-[#333] uppercase group-hover:text-[#e8ff00] transition-colors">
                                    {skill.level}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3D Cube */}
                <div className="h-[400px] w-full">
                    <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
                        <Suspense fallback={null}>
                            <SkillsCube />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </section>
    )
}
