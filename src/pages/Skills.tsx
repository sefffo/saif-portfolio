import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SkillKeyboard from '../components/SkillKeyboard'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  {
    label: 'Languages',
    color: '#a78bfa',
    skills: ['C', 'C++', 'C# 13', 'JavaScript', 'TypeScript', 'Python', 'SQL / T-SQL', 'HTML', 'CSS', 'SCSS'],
  },
  {
    label: 'Backend & .NET',
    color: '#7c6aff',
    skills: [
      '.NET 9', 'ASP.NET Core', 'ASP.NET MVC', 'ASP.NET Web API',
      'Entity Framework Core', 'ADO.NET', 'LINQ',
      'AutoMapper', 'FluentValidation', 'Serilog',
      'RESTful APIs', 'SignalR', 'WebSockets',
      'JWT', 'OAuth2', 'Google OAuth2',
      'Node.js', 'Express.js', 'NestJS',
      'Clean Architecture', 'Microservices Architecture',
      'Repository Pattern', 'Unit of Work', 'Specification Pattern',
    ],
  },
  {
    label: 'Databases',
    color: '#06b6d4',
    skills: ['SQL Server', 'MongoDB', 'Redis', 'PostgreSQL', 'EF Core Migrations', 'LINQ Queries', 'Stored Procedures'],
  },
  {
    label: 'Frontend',
    color: '#f59e0b',
    skills: [
      'Angular 17', 'RxJS', 'NgRx', 'Signals', 'Interceptors', 'Lazy Loading',
      'Angular Material', 'Bootstrap', 'Tailwind CSS', 'Flowbite',
      'React', 'React Router', 'TypeScript',
    ],
  },
  {
    label: 'CS Fundamentals & Architecture',
    color: '#ec4899',
    skills: [
      'OOP', 'Functional Programming',
      'Data Structures', 'Algorithms', 'Complexity Analysis',
      'SOLID Principles', 'Design Patterns', 'DDD', 'System Design',
      'Competitive Programming (ICPC)',
    ],
  },
  {
    label: 'Tools, DevOps & SDLC',
    color: '#22c55e',
    skills: [
      'Git', 'GitHub', 'GitHub Actions',
      'Jenkins', 'Docker', 'Postman',
      'Jira', 'Slack', 'Swagger / OpenAPI',
      'Agile', 'Scrum', 'SDLC', 'DevOps',
    ],
  },
  {
    label: 'AI & Computer Vision',
    color: '#f97316',
    skills: ['Computer Vision', 'Image Processing', 'Python ML', 'NumPy', 'OpenCV'],
  },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.sk-h',     { y: 40, opacity: 0, stagger: 0.07, duration: 0.75, ease: 'power3.out' })
    gsap.from('.kbd-wrap', { y: 50, opacity: 0, duration: 0.9, delay: 0.4, ease: 'power3.out' })
    gsap.from('.cat-block', {
      y: 30, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out',
      scrollTrigger: { trigger: '.cats-section', start: 'top 85%' },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="page-wrapper pb-28 page-enter">
      <div className="max-w-7xl mx-auto pt-16">

        <p className="sk-h section-label mb-4">002 / Skills</p>
        <h1 className="sk-h text-5xl md:text-7xl font-black text-white uppercase leading-[0.9] tracking-tight mb-4">
          Tech <span className="grad-text">Stack.</span>
        </h1>
        <p className="sk-h text-[#6b7280] text-sm mb-12 max-w-xl leading-relaxed">
          Every technology I actively use — hover any key on the keyboard below to see what I know about it,
          then scroll down for the full categorized breakdown.
        </p>

        {/* ── INTERACTIVE KEYBOARD ── */}
        <div className="kbd-wrap mb-20">
          <SkillKeyboard />
        </div>

        {/* ── CATEGORY PILLS ── */}
        <p className="section-label mb-10">Full Breakdown</p>
        <div className="cats-section flex flex-col gap-12">
          {categories.map((cat) => (
            <div key={cat.label} className="cat-block">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: cat.color, boxShadow: `0 0 10px ${cat.color}88` }}
                />
                <span
                  className="text-[11px] tracking-[0.35em] uppercase font-semibold"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    <span className="dot" style={{ background: cat.color }} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
