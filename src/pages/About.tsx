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
    points: [
      'Design and develop backend services using .NET 9, ASP.NET Core, ASP.NET MVC and Web API following Clean Architecture',
      'Build and consume RESTful microservices with JWT/OAuth2 authentication, SignalR and WebSockets for real-time communication',
      'Work with SQL Server and MongoDB using EF Core, LINQ and Redis caching to optimize data access and scalability',
    ],
  },
  {
    role: 'Front-End Developer Intern',
    company: 'Yildiz Advanced Projects & IT Solutions',
    location: 'Cairo, Egypt',
    period: 'Mar 2025 – Apr 2025',
    current: false,
    points: [
      'Developed reusable Angular UI components and enhanced UI/UX using Angular Material and Tailwind CSS',
      'Integrated REST APIs to connect frontend with .NET backend services and improved application stability',
    ],
  },
  {
    role: 'Front-End Instructor',
    company: 'Savvy Programming School',
    location: 'Cairo, Egypt',
    period: 'Sep 2025 – Present',
    current: true,
    points: [
      'Teach HTML, CSS, JavaScript and Angular to students aged 10–18 through interactive lessons and coding labs',
    ],
  },
  {
    role: 'ICPC Competitor',
    company: 'ACM International Collegiate Programming Contest',
    location: '',
    period: '2024',
    current: false,
    points: [
      'Strengthened competitive programming and algorithm problem-solving skills using data structures and algorithms',
    ],
  },
]

const education = [
  {
    degree: 'B.Sc. in Computer Science',
    school: 'Benha National University',
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
      y: 50, opacity: 0, stagger: 0.08, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })
    gsap.from('.timeline-item', {
      x: -40, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '.timeline-section', start: 'top 75%' },
    })
  }, { scope: ref })

  return (
    <div ref={ref} className="pt-28 pb-24 px-8 md:px-20 page-enter">
      {/* Header */}
      <p className="about-reveal text-[11px] tracking-[0.4em] text-[#444] uppercase mb-6">001 / About</p>
      <h1 className="about-reveal text-5xl md:text-7xl font-black text-white uppercase leading-tight mb-16">
        Who I<br /><span className="text-[#e8ff00]">Am.</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        {/* Bio + Photo */}
        <div>
          {/* PHOTO SLOT — replace /your-photo.jpg with your actual photo in public/ */}
          <div className="about-reveal w-48 h-60 border border-[#1f1f1f] mb-8 overflow-hidden relative group">
            <img
              src="/your-photo.jpg"
              alt="Saif Lotfy"
              className="w-full h-full object-cover grayscale contrast-110 opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
              onError={(e) => {
                const el = e.currentTarget as HTMLImageElement
                el.style.display = 'none'
                const parent = el.parentElement
                if (parent) {
                  parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-[#222] text-xs tracking-widest uppercase">Add Photo</div>`
                }
              }}
            />
          </div>

          <h2 className="about-reveal text-2xl md:text-3xl font-bold text-white mb-5 leading-snug">
            Junior .NET Backend Developer<br />
            <span className="text-[#555] font-normal text-xl">building scalable systems.</span>
          </h2>
          <p className="about-reveal text-[#555] text-sm leading-relaxed mb-4">
            I specialize in scalable, data-driven web applications using .NET 9, ASP.NET Core, and RESTful APIs.
            Strong background in Clean Architecture, microservices, and optimized database design.
          </p>
          <p className="about-reveal text-[#444] text-sm leading-relaxed">
            ICPC competitive programmer with strong algorithms foundation.
            Currently interning at Code Way in Cairo while pursuing my CS degree at Benha National University (GPA: 3.72).
          </p>

          <div className="about-reveal flex flex-wrap gap-2 mt-8">
            {['Cairo, Egypt 🇪🇬', 'GPA 3.72', 'Open to Work', 'C1 English'].map(tag => (
              <span key={tag} className="text-[10px] tracking-widest uppercase border border-[#1f1f1f] text-[#444] px-3 py-1">{tag}</span>
            ))}
          </div>
        </div>

        {/* Quick facts */}
        <div className="flex flex-col gap-5">
          {[
            { label: 'Location', value: 'Cairo, Egypt' },
            { label: 'Primary Role', value: '.NET Backend Developer' },
            { label: 'Core Stack', value: 'ASP.NET Core · C# · SQL Server · Redis' },
            { label: 'Frontend', value: 'Angular 17 · TypeScript · Tailwind' },
            { label: 'Education', value: 'B.Sc. Computer Science — BNU' },
            { label: 'GPA', value: '3.72 / 4.00' },
            { label: 'Languages', value: 'Arabic (Native) · English (C1)' },
            { label: 'Contact', value: 'saiflotfy26@gmail.com' },
          ].map(item => (
            <div key={item.label} className="about-reveal flex justify-between items-start border-b border-[#1a1a1a] pb-4">
              <span className="text-[11px] tracking-widest uppercase text-[#444] min-w-[120px]">{item.label}</span>
              <span className="text-sm text-[#aaa] text-right">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="timeline-section mb-24">
        <p className="text-[11px] tracking-[0.4em] text-[#444] uppercase mb-10">Experience</p>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#1a1a1a]" />
          <div className="flex flex-col gap-10">
            {experience.map((exp, i) => (
              <div key={i} className="timeline-item pl-8 relative">
                <div className="absolute left-0 top-2 w-2 h-2 rounded-full border border-[#333] bg-[#0a0a0a] -translate-x-[3.5px]" />
                {exp.current && (
                  <span className="inline-block text-[9px] tracking-widest uppercase text-[#e8ff00] border border-[#e8ff00]/30 px-2 py-0.5 mb-2">Current</span>
                )}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-white font-bold text-base">{exp.role}</h3>
                    <p className="text-[#555] text-sm">{exp.company}{exp.location ? ` · ${exp.location}` : ''}</p>
                  </div>
                  <span className="text-[11px] tracking-widest text-[#333] uppercase whitespace-nowrap">{exp.period}</span>
                </div>
                <ul className="flex flex-col gap-2">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="text-[#555] text-sm leading-relaxed flex gap-3">
                      <span className="text-[#e8ff00] mt-1 shrink-0">—</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <div>
        <p className="text-[11px] tracking-[0.4em] text-[#444] uppercase mb-10">Education</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div key={i} className="about-reveal border border-[#1a1a1a] p-6 hover:border-[#2a2a2a] transition-colors">
              <p className="text-[11px] tracking-widest uppercase text-[#333] mb-3">{edu.period}</p>
              <h3 className="text-white font-bold text-base mb-1">{edu.degree}</h3>
              <p className="text-[#555] text-sm mb-2">{edu.school}</p>
              <p className="text-[#e8ff00] text-xs tracking-widest">{edu.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
