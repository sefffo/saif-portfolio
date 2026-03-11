import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const experience = [
  {
    role: '.NET Backend Developer Intern',
    company: 'Code Way',
    location: 'Cairo, Egypt',
    period: 'Nov 2025 – Present',
    current: true,
    color: '#e8ff00',
    points: [
      'Design and develop backend microservices using .NET 9, ASP.NET Core, and Clean Architecture for an LMS (Learning Management System) platform',
      'Build RESTful microservices with JWT/OAuth2 authentication, SignalR, and WebSockets for real-time communication between services',
      'Work with SQL Server and MongoDB, using EF Core, LINQ, and Redis caching to optimize data access and scalability',
      'Currently developing a Payment Service integrating third-party payment gateways into the microservices ecosystem',
      'Contributed ~50% of the microservices architecture — including Identity, Course, Certificate, and Content services',
    ],
  },
  {
    role: 'Front-End Developer Intern',
    company: 'Yildiz Advanced Projects & IT Solutions',
    location: 'Cairo, Egypt',
    period: 'Mar 2025 – Apr 2025',
    current: false,
    color: '#888',
    points: [
      'Developed reusable Angular UI components and improved UI/UX with Angular Material and Tailwind CSS',
      'Integrated REST APIs connecting Angular frontend with .NET backend services',
      'Improved application stability through error handling, interceptors, and lazy-loaded modules',
    ],
  },
  {
    role: 'Front-End Instructor',
    company: 'Savvy Programming School',
    location: 'Cairo, Egypt',
    period: 'Sep 2025 – Present',
    current: true,
    color: '#e8ff00',
    points: [
      'Teach HTML, CSS, JavaScript, and Angular to students aged 10–18 through structured labs and interactive lessons',
      'Design curriculum from fundamentals to real project builds, creating measurable skill progression',
      'Strong communicator — ability to break down complex technical concepts for any audience',
    ],
  },
  {
    role: 'Team Lead — University Portal System',
    company: 'Production Project (Coming Soon)',
    location: 'Egypt',
    period: '2026 – Present',
    current: true,
    color: '#e8ff00',
    points: [
      'Managing a development team building a production-level student portal system aimed at transforming university student portals across Egypt',
      'Responsible for system architecture decisions, sprint planning, code reviews, and delivery timelines',
      'Applying Agile/SDLC practices: backlog grooming, sprint retrospectives, and stakeholder communication',
      'Project is in active development — launch coming soon 🚀',
    ],
  },
  {
    role: 'ICPC Competitor',
    company: 'ACM International Collegiate Programming Contest',
    location: '',
    period: '2024',
    current: false,
    color: '#555',
    points: [
      'Competed in ICPC, sharpening competitive programming, algorithm design, and problem-solving under pressure',
    ],
  },
]

const education = [
  {
    degree: 'B.Sc. in Computer Science',
    school: 'Benha National University (Obour Campus)',
    period: '2023 – Present',
    detail: 'GPA: 3.72 / 4.00',
  },
  {
    degree: 'Full-Stack Web Development Track',
    school: 'Route Academy IT Training Center',
    period: '2024 – 2025',
    detail: 'Angular · ASP.NET Core',
  },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.about-reveal', {
      y: 50, opacity: 0, stagger: 0.07, duration: 0.75, ease: 'power3.out',
    })
    gsap.from('.timeline-item', {
      x: -40, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '.timeline-section', start: 'top 78%' },
    })
    gsap.from('.edu-card', {
      y: 30, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out',
      scrollTrigger: { trigger: '.edu-section', start: 'top 80%' },
    })
  }, { scope: ref })

  return (
    <div ref={ref} className="pt-32 pb-28 px-8 md:px-16 lg:px-24 page-enter">

      {/* Header */}
      <p className="about-reveal section-label mb-5">001 / About</p>
      <h1 className="about-reveal text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.9] tracking-tight mb-6">
        Who I<br /><span className="text-[#e8ff00]">Am.</span>
      </h1>
      <p className="about-reveal text-[#555] text-sm leading-relaxed max-w-xl mb-20">
        Junior .NET Backend Developer specializing in scalable systems, microservices, and clean code.
        ICPC competitor, coding instructor, and team lead — driven by building things that actually matter.
      </p>

      {/* Bio + Photo grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        <div>
          {/* PHOTO SLOT */}
          <div className="about-reveal relative w-52 h-64 card-border mb-10 overflow-hidden group cursor-pointer">
            <img
              src="/your-photo.jpg"
              alt="Saif Lotfy"
              className="w-full h-full object-cover grayscale contrast-125 opacity-60 group-hover:opacity-95 group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              onError={(e) => {
                const el = e.currentTarget as HTMLImageElement
                el.style.display = 'none'
                const p = el.parentElement
                if (p) p.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center gap-2"><span class="text-[#1f1f1f] text-3xl">📷</span><span class="text-[#222] text-[10px] tracking-widest uppercase">Add your photo to public/your-photo.jpg</span></div>`
              }}
            />
            <div className="absolute inset-0 border border-[#e8ff00]/0 group-hover:border-[#e8ff00]/20 transition-colors duration-500" />
          </div>

          <p className="about-reveal text-[#666] text-sm leading-[1.9] mb-4">
            Backend engineer with a deep focus on .NET 9, ASP.NET Core, microservices architecture, and clean,
            maintainable code. I've built production systems at Code Way, shipped real APIs, and currently
            lead a team building a platform that will reshape student portals across Egypt.
          </p>
          <p className="about-reveal text-[#444] text-sm leading-[1.9] mb-8">
            Outside of engineering, I teach programming to kids and teenagers at Savvy Programming School —
            which has sharpened my ability to communicate complex concepts clearly and manage diverse teams.
            Strong in project management, SDLC, and Agile methodologies.
          </p>

          <div className="about-reveal flex flex-wrap gap-2">
            {[
              'Cairo, Egypt 🇪🇬',
              'GPA 3.72',
              'Open to Work',
              'C1 English',
              'Team Lead',
              'ICPC Competitor',
            ].map(tag => (
              <span key={tag} className="text-[10px] tracking-[0.3em] uppercase border border-[#1f1f1f] text-[#444] px-3 py-1.5 hover:border-[#333] hover:text-[#888] transition-all duration-200">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Quick facts */}
        <div className="flex flex-col gap-5">
          {[
            { label: 'Location',         value: 'Cairo, Egypt'                         },
            { label: 'Primary Role',     value: '.NET Backend Developer'                },
            { label: 'Core Stack',       value: 'ASP.NET Core · C# · SQL Server · Redis'},
            { label: 'Frontend',         value: 'Angular 17 · TypeScript · Tailwind'   },
            { label: 'Architecture',     value: 'Clean Arch · Microservices · SOLID'   },
            { label: 'Also',             value: 'Instructor · Team Lead · ICPC'        },
            { label: 'Education',        value: 'B.Sc. CS — Benha National University' },
            { label: 'GPA',              value: '3.72 / 4.00'                          },
            { label: 'Languages',        value: 'Arabic (Native) · English (C1)'       },
            { label: 'Email',            value: 'saiflotfy26@gmail.com'                },
          ].map(item => (
            <div key={item.label} className="flex justify-between items-start border-b border-[#141414] pb-4 group">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#333] min-w-[130px] group-hover:text-[#444] transition-colors">{item.label}</span>
              <span className="text-sm text-[#888] text-right group-hover:text-[#aaa] transition-colors">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="timeline-section mb-28">
        <p className="section-label mb-12">Professional Experience</p>
        <div className="relative">
          <div className="absolute left-[3px] top-3 bottom-0 w-px bg-[#1a1a1a]" />
          <div className="flex flex-col gap-12">
            {experience.map((exp, i) => (
              <div key={i} className="timeline-item pl-10 relative">
                {/* Dot */}
                <div
                  className="absolute left-0 top-2 w-[7px] h-[7px] rounded-full border transition-colors duration-300"
                  style={{ borderColor: exp.color, background: exp.current ? exp.color : '#0a0a0a', boxShadow: exp.current ? `0 0 8px ${exp.color}66` : 'none' }}
                />

                {exp.current && (
                  <span className="inline-flex items-center gap-1.5 text-[9px] tracking-[0.3em] uppercase text-[#e8ff00] border border-[#e8ff00]/20 px-2.5 py-1 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e8ff00] animate-pulse" />
                    Current
                  </span>
                )}

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1.5 mb-4">
                  <div>
                    <h3 className="text-white font-bold text-[15px] mb-0.5">{exp.role}</h3>
                    <p className="text-[#444] text-sm">{exp.company}{exp.location ? ` · ${exp.location}` : ''}</p>
                  </div>
                  <span className="text-[10px] tracking-[0.3em] text-[#2a2a2a] uppercase whitespace-nowrap">{exp.period}</span>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="text-[#4a4a4a] text-sm leading-[1.8] flex gap-3">
                      <span className="shrink-0 mt-[5px] w-3 h-px" style={{ background: exp.color }} />
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
      <div className="mb-28">
        <p className="section-label mb-12">Core Strengths</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'System Design', desc: 'Designing scalable microservices and clean architecture systems from scratch.' },
            { title: 'Project Management', desc: 'Agile sprint planning, team coordination, backlog grooming, and SDLC delivery.' },
            { title: 'Team Leadership', desc: 'Currently leading a production team building a nation-scale student portal system.' },
            { title: 'Teaching & Mentoring', desc: 'Teaching code to ages 10–18 at Savvy School — clarity, patience, and curriculum design.' },
            { title: 'Problem Solving', desc: 'ICPC competitive programmer with strong algorithms and data structures foundation.' },
            { title: 'Full-Stack Fluency', desc: 'Backend-first but capable across Angular frontends, REST integration, and deployment.' },
          ].map(s => (
            <div key={s.title} className="card-border p-5 hover:bg-[#0d0d0d] transition-colors duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="accent-dot" />
                <h4 className="text-white text-sm font-semibold">{s.title}</h4>
              </div>
              <p className="text-[#444] text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="edu-section">
        <p className="section-label mb-12">Education</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {education.map((edu, i) => (
            <div key={i} className="edu-card card-border p-7 hover:bg-[#0d0d0d] transition-colors duration-300">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#2a2a2a] mb-4">{edu.period}</p>
              <h3 className="text-white font-bold text-base mb-1.5">{edu.degree}</h3>
              <p className="text-[#444] text-sm mb-3">{edu.school}</p>
              <span className="text-[10px] tracking-widest text-[#e8ff00] border border-[#e8ff00]/20 px-2.5 py-1">{edu.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
