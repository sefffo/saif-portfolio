import { useState, useRef } from 'react'

export type SkillKey = {
  id: string
  label: string
  desc: string
  color: string
  bg: string
  icon: string
  wide?: boolean
  widePx?: number
}

const SKILLS: SkillKey[] = [
  // Row 1 — Languages
  { id:'csharp',  label:'C# 13',     desc:'Primary language — writing production .NET 9 backends, microservices, and APIs daily.',        color:'#fff', bg:'#7c6aff', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { id:'cpp',     label:'C++',       desc:'DSA, competitive programming (ICPC), OOP, STL — the foundation of my CS fundamentals.',       color:'#fff', bg:'#5b47d6', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { id:'ts',      label:'TS',        desc:'TypeScript — strict typing, generics, advanced patterns in Angular and Node backends.',         color:'#fff', bg:'#3b82f6', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { id:'js',      label:'JS',        desc:'JavaScript — DOM, async, ES2024+, used across Angular, React, and Node.js projects.',          color:'#1a1a1a', bg:'#f59e0b', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { id:'python',  label:'Py',        desc:'Computer Vision (OpenCV), ML experiments, scripting, RAID simulator academic project.',          color:'#fff', bg:'#22c55e', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { id:'html',    label:'HTML',      desc:'Semantic markup, accessibility, form handling, SEO structure.',                                  color:'#fff', bg:'#f97316', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { id:'css',     label:'CSS',       desc:'CSS custom props, grid, flexbox, animations — plus SCSS for structured styling.',               color:'#fff', bg:'#06b6d4', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { id:'sql',     label:'SQL',       desc:'Complex queries, stored procedures, migrations, performance tuning on SQL Server.',             color:'#fff', bg:'#ec4899', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },

  // Row 2 — Backend
  { id:'dotnet',    label:'.NET',      desc:'.NET 9 runtime — minimal APIs, background services, health checks, high perf.',                color:'#fff', bg:'#7c6aff', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
  { id:'aspnet',    label:'ASP.NET',   desc:'ASP.NET Core — Web API, MVC, middleware, filters, DI container, routing.',                    color:'#fff', bg:'#5b47d6', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
  { id:'nodejs',    label:'Node',      desc:'Backend JS runtime — REST APIs, Express/NestJS, async I/O, npm ecosystem.',                   color:'#1a1a1a', bg:'#22c55e', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { id:'efcore',    label:'EF Core',   desc:'ORM with Code-First, migrations, LINQ queries, seeding, interceptors — daily driver.',         color:'#fff', bg:'#7c6aff', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
  { id:'signalr',   label:'SignalR',   desc:'Real-time WebSocket hubs — live notifications, chat, dashboard updates in production.',        color:'#fff', bg:'#4f46e5', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
  { id:'jwt',       label:'JWT',       desc:'JSON Web Tokens — auth flows, refresh tokens, role claims, token revocation.',               color:'#1a1a1a', bg:'#f59e0b', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { id:'oauth2',    label:'OAuth2',    desc:'OAuth2 + Google OAuth2 — identity federation, authorization code flow, PKCE.',               color:'#fff', bg:'#ef4444', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
  { id:'docker',    label:'Docker',    desc:'Containerized all microservices — Docker Compose for local full-stack orchestration.',         color:'#fff', bg:'#2563eb', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },

  // Row 3 — Databases
  { id:'sqlserver', label:'SQL Svr',   desc:'Primary relational DB — schema design, indexes, execution plans, EF migrations.',             color:'#fff', bg:'#ef4444', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  { id:'redis',     label:'Redis',     desc:'In-memory caching — hot-path acceleration, session storage, pub/sub patterns.',               color:'#fff', bg:'#dc2626', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { id:'mongodb',   label:'Mongo',     desc:'Document store — flexible schema for LMS/CMS content, aggregation pipelines.',                color:'#fff', bg:'#22c55e', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { id:'postgres',  label:'PgSQL',     desc:'PostgreSQL — advanced queries, JSONB, CTEs, full-text search, constraint design.',           color:'#fff', bg:'#3b82f6', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { id:'angular',   label:'Angular',   desc:'Primary frontend — RxJS, NgRx, Signals, lazy loading, standalone components.',               color:'#fff', bg:'#ef4444', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { id:'react',     label:'React',     desc:'Hooks, Context, React Router v7, Three.js R3F — used for this portfolio.',                   color:'#1a1a1a', bg:'#60d8f7', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { id:'tailwind',  label:'Tailwind',  desc:'Utility-first CSS — rapid UI building, design system tokens, responsive layouts.',           color:'#fff', bg:'#0891b2', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { id:'git',       label:'Git',       desc:'Branching strategies, rebase, cherry-pick, conflict resolution — daily driver.',             color:'#fff', bg:'#f97316', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },

  // Row 4 — Architecture
  { id:'microsvcs', label:'µSvcs',     desc:'Built 50%+ of Code Way LMS microservices. API Gateway, service mesh, inter-service comms.',  color:'#fff', bg:'#7c6aff', wide:true, widePx:80 , icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
  { id:'clean',     label:'Clean Arch',desc:'Domain → Application → Infrastructure → API layers. All projects built this way.',           color:'#fff', bg:'#5b47d6', wide:true, widePx:80, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
  { id:'solid',     label:'SOLID',     desc:'Applies SRP, OCP, LSP, ISP, DIP across all service and architecture design.',               color:'#fff', bg:'#a78bfa', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { id:'dsa',       label:'DSA',       desc:'ICPC competitor — data structures & algorithms, complexity analysis, LeetCode.',              color:'#1a1a1a', bg:'#f59e0b', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { id:'github',    label:'GitHub',    desc:'Pull requests, code review, Actions CI/CD pipelines, project boards.',                       color:'#fff', bg:'#374151', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { id:'jira',      label:'Jira',      desc:'Sprint planning, backlog grooming, task delegation as Team Lead on Uni Portal.',             color:'#fff', bg:'#2563eb', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
  { id:'jenkins',   label:'Jenkins',   desc:'Jenkins pipelines for Uni Portal SDLC — staging and prod automation.',                      color:'#fff', bg:'#dc2626', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
  { id:'linux',     label:'Linux',     desc:'CLI, shell scripting, permissions, process management, server environments.',                 color:'#fff', bg:'#1f2937', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
]

const ROWS: string[][] = [
  ['csharp','cpp','ts','js','python','html','css','sql'],
  ['dotnet','aspnet','nodejs','efcore','signalr','jwt','oauth2','docker'],
  ['sqlserver','redis','mongodb','postgres','angular','react','tailwind','git'],
  ['microsvcs','clean','solid','dsa','github','jira','jenkins','linux'],
]

const ROW_LABELS = ['Languages & Core', 'Backend & .NET', 'Databases & Frontend', 'Architecture & Tools']

const KEY_MAP = Object.fromEntries(SKILLS.map(s => [s.id, s]))

function Key3D({ skill, isActive, onEnter, onLeave }: {
  skill: SkillKey
  isActive: boolean
  onEnter: () => void
  onLeave: () => void
}) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="relative cursor-default select-none flex-shrink-0"
      style={{
        width: skill.widePx ? skill.widePx : undefined,
        minWidth: skill.widePx ? skill.widePx : 48,
        height: 52,
        perspective: 300,
      }}
    >
      <div
        className="absolute inset-0 rounded-lg flex flex-col items-center justify-center gap-1 transition-all duration-100"
        style={{
          background: isActive
            ? `linear-gradient(135deg, ${skill.bg}ee, ${skill.bg}cc)`
            : `linear-gradient(145deg, ${skill.bg}dd, ${skill.bg}99)`,
          boxShadow: isActive
            ? `0 2px 0 rgba(0,0,0,0.5), 0 0 20px ${skill.bg}88, inset 0 1px 0 rgba(255,255,255,0.3)`
            : `0 5px 0 rgba(0,0,0,0.5), 0 7px 0 rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)`,
          transform: isActive ? 'translateY(4px) rotateX(5deg)' : 'translateY(0) rotateX(0deg)',
          border: isActive ? `1px solid ${skill.bg}` : '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <img
          src={skill.icon}
          alt={skill.label}
          className="w-5 h-5 object-contain"
          style={{ filter: skill.color === '#fff' ? 'brightness(1)' : 'none' }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
        <span
          className="text-[7px] font-bold leading-none text-center px-0.5"
          style={{ color: skill.color }}
        >
          {skill.label}
        </span>
      </div>
    </div>
  )
}

export default function SkillKeyboard() {
  const [active, setActive] = useState<SkillKey | null>(null)
  const boardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!boardRef.current) return
    const rect = boardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width  - 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5
    boardRef.current.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 8}deg)`
  }

  const handleMouseLeave = () => {
    if (!boardRef.current) return
    boardRef.current.style.transform = `rotateY(-8deg) rotateX(12deg)`
  }

  return (
    <div className="w-full">

      {/* Info panel */}
      <div
        className="mb-10 min-h-[88px] flex items-center gap-5 rounded-xl px-6 py-5 border transition-all duration-300"
        style={{
          background: active ? `${active.bg}12` : '#12151d',
          borderColor: active ? `${active.bg}55` : '#1e2235',
          boxShadow: active ? `0 0 30px ${active.bg}18` : 'none',
        }}
      >
        {active ? (
          <>
            <img src={active.icon} alt={active.label} className="w-10 h-10 object-contain flex-shrink-0"
              onError={(e) => { (e.target as HTMLImageElement).style.display='none' }}
            />
            <div>
              <p className="font-bold text-lg mb-1" style={{ color: active.bg }}>{active.label}</p>
              <p className="text-[#6b7280] text-sm leading-relaxed">{active.desc}</p>
            </div>
          </>
        ) : (
          <p className="text-[#272d42] text-sm tracking-[0.25em] uppercase">
            ⌨ Hover a keycap to explore my tech stack
          </p>
        )}
      </div>

      {/* Keyboard — scrollable on small screens */}
      <div className="w-full overflow-x-auto pb-4 -mb-4">
        <div
          className="flex justify-center"
          style={{ perspective: '1000px', perspectiveOrigin: '50% 40%', minWidth: 560 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={boardRef}
            className="relative rounded-2xl p-5 transition-transform duration-300 ease-out"
            style={{
              background: 'linear-gradient(145deg, #1a1c24, #0d0f14)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.7), 0 15px 0 #080a0e, 0 20px 0 #060708, inset 0 1px 0 #2a2d3a',
              border: '1px solid #1e2235',
              transform: 'rotateY(-8deg) rotateX(12deg)',
              transformStyle: 'preserve-3d',
              width: 'fit-content',
            }}
          >
            {/* Top surface highlight */}
            <div className="absolute inset-x-6 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #2a2d3a, transparent)' }} />

            {/* LED row */}
            <div className="flex justify-end gap-1.5 mb-4">
              {['#7c6aff','#3b82f6','#22c55e','#f59e0b','#ef4444','#ec4899'].map(c => (
                <div key={c} className="w-2 h-2 rounded-full"
                  style={{ background: c, boxShadow: `0 0 8px ${c}, 0 0 16px ${c}55` }}
                />
              ))}
            </div>

            {/* Keys */}
            <div className="flex flex-col gap-2.5">
              {ROWS.map((row, ri) => (
                <div key={ri}>
                  <p className="text-[7px] tracking-[0.4em] uppercase mb-1.5 pl-0.5"
                    style={{ color: '#2a2d3a' }}>{ROW_LABELS[ri]}
                  </p>
                  <div className="flex gap-1.5">
                    {row.map(id => {
                      const skill = KEY_MAP[id]
                      if (!skill) return null
                      return (
                        <Key3D
                          key={id}
                          skill={skill}
                          isActive={active?.id === id}
                          onEnter={() => setActive(skill)}
                          onLeave={() => setActive(null)}
                        />
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Spacebar */}
            <div className="mt-2.5 flex items-center gap-2">
              <div
                className="h-7 flex-1 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(145deg, #1e2235, #161824)',
                  boxShadow: '0 4px 0 rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
                  border: '1px solid #2a2d3a',
                }}
              >
                <span className="text-[8px] tracking-[0.5em] uppercase text-[#2a2d3a]">saif lotfy</span>
              </div>
            </div>

            {/* Bottom brand */}
            <div className="mt-2.5 flex justify-between items-center px-1">
              <span className="text-[7px] tracking-[0.3em] uppercase text-[#1e2235]">TECH STACK v2</span>
              <span className="text-[7px] tracking-[0.3em] uppercase text-[#1e2235]">.NET BACKEND</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
