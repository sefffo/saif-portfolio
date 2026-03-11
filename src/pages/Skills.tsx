import { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const groups = [
  {
    title: 'Backend & .NET',
    items: [
      { name: '.NET 9 / ASP.NET Core',    pct: 90 },
      { name: 'C# 13',                    pct: 90 },
      { name: 'EF Core + ADO.NET',        pct: 85 },
      { name: 'Clean Architecture',       pct: 88 },
      { name: 'Microservices',            pct: 82 },
      { name: 'RESTful APIs',             pct: 92 },
      { name: 'SignalR / WebSockets',     pct: 75 },
      { name: 'JWT / OAuth2',             pct: 85 },
      { name: 'AutoMapper + FluentVal.',  pct: 80 },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'SQL Server',   pct: 88 },
      { name: 'MongoDB',      pct: 72 },
      { name: 'Redis',        pct: 78 },
      { name: 'PostgreSQL',   pct: 65 },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'Angular 17',          pct: 80 },
      { name: 'TypeScript',          pct: 80 },
      { name: 'RxJS / NgRx',        pct: 73 },
      { name: 'React / Next.js',     pct: 65 },
      { name: 'Tailwind CSS',        pct: 85 },
      { name: 'Angular Material',    pct: 75 },
    ],
  },
  {
    title: 'Node.js & Other Languages',
    items: [
      { name: 'Node.js',     pct: 68 },
      { name: 'Python',      pct: 70 },
      { name: 'C / C++',     pct: 75 },
      { name: 'JavaScript',  pct: 82 },
      { name: 'SQL / T-SQL', pct: 88 },
    ],
  },
  {
    title: 'Tools & Practices',
    items: [
      { name: 'Git / GitHub',        pct: 90 },
      { name: 'Docker',              pct: 72 },
      { name: 'Postman',             pct: 88 },
      { name: 'Agile / SDLC',        pct: 85 },
      { name: 'SOLID / DDD',         pct: 80 },
      { name: 'Design Patterns',     pct: 78 },
      { name: 'Computer Vision',     pct: 55 },
    ],
  },
]

function SkillBar({ pct }: { pct: number }) {
  const barRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('animated') },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div className="relative h-px bg-[#1f2434] mt-2">
      <div
        ref={barRef}
        className="skill-bar-fill absolute inset-0"
        style={{ '--scale': pct / 100 } as React.CSSProperties}
      />
    </div>
  )
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.sk-h', { y: 40, opacity: 0, stagger: 0.08, duration: 0.75, ease: 'power3.out' })
    gsap.from('.sk-group', {
      y: 40, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '.sk-grid', start: 'top 82%' },
    })
  }, { scope: ref })

  return (
    <div ref={ref} className="pt-32 pb-28 page-enter">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <p className="sk-h section-label mb-5">002 / Skills</p>
        <h1 className="sk-h text-5xl md:text-7xl font-black text-white uppercase leading-[0.9] tracking-tight mb-5">
          Tech <span className="grad-text">Stack.</span>
        </h1>
        <p className="sk-h text-[#6b7280] text-sm mb-20 max-w-lg leading-relaxed">
          29+ technologies across backend, frontend, databases, and computer science fundamentals.
        </p>

        <div className="sk-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {groups.map((group) => (
            <div key={group.title} className="sk-group card p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-7">
                <span className="accent-dot" />
                <h2 className="text-xs tracking-[0.3em] uppercase text-white font-semibold">{group.title}</h2>
              </div>
              <div className="flex flex-col gap-5">
                {group.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-[#6b7280]">{item.name}</span>
                      <span className="text-[10px] tracking-wide text-[#374151]">{item.pct}%</span>
                    </div>
                    <SkillBar pct={item.pct} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
