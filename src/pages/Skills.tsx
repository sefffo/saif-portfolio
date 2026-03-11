import { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skillGroups = [
  {
    category: 'Languages',
    skills: [
      { name: 'C#', level: 95 },
      { name: 'TypeScript / JavaScript', level: 85 },
      { name: 'C / C++', level: 80 },
      { name: 'SQL', level: 88 },
      { name: 'Python', level: 70 },
      { name: 'HTML / CSS / SCSS', level: 85 },
    ],
  },
  {
    category: 'Backend & .NET',
    skills: [
      { name: '.NET 9 / ASP.NET Core', level: 92 },
      { name: 'ASP.NET MVC / Web API', level: 90 },
      { name: 'Entity Framework Core', level: 88 },
      { name: 'SignalR / WebSockets', level: 78 },
      { name: 'Microservices Architecture', level: 82 },
      { name: 'Clean Architecture', level: 88 },
      { name: 'JWT / OAuth2', level: 85 },
      { name: 'Redis Caching', level: 80 },
      { name: 'ADO.NET / AutoMapper', level: 82 },
      { name: 'RESTful APIs', level: 93 },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'SQL Server', level: 88 },
      { name: 'MongoDB', level: 75 },
      { name: 'Redis', level: 78 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'Angular 17 (RxJS, NgRx, Signals)', level: 82 },
      { name: 'React / Vite', level: 75 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Bootstrap / Angular Material', level: 80 },
    ],
  },
  {
    category: 'Concepts & Tools',
    skills: [
      { name: 'OOP / SOLID / Design Patterns', level: 90 },
      { name: 'Data Structures & Algorithms', level: 85 },
      { name: 'Git / GitHub', level: 88 },
      { name: 'Postman / DevOps', level: 80 },
      { name: 'Agile / SDLC', level: 78 },
      { name: 'System Design', level: 80 },
    ],
  },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.skills-hero', {
      y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
    })
    gsap.from('.skill-group', {
      y: 60, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: '.skills-grid', start: 'top 80%' },
    })
  }, { scope: ref })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll<HTMLElement>('.skill-bar-fill')
            fills.forEach(fill => fill.classList.add('animated'))
          }
        })
      },
      { threshold: 0.2 }
    )
    const groups = document.querySelectorAll('.skill-group')
    groups.forEach(g => observer.observe(g))
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="pt-28 pb-24 px-8 md:px-20 page-enter">
      <p className="skills-hero text-[11px] tracking-[0.4em] text-[#444] uppercase mb-6">002 / Tech Stack</p>
      <h1 className="skills-hero text-5xl md:text-7xl font-black text-white uppercase leading-tight mb-4">
        What I<br /><span className="text-[#e8ff00]">Work With.</span>
      </h1>
      <p className="skills-hero text-[#555] text-sm mb-20 max-w-lg leading-relaxed">
        Full-stack capabilities with a deep backend focus. Every skill listed here is something I've shipped real code with.
      </p>

      <div className="skills-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {skillGroups.map((group) => (
          <div key={group.category} className="skill-group">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#e8ff00] mb-6">{group.category}</p>
            <div className="flex flex-col gap-5">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-[#aaa]">{skill.name}</span>
                    <span className="text-xs text-[#333]">{skill.level}%</span>
                  </div>
                  <div className="w-full h-px bg-[#1a1a1a] relative">
                    <div
                      className="skill-bar-fill"
                      style={{ '--target-scale': skill.level / 100 } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Proficiency legend */}
      <div className="mt-20 pt-10 border-t border-[#1a1a1a] flex flex-wrap gap-8">
        {[['90–100%', 'Expert'], ['75–89%', 'Advanced'], ['60–74%', 'Intermediate']].map(([range, label]) => (
          <div key={label} className="flex items-center gap-3">
            <div className="w-8 h-px bg-[#e8ff00]" />
            <span className="text-xs text-[#444]">{range} — {label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
