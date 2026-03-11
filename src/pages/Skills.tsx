import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  {
    label: 'Backend & .NET',
    color: '#7c6aff',
    skills: [
      '.NET 9', 'ASP.NET Core', 'C# 13', 'EF Core', 'ADO.NET',
      'Clean Architecture', 'Microservices', 'RESTful APIs',
      'SignalR', 'WebSockets', 'JWT', 'OAuth2',
      'AutoMapper', 'FluentValidation', 'Serilog',
    ],
  },
  {
    label: 'Databases',
    color: '#06b6d4',
    skills: ['SQL Server', 'MongoDB', 'Redis', 'PostgreSQL', 'LINQ', 'EF Migrations'],
  },
  {
    label: 'Frontend',
    color: '#f59e0b',
    skills: [
      'Angular 17', 'TypeScript', 'RxJS', 'NgRx', 'Signals',
      'React', 'Tailwind CSS', 'Angular Material', 'Bootstrap', 'Flowbite',
    ],
  },
  {
    label: 'Node.js & Languages',
    color: '#22c55e',
    skills: ['Node.js', 'JavaScript', 'Python', 'C++', 'C', 'SQL / T-SQL', 'HTML', 'CSS / SCSS'],
  },
  {
    label: 'Architecture & CS',
    color: '#ec4899',
    skills: [
      'SOLID Principles', 'Design Patterns', 'DDD',
      'OOP', 'Functional Programming',
      'Data Structures', 'Algorithms', 'System Design',
    ],
  },
  {
    label: 'Tools & DevOps',
    color: '#f97316',
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Agile', 'SDLC', 'Swagger / OpenAPI', 'DevOps'],
  },
  {
    label: 'AI & Vision',
    color: '#a78bfa',
    skills: ['Computer Vision', 'Python ML', 'Image Processing'],
  },
]

const proficiency = [
  { name: '.NET 9 / ASP.NET Core', pct: 90 },
  { name: 'C# 13',                 pct: 90 },
  { name: 'Clean Architecture',    pct: 88 },
  { name: 'RESTful APIs',          pct: 92 },
  { name: 'SQL Server',            pct: 88 },
  { name: 'Angular 17',            pct: 80 },
  { name: 'TypeScript',            pct: 80 },
  { name: 'Redis',                 pct: 78 },
  { name: 'Microservices',         pct: 82 },
  { name: 'Docker',                pct: 72 },
  { name: 'Node.js',               pct: 68 },
  { name: 'Python',                pct: 70 },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.sk-h', { y: 40, opacity: 0, stagger: 0.07, duration: 0.75, ease: 'power3.out' })
    gsap.from('.cat-block', {
      y: 40, opacity: 0, stagger: 0.08, duration: 0.65, ease: 'power3.out',
      scrollTrigger: { trigger: '.cats-section', start: 'top 82%' },
    })
    gsap.from('.prof-row', {
      x: -30, opacity: 0, stagger: 0.06, duration: 0.6, ease: 'power3.out',
      scrollTrigger: { trigger: '.prof-section', start: 'top 82%' },
    })
    // Animate skill pills on scroll
    gsap.from('.skill-pill', {
      scale: 0.85, opacity: 0, stagger: 0.025, duration: 0.4, ease: 'back.out(1.5)',
      scrollTrigger: { trigger: '.cats-section', start: 'top 75%' },
    })
  }, { scope: ref })

  return (
    <div ref={ref} className="page-wrapper pb-28 page-enter">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-16">

        {/* Header */}
        <p className="sk-h section-label mb-4">002 / Skills</p>
        <h1 className="sk-h text-5xl md:text-7xl font-black text-white uppercase leading-[0.9] tracking-tight mb-4">
          Tech <span className="grad-text">Stack.</span>
        </h1>
        <p className="sk-h text-[#6b7280] text-sm mb-16 max-w-lg leading-relaxed">
          29+ technologies across backend, frontend, databases, Node.js, and CS fundamentals.
          Hover to explore.
        </p>

        {/* Skill pills by category */}
        <div className="cats-section flex flex-col gap-10 mb-24">
          {categories.map((cat) => (
            <div key={cat.label} className="cat-block">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: cat.color, boxShadow: `0 0 10px ${cat.color}88` }} />
                <span className="text-[11px] tracking-[0.35em] uppercase font-semibold" style={{ color: cat.color }}>{cat.label}</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <div key={skill} className="skill-pill">
                    <span className="dot" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency bars for top skills */}
        <div className="prof-section">
          <p className="section-label mb-10">Core Proficiency</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
            {proficiency.map((item) => (
              <div key={item.name} className="prof-row">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-[#9ca3af]">{item.name}</span>
                  <span className="text-[11px] text-[#374151]">{item.pct}%</span>
                </div>
                <div className="relative h-[3px] bg-[#1e2235] rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 bottom-0 rounded-full"
                    style={{
                      width: `${item.pct}%`,
                      background: `linear-gradient(90deg, #7c6aff, #a78bfa)`,
                      boxShadow: '0 0 8px #7c6aff66',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
