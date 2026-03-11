import { useState } from 'react'

export type SkillKey = {
  id: string
  label: string
  sublabel?: string
  desc: string
  color: string
  icon?: string
  wide?: 'w1_5' | 'w2' | 'w2_25' | 'w2_75' | 'w3' | 'w6'
}

const SKILL_KEYS: SkillKey[] = [
  // Row 0 – Numbers row mapped to languages
  { id: 'c',      label: 'C',      desc: 'Systems programming fundamentals — memory management, pointers, algorithms.',           color: '#a78bfa' },
  { id: 'cpp',    label: 'C++',    desc: 'DSA, competitive programming (ICPC), OOP, STL — the foundation of my CS fundamentals.', color: '#a78bfa' },
  { id: 'csharp', label: 'C# 13', desc: 'Primary language — writing production .NET 9 backends, microservices, and APIs daily.',    color: '#a78bfa' },
  { id: 'python', label: 'Python', desc: 'Computer Vision (OpenCV), ML experiments, scripting, and academic projects.',              color: '#a78bfa' },
  { id: 'sql',    label: 'SQL',    desc: 'Complex queries, stored procedures, migrations, performance tuning on SQL Server.',       color: '#a78bfa' },
  { id: 'js',     label: 'JS',     desc: 'JavaScript — DOM, async, ES2024+, used across Angular, React, and Node.js projects.',    color: '#f59e0b' },
  { id: 'ts',     label: 'TS',     desc: 'TypeScript — strict typing, generics, advanced patterns in Angular and Node backends.',   color: '#3b82f6' },
  { id: 'html',   label: 'HTML',   desc: 'Semantic markup, accessibility patterns, form handling, SEO structure.',                 color: '#f97316' },
  { id: 'css',    label: 'CSS',    desc: 'CSS custom props, grid, flexbox, animations — plus SCSS for structured styling.',         color: '#06b6d4' },
  { id: 'scss',   label: 'SCSS',   desc: 'BEM, variables, mixins, functions — structured large-scale stylesheet management.',       color: '#ec4899' },

  // Row 1 – Backend
  { id: 'net9',       label: '.NET 9',     desc: 'Latest .NET runtime — high-perf, minimal APIs, background services, health checks.',     color: '#7c6aff', wide: 'w1_5' },
  { id: 'aspnet',     label: 'ASP.NET',    desc: 'ASP.NET Core — Web API, MVC, middleware, filters, DI container, routing.',               color: '#7c6aff' },
  { id: 'efcore',     label: 'EF Core',    desc: 'ORM with Code-First, migrations, LINQ queries, seeding, and interceptors.',              color: '#7c6aff' },
  { id: 'adodotnet',  label: 'ADO.NET',    desc: 'Raw SQL data access, DataReaders, stored procedures, performance-critical queries.',      color: '#7c6aff' },
  { id: 'signalr',    label: 'SignalR',    desc: 'Real-time WebSocket hubs — live notifications, chat, dashboard updates in production.',    color: '#7c6aff' },
  { id: 'jwt',        label: 'JWT',        desc: 'JSON Web Tokens — auth flows, refresh tokens, role claims, token revocation.',            color: '#7c6aff' },
  { id: 'oauth2',     label: 'OAuth2',     desc: 'OAuth2 + Google OAuth2 — identity federation, authorization code flow, PKCE.',            color: '#7c6aff' },
  { id: 'nodejs',     label: 'Node.js',    desc: 'Backend JS runtime — REST APIs, Express/NestJS, async I/O, npm ecosystem.',              color: '#22c55e' },
  { id: 'cleanarch',  label: 'Clean Arch', desc: 'Domain → Application → Infrastructure → API layers. All projects built this way.',        color: '#7c6aff' },

  // Row 2 – Databases & Caching
  { id: 'sqlserver',  label: 'SQL Server',  desc: 'Primary relational DB — schema design, indexes, execution plans, EF migrations.',         color: '#06b6d4', wide: 'w1_5' },
  { id: 'redis',      label: 'Redis',       desc: 'In-memory caching — hot-path acceleration, session storage, pub/sub patterns.',           color: '#ef4444' },
  { id: 'mongodb',    label: 'MongoDB',     desc: 'Document store — flexible schema for LMS/CMS content, aggregation pipelines.',            color: '#22c55e' },
  { id: 'postgres',   label: 'Postgres',    desc: 'PostgreSQL — advanced queries, JSONB, CTEs, full-text search, constraint design.',         color: '#3b82f6' },
  { id: 'linq',       label: 'LINQ',        desc: 'Language-integrated queries — composable, type-safe, used across all .NET data access.',    color: '#7c6aff' },
  { id: 'angular',    label: 'Angular 17',  desc: 'Primary frontend — RxJS, NgRx, Signals, lazy loading, standalone components.',            color: '#ef4444' },
  { id: 'rxjs',       label: 'RxJS',        desc: 'Reactive streams — Observables, operators, side-effect management in Angular.',            color: '#ec4899' },
  { id: 'ngrx',       label: 'NgRx',        desc: 'Redux-style state management — Actions, Reducers, Selectors, Effects for Angular.',        color: '#a78bfa' },
  { id: 'react',      label: 'React',       desc: 'Hooks, Context, React Router v7, Three.js R3F — used for this portfolio.',                color: '#61dafb' },

  // Row 3 – Architecture / CS
  { id: 'microservices', label: 'Microservices', desc: 'Built 50%+ of Code Way LMS microservices. API Gateway, service mesh, inter-service comms.', color: '#7c6aff', wide: 'w1_5' },
  { id: 'solid',         label: 'SOLID',         desc: 'Applies SRP, OCP, LSP, ISP, DIP across all service and architecture design.',             color: '#a78bfa' },
  { id: 'patterns',      label: 'Design Patterns', desc: 'Repository, UoW, Specification, CQRS, Decorator, Strategy, Observer — applied daily.',   color: '#a78bfa' },
  { id: 'dsa',           label: 'DSA',           desc: 'Data structures and algorithms — ICPC competitor, LeetCode, complexity analysis.',         color: '#f59e0b' },
  { id: 'systemdesign',  label: 'System Design', desc: 'Designing scalable distributed systems, CAP theorem, caching, load balancing patterns.',   color: '#a78bfa' },
  { id: 'docker',        label: 'Docker',        desc: 'Containerized all microservices — Docker Compose for local full-stack orchestration.',      color: '#3b82f6' },
  { id: 'gha',           label: 'GH Actions',    desc: 'CI/CD pipelines — automated build, test, lint, deploy on every push.',                    color: '#22c55e' },
  { id: 'jenkins',       label: 'Jenkins',       desc: 'Jenkins pipelines for National University Portal SDLC — staging and prod automation.',    color: '#ef4444' },

  // Row 4 – Tools / Special keys
  { id: 'git',      label: 'Git',       desc: 'Branching strategies, rebase, cherry-pick, conflict resolution — daily driver.',           color: '#f97316', wide: 'w2_25' },
  { id: 'jira',     label: 'Jira',      desc: 'Sprint planning, backlog grooming, task delegation as Team Lead on Uni Portal.',            color: '#3b82f6' },
  { id: 'slack',    label: 'Slack',     desc: 'Team communications hub — standups, reviews, deploy alerts wired to CI/CD.',               color: '#7c6aff' },
  { id: 'postman',  label: 'Postman',   desc: 'API testing, collections, environments, automated test scripts for every endpoint.',          color: '#f97316' },
  { id: 'swagger',  label: 'Swagger',   desc: 'OpenAPI docs auto-generated from .NET XML comments — every API ships with full Swagger.',    color: '#22c55e' },
  { id: 'agile',    label: 'Agile',     desc: 'Scrum master + dev: sprint ceremonies, backlog, velocity tracking, retrospectives.',          color: '#06b6d4', wide: 'w2_75' },
  { id: 'icpc',     label: 'ICPC',      desc: 'ACM ICPC 2024 competitor — algorithms under pressure, competitive problem solving.',           color: '#f59e0b' },
  { id: 'cv',       label: 'OpenCV',    desc: 'Computer Vision intern at NAID — image processing pipelines, Python OpenCV.',                color: '#a78bfa' },
]

const KEYBOARD_ROWS: string[][] = [
  ['c','cpp','csharp','python','sql','js','ts','html','css','scss'],
  ['net9','aspnet','efcore','adodotnet','signalr','jwt','oauth2','nodejs','cleanarch'],
  ['sqlserver','redis','mongodb','postgres','linq','angular','rxjs','ngrx','react'],
  ['microservices','solid','patterns','dsa','systemdesign','docker','gha','jenkins'],
  ['git','jira','slack','postman','swagger','agile','icpc','cv'],
]

const KEY_MAP: Record<string, SkillKey> = Object.fromEntries(SKILL_KEYS.map(s => [s.id, s]))

function Key({ skill, isActive, onHover, onLeave }: {
  skill: SkillKey
  isActive: boolean
  onHover: (s: SkillKey) => void
  onLeave: () => void
}) {
  const wideClass: Record<string, string> = {
    w1_5: 'min-w-[4.5rem]',
    w2:   'min-w-[5.5rem]',
    w2_25:'min-w-[6.5rem]',
    w2_75:'min-w-[7.5rem]',
    w3:   'min-w-[8.5rem]',
    w6:   'min-w-[14rem]',
  }
  const wCls = skill.wide ? wideClass[skill.wide] : 'min-w-[3.4rem]'

  return (
    <div
      onMouseEnter={() => onHover(skill)}
      onMouseLeave={onLeave}
      className={`
        key-cap relative flex flex-col items-center justify-center
        h-[3.2rem] px-2 rounded-[6px] cursor-default select-none
        border transition-all duration-150 ease-out
        ${wCls}
        ${
          isActive
            ? 'border-transparent text-white translate-y-[3px] shadow-none'
            : 'border-[#1e2235] text-[#4b5563] hover:text-white'
        }
      `}
      style={{
        background: isActive
          ? `${skill.color}22`
          : '#12151d',
        borderColor: isActive ? skill.color : undefined,
        boxShadow: isActive
          ? `0 0 18px ${skill.color}44, 0 2px 0 ${skill.color}66`
          : '0 4px 0 #0a0c10, 0 5px 0 #080a0e',
      }}
    >
      <span
        className="text-[11px] font-bold leading-tight text-center"
        style={{ color: isActive ? skill.color : undefined }}
      >
        {skill.label}
      </span>
      {skill.sublabel && (
        <span className="text-[8px] text-[#374151] mt-0.5">{skill.sublabel}</span>
      )}
    </div>
  )
}

export default function SkillKeyboard() {
  const [active, setActive] = useState<SkillKey | null>(null)

  return (
    <div className="relative w-full">
      {/* Info panel */}
      <div
        className="mb-8 h-24 flex items-center gap-5 card rounded-xl px-6 transition-all duration-300"
        style={{
          borderColor: active ? `${active.color}44` : undefined,
          background: active ? `${active.color}08` : undefined,
        }}
      >
        {active ? (
          <>
            <div
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ background: active.color, boxShadow: `0 0 12px ${active.color}` }}
            />
            <div>
              <p className="text-white font-bold text-base mb-1" style={{ color: active.color }}>
                {active.label}
              </p>
              <p className="text-[#6b7280] text-sm leading-relaxed">{active.desc}</p>
            </div>
          </>
        ) : (
          <p className="text-[#272d42] text-sm tracking-widest uppercase">
            → Hover a key to learn about each skill
          </p>
        )}
      </div>

      {/* Keyboard body */}
      <div
        className="rounded-2xl p-5 border border-[#1e2235] w-full overflow-x-auto"
        style={{ background: '#0d0f14', boxShadow: '0 20px 60px #00000088, 0 8px 0 #080a0e, inset 0 1px 0 #1e2235' }}
      >
        {/* LED strip */}
        <div className="flex gap-1 justify-end mb-4 px-1">
          {['#7c6aff','#a78bfa','#06b6d4','#22c55e','#f59e0b','#ef4444'].map(c => (
            <div key={c} className="w-1.5 h-1.5 rounded-full" style={{ background: c, boxShadow: `0 0 6px ${c}` }} />
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {/* Row labels */}
          {[
            { label: 'Languages', row: 0 },
            { label: 'Backend & .NET', row: 1 },
            { label: 'Databases & Frontend', row: 2 },
            { label: 'Architecture & DevOps', row: 3 },
            { label: 'Tools & SDLC', row: 4 },
          ].map(({ label, row }) => (
            <div key={row}>
              <p className="text-[8px] tracking-[0.3em] uppercase text-[#1e2235] mb-1 pl-1">{label}</p>
              <div className="flex gap-2 flex-wrap">
                {KEYBOARD_ROWS[row].map(id => {
                  const skill = KEY_MAP[id]
                  if (!skill) return null
                  return (
                    <Key
                      key={id}
                      skill={skill}
                      isActive={active?.id === id}
                      onHover={setActive}
                      onLeave={() => setActive(null)}
                    />
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-4 flex items-center justify-between px-1">
          <div className="flex gap-2">
            <div className="h-2 w-16 rounded-full bg-[#12151d] border border-[#1e2235]" />
            <div className="h-2 w-32 rounded-full bg-[#12151d] border border-[#1e2235]" />
          </div>
          <p className="text-[8px] tracking-[0.3em] uppercase text-[#1e2235]">
            SAIF LOTFY — TECH STACK v2.0
          </p>
        </div>
      </div>
    </div>
  )
}
