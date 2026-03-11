import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const experience = [
  {
    role: 'Team Lead & Backend Developer — National University Portal',
    company: 'Production Project',
    location: 'Egypt',
    period: '2026 – Present',
    current: true,
    points: [
      'Leading a dev team AND building the backend simultaneously — architecting a production student portal system to modernize university portals across Egypt',
      'Full SDLC ownership: Jira sprints, Slack team comms, GitHub Actions + Jenkins CI/CD, backlog grooming, code reviews, and delivery',
      'Backend: ASP.NET Core + Clean Architecture microservices; Frontend: Angular; Data: SQL Server',
      'Designed to scale across multiple Egyptian universities — launching soon 🚀',
    ],
  },
  {
    role: '.NET Backend Developer Intern',
    company: 'Code Way (LMS Platform)',
    location: 'Cairo, Egypt',
    period: 'Nov 2025 – Present',
    current: true,
    points: [
      'Designing and building backend microservices for a production LMS using ASP.NET Core and Clean Architecture',
      'Contributed ~50% of all services: Identity (JWT/OAuth2), Course, Certificate, Content, and active Payment Service (Paymob)',
      'Real-time features via SignalR + WebSockets; Redis caching for high-performance reads',
      'SQL Server + MongoDB with EF Core + LINQ — all running in production serving real users',
    ],
  },
  {
    role: 'Front-End Instructor',
    company: 'Savvy Programming School',
    location: 'Cairo, Egypt',
    period: 'Sep 2025 – Present',
    current: true,
    points: [
      'Teaching HTML, CSS, JavaScript, and Angular to students aged 10–18 through structured labs and interactive coding lessons',
      'Designed full curriculum from fundamentals to real project builds with measurable skill progression',
      'Developed strong communication and teaching skills — able to break down complex technical concepts for any audience',
    ],
  },
  {
    role: 'Computer Vision Intern',
    company: 'NAID — National Academy of IT for Persons with Disabilities',
    location: 'Cairo, Egypt',
    period: '2025',
    current: false,
    points: [
      'Worked on computer vision projects at a government-backed academy focused on digital inclusion and ICT accessibility',
      'Hands-on experience with CV techniques: Python, OpenCV, image processing pipelines',
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
      'Competed in ICPC — strengthened algorithm design, data structures, and competitive programming under timed pressure',
    ],
  },
]

const education = [
  {
    degree: 'B.Sc. in Computer Science',
    department: 'Software Engineering Department',
    school: 'Benha National University — Obour Campus',
    schoolUrl: 'https://www.linkedin.com/school/benhanationaluniversity/posts/?feedView=all',
    period: '2023 – 2027',
    badge: 'GPA: 3.72 / 4.00',
    current: true,
    highlights: [
      '3rd place in class ranking',
      'Software Engineering specialisation track',
      'Relevant: Data Structures, Algorithms, OS, Databases, OOP, Networks',
    ],
  },
  {
    degree: 'Full-Stack Web Development Diploma',
    department: 'Frontend: Angular · Backend: ASP.NET Core',
    school: 'Route Academy IT Training Center',
    schoolUrl: 'https://www.linkedin.com/company/routeacademy/posts/?feedView=all',
    period: '2024 – 2025',
    badge: 'Graduated',
    current: false,
    highlights: [
      'Completed full professional diploma covering both frontend and backend tracks',
      'Frontend: HTML, CSS, JavaScript, TypeScript, Angular',
      'Backend: C#, ASP.NET Core, EF Core, SQL Server, Clean Architecture',
    ],
  },
]

const strengths = [
  { title: 'System Design',        desc: 'Designing scalable microservices and Clean Architecture systems from the ground up.' },
  { title: 'Project Management',   desc: 'Agile sprint planning, Jira, Slack, Jenkins, GitHub Actions, backlog grooming, SDLC delivery.' },
  { title: 'Team Leadership',      desc: 'Currently leading a production team building a portal for Egyptian universities.' },
  { title: 'Teaching & Mentoring', desc: 'Teaching code to ages 10–18 at Savvy School — curriculum design and clear communication.' },
  { title: 'Problem Solving',      desc: 'ICPC background with a strong algorithms and data structures foundation.' },
  { title: 'Full-Stack Fluency',   desc: 'Backend-first but capable across Angular, Node.js, React, REST, and deployment.' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.a-reveal', { y: 40, opacity: 0, stagger: 0.07, duration: 0.75, ease: 'power3.out' })
    gsap.from('.tl-item', {
      x: -30, opacity: 0, stagger: 0.09, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '.tl-section', start: 'top 78%' },
    })
    gsap.from('.edu-item', {
      x: -30, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '.edu-section', start: 'top 82%' },
    })
    gsap.from('.str-card', {
      y: 30, opacity: 0, stagger: 0.07, duration: 0.6, ease: 'power3.out',
      scrollTrigger: { trigger: '.str-section', start: 'top 82%' },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="page-wrapper pb-56 page-enter">
      <div className="max-w-7xl mx-auto pt-16">

        <p className="a-reveal section-label mb-4">001 / About</p>
        <h1 className="a-reveal text-5xl md:text-7xl font-black text-white uppercase leading-[0.9] tracking-tight mb-4">
          Who I <span className="grad-text">Am.</span>
        </h1>
        <p className="a-reveal text-[#6b7280] text-sm leading-relaxed max-w-xl mb-20">
          Junior .NET Backend Developer. ICPC competitor. Coding instructor. Team lead.
          Driven by building things that actually matter — scalable, clean, and production-ready.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-28">
          <div>
            <div className="a-reveal relative w-44 h-56 card rounded-lg mb-10 overflow-hidden group cursor-pointer">
              <img src="/saif.jpg" alt="Saif Lotfy"
                className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement
                  el.style.display = 'none'
                  const p = el.parentElement
                  if (p) p.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center gap-2"><span class="text-3xl">📷</span><span class="text-[#1e2235] text-[9px] tracking-widest uppercase text-center px-3">Add your-photo.jpg<br/>to /public</span></div>`
                }}
              />
            </div>

            <p className="a-reveal text-[#6b7280] text-sm leading-[1.9] mb-4">
              Backend engineer focused on ASP.NET Core, microservices, and maintainable systems.
              Built production systems at Code Way (contributed 50% of a live LMS), Computer Vision intern at NAID,
              and currently leading + building the backend for a portal launching across Egyptian universities.
            </p>
            <p className="a-reveal text-[#4b5563] text-sm leading-[1.9] mb-8">
              Also a Front-End Instructor at Savvy Programming School teaching Angular and JavaScript to students aged 10–18.
              ICPC competitor. GPA 3.72 — 3rd in class. Strong communicator, Agile practitioner, and hands-on team lead.
            </p>

            <div className="a-reveal flex flex-wrap gap-2">
              {[
                'Cairo 🇪🇬', 'GPA 3.72', '3rd in Class', 'Open to Work',
                'C1 English', 'Team Lead', 'ICPC 2024',
                'CV @NAID', 'Instructor @Savvy', 'Backend @Code Way',
              ].map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { label: 'Location',      value: 'Cairo, Egypt'                                     },
              { label: 'Primary Role',  value: '.NET Backend Developer'                           },
              { label: 'Core Stack',    value: 'ASP.NET Core · C# · SQL Server · Redis'           },
              { label: 'Architecture',  value: 'Clean Arch · Microservices · SOLID · DDD'         },
              { label: 'Frontend',      value: 'Angular · TypeScript · RxJS · NgRx'               },
              { label: 'Also',          value: 'Node.js · Python · Computer Vision'               },
              { label: 'CI/CD & Tools', value: 'GitHub Actions · Jenkins · Docker · Jira · Slack' },
              { label: 'Roles',         value: 'Team Lead · Backend Dev · Instructor · ICPC'      },
              { label: 'Education',     value: 'B.Sc. CS — Benha National University'             },
              { label: 'Department',    value: 'Software Engineering'                             },
              { label: 'GPA',           value: '3.72 / 4.00 — 3rd in Class'                      },
              { label: 'Languages',     value: 'Arabic (Native) · English (C1)'                  },
            ].map(item => (
              <div key={item.label} className="flex justify-between items-start border-b border-[#1e2235] pb-3.5 group">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#272d42] min-w-[140px] group-hover:text-[#374151] transition-colors">{item.label}</span>
                <span className="text-sm text-[#6b7280] text-right group-hover:text-[#9ca3af] transition-colors">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="tl-section mb-28">
          <p className="section-label mb-12">Professional Experience</p>
          <div className="relative">
            <div className="absolute left-[3px] top-2 bottom-0 w-px bg-[#1e2235]" />
            <div className="flex flex-col gap-14">
              {experience.map((exp, i) => (
                <div key={i} className="tl-item pl-10 relative">
                  <div className={`absolute left-0 top-2 w-[7px] h-[7px] rounded-full border ${
                    exp.current
                      ? 'border-[#7c6aff] bg-[#7c6aff] shadow-[0_0_8px_#7c6aff66]'
                      : 'border-[#272d42] bg-[#0d0f14]'
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
                    <span className="text-[10px] tracking-[0.3em] text-[#272d42] uppercase whitespace-nowrap">{exp.period}</span>
                  </div>

                  <ul className="flex flex-col gap-2.5">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="text-[#4b5563] text-sm leading-[1.8] flex gap-3">
                        <span className="shrink-0 mt-[9px] w-3 h-px bg-[#7c6aff]" />{pt}
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

        {/* Education Timeline */}
        <div className="edu-section">
          <p className="section-label mb-12">Education</p>
          <div className="relative">
            <div className="absolute left-[3px] top-2 bottom-0 w-px bg-[#1e2235]" />
            <div className="flex flex-col gap-14">
              {education.map((edu, i) => (
                <div key={i} className="edu-item pl-10 relative">
                  <div className={`absolute left-0 top-2 w-[7px] h-[7px] rounded-full border ${
                    edu.current
                      ? 'border-[#7c6aff] bg-[#7c6aff] shadow-[0_0_8px_#7c6aff66]'
                      : 'border-[#272d42] bg-[#0d0f14]'
                  }`} />

                  {edu.current && (
                    <span className="inline-flex items-center gap-1.5 text-[9px] tracking-[0.3em] uppercase text-[#7c6aff] border border-[#7c6aff]/20 px-2.5 py-1 mb-3 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7c6aff] animate-pulse" />Current
                    </span>
                  )}

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1.5 mb-4">
                    <div>
                      <h3 className="text-white font-bold text-[15px] mb-0.5">{edu.degree}</h3>
                      <p className="text-[#4b5563] text-sm">{edu.department}</p>
                    </div>
                    <span className="text-[10px] tracking-[0.3em] text-[#272d42] uppercase whitespace-nowrap">{edu.period}</span>
                  </div>

                  {/* school LinkedIn link */}
                  <a
                    href={edu.schoolUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[#4b5563] text-xs hover:text-[#a78bfa] transition-colors duration-200 group w-fit mb-4"
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" className="opacity-60 group-hover:opacity-100 flex-shrink-0">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>{edu.school}</span>
                    <span className="text-[#272d42] group-hover:text-[#7c6aff] transition-colors">↗</span>
                  </a>

                  <ul className="flex flex-col gap-2.5">
                    {edu.highlights.map((h, j) => (
                      <li key={j} className="text-[#4b5563] text-sm leading-[1.8] flex gap-3">
                        <span className="shrink-0 mt-[9px] w-3 h-px bg-[#7c6aff]" />{h}
                      </li>
                    ))}
                  </ul>

                  <span className="inline-block mt-4 text-[10px] tracking-widest text-[#7c6aff] border border-[#7c6aff]/20 px-2.5 py-1 rounded">{edu.badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
