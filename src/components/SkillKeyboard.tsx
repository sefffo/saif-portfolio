import { useState, useRef, useEffect } from 'react'

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
  { id:'csharp',   label:'C# 13',    desc:'Primary language — writing production .NET 9 backends, microservices, and APIs daily.',       color:'#fff', bg:'#7c6aff', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { id:'cpp',      label:'C++',      desc:'DSA, competitive programming (ICPC), OOP, STL — the foundation of my CS fundamentals.',      color:'#fff', bg:'#5b47d6', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { id:'ts',       label:'TS',       desc:'TypeScript — strict typing, generics, advanced patterns in Angular and Node backends.',        color:'#fff', bg:'#3b82f6', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { id:'js',       label:'JS',       desc:'JavaScript — DOM, async, ES2024+, used across Angular, React, and Node.js projects.',         color:'#1a1a1a', bg:'#f59e0b', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { id:'python',   label:'Py',       desc:'Computer Vision (OpenCV), ML experiments, scripting, RAID simulator academic project.',         color:'#fff', bg:'#22c55e', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { id:'html',     label:'HTML',     desc:'Semantic markup, accessibility, form handling, SEO structure.',                                 color:'#fff', bg:'#f97316', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { id:'css',      label:'CSS',      desc:'CSS custom props, grid, flexbox, animations — plus SCSS for structured styling.',              color:'#fff', bg:'#06b6d4', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { id:'sql',      label:'SQL',      desc:'Complex queries, stored procedures, migrations, performance tuning on SQL Server.',            color:'#fff', bg:'#ec4899', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },

  // Row 2 — Backend
  { id:'dotnet',   label:'.NET',     desc:'.NET 9 runtime — minimal APIs, background services, health checks, high performance.',       color:'#fff', bg:'#7c6aff', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
  { id:'aspnet',   label:'ASP.NET',  desc:'ASP.NET Core — Web API, MVC, middleware, filters, DI container, routing.',                   color:'#fff', bg:'#5b47d6', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
  { id:'efcore',   label:'EF Core',  desc:'ORM with Code-First, migrations, LINQ queries, seeding, interceptors — daily driver.',        color:'#fff', bg:'#7c6aff', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
  { id:'signalr',  label:'SignalR',  desc:'Real-time WebSocket hubs — live notifications, chat, dashboard updates in production.',       color:'#fff', bg:'#4f46e5', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
  { id:'rabbitmq', label:'RabbitMQ', desc:'Message broker for async inter-service communication — queues, exchanges, dead-letter handling in microservices.', color:'#fff', bg:'#f97316', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg' },
  { id:'mediator', label:'MediatR',  desc:'Mediator pattern via MediatR — decoupled request/response and notification pipelines inside .NET services.', color:'#fff', bg:'#a78bfa', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
  { id:'docker',   label:'Docker',   desc:'Containerized all microservices — Docker Compose for local full-stack orchestration.',        color:'#fff', bg:'#2563eb', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { id:'n8n',      label:'n8n',      desc:'Workflow automation — building no-code/low-code integration pipelines between services and APIs.', color:'#fff', bg:'#ea4b71', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/n8n/n8n-original.svg' },

  // Row 3 — Databases & Frontend
  { id:'sqlserver', label:'SQL Svr',  desc:'Primary relational DB — schema design, indexes, execution plans, EF migrations.',            color:'#fff', bg:'#ef4444', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  { id:'redis',     label:'Redis',    desc:'In-memory caching — hot-path acceleration, session storage, pub/sub patterns.',              color:'#fff', bg:'#dc2626', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { id:'mongodb',   label:'Mongo',    desc:'Document store — flexible schema for LMS/CMS content, aggregation pipelines.',               color:'#fff', bg:'#22c55e', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { id:'postgres',  label:'PgSQL',    desc:'PostgreSQL — advanced queries, JSONB, CTEs, full-text search, constraint design.',          color:'#fff', bg:'#3b82f6', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { id:'angular',   label:'Angular',  desc:'Primary frontend — RxJS, NgRx, Signals, lazy loading, standalone components.',              color:'#fff', bg:'#ef4444', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { id:'react',     label:'React',    desc:'Hooks, Context, React Router v7, Three.js R3F — used for this portfolio.',                  color:'#1a1a1a', bg:'#60d8f7', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { id:'tailwind',  label:'Tailwind', desc:'Utility-first CSS — rapid UI building, design system tokens, responsive layouts.',          color:'#fff', bg:'#0891b2', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { id:'git',       label:'Git',      desc:'Branching strategies, rebase, cherry-pick, conflict resolution — daily driver.',            color:'#fff', bg:'#f97316', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },

  // Row 4 — Architecture & Tools
  { id:'microsvcs', label:'µSvcs',     desc:'Built 50%+ of Code Way LMS microservices. API Gateway, service mesh, inter-service comms.', color:'#fff', bg:'#7c6aff', wide:true, widePx:76, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
  { id:'clean',     label:'Clean Arch',desc:'Domain → Application → Infrastructure → API layers. All projects built this way.',          color:'#fff', bg:'#5b47d6', wide:true, widePx:76, icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
  { id:'cqrs',      label:'CQRS',     desc:'Command Query Responsibility Segregation — separating read and write models for scalable, maintainable service design.', color:'#fff', bg:'#ec4899', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
  { id:'solid',     label:'SOLID',    desc:'Applies SRP, OCP, LSP, ISP, DIP across all service and architecture design.',              color:'#fff', bg:'#a78bfa', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { id:'dsa',       label:'DSA',      desc:'ICPC competitor — data structures & algorithms, complexity analysis, LeetCode.',             color:'#1a1a1a', bg:'#f59e0b', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { id:'github',    label:'GitHub',   desc:'Pull requests, code review, Actions CI/CD pipelines, project boards.',                      color:'#fff', bg:'#374151', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { id:'jira',      label:'Jira',     desc:'Sprint planning, backlog grooming, task delegation as Team Lead on Uni Portal.',            color:'#fff', bg:'#2563eb', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
  { id:'linux',     label:'Linux',    desc:'CLI, shell scripting, permissions, process management, server environments.',                color:'#fff', bg:'#1f2937', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
]

const ROWS: string[][] = [
  ['csharp','cpp','ts','js','python','html','css','sql'],
  ['dotnet','aspnet','efcore','signalr','rabbitmq','mediator','docker','n8n'],
  ['sqlserver','redis','mongodb','postgres','angular','react','tailwind','git'],
  ['microsvcs','clean','cqrs','solid','dsa','github','jira','linux'],
]

const ROW_LABELS = ['Languages & Core', 'Backend & .NET', 'Databases & Frontend', 'Architecture & Tools']

const KEY_MAP = Object.fromEntries(SKILLS.map(s => [s.id, s]))

function Key3D({ skill, isActive, onEnter, onLeave, keyW, keyH }: {
  skill: SkillKey
  isActive: boolean
  onEnter: () => void
  onLeave: () => void
  keyW: number
  keyH: number
}) {
  const w = skill.widePx ? Math.round(skill.widePx * (keyW / 48)) : keyW

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onEnter}
      className="relative cursor-default select-none flex-shrink-0"
      style={{ width: w, height: keyH, perspective: 300 }}
    >
      <div
        className="absolute inset-0 rounded-md flex flex-col items-center justify-center gap-[3px] transition-all duration-100"
        style={{
          background: isActive
            ? `linear-gradient(135deg, ${skill.bg}ee, ${skill.bg}cc)`
            : `linear-gradient(145deg, ${skill.bg}dd, ${skill.bg}99)`,
          boxShadow: isActive
            ? `0 2px 0 rgba(0,0,0,0.5), 0 0 16px ${skill.bg}88, inset 0 1px 0 rgba(255,255,255,0.3)`
            : `0 4px 0 rgba(0,0,0,0.5), 0 6px 0 rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)`,
          transform: isActive ? 'translateY(3px) rotateX(5deg)' : 'translateY(0)',
          border: isActive ? `1px solid ${skill.bg}` : '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <img
          src={skill.icon}
          alt={skill.label}
          style={{ width: keyH * 0.37, height: keyH * 0.37, objectFit: 'contain' }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
        <span
          style={{ color: skill.color, fontSize: Math.max(6, keyH * 0.14), fontWeight: 700, lineHeight: 1, textAlign: 'center', padding: '0 2px' }}
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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Key dimensions: smaller on mobile
  const keyW = isMobile ? 36 : 48
  const keyH = isMobile ? 40 : 52
  const gap  = isMobile ? 5  : 6
  const pad  = isMobile ? 14 : 20

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!boardRef.current || isMobile) return
    const rect = boardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width  - 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5
    boardRef.current.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 8}deg)`
  }

  const handleMouseLeave = () => {
    if (!boardRef.current) return
    boardRef.current.style.transform = isMobile ? 'none' : 'rotateY(-8deg) rotateX(12deg)'
  }

  return (
    <div className="w-full">

      {/* Info panel */}
      <div
        className="mb-8 min-h-[80px] flex items-center gap-4 rounded-xl px-5 py-4 border transition-all duration-300"
        style={{
          background: active ? `${active.bg}12` : '#12151d',
          borderColor: active ? `${active.bg}55` : '#1e2235',
          boxShadow: active ? `0 0 30px ${active.bg}18` : 'none',
        }}
      >
        {active ? (
          <>
            <img src={active.icon} alt={active.label} className="w-9 h-9 object-contain flex-shrink-0"
              onError={(e) => { (e.target as HTMLImageElement).style.display='none' }}
            />
            <div>
              <p className="font-bold text-base mb-0.5" style={{ color: active.bg }}>{active.label}</p>
              <p className="text-[#6b7280] text-xs leading-relaxed">{active.desc}</p>
            </div>
          </>
        ) : (
          <p className="text-[#272d42] text-xs tracking-[0.2em] uppercase">
            {isMobile ? '📱 Tap a key to explore' : '⌨ Hover a keycap to explore my tech stack'}
          </p>
        )}
      </div>

      {/* Keyboard wrapper — horizontally scrollable on mobile */}
      <div className="w-full overflow-x-auto pb-3">
        <div
          className="flex justify-center"
          style={{
            perspective: isMobile ? 'none' : '1000px',
            perspectiveOrigin: '50% 40%',
            minWidth: isMobile ? 340 : 520,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={boardRef}
            className="relative rounded-2xl transition-transform duration-300 ease-out"
            style={{
              padding: pad,
              background: 'linear-gradient(145deg, #1a1c24, #0d0f14)',
              boxShadow: isMobile
                ? '0 10px 30px rgba(0,0,0,0.5), inset 0 1px 0 #2a2d3a'
                : '0 40px 80px rgba(0,0,0,0.7), 0 15px 0 #080a0e, 0 20px 0 #060708, inset 0 1px 0 #2a2d3a',
              border: '1px solid #1e2235',
              transform: isMobile ? 'none' : 'rotateY(-8deg) rotateX(12deg)',
              transformStyle: 'preserve-3d',
              width: 'fit-content',
            }}
          >
            {/* Top highlight */}
            <div className="absolute inset-x-4 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #2a2d3a, transparent)' }} />

            {/* LED row */}
            <div className="flex justify-end gap-1 mb-3">
              {['#7c6aff','#3b82f6','#22c55e','#f59e0b','#ef4444','#ec4899'].map(c => (
                <div key={c}
                  style={{ width: isMobile ? 6 : 8, height: isMobile ? 6 : 8, borderRadius: '50%', background: c, boxShadow: `0 0 6px ${c}, 0 0 12px ${c}55` }}
                />
              ))}
            </div>

            {/* Keys */}
            <div style={{ display: 'flex', flexDirection: 'column', gap }}>
              {ROWS.map((row, ri) => (
                <div key={ri}>
                  <p style={{ fontSize: 6, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 5, paddingLeft: 2, color: '#2a2d3a' }}>
                    {ROW_LABELS[ri]}
                  </p>
                  <div style={{ display: 'flex', gap }}>
                    {row.map(id => {
                      const skill = KEY_MAP[id]
                      if (!skill) return null
                      return (
                        <Key3D
                          key={id}
                          skill={skill}
                          isActive={active?.id === id}
                          onEnter={() => setActive(skill)}
                          onLeave={() => isMobile ? null : setActive(null)}
                          keyW={keyW}
                          keyH={keyH}
                        />
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Spacebar */}
            <div style={{ marginTop: gap, display: 'flex' }}>
              <div
                style={{
                  height: isMobile ? 22 : 28,
                  flex: 1,
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(145deg, #1e2235, #161824)',
                  boxShadow: '0 3px 0 rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
                  border: '1px solid #2a2d3a',
                }}
              >
                <span style={{ fontSize: 7, letterSpacing: '0.5em', textTransform: 'uppercase', color: '#2a2d3a' }}>saif lotfy</span>
              </div>
            </div>

            {/* Brand */}
            <div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between', paddingInline: 2 }}>
              <span style={{ fontSize: 6, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#1e2235' }}>TECH STACK v2</span>
              <span style={{ fontSize: 6, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#1e2235' }}>.NET BACKEND</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
