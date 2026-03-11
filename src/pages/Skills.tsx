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
    desc: 'Core programming languages I write daily or use in specific domains.',
    skills: [
      { name: 'C# 13',       note: 'Primary language — production .NET 9 backends, microservices, APIs, and everything in between.' },
      { name: 'TypeScript',  note: 'Strict typing, generics, advanced type inference — used across Angular and NestJS projects.' },
      { name: 'JavaScript',  note: 'ES2024+, async/await, closures — used across Angular, React, and Node.js.' },
      { name: 'SQL / T-SQL', note: 'Complex joins, stored procedures, CTEs, window functions, execution plan analysis.' },
      { name: 'Python',      note: 'Computer Vision (OpenCV), ML experiments, scripting, and academic simulation projects.' },
      { name: 'C++',         note: 'DSA, ICPC competitive programming, OOP and STL — my CS foundations were built here.' },
      { name: 'C',           note: 'Low-level memory, pointers, and systems programming from early university coursework.' },
      { name: 'HTML / CSS',  note: 'Semantic markup, accessibility, CSS grid/flexbox, custom properties, SCSS for structured styling.' },
    ],
  },
  {
    label: 'Backend & .NET',
    color: '#7c6aff',
    desc: 'The core of what I do — building scalable, production-ready server-side systems.',
    skills: [
      { name: '.NET 9 / ASP.NET Core',     note: 'Minimal APIs, Web API controllers, middleware, DI container, filters, background services.' },
      { name: 'Clean Architecture',         note: 'Domain → Application → Infrastructure → API layers. Every project I build follows this structure.' },
      { name: 'Microservices Architecture', note: 'Contributed 50%+ of Code Way LMS services. API Gateway, service discovery, inter-service HTTP/messaging.' },
      { name: 'CQRS',                       note: 'Command Query Responsibility Segregation — separating reads from writes for scalable, maintainable service layers.' },
      { name: 'MediatR (Mediator Pattern)', note: 'In-process messaging via MediatR — decoupled command/query handlers and notification pipelines in .NET.' },
      { name: 'RabbitMQ',                   note: 'Message broker for async inter-service communication — queues, exchanges, and dead-letter handling in microservices.' },
      { name: 'n8n',                        note: 'Workflow automation platform — building low-code integration pipelines connecting services, webhooks, and APIs.' },
      { name: 'Entity Framework Core',      note: 'Code-First, complex migrations, LINQ queries, interceptors, seeding — used daily in production.' },
      { name: 'Repository + Unit of Work',  note: 'Abstraction layers for data access, enabling testability and clean separation of concerns.' },
      { name: 'SignalR / WebSockets',       note: 'Real-time hubs for live notifications, dashboards, and chat features in production apps.' },
      { name: 'JWT / OAuth2 / Google',      note: 'Full auth flows — access/refresh tokens, role claims, PKCE, identity federation via Google OAuth2.' },
      { name: 'Node.js / NestJS',           note: 'REST APIs, async I/O, dependency injection in NestJS — used as a secondary backend runtime.' },
      { name: 'AutoMapper / FluentVal',     note: 'DTO mapping and input validation — clean, declarative, decoupled from business logic.' },
      { name: 'Serilog',                    note: 'Structured logging with sinks (console, file, seq) for observability in production services.' },
      { name: 'RESTful API Design',         note: 'Versioning, HATEOAS concepts, proper HTTP semantics, Swagger/OpenAPI documentation.' },
      { name: 'ADO.NET / LINQ',             note: 'Raw SQL for performance-critical queries, LINQ for expressive in-code data manipulation.' },
    ],
  },
  {
    label: 'Databases',
    color: '#06b6d4',
    desc: 'Data persistence, caching, and query optimization across relational and NoSQL stores.',
    skills: [
      { name: 'SQL Server',         note: 'Primary relational DB — schema design, indexes, execution plans, EF migrations, stored procedures.' },
      { name: 'PostgreSQL',         note: 'Advanced queries, JSONB columns, CTEs, full-text search, and constraint-based design.' },
      { name: 'MongoDB',            note: 'Document store for flexible schemas — LMS/CMS content, aggregation pipelines, Atlas queries.' },
      { name: 'Redis',              note: 'In-memory caching for hot-path acceleration, session storage, and pub/sub patterns.' },
      { name: 'EF Core Migrations', note: 'Schema evolution strategy — incremental, reversible migrations across all .NET projects.' },
      { name: 'Stored Procedures',  note: 'T-SQL procedures for complex batch logic, reporting queries, and legacy integration.' },
    ],
  },
  {
    label: 'Frontend',
    color: '#f59e0b',
    desc: 'Building responsive, reactive UIs — backend-first but fully capable end-to-end.',
    skills: [
      { name: 'Angular 17+',       note: 'Primary frontend — RxJS, NgRx state, Signals, standalone components, lazy-loaded modules.' },
      { name: 'RxJS / NgRx',       note: 'Reactive streams, complex async orchestration, global state management with NgRx Store.' },
      { name: 'React',             note: 'Hooks, Context, React Router v7, Three.js / R3F — used for this portfolio.' },
      { name: 'TypeScript (FE)',   note: 'Strict types across all frontend work — interfaces, generics, discriminated unions.' },
      { name: 'Tailwind CSS',      note: 'Utility-first styling — rapid UI, responsive layouts, design tokens, dark mode.' },
      { name: 'Angular Material',  note: 'Component library for production Angular apps — theming, accessibility, form controls.' },
      { name: 'Bootstrap',         note: 'Grid system and utility classes for rapid prototyping and legacy project work.' },
      { name: 'HTTP Interceptors', note: 'Token injection, error handling, retry logic, and loading state in Angular apps.' },
    ],
  },
  {
    label: 'CS Fundamentals & Architecture',
    color: '#ec4899',
    desc: 'The theoretical and design foundations that inform every system I build.',
    skills: [
      { name: 'OOP',                    note: 'Encapsulation, inheritance, polymorphism, abstraction — applied in every C# and TypeScript project.' },
      { name: 'SOLID Principles',        note: 'SRP, OCP, LSP, ISP, DIP — the lens through which I evaluate and review all architecture decisions.' },
      { name: 'Design Patterns',         note: 'Repository, Unit of Work, Specification, Factory, Strategy, Observer — applied contextually, not dogmatically.' },
      { name: 'CQRS',                    note: 'Separating read (queries) from write (commands) — enables independent scaling and cleaner service boundaries.' },
      { name: 'Mediator Pattern',        note: 'Objects communicate via a central mediator — reduces coupling, improves testability across handler chains.' },
      { name: 'Data Structures',         note: 'Arrays, trees, graphs, heaps, tries — deeply practiced through ICPC and LeetCode.' },
      { name: 'Algorithms & Complexity', note: 'Sorting, searching, dynamic programming, greedy, graph traversal — O(n) analysis fluency.' },
      { name: 'DDD',                     note: 'Domain-Driven Design concepts — aggregates, value objects, bounded contexts in microservice design.' },
      { name: 'System Design',           note: 'Scalability tradeoffs, load balancing, caching layers, message queues, DB sharding concepts.' },
      { name: 'Competitive Programming', note: 'ICPC 2024 competitor — timed algorithm challenges, team problem-solving under pressure.' },
    ],
  },
  {
    label: 'Tools, DevOps & SDLC',
    color: '#22c55e',
    desc: 'Everything from code to deployment — CI/CD, project management, and team collaboration.',
    skills: [
      { name: 'Git / GitHub',       note: 'Branching strategies, rebase, cherry-pick, PR reviews, conflict resolution — daily driver.' },
      { name: 'GitHub Actions',     note: 'CI/CD pipelines for automated build, test, and deploy workflows on push/PR.' },
      { name: 'Jenkins',            note: 'Jenkins pipelines for the Uni Portal project — staging and production automation.' },
      { name: 'Docker',             note: 'Containerized all microservices — Docker Compose for local full-stack orchestration.' },
      { name: 'n8n',                note: 'Workflow automation — no-code/low-code pipelines for integrations, scheduled tasks, and webhook chains.' },
      { name: 'Jira',               note: 'Sprint planning, backlog grooming, task delegation as Team Lead on the National Uni Portal.' },
      { name: 'Postman',            note: 'API testing, collection management, environment variables, pre-request scripting.' },
      { name: 'Swagger / OpenAPI',  note: 'Auto-generated interactive API docs — versioned, annotated, and shared with frontend teams.' },
      { name: 'Agile / Scrum',      note: 'Sprint ceremonies, velocity tracking, retrospectives — practiced daily in team lead role.' },
      { name: 'Slack',              note: 'Async team communication, channel organization, integration with CI/CD notifications.' },
    ],
  },
  {
    label: 'AI & Computer Vision',
    color: '#f97316',
    desc: 'Applied ML and CV work from my internship at NAID and personal research.',
    skills: [
      { name: 'Computer Vision',  note: 'Worked on CV pipelines at NAID (National Academy for IT) — a government accessibility-focused institution.' },
      { name: 'OpenCV',           note: 'Image preprocessing, edge detection, contour analysis, real-time video frame processing.' },
      { name: 'Image Processing', note: 'Noise reduction, thresholding, morphological operations, color space transformations.' },
      { name: 'Python ML',        note: 'Exploratory ML with scikit-learn, NumPy, and Pandas — classification and regression experiments.' },
      { name: 'NumPy',            note: 'Matrix operations, vectorized computation — core dependency for all CV and ML work.' },
    ],
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
    <section ref={ref} className="page-wrapper pb-40 page-enter">
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

        {/* ── CATEGORY BREAKDOWN ── */}
        <p className="section-label mb-10">Full Breakdown</p>
        <div className="cats-section flex flex-col gap-16">
          {categories.map((cat) => (
            <div key={cat.label} className="cat-block">

              {/* Category header */}
              <div className="flex items-start gap-3 mb-2">
                <span
                  className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: cat.color, boxShadow: `0 0 10px ${cat.color}88` }}
                />
                <div>
                  <span
                    className="block text-[11px] tracking-[0.35em] uppercase font-semibold mb-1"
                    style={{ color: cat.color }}
                  >
                    {cat.label}
                  </span>
                  <p className="text-[#4b5563] text-xs leading-relaxed max-w-2xl">{cat.desc}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="ml-5 mb-6 h-px" style={{ background: `linear-gradient(90deg, ${cat.color}33, transparent)` }} />

              {/* Skills grid */}
              <div className="ml-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col gap-1 border border-[#1e2235] rounded-lg px-4 py-3 transition-all duration-200"
                    onMouseEnter={e => (e.currentTarget.style.borderColor = `${cat.color}44`)}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = '#1e2235')}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: cat.color }} />
                      <span className="text-white text-xs font-semibold">{skill.name}</span>
                    </div>
                    <p className="text-[#4b5563] text-[11px] leading-[1.7] pl-3">{skill.note}</p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
