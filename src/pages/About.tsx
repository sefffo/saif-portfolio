import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const experience = [
  {
    role: 'Team Lead — National University Portal',
    company: 'Production Project',
    location: 'Egypt',
    period: '2026 – Present',
    current: true,
    points: [
      'Managing a development team building a production-level student portal system set to modernize university portals across Egypt — launching soon 🚀',
      'Responsible for system architecture, sprint planning, code reviews, task delegation, and delivery timelines',
      'Applying full Agile/SDLC practices: backlog grooming, sprint retrospectives, stakeholder communication',
      'Designed microservices-oriented backend with ASP.NET Core, Clean Architecture, Angular frontend, and SQL Server',
    ],
  },
  {
    role: '.NET Backend Developer Intern',
    company: 'Code Way',
    location: 'Cairo, Egypt',
    period: 'Nov 2025 – Present',
    current: true,
    points: [
      'Design and develop backend microservices for a production LMS platform using .NET 9, ASP.NET Core, and Clean Architecture',
      'Built ~50% of all microservices: Identity, Course, Certificate, Content, and the ongoing Payment Service integrating third-party payment gateways',
      'Real-time communication across services using SignalR and WebSockets; Redis caching for high-performance reads',
      'Databases: SQL Server and MongoDB with EF Core, LINQ, and Redis — all running in production',
    ],
  },
  {
    role: 'Computer Vision Intern',
    company: 'NAID — National Academy of IT for Persons with Disabilities',
    location: 'Cairo, Egypt',
    period: '2025',
    current: false,
    points: [
      'Worked on computer vision projects at a government-backed technology academy focused on ICT and digital inclusion',
      'Gained hands-on experience with CV techniques and Python-based image processing pipelines',
    ],
  },
  {
    role: 'Front-End Instructor',
    company: 'Savvy Programming School',
    location: 'Cairo, Egypt',
    period: 'Sep 2025 – Present',
    current: true,
    points: [
      'Teach HTML, CSS, JavaScript, and Angular to students aged 10–18 through structured labs and interactive lessons',
      'Design full curriculum from fundamentals to real project builds with measurable skill progression',
      'Sharpened communication and mentoring skills — ability to break down complex technical concepts for any audience',
    ],
  },
  {
    role: 'Front-End Developer Intern',
    company: 'Yildiz Advanced Projects & IT Solutions',
    location: 'Cairo, Egypt',
    period: 'Mar 2025 – Apr 2025',
    current: false,
    points: [
      'Built reusable Angular UI components with Angular Material and Tailwind CSS',
      'Integrated REST APIs connecting Angular frontend to .NET backend services',
      'Improved stability via error handling, HTTP interceptors, and lazy-loaded modules',
    ],
  },
  {
    role: 'ICPC Competitor',
    company: 'ACM International Collegiate Programming Contest',
    location: '',
    period: '2024',
    current: false,
    points: [
      'Competed in ICPC, strengthening algorithm design, data structures, and problem-solving under timed pressure',
    ],
  },
]

const education = [
  {
    degree: 'B.Sc. in Computer Science',
    school: 'Benha National University — Obour Campus',
    period: '2023 – Present',
    badge: 'GPA: 3.72 / 4.00',
  },
  {
    degree: 'Full-Stack Web Development Track',
    school: 'Route Academy IT Training Center',
    period: '2024 – 2025',
    badge: 'Angular · ASP.NET Core',
  },
]

const strengths = [
  { title: 'System Design',      desc: 'Designing scalable microservices and Clean Architecture systems from scratch.' },
  { title: 'Project Management', desc: 'Agile sprint planning, team coordination, backlog grooming, SDLC delivery.' },
  { title: 'Team Leadership',    desc: 'Currently leading a production team building a nation-scale student portal.' },
  { title: 'Teaching & Mentoring', desc: 'Teaching code to ages 10–18 at Savvy School — curriculum design and clarity.' },
  { title: 'Problem Solving',    desc: 'ICPC background with strong algorithms and data structures foundation.' },
  { title: 'Full-Stack Fluency', desc: 'Backend-first but capable across Angular, Node.js, REST, and deployment.' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.a-reveal', { y: 40, opacity: 0, stagger: 0.07, duration: 0.75, ease: 'power3.out' })
    gsap.from('.tl-item', {
      x: -30, opacity: 0, stagger: 0.09, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '.tl-section', start: 'top 78%' },
    })
    gsap.from('.edu-card', {
      y: 30, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out',
      scrollTrigger: { trigger: '.edu-section', start: 'top 82%' },
    })
    gsap.from('.str-card', {
      y: 30, opacity: 0, stagger: 0.07, duration: 0.6, ease: 'power3.out',
      scrollTrigger: { trigger: '.str-section', start: 'top 82%' },
    })
  }, { scope: ref })

  return (
    <div ref={ref} className="pt-32 pb-28 page-enter">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <p className="a-reveal section-label mb-5">001 / About</p>
        <h1 className="a-reveal text-5xl md:text-7xl font-black text-white uppercase leading-[0.9] tracking-tight mb-5">
          Who I <span className="grad-text">Am.</span>
        </h1>
        <p className="a-reveal text-[#6b7280] text-sm leading-relaxed max-w-xl mb-20">
          Junior .NET Backend Developer. ICPC competitor. Coding instructor. Team lead.
          Driven by building things that actually matter — scalable, clean, and production-ready.
        </p>

        {/* Bio + Quick facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-28">
          <div>
            {/* Photo slot */}
            <div className="a-reveal relative w-48 h-60 card rounded-lg mb-10 overflow-hidden group cursor-pointer">
              <img src="/your-photo.jpg" alt="Saif Lotfy"
                className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement
                  el.style.display = 'none'
                  const p = el.parentElement
                  if (p) p.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center gap-2 bg-[#13161e]"><span class="text-4xl">📷</span><span class="text-[#1f2434] text-[10px] tracking-widest uppercase text-center px-4">Add your-photo.jpg to /public</span></div>`
                }}
              />
              <div className="absolute inset-0 border border-[#7c6aff]/0 group-hover:border-[#7c6aff]/30 transition-colors duration-500 rounded-lg" />
            </div>

            <p className="a-reveal text-[#6b7280] text-sm leading-[1.9] mb-4">
              Backend engineer with deep focus on .NET 9, ASP.NET Core, microservices, and maintainable code.
              I've built production systems at Code Way, contributed 50% of a live LMS microservices platform,
              and currently lead a team building a portal that will reshape student systems across Egypt.
            </p>
            <p className="a-reveal text-[#4b5563] text-sm leading-[1.9] mb-8">
              Outside engineering, I teach programming at Savvy Programming School and completed a computer
              vision internship at NAID. Strong communicator, Agile practitioner, and team leader.
            </p>

            <div className="a-reveal flex flex-wrap gap-2">
              {['Cairo, Egypt 🇪🇬','GPA 3.72','Open to Work','C1 English','Team Lead','ICPC Competitor','CV Intern @NAID'].map(tag => (
                <span key={tag} className="tag rounded">{tag}</span>
              ))}
            </div>
          </div>

          {/* Quick facts */}
          <div className="flex flex-col gap-4">
            {[
              { label: 'Location',     value: 'Cairo, Egypt'                            },
              { label: 'Primary Role', value: '.NET Backend Developer'                   },
              { label: 'Core Stack',   value: 'ASP.NET Core · C# · SQL Server · Redis'   },
              { label: 'Frontend',     value: 'Angular 17 · TypeScript · Tailwind'       },
              { label: 'Also',         value: 'Node.js · Python · Computer Vision'       },
              { label: 'Architecture', value: 'Clean Arch · Microservices · SOLID'       },
              { label: 'Also Known As', value: 'Instructor · Team Lead · ICPC'           },
              { label: 'Education',    value: 'B.Sc. CS — Benha National University'     },
              { label: 'GPA',         value: '3.72 / 4.00'                               },
              { label: 'Languages',   value: 'Arabic (Native) · English (C1)'            },
            ].map(item => (
              <div key={item.label} className="flex justify-between items-start border-b border-[#1f2434] pb-3.5 group">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#2a3045] min-w-[140px] group-hover:text-[#374151] transition-colors">{item.label}</span>
                <span className="text-sm text-[#6b7280] text-right group-hover:text-[#9ca3af] transition-colors">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="tl-section mb-28">
          <p className="section-label mb-12">Professional Experience</p>
          <div className="relative">
            <div className="absolute left-[3px] top-2 bottom-0 w-px bg-[#1f2434]" />
            <div className="flex flex-col gap-14">
              {experience.map((exp, i) => (
                <div key={i} className="tl-item pl-10 relative">
                  <div className={`absolute left-0 top-2 w-[7px] h-[7px] rounded-full border transition-colors duration-300 ${
                    exp.current
                      ? 'border-[#7c6aff] bg-[#7c6aff] shadow-[0_0_8px_#7c6aff66]'
                      : 'border-[#2a3045] bg-[#0d0f14]'
                  }`} />

                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 text-[9px] tracking-[0.3em] uppercase text-[#7c6aff] border border-[#7c6aff]/20 px-2.5 py-1 mb-3 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7c6aff] animate-pulse" />Current
                    </span>
                  )}

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1.5 mb-4">
                    <div>
                      <h3 className="text-white font-bold text-[15px] mb-0.5">{exp.role}</h3>
                      <p className="text-[#4b5563] text-sm">{exp.company}{exp.location ? ` · ${exp.location}` : ''}</p>
                    </div>
                    <span className="text-[10px] tracking-[0.3em] text-[#2a3045] uppercase whitespace-nowrap">{exp.period}</span>
                  </div>

                  <ul className="flex flex-col gap-2.5">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="text-[#4b5563] text-sm leading-[1.8] flex gap-3">
                        <span className="shrink-0 mt-[9px] w-3 h-px bg-[#7c6aff]" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Strengths */}
        <div className="str-section mb-28">
          <p className="section-label mb-12">Core Strengths</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {strengths.map(s => (
              <div key={s.title} className="str-card card p-5 rounded-lg hover:border-[#7c6aff]/40 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="accent-dot" />
                  <h4 className="text-white text-sm font-semibold">{s.title}</h4>
                </div>
                <p className="text-[#4b5563] text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="edu-section">
          <p className="section-label mb-12">Education</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {education.map((edu, i) => (
              <div key={i} className="edu-card card p-7 rounded-lg hover:border-[#7c6aff]/40 transition-all duration-300">
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#2a3045] mb-4">{edu.period}</p>
                <h3 className="text-white font-bold text-base mb-1.5">{edu.degree}</h3>
                <p className="text-[#4b5563] text-sm mb-4">{edu.school}</p>
                <span className="text-[10px] tracking-widest text-[#7c6aff] border border-[#7c6aff]/20 px-2.5 py-1 rounded">{edu.badge}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
